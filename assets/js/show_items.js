const DETAIL_SECTION_IDS = [
  "hidden-section-scripting",
  "hidden-section-game-design",
  "hidden-section-art-design",
  "hidden-section-narrative-design",
  "hidden-section-UX-design",
  "hidden-section-project-management"
];

const DETAIL_BUTTON_SELECTORS = {
  "hidden-section-scripting": 'a.pixel-button-link[onclick="toggleContentScripting()"]',
  "hidden-section-game-design": 'a.pixel-button-link[onclick="toggleContentGameDesign()"]',
  "hidden-section-art-design": 'a.pixel-button-link[onclick="toggleContentArtDesign()"]',
  "hidden-section-narrative-design": 'a.pixel-button-link[onclick="toggleContentNarrativeDesign()"]',
  "hidden-section-UX-design": 'a.pixel-button-link[onclick="toggleContentUXDesign()"]',
  "hidden-section-project-management": 'a.pixel-button-link[onclick="toggleContentProjectManagement()"]'
};

function setSelectedButton(sectionId) {
  for (const id of DETAIL_SECTION_IDS) {
    const button = document.querySelector(DETAIL_BUTTON_SELECTORS[id]);
    const visual = button?.querySelector(".pixel, .pixel-blue, .pixel-purple, .pxiel-purple, .pixel-orange, .pixel-pink, .pixel-grey-green, .pixel-black-blue, .pixel2");

    if (button) button.removeAttribute("aria-pressed");
    if (visual) visual.classList.remove("is-selected");
  }

  const selectedButton = document.querySelector(DETAIL_BUTTON_SELECTORS[sectionId]);
  const selectedVisual = selectedButton?.querySelector(".pixel, .pixel-blue, .pixel-purple, .pxiel-purple, .pixel-orange, .pixel-pink, .pixel-grey-green, .pixel-black-blue, .pixel2");

  if (selectedButton && selectedVisual) {
    selectedButton.setAttribute("aria-pressed", "true");
    selectedVisual.classList.add("is-selected");
  }
}

function clearSelectedButtons() {
  for (const id of DETAIL_SECTION_IDS) {
    const button = document.querySelector(DETAIL_BUTTON_SELECTORS[id]);
    const visual = button?.querySelector(".pixel, .pixel-blue, .pixel-purple, .pxiel-purple, .pixel-orange, .pixel-pink, .pixel-grey-green, .pixel-black-blue, .pixel2");

    if (button) button.removeAttribute("aria-pressed");
    if (visual) visual.classList.remove("is-selected");
  }
}

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
  if (isCurrentlyVisible) {
    clearSelectedButtons();
    return;
  }

  // Otherwise, show only the clicked section.
  target.style.display = "block";
  setSelectedButton(sectionId);
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

function toggleContentProjectManagement() {
  toggleExclusive("hidden-section-project-management");
}
