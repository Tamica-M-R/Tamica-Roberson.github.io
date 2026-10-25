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

// Signup forms. With the Kit form address set in src/_data/site.json, they sign
// people up with Kit right on the page; nothing from Kit loads until someone
// presses the button. If Kit answers with anything unexpected (a spam check,
// say), the form posts to Kit the ordinary way and Kit's own page takes over.
document.querySelectorAll('form[data-signup="live"]').forEach((form) => {
  const status = form.querySelector(".signup__status");
  const button = form.querySelector('button[type="submit"]');
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    button.disabled = true;
    status.textContent = "Sending…";
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = await response.json();
      if (result.status === "success") {
        form.classList.add("is-done");
        status.textContent = "Almost there! Check your email and tap the link to confirm.";
      } else if (result.status === "failed") {
        status.textContent = "Please check your email address and try again.";
      } else {
        form.submit();
      }
    } catch {
      form.submit();
    } finally {
      button.disabled = false;
    }
  });
});

// Until then, forms show a friendly note and send nothing anywhere.
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

// Watch page: swap a video's thumbnail for YouTube's player only when someone presses play.
document.querySelectorAll("[data-video]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const player = document.createElement("iframe");
    player.src = `https://www.youtube-nocookie.com/embed/${link.dataset.video}?autoplay=1&rel=0`;
    player.title = link.dataset.title;
    player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    player.allowFullscreen = true;
    link.replaceWith(player);
  });
});
