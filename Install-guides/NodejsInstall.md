# How to Install Node.js on Your Computer

## Step 1: Download Node.js
1. Open your web browser and navigate to the official Node.js website: [https://nodejs.org](https://nodejs.org).
2. You will see two download options: **LTS (Long-Term Support)** and **Current**. It is recommended to choose the **LTS** version for better stability, especially if you're just starting out.
3. Click on the appropriate button to download the installer based on your operating system (Windows, macOS, or Linux).

## Step 2: Run the Installer
1. Once the installer is downloaded, open it.
2. Follow the setup prompts:
   - On Windows, select the default installation options, agree to the terms and conditions, and specify the installation path if needed.
3. The installer will also include npm (Node Package Manager), an essential tool for managing JavaScript packages.

## Step 3: Verify Installation
1. After installation, open your terminal or command prompt:
   - **Windows**: Press `Win + R`, type `cmd`, and hit Enter.
   - **macOS/Linux**: Open the terminal from the Applications folder or press `Cmd + Space` and search for "Terminal."
2. Type the following command to verify the Node.js installation:
   ```sh
   node -v
   ```
   You should see a version number appear, confirming Node.js is installed.
3. Verify npm is installed by typing:
   ```sh
   npm -v
   ```
   Again, you should see a version number if everything went correctly.

## Step 4: Update Your PATH (Optional for Windows Users)
The Node.js installer should add Node and npm to your system PATH automatically. If, for some reason, the commands are not recognized, you may need to manually add the installation directory to your PATH environment variable.

## Step 5: Test Node.js
To make sure Node.js works properly, you can run a simple JavaScript file.

1. Create a new file named `test.js` with the following content:
   ```js
   console.log('Node.js is working!');
   ```
2. Run it in your terminal by typing:
   ```sh
   node test.js
   ```
   If you see `Node.js is working!` printed out, your installation is complete!

## Troubleshooting Tips
- Restart your computer if you have trouble with Node or npm not being recognized.
- Use **nvm (Node Version Manager)** if you want to easily manage different versions of Node.js, especially on macOS or Linux.

