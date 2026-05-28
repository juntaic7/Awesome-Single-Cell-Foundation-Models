# Awesome Single-Cell Foundation Models

A simple list of single-cell foundation models and related resources.

Last updated: 2026-05-26.

Note: The current contents are AI-generated and may contain mistakes. All collaborations are welcome, including validating existing entries, correcting inaccuracies, or proposing new papers and resources.

## Read this list on the web

Browse the live site at [awesomescfm.live](https://awesomescfm.live/).

The web version is the easiest way to browse and share this collection. It adds:

- Search across model names, notes, papers, code, and resources
- Category and resource filters with shareable URLs
- Date sorting by when the paper or preprint appeared
- A timeline plot showing when each model came out
- Cards for papers, code, model weights, docs, project pages, and datasets
- A simple contribution path through issues or edits to [`site/data.json`](site/data.json)

The static website source lives in [`site/`](site/) and is published with
GitHub Pages. To preview changes locally while developing:

```bash
python3 -m http.server 8000 --directory site
```

Then open <http://localhost:8000>.

## General single-cell foundation models

| Model | Date | Paper | Code | Resources | Notes |
| --- | --- | --- | --- | --- | --- |
| CellFM | 2025-05-20 | [Nature Communications](https://www.nature.com/articles/s41467-025-59926-5) | [GitHub](https://github.com/biomed-AI/CellFM) | [Hugging Face](https://huggingface.co/perturblab/cellfm-800m) | 800M-parameter foundation model pretrained on about 100M human cells. |
| TranscriptFormer | 2025-04-25 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.04.25.650731v1) | [GitHub](https://github.com/czi-ai/transcriptformer) | [CZI Biohub blog](https://biohub.org/blog/transcriptformer-model-overview/) | Cross-species generative cell atlas model trained on up to 112M cells across 12 species. |
| scPRINT | 2025-04-16 | [Nature Communications](https://www.nature.com/articles/s41467-025-58699-1) | [GitHub](https://github.com/cantinilab/scPRINT) | [Docs](https://cantinilab.github.io/scPRINT/), [Virtual Cells](https://virtualcellmodels.cziscience.com/model/scprint), [Hugging Face](https://huggingface.co/jkobject/scPRINT) | Large cell model for cell embeddings, labels, denoising, and genome-wide gene network inference. |
| scCello | 2024-12 | [NeurIPS PDF](https://papers.nips.cc/paper_files/paper/2024/file/0be40478ab6ee0006ee3b38b158bbc8f-Paper-Conference.pdf), [OpenReview](https://openreview.net/forum?id=7rR6RAUaoC) | [GitHub](https://github.com/DeepGraphLearning/scCello) |  | Cell-ontology-guided transcriptome foundation model. |
| SCimilarity | 2024-11-20 | [Nature](https://www.nature.com/articles/s41586-024-08411-y) | [GitHub](https://github.com/Genentech/scimilarity) | [Docs](https://genentech.github.io/scimilarity/), [Zenodo weights/data](https://zenodo.org/records/10685499) | Deep metric-learning cell atlas foundation model for scalable search of similar human cell states. |
| scFoundation | 2024-06-06 | [Nature Methods](https://doi.org/10.1038/s41592-024-02305-7) | [GitHub](https://github.com/biomap-research/scFoundation) | [Hugging Face](https://huggingface.co/genbio-ai/scFoundation), [Figshare data](https://figshare.com/articles/dataset/scFoundation_Large_Scale_Foundation_Model_on_Single-cell_Transcriptomics_-_processed_datasets/24049200) | 100M-parameter transcriptomics model pretrained on over 50M human cells. |
| CellPLM | 2024-05 | [ICLR / OpenReview](https://openreview.net/forum?id=BKXvPDekud) | [GitHub](https://github.com/OmicsML/CellPLM) |  | Pretrained cell language model designed beyond single-cell-only context. |
| scGPT | 2024-02-26 | [Nature Methods](https://www.nature.com/articles/s41592-024-02201-0) | [GitHub](https://github.com/bowang-lab/scGPT) | [Docs](https://scgpt.readthedocs.io/) | Generative foundation model for scRNA-seq, perturbation, integration, annotation, multi-omics, and spatial workflows. |
| scMulan | 2024-01-25 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.01.25.577152v1) | [GitHub](https://github.com/SuperBianC/scMulan) |  | Multitask generative pretrained language model for cell annotation, integration, and conditional generation. |
| Universal Cell Embeddings (UCE) | 2023-11-28 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2023.11.28.568918v1) | [GitHub](https://github.com/snap-stanford/UCE) | [Virtual Cells](https://virtualcellmodels.cziscience.com/model/uce), [Figshare model files](https://figshare.com/articles/dataset/Universal_Cell_Embedding_Model_Files/24320806) | Cross-species zero-shot cell embeddings using protein-language-model gene tokenization. |
| GeneCompass | 2023-09-26 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2023.09.26.559542v1) | [GitHub](https://github.com/xCompass-AI/GeneCompass) |  | Knowledge-informed cross-species foundation model pretrained on human and mouse single-cell transcriptomes. |
| Geneformer | 2023-05 | [Nature](https://www.nature.com/articles/s41586-023-06139-9) | [Hugging Face](https://huggingface.co/ctheodoris/Geneformer) | [Docs](https://geneformer.readthedocs.io/) | Foundation transformer for context-aware network biology predictions from single-cell transcriptomes. |
| tGPT | 2023-04 | [iScience / PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10176267/) | [GitHub](https://github.com/deeplearningplus/tGPT) |  | Generative pretraining from ranked transcriptomes. |
| scFormer | 2023 | [OpenReview](https://openreview.net/forum?id=7hdmA0qtr5) |  |  | Transformer representation learning for cell and gene embeddings. |
| Exceiver | 2022-10 | [arXiv](https://arxiv.org/abs/2210.14330), [OpenReview PDF](https://openreview.net/pdf?id=XxRuCIgq2LX) | [GitHub](https://github.com/keiserlab/exceiver) |  | Self-supervised gene expression language model for sparse count data. |
| scBERT | 2022-09 | [Nature Machine Intelligence](https://www.nature.com/articles/s42256-022-00534-z) | [GitHub](https://github.com/TencentAILabHealthcare/scBERT) |  | BERT-style pretrained model for scRNA-seq cell type annotation. |

## Multimodal, spatial, and cross-modal models

| Model | Date | Paper | Code | Resources | Notes |
| --- | --- | --- | --- | --- | --- |
| OKR-CELL | 2026-01 | [arXiv](https://arxiv.org/abs/2601.05648) |  |  | Open-world knowledge-aided robust cell-language pretraining. |
| FOCUS | 2025-11-11 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.11.11.684123v1) |  |  | Foundational generative model for cross-platform spatial transcriptomics enhancement. |
| Cell2Text | 2025-09 | [arXiv](https://arxiv.org/abs/2509.24840) |  |  | Multimodal LLM for generating textual single-cell descriptions from RNA-seq data. |
| SToFM | 2025-07 | [arXiv](https://arxiv.org/abs/2507.11588), [Hugging Face paper page](https://huggingface.co/papers/2507.11588) |  |  | Multi-scale spatial transcriptomics foundation model. |
| scMamba | 2025-06 | [arXiv](https://arxiv.org/abs/2506.20697) |  |  | State-space foundation model for single-cell multi-omics integration without HVG selection. |
| Nicheformer | 2025 | [Nature Methods](https://www.nature.com/articles/s41592-025-02814-z), [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12695652/) | [GitHub](https://github.com/theislab/nicheformer) |  | Foundation model trained on dissociated single-cell and spatial transcriptomics. |
| Stack | 2025 | [Arc Institute news](https://arcinstitute.org/news/foundation-model-stack) | [GitHub](https://github.com/ArcInstitute/state) | [Hugging Face Stack-Large-Aligned](https://huggingface.co/arcinstitute/Stack-Large-Aligned), [Perturb Sapiens dataset](https://huggingface.co/datasets/arcinstitute/Perturb-Sapiens) | In-context-learning foundation model for single-cell biology and simulated perturbation atlases. |
| CELLama | 2024-05-10 | [Advanced Science / PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12866849/), [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.05.10.593412v1) |  |  | Single-cell and spatial transcriptomics embeddings using language-model-style cell sentences. |
| LangCell | 2024-05 | [arXiv](https://arxiv.org/abs/2405.06708) | [GitHub](https://github.com/PharMolix/LangCell) | [OpenBioMed](https://github.com/PharMolix/OpenBioMed) | Language-cell pretraining for cell identity understanding and cell-text retrieval. |

## LLM-native and agentic single-cell models

| Model | Date | Paper | Code | Resources | Notes |
| --- | --- | --- | --- | --- | --- |
| scPilot | 2026-02 | [arXiv](https://arxiv.org/abs/2602.11609), [Hugging Face paper page](https://huggingface.co/papers/2602.11609) | [GitHub](https://github.com/maitrix-org/scPilot) |  | LLM reasoning framework that directly inspects scRNA-seq data and calls tools. |
| C2S-Scale | 2025-04-14 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.04.14.648850v2) | [GitHub](https://github.com/vandijklab/cell2sentence) | [Hugging Face 27B model](https://huggingface.co/vandijklab/C2S-Scale-Gemma-2-27B), [Google Research blog](https://blog.google/technology/ai/google-gemma-ai-cancer-therapy-discovery/) | Scaled C2S models, including Gemma-based models for single-cell analysis and hypothesis generation. |
| scChat | 2024-10-01 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.10.01.616063v1), [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC13061372/) | [GitHub](https://github.com/li-group/scChat) |  | LLM-powered co-pilot for contextualized scRNA-seq analysis. |
| Cell2Sentence (C2S) | 2024-07 | [ICML / OpenReview](https://openreview.net/forum?id=EWt5wsEdvc) | [GitHub](https://github.com/vandijklab/cell2sentence) | [Project site](https://www.c2s.bio/), [Docs](https://vandijklab-cell2sentence.readthedocs.io/) | Converts cells into gene-ranked sentences for LLM-based single-cell modeling. |
| ChatCell | 2024-02 | [arXiv](https://arxiv.org/abs/2402.08303), [Hugging Face paper page](https://huggingface.co/papers/2402.08303) | [GitHub](https://github.com/zjunlp/ChatCell) | [Hugging Face model](https://huggingface.co/zjunlp/chatcell-small) | Natural-language interface and sequence-generation model for single-cell analysis tasks. |
| scInterpreter | 2024-02 | [arXiv](https://arxiv.org/abs/2402.12405) |  |  | LLM-based interpretation framework for single-cell transcriptomics. |
| scELMo | 2023-12-07 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2023.12.07.569910v1) |  |  | LLM-derived embeddings for single-cell data analysis. |
| GenePT | 2023-10-16 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2023.10.16.562533v1) | [GitHub](https://github.com/yiqunchen/GenePT) |  | ChatGPT-derived gene and cell embeddings. |

## Domain-specific and task-focused models

| Model | Date | Paper | Code | Resources | Notes |
| --- | --- | --- | --- | --- | --- |
| scpFormer | 2026-04 | [arXiv](https://arxiv.org/abs/2604.20003) |  |  | Foundation model for unified representation and integration of single-cell proteomics. |
| Tahoe-x1 | 2025-10-23 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.10.23.683759v1) | [GitHub](https://github.com/tahoebio/tahoe-x1) | [Hugging Face](https://huggingface.co/tahoebio/Tahoe-x1), [Blog](https://www.tahoebio.ai/news/tahoe-x1-blog) | Perturbation-trained single-cell foundation model family up to 3B parameters. |
| Nephrobase Cell+ | 2025-09 | [arXiv](https://arxiv.org/abs/2509.26223) |  |  | Kidney-focused multimodal single-cell foundation model. |
| GET | 2025-01-08 | [Nature](https://www.nature.com/articles/s41586-024-08391-z) | [GitHub](https://github.com/GET-Foundation/get_model) | [GitHub organization](https://github.com/GET-Foundation), [Hugging Face](https://huggingface.co/get-foundation) | General expression transformer for transcription across human cell types. |
| State | 2025 | [Arc Institute model collection](https://huggingface.co/arcinstitute) | [GitHub](https://github.com/ArcInstitute/state) | [Hugging Face SE-600M](https://huggingface.co/arcinstitute/SE-600M) | Set-based model family for cellular perturbation response and cell embeddings. |
| Cell-Graph Compass | 2024-04-29 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.04.29.591739v1) |  |  | Graph-structure foundation model for modeling single cells. |
| scRDiT | 2024-04 | [arXiv](https://arxiv.org/abs/2404.06153) | [GitHub](https://github.com/DongShengze/scRDiT) |  | Diffusion transformer for generating single-cell RNA-seq data. |
| CancerFoundation | 2024-02-23 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.02.23.581779v1) |  |  | Cancer-focused single-cell RNA-seq foundation model for drug resistance. |
| scmFormer | 2024-02 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11109621/), [PubMed](https://pubmed.ncbi.nlm.nih.gov/38369163/) |  |  | Multi-task transformer for single-cell proteomics and transcriptomics. |
| scCLIP | 2024 | [OpenReview](https://openreview.net/forum?id=QCSW6b0Lpk) | [GitHub](https://github.com/jsxlei/scCLIP) |  | Multimodal single-cell contrastive integration pretraining. |
| scMAE | 2024 | [OpenReview](https://openreview.net/forum?id=oza2f8B4y2) |  |  | Single-cell masked autoencoder for automated immunophenotyping. |
| scHyena | 2023-10 | [arXiv](https://arxiv.org/abs/2310.02713) |  |  | Full-length single-cell RNA-seq foundation model for brain data. |
| scTranslator | 2023-07-04 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2023.07.04.547619v1) | [GitHub](https://github.com/TencentAILabHealthcare/scTranslator) |  | Pretrained model for translating single-cell transcriptome to proteome. |

## Surveys and benchmarks

| Resource | Date | Link | Notes |
| --- | --- | --- | --- |
| scDrugMap | 2025-05 | [Link](https://arxiv.org/abs/2505.05612) | Benchmarking large foundation models for drug response prediction. |
| A Survey on Foundation Language Models for Single-cell Biology | 2025 | [Link](https://aclanthology.org/2025.acl-long.26.pdf) | Taxonomy and task summary for single-cell PLMs and LLMs. |
| Assessing the limits of zero-shot foundation models in single-cell biology | 2025 | [Link](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-025-03781-6) | Zero-shot evaluation of single-cell foundation model embeddings. |
| Biology-driven insights into the power of single-cell foundation models | 2025 | [Link](https://pmc.ncbi.nlm.nih.gov/articles/PMC12492631/) | Benchmarking and biological analysis across major scFMs. |
| PertEval-scFM | 2025 | [Link](https://openreview.net/forum?id=pCz6OTCodu) | Benchmark for perturbation-effect prediction with single-cell foundation models. |
| Single-cell foundation models: bringing artificial intelligence into cell biology | 2025 | [Link](https://www.nature.com/articles/s12276-025-01547-5) | Review of major scFMs, limitations, and applications. |
| A Deep Dive into Single-Cell RNA Sequencing Foundation Models | 2023-10-19 | [Link](https://www.biorxiv.org/content/10.1101/2023.10.19.563100v1) | Evaluation of scBERT and scGPT. |
| ONERAI foundation-model-single-cell-papers |  | [Link](https://github.com/ONERAI/foundation-model-single-cell-papers) | Broad paper list across single-cell, perturbation, pathology, and DNA foundation models. |
