// Travel photos used across the site. To swap one, upload a new photo to
// src/assets/img/places/ (portrait, 3:4 works best) and change its line here.

const p = {
  versailles: { src: "/assets/img/places/versailles-640.jpg", caption: "Versailles", alt: "Tamica on a balcony at Versailles, looking out over autumn trees" },
  paris: { src: "/assets/img/places/paris-640.jpg", caption: "Paris", alt: "Tamica smiling in a Paris street as fireworks light up the sky" },
  luxembourg: { src: "/assets/img/places/luxembourg-640.jpg", caption: "Luxembourg", alt: "Tamica sitting on a stone wall above a green valley in Luxembourg City" },
  neuschwanstein: { src: "/assets/img/places/neuschwanstein-640.jpg", caption: "Neuschwanstein", alt: "Tamica in a meadow with Neuschwanstein Castle and the Alps behind her" },
  germany: { src: "/assets/img/places/germany-640.jpg", caption: "Germany", alt: "Tamica beside a stone lion above a vineyard in Germany" },
  hawaiiBay: { src: "/assets/img/places/hawaii-bay-640.jpg", caption: "Hawaii", alt: "Tamica on a cliff above a turquoise bay in Hawaii" },
  hawaiiBeach: { src: "/assets/img/places/hawaii-beach-640.jpg", caption: "Hawaii", alt: "Tamica on a sandy beach in a white outfit" },
};

export default {
  home: [p.versailles, p.paris, p.luxembourg, p.neuschwanstein, p.germany],
  story: [p.versailles, p.paris, p.neuschwanstein, p.germany, p.hawaiiBay],
  watch: [p.hawaiiBeach, p.paris, p.luxembourg, p.neuschwanstein],
};
