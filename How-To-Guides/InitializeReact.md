# Initialize React with Vite

## Getting Started
[Vite](https://vitejs.dev) is a modern build tool that provides fast and simple project initialization for React and other frameworks. Follow these steps to create a React application using Vite:

### Step 1: Scaffold a New Vite Application
1. Open your command line, navigate to the desired parent folder, and run the following command:
   ```bash
   npm create vite@latest
   ```
   > 🔑 **Note**: This command will automatically create a sub-folder for your React application, so you don't need to manually create one.

2. Enter the desired name for your new project folder when prompted.
3. From the first list of options, select your framework: **React**.
4. From the second list of options, select your variant: **JavaScript**.

### Step 2: Install Dependencies
5. Change into your newly created project folder and run the following command to install dependencies:
   ```bash
   npm install
   ```
   > In later activities, you can add additional npm packages to your Vite app such as `bootstrap`, `dotenv`, and `axios`.

### Step 3: Run the Development Server
6. To run your development server, execute the following command:
   ```bash
   npm run dev
   ```
   Navigate to the URL displayed in the command line to view your app.

## Further Customization (Recommended)

### Step 1: Update `package.json` Scripts
- Navigate to your `package.json` file and modify the `scripts` object to include additional commands:
  ```json
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
  ```
  > Note the addition of the `"start": "vite"` script.

### Step 2: Update Vite Configuration
- Navigate to the `vite.config.js` file and modify the export object to customize your development server settings:
  ```js
  export default defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      open: true
    }
  })
  ```
  > This configuration sets the development server to automatically open on port `3000`.

## Summary
This guide walks you through initializing a React application with Vite, configuring scripts for development, and customizing the Vite server settings. Following these steps will help you quickly get started and have an efficient setup for building React applications.
