const vehicles = [
  {
    plate: "AB-123-CD",
    title: "Peugeot 308 II",
    specs: ["1.6 BlueHDi 120", "2018", "Diesel", "Boite manuelle"],
    summary: "Vehicule detecte. Les pieces compatibles peuvent etre proposees ensuite.",
    badge: "Compatibilite forte",
    families: ["Freinage", "Moteur", "Filtration", "Suspension"],
    parts: [
      { name: "Kit freinage avant Bosch", family: "Freinage", ref: "BOS-308-FA", status: "Disponible", price: "149EUR", description: "Disques et plaquettes avant pour usage route." },
      { name: "Plaquettes arriere TRW", family: "Freinage", ref: "TRW-308-AR", status: "Disponible", price: "69EUR", description: "Plaquettes arriere avec usure reguliere." },
      { name: "Filtre a huile Mahle", family: "Filtration", ref: "MAH-308-HU", status: "Stock rapide", price: "19EUR", description: "Filtre huile compatible entretien courant." },
      { name: "Filtre a air Purflux", family: "Filtration", ref: "PUR-308-AI", status: "Stock rapide", price: "22EUR", description: "Filtration air moteur pour revision standard." },
      { name: "Amortisseur avant Monroe", family: "Suspension", ref: "MON-308-AM", status: "Sur commande", price: "119EUR", description: "Amortisseur avant pour conduite stable et confort." },
      { name: "Kit distribution SKF", family: "Moteur", ref: "SKF-308-DI", status: "Verification VIN", price: "219EUR", description: "Kit complet, verification supplementaire recommandee." },
      { name: "Pompe a eau Hepu", family: "Moteur", ref: "HEP-308-PE", status: "Disponible", price: "89EUR", description: "Pompe a eau pour entretien distribution." },
      { name: "Coupelle suspension SKF", family: "Suspension", ref: "SKF-308-CS", status: "Stock rapide", price: "34EUR", description: "Coupelle avant pour remplacement ensemble suspension." }
    ]
  },
  {
    plate: "EF-456-GH",
    title: "Renault Clio V",
    specs: ["1.0 TCe 90", "2021", "Essence", "Boite manuelle"],
    summary: "Profil courant. Entretien et pieces rapides a afficher.",
    badge: "Validation rapide",
    families: ["Entretien", "Freinage", "Eclairage", "Moteur"],
    parts: [
      { name: "Pack vidange complet", family: "Entretien", ref: "PK-CLI-VID", status: "Disponible", price: "79EUR", description: "Huile et filtres pour entretien regulier." },
      { name: "Balais essuie-glace Valeo", family: "Entretien", ref: "VAL-CLI-BG", status: "Disponible", price: "24EUR", description: "Balais avant avec montage rapide." },
      { name: "Disques avant ATE", family: "Freinage", ref: "ATE-CLI-DV", status: "Stock rapide", price: "109EUR", description: "Disques avant pour Clio V." },
      { name: "Ampoules H7 Philips", family: "Eclairage", ref: "PHI-CLI-H7", status: "Disponible", price: "18EUR", description: "Pack ampoules de remplacement." },
      { name: "Bobine d allumage NGK", family: "Moteur", ref: "NGK-CLI-BO", status: "Sur commande", price: "64EUR", description: "Bobine moteur essence." },
      { name: "Filtre habitacle Bosch", family: "Entretien", ref: "BOS-CLI-HA", status: "Disponible", price: "21EUR", description: "Filtre habitacle a charbon actif." },
      { name: "Filtre a air moteur", family: "Moteur", ref: "CLI-AIR-10", status: "Disponible", price: "17EUR", description: "Filtre air pour 1.0 TCe 90." },
      { name: "Plaquettes avant Ferodo", family: "Freinage", ref: "FER-CLI-PA", status: "Stock rapide", price: "58EUR", description: "Plaquettes avant usage urbain." }
    ]
  },
  {
    plate: "IJ-789-KL",
    title: "BMW Serie 3",
    specs: ["320d", "2019", "Diesel", "Boite auto"],
    summary: "Vehicule premium. Certaines references peuvent demander un controle supplementaire.",
    badge: "VIN recommande",
    families: ["Freinage", "Moteur", "Suspension", "Electronique"],
    parts: [
      { name: "Disques avant Zimmermann", family: "Freinage", ref: "ZIM-BMW-DV", status: "Disponible", price: "189EUR", description: "Disques avant premium pour Serie 3." },
      { name: "Plaquettes avant Textar", family: "Freinage", ref: "TEX-BMW-PA", status: "Disponible", price: "84EUR", description: "Plaquettes avant pour freinage stable." },
      { name: "Capteur ABS avant", family: "Electronique", ref: "ABS-BMW-AV", status: "Sur commande", price: "96EUR", description: "Capteur ABS avant compatible." },
      { name: "Amortisseur arriere Sachs", family: "Suspension", ref: "SAC-BMW-AR", status: "Verification VIN", price: "142EUR", description: "Amortisseur arriere avec controle supplementaire." },
      { name: "Filtre a carburant Mann", family: "Moteur", ref: "MAN-BMW-FC", status: "Stock rapide", price: "34EUR", description: "Filtre carburant diesel." },
      { name: "Kit distribution premium", family: "Moteur", ref: "KIT-BMW-DI", status: "Verification VIN", price: "329EUR", description: "Kit moteur avec verification VIN conseillée." },
      { name: "Silentbloc triangle avant", family: "Suspension", ref: "BMW-SIL-TR", status: "Sur commande", price: "47EUR", description: "Silentbloc pour train avant." },
      { name: "Module eclairage avant", family: "Electronique", ref: "BMW-LED-MO", status: "Verification VIN", price: "210EUR", description: "Module optique avant." }
    ]
  }
];

