const pdfProjects = {
  "pdfs/master-thesis.pdf": {
    title: "Master thesis",
    kicker: "MSc thesis · Cancer omics · Survival analysis",
    description:
      "My master thesis investigates survival-associated molecular features across cancer omics data, with a focus on transcriptomics, proteomics, isoform-level signals, and cross-omics biological interpretation.",
    tags: ["Survival analysis", "Cancer omics", "Isoforms", "Proteomics"]
  },
  "pdfs/bachelor-project.pdf": {
    title: "Bachelor project",
    kicker: "BSc project · Life science engineering",
    description:
      "My bachelor project represents my foundation in life science engineering, combining biological problem-solving with quantitative and computational thinking.",
    tags: ["Life science", "Engineering", "Data analysis", "Scientific writing"]
  },
  "pdfs/deep-learning-project.pdf": {
    title: "Deep learning project",
    kicker: "Deep learning · Machine learning · Bioinformatics",
    description:
      "A machine learning project focused on applying deep learning concepts to structured data, with emphasis on model development, evaluation, and interpretation.",
    tags: ["Python", "Deep learning", "Model evaluation", "Machine learning"]
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
