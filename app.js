const state = {
  data: null,
  query: "",
  category: "",
  resource: "",
  timelineStart: "",
  timelineEnd: ""
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
  timelinePlot: document.querySelector("#timelinePlot"),
  timelineCount: document.querySelector("#timelineCount"),
  timelineStart: document.querySelector("#timelineStart"),
  timelineEnd: document.querySelector("#timelineEnd"),
  resetTimelineRange: document.querySelector("#resetTimelineRange"),
  resourceList: document.querySelector("#resourceList")
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeDate(date) {
  if (!date) return null;
  const parts = String(date).split("-").map((part) => Number.parseInt(part, 10));
  if (!parts[0]) return null;
  const year = parts[0];
  const month = parts[1] || 1;
  const day = parts[2] || 1;
  return {
    label: date,
    time: Date.UTC(year, month - 1, day),
    year,
    precision: parts.length
  };
}

function monthValueFromTime(time) {
  const date = new Date(time);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function parseMonthValue(value, mode = "start") {
  if (!value) return null;
  const [year, month] = value.split("-").map((part) => Number.parseInt(part, 10));
  if (!year || !month || month < 1 || month > 12) return null;
  return mode === "end" ? Date.UTC(year, month, 1) - 1 : Date.UTC(year, month - 1, 1);
}

function currentMonthValue() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function compareModels(a, b) {
  const aDate = normalizeDate(a.date);
  const bDate = normalizeDate(b.date);
  if (!aDate && !bDate) return a.name.localeCompare(b.name);
  if (!aDate) return 1;
  if (!bDate) return -1;
  return bDate.time - aDate.time || a.name.localeCompare(b.name);
}

function flattenLinks(model) {
  return [...model.paper, ...model.code, ...model.resources];
}

function linkList(links) {
  if (!links.length) return "";
  return links
    .map((link) => `<a class="pill" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`)
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

function getSortedModels() {
  return [...getFilteredModels()].sort(compareModels);
}

function updateUrl() {
  const params = new URLSearchParams();
  if (state.query) params.set("q", state.query);
  if (state.category) params.set("category", state.category);
  if (state.resource) params.set("resource", state.resource);
  if (state.timelineStart) params.set("timelineStart", state.timelineStart);
  if (state.timelineEnd) params.set("timelineEnd", state.timelineEnd);
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

function renderTimelineRangeControls() {
  const datedModels = state.data.models
    .map((model) => normalizeDate(model.date))
    .filter(Boolean);

  if (!datedModels.length) return;

  const minMonth = monthValueFromTime(Math.min(...datedModels.map((date) => date.time)));
  const maxDataMonth = monthValueFromTime(Math.max(...datedModels.map((date) => date.time)));
  const endMonth = currentMonthValue();
  const maxMonth = maxDataMonth > endMonth ? maxDataMonth : endMonth;

  if (!state.timelineStart) state.timelineStart = minMonth;
  if (!state.timelineEnd) state.timelineEnd = endMonth;

  els.timelineStart.min = minMonth;
  els.timelineStart.max = maxMonth;
  els.timelineEnd.min = minMonth;
  els.timelineEnd.max = maxMonth;
  els.timelineStart.value = state.timelineStart;
  els.timelineEnd.value = state.timelineEnd;
}

function renderModels() {
  const models = getSortedModels();
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
      const dateLabel = model.date ? `Published ${escapeHtml(model.date)}` : "Date unknown";
      return `
        <article class="model-card">
          <header>
            <div>
              <p class="model-date">${dateLabel}</p>
              <h3>${escapeHtml(model.name)}</h3>
              <p class="notes">${escapeHtml(model.notes)}</p>
            </div>
            <span class="category">${escapeHtml(model.category)}</span>
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

function renderTimeline() {
  const datedModels = getSortedModels()
    .map((model) => ({ ...model, normalizedDate: normalizeDate(model.date) }))
    .filter((model) => model.normalizedDate);

  const startTime = parseMonthValue(state.timelineStart);
  const endTime = parseMonthValue(state.timelineEnd, "end");

  if (startTime && endTime && startTime > endTime) {
    els.timelineCount.textContent = "Invalid date range";
    els.timelinePlot.innerHTML = '<p class="notes">Choose an end month that is the same as or after the start month.</p>';
    return;
  }

  const models = datedModels.filter((model) => {
    const time = model.normalizedDate.time;
    return (!startTime || time >= startTime) && (!endTime || time <= endTime);
  });

  els.timelineCount.textContent = `Plotting ${models.length} of ${datedModels.length} dated models`;

  if (!models.length) {
    els.timelinePlot.innerHTML = '<p class="notes">No dated models match the current filters and timeline range.</p>';
    return;
  }

  const categories = [...new Set(models.map((model) => model.category))].sort();
  const firstModelTime = Math.min(...models.map((model) => model.normalizedDate.time));
  const lastModelTime = Math.max(...models.map((model) => model.normalizedDate.time));
  const minYear = new Date(firstModelTime).getUTCFullYear();
  const maxYear = new Date(lastModelTime).getUTCFullYear();
  const minTime = Date.UTC(minYear, 0, 1);
  const maxTime = Date.UTC(maxYear + 1, 0, 1);
  const width = 1120;
  const margin = { top: 42, right: 42, bottom: 58, left: 178 };
  const laneGap = 96;
  const height = margin.top + margin.bottom + Math.max(1, categories.length - 1) * laneGap;
  const plotWidth = width - margin.left - margin.right;
  const span = Math.max(1, maxTime - minTime);
  const xScale = (time) => margin.left + ((time - minTime) / span) * plotWidth;
  const yScale = (category) => margin.top + categories.indexOf(category) * laneGap;
  const palette = ["#19715f", "#155f91", "#8a5a20", "#7b3f61"];

  const yearTicks = [];
  for (let year = minYear; year <= maxYear; year += 1) {
    yearTicks.push(year);
  }

  const yearLines = yearTicks
    .map((year) => {
      const x = xScale(Date.UTC(year, 0, 1));
      return `
        <g class="timeline-year">
          <line x1="${x}" y1="${margin.top - 20}" x2="${x}" y2="${height - margin.bottom + 24}"></line>
          <text x="${x}" y="${height - 18}">${year}</text>
        </g>
      `;
    })
    .join("");

  const lanes = categories
    .map((category) => {
      const y = yScale(category);
      return `
        <g class="timeline-lane">
          <text x="${margin.left - 18}" y="${y + 5}">${escapeHtml(category)}</text>
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>
        </g>
      `;
    })
    .join("");

  const points = models
    .map((model, index) => {
      const x = xScale(model.normalizedDate.time);
      const y = yScale(model.category);
      const labelOffset = index % 2 === 0 ? -18 : 28;
      const color = palette[categories.indexOf(model.category) % palette.length];
      const pointLabel = `${model.name} - ${model.date} - ${model.category}`;
      return `
        <g class="timeline-point" transform="translate(${x} ${y})" tabindex="0" focusable="true" aria-label="${escapeHtml(pointLabel)}">
          <circle r="7" fill="${color}"></circle>
          <text x="0" y="${labelOffset}" text-anchor="middle">${escapeHtml(model.name)}</text>
          <title>${escapeHtml(pointLabel)}</title>
        </g>
      `;
    })
    .join("");

  els.timelinePlot.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Timeline of single-cell foundation model publication dates">
      ${yearLines}
      ${lanes}
      ${points}
    </svg>
  `;
}

function renderResources() {
  els.resourceList.innerHTML = [...state.data.resources]
    .sort((a, b) => {
      const aDate = normalizeDate(a.date);
      const bDate = normalizeDate(b.date);
      if (!aDate && !bDate) return a.name.localeCompare(b.name);
      if (!aDate) return 1;
      if (!bDate) return -1;
      return bDate.time - aDate.time || a.name.localeCompare(b.name);
    })
    .map((resource) => `
      <article class="resource-card">
        <p class="model-date">${resource.date ? `Published ${escapeHtml(resource.date)}` : "Date unknown"}</p>
        <h3><a href="${escapeHtml(resource.link)}" target="_blank" rel="noreferrer">${escapeHtml(resource.name)}</a></h3>
        <p>${escapeHtml(resource.notes)}</p>
      </article>
    `)
    .join("");
}

function applyParams() {
  const params = new URLSearchParams(window.location.search);
  state.query = params.get("q") || "";
  state.category = params.get("category") || "";
  state.resource = params.get("resource") || "";
  state.timelineStart = params.get("timelineStart") || "";
  state.timelineEnd = params.get("timelineEnd") || "";

  els.searchInput.value = state.query;
  els.categoryFilter.value = state.category;
  els.resourceFilter.value = state.resource;
  els.timelineStart.value = state.timelineStart;
  els.timelineEnd.value = state.timelineEnd;
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    updateUrl();
    renderModels();
    renderTimeline();
  });

  els.categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    updateUrl();
    renderModels();
    renderTimeline();
  });

  els.resourceFilter.addEventListener("change", (event) => {
    state.resource = event.target.value;
    updateUrl();
    renderModels();
    renderTimeline();
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
    renderTimeline();
  });

  els.timelineStart.addEventListener("change", (event) => {
    state.timelineStart = event.target.value;
    updateUrl();
    renderTimeline();
  });

  els.timelineEnd.addEventListener("change", (event) => {
    state.timelineEnd = event.target.value;
    updateUrl();
    renderTimeline();
  });

  els.resetTimelineRange.addEventListener("click", () => {
    state.timelineStart = "";
    state.timelineEnd = "";
    renderTimelineRangeControls();
    updateUrl();
    renderTimeline();
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
  renderTimelineRangeControls();
  renderModels();
  renderTimeline();
  bindEvents();
}

init().catch((error) => {
  els.modelGrid.innerHTML = `<p class="notes">Could not load site/data.json: ${error.message}</p>`;
});
