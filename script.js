const pdfProjects = {
  "pdfs/master-thesis.pdf": {
    title: "Master thesis",
    kicker: "MSc thesis · Multi-omics · Survival analysis",
    description:
      "My master thesis investigates how isoform-level expression, mutation-level features, transcriptomics, proteomics, and clinical metadata contribute to cancer survival. The project combines harmonised biological and clinical data, reproducible computational workflows, and Cox proportional hazards modelling to explore patient-level outcomes across molecular data layers. Beyond identifying survival-associated features, the project contributes a structured framework for understanding whether signals are shared across omics layers, specific to individual representations, or shaped by isoform- and mutation-level biology.",
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

  "pdfs/bachelor-project.pdf": {
    title: "Bachelor project",
    kicker: "BSc project · RNA-seq · Cancer hallmarks",
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

  "pdfs/deep-learning-project.pdf": {
    title: "Deep learning project",
    kicker: "Deep learning · CNNs · Explainable AI",
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
  }
};

const pdfTabs = document.querySelectorAll(".pdf-tab");
const pdfFrame = document.querySelector("#pdfFrame");
const pdfTitle = document.querySelector("#pdfTitle");
const pdfKicker = document.querySelector("#pdfKicker");
const pdfDescription = document.querySelector("#pdfDescription");
const pdfTags = document.querySelector("#pdfTags");
const pdfOpenLink = document.querySelector("#pdfOpenLink");

pdfTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const pdfPath = tab.dataset.pdf;
    const project = pdfProjects[pdfPath];

    pdfTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    pdfFrame.src = pdfPath;
    pdfFrame.title = `${project.title} PDF viewer`;

    pdfTitle.textContent = project.title;
    pdfKicker.textContent = project.kicker;
    pdfDescription.textContent = project.description;
    pdfOpenLink.href = pdfPath;

    pdfTags.innerHTML = "";
    project.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      pdfTags.appendChild(span);
    });
  });
});
