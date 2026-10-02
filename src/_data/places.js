// Travel photos used across the site. To swap one, upload a new photo to
// src/assets/img/places/ (portrait, 3:4 works best) and change its line here.
// Each row of snapshots looks best with five or six photos.

const p = {
  versailles: { src: "/assets/img/places/versailles-640.jpg", caption: "Versailles", alt: "Tamica on a balcony at Versailles, looking out over autumn trees" },
  paris: { src: "/assets/img/places/paris-640.jpg", caption: "Paris", alt: "Tamica smiling in a Paris street as fireworks light up the sky" },
  vatican: { src: "/assets/img/places/vatican-640.jpg", caption: "The Vatican", alt: "Tamica in a yellow sundress inside St. Peter's Basilica as sunlight falls across the marble floor" },
  capri: { src: "/assets/img/places/capri-640.jpg", caption: "Capri", alt: "Tamica on a boat with the Italian coastline behind her" },
  lisbon: { src: "/assets/img/places/lisbon-640.jpg", caption: "Lisbon", alt: "Tamica in front of an ornate stone palace and garden in Portugal" },
  barcelona: { src: "/assets/img/places/barcelona-640.jpg", caption: "Barcelona", alt: "Tamica on a hillside path above the harbor and the Mediterranean in Barcelona" },
  luxembourg: { src: "/assets/img/places/luxembourg-640.jpg", caption: "Luxembourg", alt: "Tamica sitting on a stone wall above a green valley in Luxembourg" },
  neuschwanstein: { src: "/assets/img/places/neuschwanstein-640.jpg", caption: "Neuschwanstein", alt: "Tamica in a meadow with Neuschwanstein Castle and the Alps behind her" },
  germany: { src: "/assets/img/places/germany-640.jpg", caption: "Germany", alt: "Tamica beside a stone lion above a vineyard in Germany" },
  losAngeles: { src: "/assets/img/places/los-angeles-640.jpg", caption: "Los Angeles", alt: "Tamica on a corner of Rodeo Drive in a bright floral blouse" },
  lasVegas: { src: "/assets/img/places/las-vegas-640.jpg", caption: "Las Vegas", alt: "Tamica sipping an oversized red drink outside a casino entrance in Las Vegas" },
  maui: { src: "/assets/img/places/maui-640.jpg", caption: "Maui", alt: "Tamica on a sandy beach in Maui in a white outfit" },
};

export default {
  home: [p.versailles, p.losAngeles, p.barcelona, p.paris, p.lasVegas, p.capri],
  story: [p.vatican, p.lisbon, p.maui, p.neuschwanstein, p.germany],
  watch: [p.luxembourg, p.lasVegas, p.lisbon, p.capri, p.maui],
};
