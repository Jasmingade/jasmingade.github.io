const academicProjects = {
  "master-thesis": {
    title: "Master thesis",
    kicker: "MSc thesis · Multi-omics · Survival analysis",
    pdf: "pdfs/master-thesis.pdf",
    description:
      "My master thesis investigates how isoform-level expression, mutation-level features, transcriptomics, proteomics, and clinical metadata contribute to cancer survival. The project involved aligning molecular data with clinical metadata, building reproducible computational workflows, and applying Cox proportional hazards modelling to explore patient-level outcomes across molecular data layers. Beyond identifying survival-associated features, the project contributes a structured framework for understanding whether signals are shared across omics layers, specific to individual representations, or shaped by isoform- and mutation-level biology.",
    tags: [
      "Multi-omics",
      "Survival analysis",
      "Clinical metadata",
      "Transcriptomics",
      "Proteomics",
      "Isoform analysis",
      "Mutation data",
      "CoxPH",
      "Reproducible workflows",
      "Biological interpretation"
    ]
  },

  "bachelor-project": {
    title: "Bachelor project",
    kicker: "BSc project · RNA-seq · Cancer hallmarks",
    pdf: "pdfs/bachelor-project.pdf",
    description:
      "My bachelor project focused on enabling bioinformatic analysis of cancer hallmarks in RNA-sequencing data. The project involved curating and validating a cancer hallmark-associated gene set collection, comparing it with established biological knowledge, and applying it to real-world breast cancer data from TCGA. It contributes a structured way to connect transcriptomic data with interpretable biological phenotypes, strengthening my foundation in RNA-seq analysis, gene set methods, biological validation, and scientific communication.",
    tags: [
      "RNA-seq",
      "Gene sets",
      "Cancer hallmarks",
      "GSVA",
      "ssGSEA",
      "TCGA",
      "Biological validation",
      "Data visualisation",
      "Scientific writing"
    ]
  },

  "deep-learning-project": {
    title: "Deep learning project",
    kicker: "Deep learning · CNNs · Explainable AI",
    pdf: "pdfs/deep-learning-project.pdf",
    description:
      "This project focused on detecting AI-generated images using fine-tuned convolutional neural networks. Working with the CIFAKE dataset, the project compared model performance across loss functions and evaluated accuracy, precision, recall, and F1-score. GradCAM was used to investigate which image regions influenced model decisions, adding an interpretability layer to the classification task. The project contributes experience in deep learning workflows, model evaluation, reproducibility, and critical interpretation of model behaviour.",
    tags: [
      "Deep learning",
      "CNN",
      "Explainable AI",
      "GradCAM",
      "Model evaluation",
      "Classification",
      "Python",
      "Reproducibility",
      "Performance metrics"
    ]
  },

  "proteomics-database": {
    title: "Proteomics database project",
    kicker: "Special course · Proteomics · Isoform-resolved data",
    pdf: null,
    description:
      "This project focused on building an isoform-resolved resource for cancer proteomics data. The work involved structuring proteomics data for downstream analysis, connecting peptide- and protein-level information to isoform-aware biological interpretation, and developing a foundation for querying and comparing proteomics signals across cancer contexts. The project strengthened my experience with data organisation, proteomics workflows, database-oriented thinking, reproducible data structures, and the challenge of representing complex molecular data in a biologically meaningful way.",
    tags: [
      "Proteomics",
      "Isoform-resolved data",
      "Data resource",
      "Peptide mapping",
      "Database thinking",
      "Reproducible workflows",
      "Molecular interpretation"
    ]
  }
};

const projectTabs = document.querySelectorAll(".pdf-tab");
const pdfFrame = document.querySelector("#pdfFrame");
const pdfTitle = document.querySelector("#pdfTitle");
const pdfKicker = document.querySelector("#pdfKicker");
const pdfDescription = document.querySelector("#pdfDescription");
const pdfTags = document.querySelector("#pdfTags");
const pdfOpenLink = document.querySelector("#pdfOpenLink");
const pdfViewerWrapper = document.querySelector("#pdfViewerWrapper");

projectTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const projectId = tab.dataset.project;
    const project = academicProjects[projectId];

    if (!project) return;

    projectTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    pdfTitle.textContent = project.title;
    pdfKicker.textContent = project.kicker;
    pdfDescription.textContent = project.description;

    pdfTags.innerHTML = "";
    project.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      pdfTags.appendChild(span);
    });

    if (project.pdf) {
      pdfFrame.src = project.pdf;
      pdfFrame.title = `${project.title} PDF viewer`;
      pdfOpenLink.href = project.pdf;
      pdfOpenLink.style.display = "inline-block";
      pdfViewerWrapper.style.display = "block";
    } else {
      pdfFrame.src = "about:blank";
      pdfOpenLink.style.display = "none";
      pdfViewerWrapper.style.display = "none";
    }
  });
});
