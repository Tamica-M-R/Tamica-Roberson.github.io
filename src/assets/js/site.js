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
