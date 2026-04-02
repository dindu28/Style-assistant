let currentOutfit = null;
let selectedItem = null;

let wardrobe = [
  {
    name: "Flare Dress",
    category: "dress",
    occasion: "casual",
    img: "flare-dress.jpg",
  },
  {
    name: "Long Dress",
    category: "dress",
    occasion: "date",
    img: "long-dress.jpg",
  },
  {
    name: "Red Dress",
    category: "dress",
    occasion: "church",
    img: "red-dress.jpg",
  },
  {
    name: "White Dress",
    category: "dress",
    occasion: "church",
    img: "white-dress.jpg",
  },
  {
    name: "Blue Dress",
    category: "dress",
    occasion: "church",
    img: "blue-dress.jpg",
  },
  {
    name: "Fitted Dress",
    category: "dress",
    occasion: "wedding",
    img: "fitted-dress.jpg",
  },
  {
    name: "Corporate",
    category: "dress",
    occasion: "work",
    img: "corporate.jpg",
  },
  {
    name: "Blue Jeans",
    category: "bottom",
    occasion: "casual",
    img: "blue-jeans.jpg",
  },
  {
    name: "Palazzo",
    category: "bottom",
    occasion: "casual",
    img: "palazzo.jpg",
  },
  {
    name: "Fitted Top",
    category: "top",
    occasion: "casual",
    img: "fitted-top.jpg",
  },
  {
    name: "Casual Top",
    category: "top",
    occasion: "casual",
    img: "casual-top.jpg",
  },
  {
    name: "Pumps Heels",
    category: "shoes",
    occasion: "work",
    img: "pumps-heels.jpg",
  },
  {
    name: "Stiletto Heels",
    category: "shoes",
    occasion: "church",
    img: "stiletto-heels.jpg",
  },
  {
    name: "Black Heels",
    category: "shoes",
    occasion: "church",
    img: "black-heels.jpg",
  },
  {
    name: "Strappy Heels",
    category: "shoes",
    occasion: "date",
    img: "strappy-heels.jpg",
  },
  {
    name: "Ankle Heels",
    category: "shoes",
    occasion: "wedding",
    img: "ankle-heels.jpg",
  },
  {
    name: "Sneakers",
    category: "shoes",
    occasion: "casual",
    img: "sneakers.jpg",
  },
  {
    name: "Fancy Slippers",
    category: "shoes",
    occasion: "casual",
    img: "fancy-slippers.jpg",
  },
];

let savedOutfits = [];

const wardrobeGallery = document.getElementById("wardrobe-gallery");
const outfitDisplay = document.getElementById("outfit-display");
const generateBtn = document.getElementById("generate-btn");
const saveOutfitBtn = document.getElementById("save-outfit-btn");
const addItemBtn = document.getElementById("add-item-btn");
const addItemModal = document.getElementById("add-item-modal");
const closeModal = document.getElementById("close-modal");
const addItemForm = document.getElementById("add-item-form");

function renderWardrobe() {
  wardrobeGallery.innerHTML = "";
  wardrobe.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <p>${item.name}</p>
        <button onclick="removeItem(${index})">Remove</button>`;
    wardrobeGallery.appendChild(card);
  });
}

function removeItem(index) {
  wardrobe.splice(index, 1);
  renderWardrobe();
}

function generateOutfit() {
  const occasion = document.getElementById("occasion-select").value;

  if (!occasion) {
    alert("Please select an occasion!");
    return;
  }

  const filtered = wardrobe.filter((item) => item.occasion === occasion);

  const tops = filtered.filter((item) => item.category === "top");
  const bottoms = filtered.filter((item) => item.category === "bottom");
  const dresses = filtered.filter((item) => item.category === "dress");
  const shoes = filtered.filter((item) => item.category === "shoes");

  let outfit = [];

  if (dresses.length > 0 && shoes.length > 0) {
    outfit = [
      dresses[Math.floor(Math.random() * dresses.length)],
      shoes[Math.floor(Math.random() * shoes.length)],
    ];
  } else if (tops.length > 0 && bottoms.length > 0 && shoes.length > 0) {
    outfit = [
      tops[Math.floor(Math.random() * tops.length)],
      bottoms[Math.floor(Math.random() * bottoms.length)],
      shoes[Math.floor(Math.random() * shoes.length)],
    ];
  } else {
    alert("Not enough items for this occasion!");
    return;
  }

  displayOutfit(outfit);
  currentOutfit = outfit;
}

function displayOutfit(outfit) {
  outfitDisplay.innerHTML = "";
  outfit.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <p>${item.name}</p>
        `;
    outfitDisplay.appendChild(card);
  });
}

function saveOutfit() {
  if (!currentOutfit) return alert("Generate an outfit first!");
  savedOutfits.push(currentOutfit);
  renderSavedOutfits();
}

addItemBtn.onclick = () => (addItemModal.style.display = "block");
closeModal.onclick = () => (addItemModal.style.display = "none");
window.onclick = (e) => {
  if (e.target == addItemModal) addItemModal.style.display = "none";
};

addItemForm.onsubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById("item-name").value;
  const category = document.getElementById("item-category").value;
  const occasion = document.getElementById("item-occasion").value;
  const img = document.getElementById("item-img").value;
  wardrobe.push({ name, category, occasion, img });
  renderWardrobe();
  addItemForm.reset();
  addItemModal.style.display = "none";
};

renderWardrobe();

generateBtn.addEventListener("click", generateOutfit);
saveOutfitBtn.addEventListener("click", saveOutfit);

function renderSavedOutfits() {
  const gallery = document.getElementById("saved-outfits-gallery");
  gallery.innerHTML = "";

  savedOutfits.forEach((outfit) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = outfit
      .map(
        (item) => `
            <img src="${item.img}">
        `,
      )
      .join("");

    gallery.appendChild(card);
  });
}

const zones = document.querySelectorAll(".drop-zone");

zones.forEach((zone) => {
  // DESKTOP DROP
  zone.addEventListener("dragover", (e) => e.preventDefault());

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    const index = e.dataTransfer.getData("index");
    placeItem(zone, wardrobe[index]);
  });

  // MOBILE TAP DROP
  zone.addEventListener("click", () => {
    if (!selectedItem) return;

    placeItem(zone, selectedItem);
  });
});

function placeItem(zone, item) {
  if (item.category !== zone.dataset.category) {
    alert("Wrong category!");
    return;
  }

  zone.innerHTML = `
    <div class="dropped-item">
      <img src="${item.img}">
      <p>${item.name}</p>
    </div>
  `;
}

renderMixItems();

document.addEventListener("dragover", function (e) {
  const scrollSpeed = 10;
  const threshold = 100;

  const y = e.clientY;
  const windowHeight = window.innerHeight;

  if (y < threshold) {
    window.scrollBy(0, -scrollSpeed);
  } else if (y > windowHeight - threshold) {
    window.scrollBy(0, scrollSpeed);
  }
});

const isMobile = window.innerWidth < 768;

function renderMixItems() {
  const container = document.getElementById("mix-items");
  container.innerHTML = "";

  wardrobe.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.draggable = true;

    card.innerHTML = `
      <img src="${item.img}">
      <p>${item.name}</p>
    `;

    // Desktop drag
    card.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("index", index);
    });

    // Mobile tap select
    card.addEventListener("click", () => {
      selectedItem = item;

      document
        .querySelectorAll("#mix-items .card")
        .forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
    });

    container.appendChild(card);
  });
}
