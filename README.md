# Awesome Single-Cell Foundation Models

A simple list of single-cell foundation models and related resources.

Last updated: 2026-07-09.

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
| Gene Intelligence | 2026-07-03 | [bioRxiv](https://www.biorxiv.org/content/10.64898/2026.06.29.735389v1) |  |  | Compact single-cell transformer that embeds log-transformed raw counts directly and jointly predicts masked genes and counts without normalization or positional encoding. |
| CellOS | 2026-06-23 | [bioRxiv](https://www.biorxiv.org/content/10.64898/2026.06.18.733163v2) |  |  | 12B-parameter cellular world model trained on 390.5M transcriptomes using paired expression and perception views, dense-to-MoE scaling, and LLM-JEPA alignment. |
| RegFormer | 2026-05-05 | [Nature Communications](https://www.nature.com/articles/s41467-026-72198-x), [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.01.24.634217v1) |  |  | GRN-guided Mamba foundation model pretrained on human single-cell transcriptomes. |
| CellVQ | 2026-03-16 | [Nature Communications](https://www.nature.com/articles/s41467-026-70071-5) | [GitHub](https://github.com/A4Bio/CellVQ) |  | Comprehensive interpretable single-cell foundation model with a discretized cell-code representation and CellVQ-Graph for biological discovery. |
| Lingshu-Cell | 2026-03 | [arXiv](https://arxiv.org/abs/2603.25240) |  | [Project page](https://alibaba-damo-academy.github.io/lingshu-cell-homepage/) | Masked discrete diffusion generative cellular world model for transcriptome-wide modeling and perturbation response prediction. |
| scLong | 2026-02-05 | [Nature Communications](https://www.nature.com/articles/s41467-026-69102-y), [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.11.09.622759v1) | [GitHub](https://github.com/BaiDing1234/scLong) | [Zenodo](https://zenodo.org/records/17510567) | Billion-parameter scRNA-seq foundation model pretrained on 48M cells with full-transcriptome attention and Gene Ontology knowledge. |
| GREmLN | 2025-09-18 | [ICLR 2026 submission / OpenReview](https://openreview.net/forum?id=HdvI8bkdDG) |  |  | Graph-structure-aware transcriptomics foundation model that injects molecular interaction networks into Transformer attention. |
| Tabula | 2025-09-18 | [NeurIPS 2025 / OpenReview](https://openreview.net/forum?id=Vk2sfKAdeu), [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.01.06.631427v1) |  |  | Privacy-preserving tabular self-supervised foundation model for single-cell transcriptomics with federated learning. |
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
| HoloCell | 2026-06-11 | [bioRxiv](https://www.biorxiv.org/content/10.64898/2026.06.07.730684v2) |  |  | 860M-parameter generative foundation model jointly modeling single-cell epigenomics, transcriptomics, and proteomics with hierarchical tokenization and iterative diffusion-based generation. |
| CAPTAIN | 2026-05-07 | [Nature Communications](https://www.nature.com/articles/s41467-026-72882-y) |  |  | Multimodal foundation model pretrained on co-assayed single-cell RNA and surface-protein profiles from more than four million cells. |
| CellxPert | 2026-04-30 | [arXiv](https://arxiv.org/abs/2605.00930) |  |  | Multimodal single-cell and spatial foundation model with MCMC steering for in-silico perturbation. |
| CLM-X | 2026-02-18 | [bioRxiv](https://www.biorxiv.org/content/10.64898/2026.02.17.704943v1) |  |  | Multi-way Transformer foundation model for unified scRNA-seq and scATAC-seq analysis. |
| Stack | 2026-01-09 | [bioRxiv](https://www.biorxiv.org/content/10.64898/2026.01.09.698608v1), [Arc Institute news](https://arcinstitute.org/news/foundation-model-stack) | [GitHub](https://github.com/ArcInstitute/state) | [Hugging Face Stack-Large-Aligned](https://huggingface.co/arcinstitute/Stack-Large-Aligned), [Perturb Sapiens dataset](https://huggingface.co/datasets/arcinstitute/Perturb-Sapiens) | In-context-learning foundation model for single-cell biology and simulated perturbation atlases. |
| OKR-CELL | 2026-01 | [arXiv](https://arxiv.org/abs/2601.05648) |  |  | Open-world knowledge-aided robust cell-language pretraining. |
| OmniCell | 2025-12-29 | [bioRxiv](https://www.biorxiv.org/content/10.64898/2025.12.29.696804v1) |  |  | Unified foundation model for single-cell and spatial transcriptomics pretrained on 67M profiles. |
| FOCUS | 2025-12-23 | [bioRxiv](https://www.biorxiv.org/content/10.64898/2025.12.23.696267v2) |  |  | Foundational generative model for cross-platform spatial transcriptomics enhancement. |
| HiBio-ST | 2025-09-02 | [ICLR 2026 submission / OpenReview](https://openreview.net/forum?id=oG07enidTy) |  |  | Hierarchical multimodal foundation model using biological prior anchors for spatial transcriptomics and computational pathology. |
| Cell2Text | 2025-09 | [arXiv](https://arxiv.org/abs/2509.24840) |  |  | Multimodal LLM for generating textual single-cell descriptions from RNA-seq data. |
| PAST | 2025-07-08 | [arXiv](https://arxiv.org/abs/2507.06418) |  |  | Pan-cancer multimodal foundation model aligning histopathology images and single-cell transcriptomes. |
| SToFM | 2025-07 | [arXiv](https://arxiv.org/abs/2507.11588), [Hugging Face paper page](https://huggingface.co/papers/2507.11588) |  |  | Multi-scale spatial transcriptomics foundation model. |
| HEIST | 2025-06-11 | [arXiv](https://arxiv.org/abs/2506.11152) |  |  | Hierarchical graph transformer foundation model for spatial transcriptomics and proteomics. |
| scMamba | 2025-06 | [arXiv](https://arxiv.org/abs/2506.20697) |  |  | State-space foundation model for single-cell multi-omics integration without HVG selection. |
| SCARF | 2025-04-13 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.04.07.647689v1) |  |  | Mamba-based foundation model for integrated single-cell ATAC-seq and RNA-seq analysis. |
| scGPT-spatial | 2025-02-08 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.02.05.636714v1) | [GitHub](https://github.com/bowang-lab/scGPT-spatial) |  | Continual pretraining of scGPT for spatial transcriptomics on SpatialHuman30M. |
| Nicheformer | 2025 | [Nature Methods](https://www.nature.com/articles/s41592-025-02814-z), [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12695652/) | [GitHub](https://github.com/theislab/nicheformer) |  | Foundation model trained on dissociated single-cell and spatial transcriptomics. |
| CELLama | 2024-05-10 | [Advanced Science / PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12866849/), [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.05.10.593412v1) |  |  | Single-cell and spatial transcriptomics embeddings using language-model-style cell sentences. |
| LangCell | 2024-05 | [arXiv](https://arxiv.org/abs/2405.06708) | [GitHub](https://github.com/PharMolix/LangCell) | [OpenBioMed](https://github.com/PharMolix/OpenBioMed) | Language-cell pretraining for cell identity understanding and cell-text retrieval. |

## LLM-native and agentic single-cell models

| Model | Date | Paper | Code | Resources | Notes |
| --- | --- | --- | --- | --- | --- |
| scPilot | 2026-02 | [arXiv](https://arxiv.org/abs/2602.11609), [Hugging Face paper page](https://huggingface.co/papers/2602.11609) | [GitHub](https://github.com/maitrix-org/scPilot) |  | LLM reasoning framework that directly inspects scRNA-seq data and calls tools. |
| LLM-scCurator | 2025-12-29 | [bioRxiv](https://www.biorxiv.org/content/10.64898/2025.12.28.696778v1) |  |  | Backend-agnostic LLM framework for data-centric zero-shot cell-type annotation. |
| CellReasoner | 2025-05-26 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.05.20.655112v1) |  |  | Reasoning-enhanced 7B LLM for zero- and few-shot single-cell type annotation. |
| CellTypeAgent | 2025-05-13 | [arXiv](https://arxiv.org/abs/2505.08844) |  |  | LLM-agent for trustworthy cell type annotation with external database verification. |
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
| PertAdapt | 2026-07-07 | [Bioinformatics](https://academic.oup.com/bioinformatics/article/42/Supplement_1/btag307/8726320) | [GitHub](https://github.com/BaiDing1234/PertAdapt) |  | Condition-sensitive adapter and adaptive loss for transferring pretrained single-cell foundation models to genetic perturbation-response prediction. |
| scpFormer | 2026-04 | [arXiv](https://arxiv.org/abs/2604.20003) |  |  | Foundation model for unified representation and integration of single-cell proteomics. |
| TxFM | 2026-03-03 | [ICLR 2026 Workshop / OpenReview](https://openreview.net/forum?id=NqZqClqtTK) |  |  | Transformer masked autoencoder trained on curated bulk and single-cell RNA-seq for perturbation representation and cell analysis tasks. |
| Tahoe-x1 | 2025-10-23 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.10.23.683759v1) | [GitHub](https://github.com/tahoebio/tahoe-x1) | [Hugging Face](https://huggingface.co/tahoebio/Tahoe-x1), [Blog](https://www.tahoebio.ai/news/tahoe-x1-blog) | Perturbation-trained single-cell foundation model family up to 3B parameters. |
| EpiAgent | 2025-09-25 | [Nature Methods](https://www.nature.com/articles/s41592-025-02822-z), [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.12.19.629312v1) | [GitHub](https://github.com/xy-chen16/EpiAgent) | [Zenodo](https://doi.org/10.5281/zenodo.16562787) | Foundation model for single-cell epigenomics pretrained on Human-scATAC-Corpus. |
| Nephrobase Cell+ | 2025-09 | [arXiv](https://arxiv.org/abs/2509.26223) |  |  | Kidney-focused multimodal single-cell foundation model. |
| CLM-access | 2025-08-12 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.08.10.669570v1) | [GitHub](https://github.com/HIM-AIM/CLM-access) |  | Specialized cell language model for high-dimensional single-cell ATAC-seq analysis. |
| State | 2025-07-10 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.06.26.661135v1), [Arc Institute model collection](https://huggingface.co/arcinstitute) | [GitHub](https://github.com/ArcInstitute/state) | [Hugging Face SE-600M](https://huggingface.co/arcinstitute/SE-600M) | Set-based model family for cellular perturbation response and cell embeddings. |
| OmniPert | 2025-07-05 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.07.02.662744v1) |  |  | Transformer-based generative model for genetic and chemical perturbation responses in single cancer cells. |
| GRNFormer | 2025-03-03 | [arXiv](https://arxiv.org/abs/2503.01682) |  |  | Biologically guided framework for integrating gene regulatory networks into RNA foundation models. |
| EpiFoundation | 2025-02-08 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.02.05.636688v1), [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11839112/) |  | [Hugging Face](https://huggingface.co/UCSC-VLAA/EpiFoundation) | Single-cell ATAC-seq foundation model using peak-to-gene alignment. |
| Lemur | 2025-02-08 | [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.02.04.636468v1) |  |  | Drosophila single-cell foundation model for fine-tuning-free hierarchical cell-type generation. |
| GET | 2025-01-08 | [Nature](https://www.nature.com/articles/s41586-024-08391-z) | [GitHub](https://github.com/GET-Foundation/get_model) | [GitHub organization](https://github.com/GET-Foundation), [Hugging Face](https://huggingface.co/get-foundation) | General expression transformer for transcription across human cell types. |
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
| Tabular Foundation Models Are Competitive Cellular Perturbation Predictors Across Biological Scales | 2026-07-02 | [Link](https://www.biorxiv.org/content/10.64898/2026.06.28.735106v2) | Benchmark of general-purpose tabular foundation models against specialized perturbation models across cell-level, pseudobulk, primary-cell, and embryo-scale prediction settings. |
| VCBench: A Multi-Dimensional Benchmark for Single-Cell Foundation Models | 2026-06-23 | [Link](https://www.biorxiv.org/content/10.64898/2026.06.18.733146v1) | Evaluation of five foundation models across five testable virtual-cell capability dimensions, with simple baselines and a contamination-reporting schema. |
| Evaluating the role of pretraining dataset size and diversity on single-cell foundation model performance | 2026-06-09 | [Link](https://www.nature.com/articles/s41592-026-03120-y) | Nature Methods analysis of dataset scaling and diversity effects across 400 pretrained single-cell foundation models and 6,400 evaluations. |
| Scoring gene importance by interpreting single-cell foundation models | 2026-05-27 | [Link](https://www.nature.com/articles/s41587-026-03112-5) | Nature Biotechnology paper introducing SIGnature, an attribution-based framework for scoring gene importance from scRNA-seq foundation models. |
| GSFM: A gene set foundation model pre-trained on a massive collection of diverse gene sets | 2026-05 | [Link](https://www.cell.com/patterns/fulltext/S2666-3899(26)00074-7) | Patterns paper on a gene-set foundation model with an associated web resource and code release. |
| Intermediate Layers Encode Optimal Biological Representations in Single-Cell Foundation Models | 2026-04-16 | [Link](https://arxiv.org/abs/2604.14838) | Layer-wise benchmark of scFoundation and Tahoe-X1 representations for trajectory and perturbation tasks. |
| Learning multi-cellular representations of single-cell transcriptomics data enables characterization of patient-level disease states | 2026-03-31 | [Link](https://www.cell.com/cell-systems/fulltext/S2405-4712(26)00052-9) | Cell Systems paper on patient-level representations learned from collections of single-cell transcriptomes. |
| Benchmarking zero-shot single-cell foundation model embeddings for cellular dynamics reconstruction | 2026-03-10 | [Link](https://www.biorxiv.org/content/10.64898/2026.03.10.710748v1) | Zero-shot benchmark focused on cellular dynamics reconstruction from foundation model embeddings. |
| Sparse autoencoders reveal organized biological knowledge but minimal regulatory logic in single-cell foundation models | 2026-03 | [Link](https://arxiv.org/abs/2603.02952) | Sparse-autoencoder analysis of Geneformer and scGPT representations. |
| From modality-specific to compositional foundation models for cell biology | 2026-02-18 | [Link](https://www.cell.com/cell-systems/fulltext/S2405-4712(26)00016-5) | Cell Systems perspective on compositional multimodal foundation-model design for cell biology. |
| scDrugMap | 2025-05 | [Link](https://arxiv.org/abs/2505.05612) | Benchmarking large foundation models for drug response prediction. |
| A Survey on Foundation Language Models for Single-cell Biology | 2025 | [Link](https://aclanthology.org/2025.acl-long.26.pdf) | Taxonomy and task summary for single-cell PLMs and LLMs. |
| Assessing the limits of zero-shot foundation models in single-cell biology | 2025 | [Link](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-025-03781-6) | Zero-shot evaluation of single-cell foundation model embeddings. |
| Biology-driven insights into the power of single-cell foundation models | 2025 | [Link](https://pmc.ncbi.nlm.nih.gov/articles/PMC12492631/) | Benchmarking and biological analysis across major scFMs. |
| PertEval-scFM | 2025 | [Link](https://openreview.net/forum?id=pCz6OTCodu) | Benchmark for perturbation-effect prediction with single-cell foundation models. |
| Single-cell foundation models: bringing artificial intelligence into cell biology | 2025 | [Link](https://www.nature.com/articles/s12276-025-01547-5) | Review of major scFMs, limitations, and applications. |
| A Deep Dive into Single-Cell RNA Sequencing Foundation Models | 2023-10-19 | [Link](https://www.biorxiv.org/content/10.1101/2023.10.19.563100v1) | Evaluation of scBERT and scGPT. |
| ONERAI foundation-model-single-cell-papers |  | [Link](https://github.com/ONERAI/foundation-model-single-cell-papers) | Broad paper list across single-cell, perturbation, pathology, and DNA foundation models. |
