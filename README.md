# 🎬 MovieZone

MovieZone is a modern single-page movie browsing application built with **React** and **Tailwind CSS**.  
It allows users to explore movies using category filtering, real-time search, and client-side pagination — all powered by a centralized filtering logic.

---

## 🚀 Features

- 🎞️ Browse movies with poster, title, release date, and category
- 🔍 Real-time search (case-insensitive)
- 🗂️ Category-based filtering (Action, Thriller, Animation, etc.)
- 🔁 Combined filter + search logic (single source of truth)
- 📄 Pagination (8 movies per page)
- 🌙 Modern dark-themed UI
- ⚡ Responsive design for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

- **React** (useState, useEffect)
- **Tailwind CSS**
- **JavaScript (ES6+)**
- Static local movie dataset

---

## 📁 Project Structure

```
src/
│
├── data/
│   └── data.js
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🧠 Core Implementation Details

### 🔥 Central Filtering Logic

Filtering and searching are handled inside a single `useEffect`:

- Starts from the original movie dataset
- Applies category filter (if not "All")
- Applies search filter (if search input is not empty)
- Updates filtered movie list
- Resets pagination when filter/search changes

This ensures:
- No double-filtering issues
- Predictable state updates
- Clean and maintainable logic

---

### 📄 Pagination Logic

- Displays 8 movies per page
- Uses `Array.slice()` for pagination
- Dynamically calculates total pages
- Page resets automatically when filters change

---

## ▶️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/moviezone.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

---

## 🎨 UI Highlights

- Hero section with featured movie backdrop
- Smooth hover scale animation on movie cards
- Responsive grid layout
- Clean category button UI
- Minimal and user-friendly pagination

---

## 🔮 Future Improvements

- 🔗 API integration (e.g., TMDB)
- 🎥 Movie details page with React Router
- ⭐ Favorites / Watchlist feature
- 🔐 Authentication & protected routes
- 🌗 Dark/Light mode toggle

---

## 📌 Best Practices Applied

- Single source of truth for filtering
- Controlled components for search input
- Derived state for pagination
- Clean separation of UI and logic
- Responsive design principles

---

## 👨‍💻 Author

MovieZone — A React project built to practice:
- Filtering logic
- Pagination
- State management
- Component-based UI development
