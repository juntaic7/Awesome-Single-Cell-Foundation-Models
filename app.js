const state = {
  data: null,
  query: "",
  category: "",
  resource: ""
};

const els = {
  modelCount: document.querySelector("#modelCount"),
  codeCount: document.querySelector("#codeCount"),
  resourceCount: document.querySelector("#resourceCount"),
  updatedDate: document.querySelector("#updatedDate"),
  searchInput: document.querySelector("#searchInput"),
  categoryFilter: document.querySelector("#categoryFilter"),
  resourceFilter: document.querySelector("#resourceFilter"),
  resetFilters: document.querySelector("#resetFilters"),
  copyView: document.querySelector("#copyView"),
  resultCount: document.querySelector("#resultCount"),
  modelGrid: document.querySelector("#modelGrid"),
  resourceList: document.querySelector("#resourceList")
};

function flattenLinks(model) {
  return [...model.paper, ...model.code, ...model.resources];
}

function linkList(links) {
  if (!links.length) return "";
  return links
    .map((link) => `<a class="pill" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join("");
}

function searchableText(model) {
  return [
    model.name,
    model.category,
    model.notes,
    ...flattenLinks(model).flatMap((link) => [link.label, link.url])
  ]
    .join(" ")
    .toLowerCase();
}

function modelHasResource(model, resource) {
  const resources = flattenLinks(model).map((link) => `${link.label} ${link.url}`.toLowerCase());
  if (resource === "code") return model.code.length > 0;
  if (resource === "model") return resources.some((text) => text.includes("huggingface") || text.includes("hugging face") || text.includes("model") || text.includes("weight"));
  if (resource === "docs") return resources.some((text) => text.includes("docs") || text.includes("project") || text.includes("blog"));
  if (resource === "data") return resources.some((text) => text.includes("data") || text.includes("dataset") || text.includes("figshare") || text.includes("zenodo"));
  return true;
}

function getFilteredModels() {
  const query = state.query.trim().toLowerCase();
  return state.data.models.filter((model) => {
    const matchesQuery = !query || searchableText(model).includes(query);
    const matchesCategory = !state.category || model.category === state.category;
    const matchesResource = !state.resource || modelHasResource(model, state.resource);
    return matchesQuery && matchesCategory && matchesResource;
  });
}

function updateUrl() {
  const params = new URLSearchParams();
  if (state.query) params.set("q", state.query);
  if (state.category) params.set("category", state.category);
  if (state.resource) params.set("resource", state.resource);
  const next = `${window.location.pathname}${params.toString() ? `?${params}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", next);
}

function renderStats() {
  const models = state.data.models;
  const codeCount = models.filter((model) => model.code.length > 0).length;
  const resourceCount = models.reduce((sum, model) => sum + model.resources.length, 0);

  els.modelCount.textContent = models.length;
  els.codeCount.textContent = codeCount;
  els.resourceCount.textContent = resourceCount;
  els.updatedDate.textContent = state.data.updated;
}

function renderCategories() {
  const categories = [...new Set(state.data.models.map((model) => model.category))].sort();
  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.categoryFilter.appendChild(option);
  }
}

function renderModels() {
  const models = getFilteredModels();
  els.resultCount.textContent = `Showing ${models.length} of ${state.data.models.length} models`;

  if (!models.length) {
    els.modelGrid.innerHTML = '<p class="notes">No models match the current filters.</p>';
    return;
  }

  els.modelGrid.innerHTML = models
    .map((model) => {
      const paperLinks = linkList(model.paper);
      const codeLinks = linkList(model.code);
      const resourceLinks = linkList(model.resources);
      return `
        <article class="model-card">
          <header>
            <div>
              <h3>${model.name}</h3>
              <p class="notes">${model.notes}</p>
            </div>
            <span class="category">${model.category}</span>
          </header>
          <div class="link-groups">
            ${paperLinks ? `<div class="link-group"><span class="link-label">Paper</span>${paperLinks}</div>` : ""}
            ${codeLinks ? `<div class="link-group"><span class="link-label">Code</span>${codeLinks}</div>` : ""}
            ${resourceLinks ? `<div class="link-group"><span class="link-label">More</span>${resourceLinks}</div>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderResources() {
  els.resourceList.innerHTML = state.data.resources
    .map((resource) => `
      <article class="resource-card">
        <h3><a href="${resource.link}" target="_blank" rel="noreferrer">${resource.name}</a></h3>
        <p>${resource.notes}</p>
      </article>
    `)
    .join("");
}

function applyParams() {
  const params = new URLSearchParams(window.location.search);
  state.query = params.get("q") || "";
  state.category = params.get("category") || "";
  state.resource = params.get("resource") || "";

  els.searchInput.value = state.query;
  els.categoryFilter.value = state.category;
  els.resourceFilter.value = state.resource;
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    updateUrl();
    renderModels();
  });

  els.categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    updateUrl();
    renderModels();
  });

  els.resourceFilter.addEventListener("change", (event) => {
    state.resource = event.target.value;
    updateUrl();
    renderModels();
  });

  els.resetFilters.addEventListener("click", () => {
    state.query = "";
    state.category = "";
    state.resource = "";
    els.searchInput.value = "";
    els.categoryFilter.value = "";
    els.resourceFilter.value = "";
    updateUrl();
    renderModels();
  });

  els.copyView.addEventListener("click", async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
    } else {
      const value = window.location.href;
      const input = document.createElement("input");
      input.value = value;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    els.copyView.textContent = "Copied";
    window.setTimeout(() => {
      els.copyView.textContent = "Copy current view";
    }, 1300);
  });
}

async function init() {
  const response = await fetch("data.json");
  state.data = await response.json();

  renderStats();
  renderCategories();
  renderResources();
  applyParams();
  renderModels();
  bindEvents();
}

init().catch((error) => {
  els.modelGrid.innerHTML = `<p class="notes">Could not load site/data.json: ${error.message}</p>`;
});