const plateInput = document.querySelector("#plate-input");
const vehicleTitle = document.querySelector("#vehicle-title");
const vehicleSpecs = document.querySelector("#vehicle-specs");
const vehicleSummary = document.querySelector("#vehicle-summary");
const vehicleBadge = document.querySelector("#vehicle-badge");
const plateSearchButton = document.querySelector("#plate-search-button");
const plateDemoButton = document.querySelector("#plate-demo-button");
const resultsVehicleTitle = document.querySelector("#results-vehicle-title");
const resultsVehicleSpecs = document.querySelector("#results-vehicle-specs");
const resultsVehicleSummary = document.querySelector("#results-vehicle-summary");
const resultsVehicleBadge = document.querySelector("#results-vehicle-badge");
const familyStrip = document.querySelector("#family-strip");
const partsGrid = document.querySelector("#parts-grid");
const partsSearch = document.querySelector("#parts-search");
const toolbarActions = document.querySelector("#toolbar-actions");
const detailTitle = document.querySelector("#detail-title");
const detailFamily = document.querySelector("#detail-family");
const detailDescription = document.querySelector("#detail-description");
const detailMeta = document.querySelector("#detail-meta");
const detailAddButton = document.querySelector("#detail-add-button");
const cartPill = document.querySelector("#cart-pill");
const resultsCount = document.querySelector("#results-count");
const resultsFamilyCount = document.querySelector("#results-family-count");

let currentVehicleIndex = 0;
let selectedFamily = "Toutes";
let selectedPart = null;
let cartCount = 0;

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

function renderResults(vehicle) {
  if (!resultsVehicleTitle || !resultsVehicleSpecs || !resultsVehicleSummary || !resultsVehicleBadge || !familyStrip || !partsGrid) {
    return;
  }

  resultsVehicleTitle.textContent = vehicle.title;
  resultsVehicleSummary.textContent = vehicle.summary;
  resultsVehicleBadge.textContent = vehicle.badge;
  resultsVehicleSpecs.innerHTML = "";

  vehicle.specs.forEach((spec) => {
    const item = document.createElement("span");
    item.textContent = spec;
    resultsVehicleSpecs.appendChild(item);
  });

  resultsFamilyCount.textContent = `${vehicle.families.length} familles`;
  buildToolbar(vehicle);
  buildFamilies(vehicle);
  buildParts(vehicle);
}

