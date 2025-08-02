#!/usr/bin/env node

import path from "path";
import fs from "fs-extra";
import { execa } from "execa";
import chalk from "chalk";
import { fileURLToPath } from "url";
import { appJsxContent, serverCode, dbConfig } from "./Code/sample_code.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appName = process.argv[2];

if (!appName) {
  console.log(chalk.red("Please provide a project name"));
  console.log(chalk.gray("Usage: npx krito my-app"));
  process.exit(1);
}

const appPath = path.join(process.cwd(), appName);
const frontendPath = path.join(appPath, "frontend");
const backendPath = path.join(appPath, "backend");

const setupApp = async () => {
  try {
    console.log(
      chalk.cyan(`\nKicking off krito for: ${chalk.bold(appName)}\n`)
    );
    await fs.ensureDir(appPath);

    // Frontend - Vite + React + Tailwind
    console.log(chalk.green("Setting up Vite + React frontend..."));
    await execa(
      "npm",
      ["create", "vite@latest", "frontend", "--", "--template", "react"],
      {
        cwd: appPath,
        stdio: "inherit",
      }
    );

    console.log(chalk.blue("Installing frontend dependencies..."));
    await execa("npm", ["install"], { cwd: frontendPath, stdio: "inherit" });

    console.log(chalk.magenta("Installing Tailwind CSS..."));
    await execa("npm", ["install", "-D", "tailwindcss", "@tailwindcss/vite"], {
      cwd: frontendPath,
      stdio: "inherit",
    });

    // Update vite.config.js to include Tailwind plugin
    const viteConfigPath = path.join(frontendPath, "vite.config.js");
    let viteConfig = await fs.readFile(viteConfigPath, "utf8");

    // Add tailwindcss import and plugin
    if (!viteConfig.includes("@tailwindcss/vite")) {
      viteConfig = viteConfig.replace(
        "import { defineConfig } from 'vite'",
        "import { defineConfig } from 'vite'\nimport tailwindcss from '@tailwindcss/vite'"
      );

      // Add tailwindcss to plugins array
      if (viteConfig.includes("plugins: [")) {
        viteConfig = viteConfig.replace(
          "plugins: [",
          "plugins: [\n    tailwindcss(),"
        );
      } else {
        viteConfig = viteConfig.replace(
          "export default defineConfig({",
          "export default defineConfig({\n  plugins: [tailwindcss()],"
        );
      }

      await fs.writeFile(viteConfigPath, viteConfig);
    }

    // Create src/index.css with new Tailwind import
    const styleCSS = `@import "tailwindcss";`;
    // Modify existing index.css to include Tailwind import at the top
    const indexCssPath = path.join(frontendPath, "src", "index.css");
    const tailwindImports = `@import "tailwindcss";`;
    await fs.outputFile(indexCssPath, tailwindImports);

    // install react-router-dom
    console.log(chalk.magenta("Installing react-router-dom..."));
    await execa("npm", ["install", "react-router-dom"], {
      cwd: frontendPath,
      stdio: "inherit",
    });

    // Install Axios
    console.log(chalk.magenta("Installing Axios..."));
    await execa("npm", ["install", "axios"], {
      cwd: frontendPath,
      stdio: "inherit",
    });

    // Install Lucide-React
    console.log(chalk.magenta("Installing Lucide-React..."));
    await execa("npm", ["install", "lucide-react"], {
      cwd: frontendPath,
      stdio: "inherit",
    });

    // Create frontend .env file
    const frontendEnvContent = `VITE_API_URL=http://localhost:5000
VITE_APP_NAME=${appName}
`;
    await fs.writeFile(path.join(frontendPath, ".env"), frontendEnvContent);

    // Update App.jsx with enhanced krito content
    await fs.writeFile(
      path.join(frontendPath, "src", "App.jsx"),
      appJsxContent
    );

    // Backend - Express + Folders + .env
    console.log(chalk.green("\nSetting up Express backend..."));
    await fs.ensureDir(backendPath);

    // Create backend structure
    await fs.ensureDir(path.join(backendPath, "routes"));
    await fs.ensureDir(path.join(backendPath, "models"));
    await fs.ensureDir(path.join(backendPath, "controllers"));
    await fs.ensureDir(path.join(backendPath, "config"));

    // .env file
    const envContent = `PORT=5000
MONGO_URI=mongodb://localhost:27017/krito
`;
    await fs.writeFile(path.join(backendPath, ".env"), envContent);

    // dbConfig.js

    await fs.outputFile(
      path.join(backendPath, "config", "dbConfig.js"),
      dbConfig
    );

    // server.js

    await fs.outputFile(path.join(backendPath, "server.js"), serverCode);

    // Create package.json with ES6 modules
    const serverPackageJson = {
      name: `${appName}-backend`,
      version: "1.0.0",
      type: "module",
      main: "server.js",
      scripts: {
        start: "node server.js",
        dev: "nodemon server.js",
      },
      dependencies: {},
    };
    await fs.outputFile(
      path.join(backendPath, "package.json"),
      JSON.stringify(serverPackageJson, null, 2)
    );

    // backend dependencies
    console.log(chalk.blue("Installing backend dependencies: express, cors, mongoose, dotenv..."));
    await execa("npm", ["install", "express", "cors", "mongoose", "dotenv"], {
      cwd: backendPath,
      stdio: "inherit",
    });

    await execa("npm", ["install", "-D", "nodemon"], {
      cwd: backendPath,
      stdio: "inherit",
    });

    // Success Message
    console.log(chalk.greenBright("\nkrito fullstack setup complete!\n"));
    console.log(chalk.yellow(`cd ${appName}/frontend && npm run dev`));
    console.log(chalk.yellow(`cd ${appName}/backend && npm run dev`));
    console.log(chalk.magentaBright(`\nYou're ready to build! — krito\n`));
  } catch (err) {
    console.error(chalk.red("Setup failed:\n"), err);
    process.exit(1);
  }
};

setupApp();
