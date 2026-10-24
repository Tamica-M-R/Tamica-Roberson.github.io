// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
}

// Signup forms. Until the Kit form address is set in src/_data/site.json,
// forms show a friendly note and send nothing anywhere.
document.querySelectorAll('form[data-signup="pending"]').forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".signup__status");
    if (status) {
      status.textContent = "Thank you! Letters open very soon. Follow @she.flutter to hear the moment they do.";
    }
    form.reset();
  });
});

// Press page: "Copy" buttons for the bios. Hidden unless the browser can copy.
if (navigator.clipboard) {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    const source = document.getElementById(button.dataset.copy);
    if (!source) return;
    button.hidden = false;
    button.addEventListener("click", async () => {
      const text = [...source.querySelectorAll("p")].map((p) => p.textContent.trim()).join("\n\n");
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied";
      } catch {
        button.textContent = "Select and copy";
      }
      setTimeout(() => (button.textContent = "Copy"), 2000);
    });
  });
}