function buildToolbar(vehicle) {
  if (!toolbarActions) {
    return;
  }

  toolbarActions.innerHTML = "";
  ["Toutes", ...vehicle.families].forEach((family) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${family === selectedFamily ? " active" : ""}`;
    button.textContent = family;
    button.addEventListener("click", () => {
      selectedFamily = family;
      buildToolbar(vehicle);
      buildFamilies(vehicle);
      buildParts(vehicle);
    });
    toolbarActions.appendChild(button);
  });
}

function buildFamilies(vehicle) {
  familyStrip.innerHTML = "";

  vehicle.families.forEach((family) => {
    const card = document.createElement("article");
    card.className = `family-card${family === selectedFamily ? " active" : ""}`;
    card.innerHTML = `
      <p class="eyebrow">FAMILLE</p>
      <strong>${family}</strong>
    `;
    card.addEventListener("click", () => {
      selectedFamily = family;
      buildToolbar(vehicle);
      buildFamilies(vehicle);
      buildParts(vehicle);
    });
    familyStrip.appendChild(card);
  });
}

function buildParts(vehicle) {
  partsGrid.innerHTML = "";
  const searchValue = partsSearch ? partsSearch.value.trim().toLowerCase() : "";

  const filteredParts = vehicle.parts.filter((part) => {
    const familyOk = selectedFamily === "Toutes" || part.family === selectedFamily;
    const searchOk =
      !searchValue ||
      part.name.toLowerCase().includes(searchValue) ||
      part.ref.toLowerCase().includes(searchValue) ||
      part.family.toLowerCase().includes(searchValue);
    return familyOk && searchOk;
  });

  resultsCount.textContent = `${filteredParts.length} pieces`;

  filteredParts.forEach((part) => {
    const card = document.createElement("article");
    card.className = `part-card${selectedPart && selectedPart.ref === part.ref ? " active" : ""}`;
    card.innerHTML = `
      <p class="eyebrow">${part.family}</p>
      <strong>${part.name}</strong>
      <p>${part.description}</p>
      <div class="part-meta">
        <span>${part.ref}</span>
        <span>${part.price}</span>
      </div>
      <div class="part-meta">
        <span>${part.status}</span>
      </div>
      <button type="button" class="button dark">Voir detail</button>
    `;
    card.querySelector("button")?.addEventListener("click", () => {
      selectedPart = part;
      renderDetail(part);
      buildParts(vehicle);
    });
    partsGrid.appendChild(card);
  });

  if (!selectedPart || !filteredParts.some((part) => part.ref === selectedPart.ref)) {
    selectedPart = filteredParts[0] || null;
  }

  renderDetail(selectedPart);
}

function renderDetail(part) {
  if (!detailTitle || !detailFamily || !detailDescription || !detailMeta || !detailAddButton || !cartPill) {
    return;
  }

  if (!part) {
    detailTitle.textContent = "Aucune piece";
    detailFamily.textContent = "Aucun resultat pour ce filtre.";
    detailDescription.textContent = "Essaie une autre famille ou une autre recherche.";
    detailMeta.innerHTML = "";
    return;
  }

  detailTitle.textContent = part.name;
  detailFamily.textContent = part.family;
  detailDescription.textContent = part.description;
  detailMeta.innerHTML = `
    <span>${part.ref}</span>
    <span>${part.price}</span>
    <span>${part.status}</span>
  `;
  detailAddButton.onclick = () => {
    cartCount += 1;
    cartPill.textContent = `Panier: ${cartCount}`;
  };
}

function findVehicleByPlate(value) {
  const normalizedValue = value.trim().toUpperCase();
  return vehicles.find((vehicle) => vehicle.plate === normalizedValue) || vehicles[currentVehicleIndex];
}

plateSearchButton?.addEventListener("click", () => {
  const vehicle = findVehicleByPlate(plateInput.value);
  currentVehicleIndex = vehicles.findIndex((entry) => entry.plate === vehicle.plate);
  window.location.href = `catalogue.html?plate=${encodeURIComponent(vehicle.plate)}`;
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

partsSearch?.addEventListener("input", () => {
  const params = new URLSearchParams(window.location.search);
  const plate = params.get("plate") || vehicles[0].plate;
  const vehicle = findVehicleByPlate(plate);
  buildParts(vehicle);
});

if (resultsVehicleTitle) {
  const params = new URLSearchParams(window.location.search);
  const plate = params.get("plate") || vehicles[0].plate;
  const vehicle = findVehicleByPlate(plate);
  selectedFamily = "Toutes";
  renderResults(vehicle);
}
