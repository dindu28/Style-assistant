# StyleMate – Style Assistant

StyleMate is a modern web-based outfit planner that helps you organize your wardrobe, generate outfits, and mix & match clothing items effortlessly.
It combines simplicity, style, and interactivity to give you a personalized styling experience right in your browser.

---

## Features

###  Wardrobe Management
- Add clothing items with:
  - Name
  - Category (Top, Bottom, Dress, Shoes)
  - Occasion (Casual, Church, Date, Wedding, Work)
  - Image
- Remove items from your wardrobe
- Visual grid display of all items

---

### Outfit Generator
- Select an occasion
- Automatically generates a complete outfit:
  - Dress + Shoes OR
  - Top + Bottom + Shoes
- Randomized combinations for variety

---

### Saved Outfits
- Save generated outfits
- View previously saved combinations
- Helps you reuse your favorite looks

---

### Mix & Match (Interactive Feature)
- Drag and drop items into outfit zones (Desktop)
- Tap to select and place items (Mobile)
- Categories:
  - Top
  - Bottom
  - Dress
  - Shoes
- Prevents wrong category placement
- Visual outfit builder experience

---

###  Mobile Friendly
- Fully responsive design
- Touch-based interaction for mobile users
- Optimized layout for small screens

---

## How It Works

### Outfit Logic
- Filters wardrobe by selected occasion
- Groups items by category
- Randomly selects valid combinations:
  - Prioritizes dresses
  - Falls back to top + bottom if needed

---

### Drag & Drop (Desktop)
- Uses `dragstart`, `dragover`, and `drop` events
- Transfers item index to drop zones

---

### Tap to Place (Mobile)
- Tap item → selects it
- Tap drop zone → places item
- Highlights selected item

---

## Technologies Used

- **HTML5** – Structure
- **CSS3** – Styling, animations, responsiveness
- **JavaScript (Vanilla JS)** – Functionality & logic

---

## UI & Design

- Modern glassmorphism style
- Gradient-based bright color palette
- Smooth hover animations
- Responsive grid layout
- Interactive feedback (hover, click, drag)



