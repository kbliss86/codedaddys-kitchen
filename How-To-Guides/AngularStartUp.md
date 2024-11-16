## Introduction
This guide provides step-by-step instructions on how to create, configure, and start an Angular application. It also includes basic Git commands to set up version control for your project.

## Prerequisites
Before starting, make sure you have the following tools installed:
- [Node.js](https://nodejs.org/en/download/)
- [Angular CLI](https://angular.io/cli): Install via `npm install -g @angular/cli`
- [Git](https://git-scm.com/)

## Creating an Angular Application

1. **Create a New Angular Project**
   ```bash
   ng new my-angular-app
   ```
   - You will be prompted to choose whether to add Angular routing. Enter `y` or `n`.
   - You can also select the stylesheet format (CSS, SCSS, SASS, etc.) during setup.

2. **Navigate to the Project Directory**
   ```bash
   cd my-angular-app
   ```

## Starting the Application

1. **Run the Angular Development Server**
   ```bash
   ng serve
   ```
   - The application will be accessible at `http://localhost:4200/` by default.
   - You can specify a different port with the `--port` flag if needed, e.g., `ng serve --port 4300`.

## Git Configuration

1. **Initialize a Git Repository**
   ```bash
   git init
   ```

2. **Add a .gitignore File**
   Angular automatically creates a `.gitignore` file for you. This file ensures that unnecessary files, like `node_modules`, aren't tracked in version control.

3. **Stage and Commit Your Changes**
   ```bash
   git add .
   git commit -m "Initial commit"
   ```

4. **Create a Remote Repository**
   Go to [GitHub](https://github.com/) (or any other Git hosting provider) and create a new repository. Copy the remote repository URL.

5. **Add the Remote URL and Push**
   ```bash
   git remote add origin <REMOTE_URL>
   git branch -M main
   git push -u origin main
   ```

## Additional Configuration

1. **Install Dependencies**
   - If you need additional packages, you can use `npm install <package-name>`.
   - Example: To add Angular Material, run:
     ```bash
     ng add @angular/material
     ```

2. **Environment Configuration**
   - Angular provides environment-specific configuration files (e.g., `environment.ts`, `environment.prod.ts`).
   - These files can be found under the `/src/environments` directory. Update these files to store environment variables like API URLs.

3. **Build the Application**
   - To build the application for production, run:
     ```bash
     ng build --prod
     ```
   - The build artifacts will be stored in the `dist/` directory.

## Conclusion
You now have a basic Angular application set up, along with version control via Git. You can continue to develop the application, commit changes, and push them to your remote repository.

If you need more details, check out the [Angular documentation](https://angular.io/docs) or the [Git documentation](https://git-scm.com/doc).
