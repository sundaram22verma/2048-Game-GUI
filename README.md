# 2048 Game

A modern and responsive implementation of the classic 2048 puzzle game, built with React, TypeScript, and Tailwind CSS.

![2048 Game Screenshot](https://raw.githubusercontent.com/user-attachments/assets/15451423-6490-482f-8703-e84711832446/2048-game-screenshot.png)

## ✨ Features

*   **Classic 2048 Gameplay**: Slide tiles and merge them to reach the 2048 tile.
*   **Responsive Design**: Play on any device, from mobile phones to desktops.
*   **Score Tracking**: Keeps track of your current score and your all-time best score (stored in local storage).
*   **Smooth Animations**: Enjoy fluid animations for tile movements, merges, and appearances.
*   **Win & Game Over**: Clear win and game over modals.
*   **Continue Playing**: Option to continue playing after reaching the 2048 tile.
*   **Keyboard Controls**: Use arrow keys for intuitive gameplay.

## 🚀 Tech Stack

*   **Framework**: [React](https://reactjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)

## 🎮 How to Play

1.  Use your **arrow keys** (`Up`, `Down`, `Left`, `Right`) to move the tiles.
2.  When two tiles with the same number touch, they **merge into one!**
3.  A new tile (either a 2 or a 4) will appear in a random empty spot after each move.
4.  The goal is to create a tile with the number **2048** to win the game.
5.  The game is over when the board is full and no more moves are possible.

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js (v18 or newer) and a package manager like npm or yarn installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sundaram22verma/2048-Game-GUI.git
    cd Game-GUI
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` (or the address shown in your terminal).

## 📂 Project Structure

The project follows a standard React application structure:

```
Game-GUI/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   └── ui/          # UI components from shadcn/ui
│   ├── lib/             # Utility functions (e.g., cn for Tailwind)
│   ├── pages/           # Main page components
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Core game logic
│   ├── App.tsx          # Main App component
│   ├── index.css        # Global styles and Tailwind directives
│   └── main.tsx         # Application entry point
├── .eslintrc.cjs        # ESLint configuration
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or want to fix a bug, please feel free to:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

---

Made with ❤️ for puzzle game enthusiasts.