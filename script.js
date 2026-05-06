const pdfProjects = {
  "pdfs/master-thesis.pdf": {
    title: "Master thesis",
    kicker: "MSc thesis · Multi-omics · Survival analysis",
    description:
      "My master thesis investigates how molecular features across transcriptomics, proteomics, isoform-level signals, mutation-level data, and clinical metadata relate to cancer survival. The project combines computational workflows, statistical modelling, and biological interpretation to explore how different molecular data layers contribute to patient-level outcomes. A central focus is not only identifying survival-associated features, but also understanding whether signals are shared across omics layers or represent distinct biological information.",
    tags: [
      "Multi-omics",
      "Survival analysis",
      "Clinical metadata",
      "Transcriptomics",
      "Proteomics",
      "Isoforms",
      "Mutation-level data",
      "CoxPH",
      "Biological interpretation"
    ]
  },

  "pdfs/bachelor-project.pdf": {
    title: "Bachelor project",
    kicker: "BSc project · RNA-seq · Cancer hallmarks",
    description:
      "My bachelor project focused on enabling analysis of cancer hallmarks in RNA-sequencing data. The project combined a life science engineering foundation with computational analysis, biological interpretation, and structured scientific communication. It strengthened my ability to work with high-dimensional molecular data, connect computational results to biological concepts, and communicate findings in a clear and reproducible way.",
    tags: [
      "RNA-seq",
      "Cancer hallmarks",
      "Molecular biology",
      "Data analysis",
      "Biological interpretation",
      "Scientific writing"
    ]
  },

  "pdfs/deep-learning-project.pdf": {
    title: "Deep learning project",
    kicker: "Deep learning · Data modelling · Model evaluation",
    description:
      "This project focused on applying deep learning methods to a structured data problem, with emphasis on model development, training, validation, performance evaluation, and interpretation of results. The project strengthened my understanding of data-driven modelling workflows, including how to evaluate model behaviour critically and connect predictions back to the underlying data and research question.",
    tags: [
      "Deep learning",
      "Python",
      "Model training",
      "Validation",
      "Performance evaluation",
      "Data modelling",
      "Feature interpretation"
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
