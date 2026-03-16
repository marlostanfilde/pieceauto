const revealTargets = document.querySelectorAll(
  ".section, .hero-card, .plate-panel, .vehicle-card, .product-card, .timeline-grid article, .admin-card, .assurance-grid article"
);

revealTargets.forEach((element) => element.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealTargets.forEach((element) => observer.observe(element));

const vehicles = [
  {
    plate: "AB-123-CD",
    title: "Peugeot 308 II",
    specs: ["1.6 BlueHDi 120", "2018", "Diesel", "Boite manuelle"],
    summary: "Vehicule reconnu a partir de la plaque. Les produits ci-dessous sont filtres pour cette configuration.",
    badge: "Compatibilite forte",
    confidence: 86
  },
  {
    plate: "EF-456-GH",
    title: "Renault Clio V",
    specs: ["1.0 TCe 90", "2021", "Essence", "Boite manuelle"],
    summary: "Configuration courante avec bonnes correspondances catalogue. Les pieces d entretien sont disponibles immediatement.",
    badge: "Validation rapide",
    confidence: 92
  },
  {
    plate: "IJ-789-KL",
    title: "BMW Serie 3",
    specs: ["320d", "2019", "Diesel", "Boite auto"],
    summary: "Vehicule premium detecte. Les pieces critiques demandent parfois un controle supplementaire avant expedition.",
    badge: "VIN recommande",
    confidence: 78
  }
];

const plateInput = document.querySelector("#plate-input");
const vehicleTitle = document.querySelector("#vehicle-title");
const vehicleSpecs = document.querySelector("#vehicle-specs");
const vehicleSummary = document.querySelector("#vehicle-summary");
const vehicleBadge = document.querySelector("#vehicle-badge");
const confidenceFill = document.querySelector("#confidence-fill");
const confidenceText = document.querySelector("#confidence-text");
const plateSearchButton = document.querySelector("#plate-search-button");
const plateDemoButton = document.querySelector("#plate-demo-button");

let currentVehicleIndex = 0;

function renderVehicle(vehicle) {
  if (!vehicleTitle || !vehicleSummary || !vehicleBadge || !confidenceFill || !confidenceText || !vehicleSpecs) {
    return;
  }

  vehicleTitle.textContent = vehicle.title;
  vehicleSummary.textContent = vehicle.summary;
  vehicleBadge.textContent = vehicle.badge;
  confidenceFill.style.width = `${vehicle.confidence}%`;
  confidenceText.textContent = `Niveau de confiance compatibilite: ${vehicle.confidence}%`;
  vehicleSpecs.innerHTML = "";

  vehicle.specs.forEach((spec) => {
    const item = document.createElement("span");
    item.textContent = spec;
    vehicleSpecs.appendChild(item);
  });
}

function findVehicleByPlate(value) {
  const normalizedValue = value.trim().toUpperCase();
  return vehicles.find((vehicle) => vehicle.plate === normalizedValue) || vehicles[currentVehicleIndex];
}

plateSearchButton?.addEventListener("click", () => {
  const vehicle = findVehicleByPlate(plateInput.value);
  currentVehicleIndex = vehicles.findIndex((entry) => entry.plate === vehicle.plate);
  renderVehicle(vehicle);
});

plateDemoButton?.addEventListener("click", () => {
  currentVehicleIndex = (currentVehicleIndex + 1) % vehicles.length;
  const vehicle = vehicles[currentVehicleIndex];
  plateInput.value = vehicle.plate;
  renderVehicle(vehicle);
});

const cartItems = document.querySelector("#cart-items");
const subtotal = document.querySelector("#subtotal");
const total = document.querySelector("#total");
const addCartButtons = document.querySelectorAll(".add-cart-button");

let cart = [{ name: "Kit freinage avant Bosch", price: 149 }];

function renderCart() {
  if (!cartItems || !subtotal || !total || !vehicleTitle) {
    return;
  }

  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const article = document.createElement("article");
    article.className = "cart-item";
    article.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <p>Compatible avec ${vehicleTitle.textContent}</p>
      </div>
      <span>${item.price}€</span>
    `;
    cartItems.appendChild(article);
  });

  const subtotalValue = cart.reduce((sum, item) => sum + item.price, 0);
  subtotal.textContent = `${subtotalValue}€`;
  total.textContent = `${subtotalValue + 9}€`;
}

addCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cart.push({
      name: button.dataset.product,
      price: Number(button.dataset.price)
    });
    renderCart();
  });
});

if (plateInput) {
  renderVehicle(vehicles[0]);
}

if (cartItems) {
  renderCart();
}
