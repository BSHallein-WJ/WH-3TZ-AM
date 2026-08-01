const ACCESS_PASSWORD = "2026";
const ACCESS_STORAGE_KEY = "mathe-site-access";

// DOM-Elemente
const gate = document.getElementById("access-gate");
const app = document.getElementById("app-content");
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const passwordMessage = document.getElementById("password-message");

const categoryButtons = document.getElementById("category-buttons");
const categoryTitle = document.getElementById("category-title");
const categoryDescription = document.getElementById("category-description");
const pdfList = document.getElementById("pdf-list");

const overlay = document.getElementById("image-overlay");
const overlayImg = document.getElementById("image-overlay-img");

// --- App sperren / entsperren ---
function setAppUnlocked(unlocked) {
    if (gate) {
        gate.hidden = unlocked;
        gate.setAttribute("aria-hidden", unlocked);
    }
    if (app) {
        app.hidden = !unlocked;
        app.setAttribute("aria-hidden", !unlocked);
        app.classList.toggle("visible", unlocked);
    }
    document.body.classList.toggle("app-unlocked", unlocked);
    document.body.classList.toggle("app-locked", !unlocked);
}

// --- Kategorien & Inhalte Rendern ---
function getCategories() {
    return Array.isArray(window.categories) ? window.categories : [];
}

function renderCategories() {
    const categories = getCategories();
    if (!categoryButtons || categories.length === 0) return;

    categoryButtons.innerHTML = categories
        .map(cat => `
            <button class="category-btn" data-id="${cat.id}">
                <span class="category-label">${cat.title}</span>
                <span class="category-badge">${cat.tasks.length}</span>
            </button>
        `)
        .join("");
}

function showCategory(categoryId) {
    const categories = getCategories();
    const category = categories.find(item => item.id === categoryId) || categories[0];
    if (!category) return;

    if (categoryTitle) categoryTitle.textContent = `${category.title} (${category.tasks.length} Aufgaben)`;
    if (categoryDescription) categoryDescription.textContent = category.description;

    // Aktiven Button markieren
    if (categoryButtons) {
        Array.from(categoryButtons.children).forEach(btn => {
            btn.classList.toggle("active", btn.dataset.id === category.id);
        });
    }

    // Aufgaben-Karten rendern
    if (pdfList) {
        pdfList.innerHTML = category.tasks.map(item => {
            const imgUrl = item.image ? encodeURI(item.image) : "";
            const altText = item.imageAlt || item.name;
            return `
                <article class="pdf-card task-card">
                    <div class="task-content">
                        <strong>${item.name}</strong>
                        ${item.info ? `<span>${item.info}</span>` : ""}
                        <div class="task-body">${item.prompt}</div>
                        ${imgUrl ? `
                            <button class="task-image-button" type="button" data-image="${imgUrl}" data-alt="${altText}">
                                <img class="task-image" src="${imgUrl}" alt="${altText}">
                            </button>
                        ` : ""}

                        <!-- NEU: Lösungs-Button & -Inhalt -->
                        ${item.solution ? `
                            <div class="solution-wrapper">
                                <button class="solution-btn" type="button">Lösung anzeigen</button>
                                <div class="task-solution" hidden>
                                    <div class="solution-title">Lösungsweg:</div>
                                    <div>${item.solution}</div>
                                </div>
                            </div>
                        ` : ""}
                    </div>
                </article>
            `;
        }).join("");
    }
}

// --- Passwort Logik ---
if (passwordForm) {
    passwordForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (passwordInput && passwordInput.value.trim() === ACCESS_PASSWORD) {
            localStorage.setItem(ACCESS_STORAGE_KEY, "true");
            if (passwordMessage) passwordMessage.textContent = "";
            passwordInput.value = "";
            setAppUnlocked(true);
            showCategory(getCategories()[0]?.id);
        } else {
            if (passwordMessage) passwordMessage.textContent = "Passwort ist falsch. Bitte versuche es erneut.";
            if (passwordInput) {
                passwordInput.value = "";
                passwordInput.focus();
            }
        }
    });
}

// --- Event Delegation für Buttons ---
if (categoryButtons) {
    categoryButtons.addEventListener("click", (e) => {
        const btn = e.target.closest(".category-btn");
        if (btn) showCategory(btn.dataset.id);
    });
}

// Event Delegation für Bild-Klicks & Lösungs-Buttons in der Aufgabenliste
if (pdfList) {
    pdfList.addEventListener("click", (e) => {
        // 1. Bild-Overlay öffnen
        const imgBtn = e.target.closest(".task-image-button");
        if (imgBtn && overlay && overlayImg) {
            overlayImg.src = imgBtn.dataset.image;
            overlayImg.alt = imgBtn.dataset.alt;
            overlay.hidden = false;
            document.body.classList.add("modal-open");
            return;
        }

        // 2. NEU: Lösung ein-/ausblenden
        const solutionBtn = e.target.closest(".solution-btn");
        if (solutionBtn) {
            const solutionDiv = solutionBtn.nextElementSibling;
            if (solutionDiv) {
                const isHidden = solutionDiv.hidden;
                solutionDiv.hidden = !isHidden;
                solutionBtn.textContent = isHidden ? "Lösung verbergen" : "Lösung anzeigen";
                solutionBtn.classList.toggle("active", isHidden);
            }
        }
    });
}

// --- Overlay schließen ---
function closeOverlay() {
    if (!overlay) return;
    overlay.hidden = true;
    if (overlayImg) {
        overlayImg.removeAttribute("src");
        overlayImg.removeAttribute("alt");
    }
    document.body.classList.remove("modal-open");
}

if (overlay) {
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay || e.target.id === "image-overlay-close") {
            closeOverlay();
        }
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && !overlay.hidden) {
        closeOverlay();
    }
});

// --- Initialisierung ---
function initializeApp() {
    const isUnlocked = localStorage.getItem(ACCESS_STORAGE_KEY) === "true";
    setAppUnlocked(isUnlocked);

    const categories = getCategories();
    if (categories.length > 0) {
        renderCategories();
        showCategory(categories[0].id);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp);
} else {
    initializeApp();
}