# 🎮 Split Screen Landing Page

A modern, responsive, and interactive **split-screen landing page** featuring PlayStation 5 and Xbox Series X. The page dynamically expands sections on hover (for desktop) and supports click-based toggling (for mobile users) to enhance the user experience.

## 🚀 Features

✅ **Responsive Design** – Works seamlessly on all screen sizes (Mobile, Tablet, Desktop).  
✅ **Hover Interaction (Desktop)** – Expands sections when hovered over.  
✅ **Click to Expand (Mobile)** – Tapping a section hides the other for better mobile UX.  
✅ **Smooth Transitions** – Elegant animations for a professional look.  
✅ **Enhanced Button Effects** – Interactive buttons with scaling and color changes.  
✅ **Clean & Structured Code** – Well-organized React and CSS implementation.

---

## 🛠 Tech Stack

- **React.js** – For component-based UI.
- **CSS3** – Custom styles and animations.
- **Google Fonts** – 'Roboto' for modern typography.

---

## 📂 Project Structure

```
📂 project-folder
│-- 📂 src
│   ├── 📄 App.jsx
│   ├── 📄 Split.jsx   # Main split-screen component
│   ├── 📄 App.css    # Styling file for layout & responsiveness
│-- 📂 public
│   ├── 🎮 ps.jpg    # PlayStation image
│   ├── 🎮 xbox.jpg  # Xbox image
│-- 📄 package.json
│-- 📄 README.md
```

---

## 🎯 How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/split-screen-landing.git
   cd split-screen-landing
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

4. Open your browser and visit:
   ```sh
   http://localhost:3000
   ```

---

## 📱 Responsive Behavior

🔹 **Desktop** – Hover over sections to expand.  
🔹 **Mobile & Tablet** – Click a section to expand it while hiding the other.

---

## 🎨 Customization

You can modify the background images by replacing `ps.jpg` and `xbox.jpg` in the **public** folder.

For color changes, update the `:root` variables in `App.css`:

```css
:root {
  --left-bg-color: rgba(87, 84, 236, 0.7);
  --right-bg-color: rgba(43, 43, 43, 0.8);
  --left-btn-hover-color: rgba(87, 84, 236, 1);
  --right-btn-hover-color: rgba(28, 122, 28, 1);
}
```

---

## 📌 Future Improvements

🔹 Add dark mode support.  
🔹 Integrate video background support.  
🔹 Add more interactive elements (e.g., animations, tooltips).  

---
