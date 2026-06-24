const DETAIL_SECTION_IDS = [
  "hidden-section-scripting",
  "hidden-section-game-design",
  "hidden-section-art-design",
  "hidden-section-narrative-design",
  "hidden-section-UX-design"
];

function toggleExclusive(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const isCurrentlyVisible = target.style.display !== "none" && target.style.display !== "";

  // Hide all sections first.
  for (const id of DETAIL_SECTION_IDS) {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  }

  // If the clicked section was already visible, keep everything hidden.
  if (isCurrentlyVisible) return;

  // Otherwise, show only the clicked section.
  target.style.display = "block";
}

function toggleContentScripting() {
  toggleExclusive("hidden-section-scripting");
}

function toggleContentGameDesign() {
  toggleExclusive("hidden-section-game-design");
}

function toggleContentArtDesign() {
  toggleExclusive("hidden-section-art-design");
}

function toggleContentNarrativeDesign() {
  toggleExclusive("hidden-section-narrative-design");
}

function toggleContentUXDesign() {
  toggleExclusive("hidden-section-UX-design");
}
