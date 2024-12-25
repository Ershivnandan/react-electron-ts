# Electron + Vite + React + TypeScript Project By Shiv

This project is a cross-platform application setup combining Electron, Vite, React, and TypeScript. It is designed for building desktop applications compatible with **Mac**, **Windows**, and **Linux**. This setup includes build commands and a streamlined development environment. 🚀

---

## 📂 Project Structure

Below is the folder structure of the project:

```
project-root/
├── dist-electron/
├── dist-react/
├── node_modules/
├── src/
│   ├── electron/
│   │   ├── main.ts
│   │   ├── pathresolver.ts
│   │   ├── preload.cjs
│   │   ├── resourceManager.ts
│   │   ├── tsconfig.json
│   │   └── util.ts
│   ├── ui/
│   │   ├── assets/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
├── .gitignore
├── desktopIconImage.png
├── electron-builder.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.ts
├── README.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── types.d.ts
└── vite.config.ts
```

### Key Directories and Files:

- **`src/electron`**: Contains the Electron-specific files, such as `main.ts` and `preload.cjs`.
- **`src/ui`**: Houses the React-based user interface components.
- **`electron-builder.json`**: Configuration for building the application for different platforms.
- **`vite.config.ts`**: Configuration for the Vite bundler.
- **`tsconfig.*.json`**: TypeScript configuration files for different parts of the project.
- **`scripts`**: NPM scripts to handle development, builds, and testing.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (>= 18.x)
- **npm** (>= 8.x)
- **Git**

---

### 🛠️ Setting Up the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Ershivnandan/react-electron-ts.git
   cd react-electron-ts
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   To run both React and Electron in parallel:

   ```bash
   npm run dev
   ```

   This script will:
   - Start the React development server with Vite.
   - Launch Electron in development mode.

---

## 📦 Building the Application

You can build the application for different platforms using the following commands:

### For macOS (ARM64)

```bash
npm run dist:mac
```

### For Windows (x64)

```bash
npm run dist:win
```

### For Linux (x64)

```bash
npm run dist:linux
```

The build files will be generated in the `dist-electron` folder.

---

## 🧪 Testing

### End-to-End Tests

```bash
npm run test:e2e
```

### Unit Tests

```bash
npm run test:unit
```

---

## 🤔 Additional Notes

- **Playwright** is used for end-to-end testing.
- **Vitest** is used for unit testing.
- **Tailwind CSS** is integrated for styling.
- The `electron-builder.json` file is configured to generate platform-specific executables.

### 🔧 Customization

Feel free to modify the configuration files to fit your project's requirements. For example:

- **`vite.config.ts`**: Adjust the Vite bundler settings.
- **`electron-builder.json`**: Customize the build options like app name, icons, and output paths.

---

### Youtube:  8BitCode!



