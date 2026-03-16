const vehicles = [
  {
    plate: "AB-123-CD",
    title: "Peugeot 308 II",
    specs: ["1.6 BlueHDi 120", "2018", "Diesel", "Boite manuelle"],
    summary: "Vehicule detecte. Les pieces compatibles peuvent etre proposees ensuite.",
    badge: "Compatibilite forte"
  },
  {
    plate: "EF-456-GH",
    title: "Renault Clio V",
    specs: ["1.0 TCe 90", "2021", "Essence", "Boite manuelle"],
    summary: "Profil courant. Entretien et pieces rapides a afficher.",
    badge: "Validation rapide"
  },
  {
    plate: "IJ-789-KL",
    title: "BMW Serie 3",
    specs: ["320d", "2019", "Diesel", "Boite auto"],
    summary: "Vehicule premium. Certaines references peuvent demander un controle supplementaire.",
    badge: "VIN recommande"
  }
];

const plateInput = document.querySelector("#plate-input");
const vehicleTitle = document.querySelector("#vehicle-title");
const vehicleSpecs = document.querySelector("#vehicle-specs");
const vehicleSummary = document.querySelector("#vehicle-summary");
const vehicleBadge = document.querySelector("#vehicle-badge");
const plateSearchButton = document.querySelector("#plate-search-button");
const plateDemoButton = document.querySelector("#plate-demo-button");

let currentVehicleIndex = 0;

function renderVehicle(vehicle) {
  if (!vehicleTitle || !vehicleSpecs || !vehicleSummary || !vehicleBadge) {
    return;
  }

  vehicleTitle.textContent = vehicle.title;
  vehicleSummary.textContent = vehicle.summary;
  vehicleBadge.textContent = vehicle.badge;
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

if (plateInput) {
  renderVehicle(vehicles[0]);
}
