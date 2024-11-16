# Getting Started with a Next.js Application

## Prerequisites

Before starting, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 14 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management

To check if Node.js and npm are installed, run:

```bash
node -v
npm -v
```

If they are not installed, download and install Node.js from the official website.

## Setting Up a Next.js Project

To create a new Next.js application, you can use the `create-next-app` command, which sets up a fully configured Next.js environment.

### Step 1: Create a New Project

Open your terminal and run the following command to create a new Next.js project:

```bash
npx create-next-app@latest my-next-app
```

Replace `my-next-app` with the name you want for your project.

If you prefer using `yarn`, use:

```bash
yarn create next-app my-next-app
```

### Step 2: Navigate to Your Project Directory

After creating the project, navigate to the project folder:

```bash
cd my-next-app
```

### Step 3: Start the Development Server

To start the development server, run:

```bash
npm run dev
```

Or with `yarn`:

```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

After setting up, your project folder will look something like this:

```
my-next-app/
  ├── pages/             # Contains pages of your application
  ├── public/            # Static files like images
  ├── styles/            # CSS files for styling
  ├── .gitignore         # Git ignore file
  ├── next.config.js     # Next.js configuration
  ├── package.json       # Project dependencies and scripts
  └── README.md          # Project README
```

## Adding a New Page

To add a new page to your application, create a new file in the `pages` directory. For example, create `pages/about.js` with the following content:

```jsx
export default function About() {
  return <h1>About Page</h1>;
}
```

Now, navigate to [http://localhost:3000/about](http://localhost:3000/about) to see the new page.

## Building for Production

To create an optimized production build, use the following command:

```bash
npm run build
```

Then, to start the production server:

```bash
npm start
```

Or with `yarn`:

```bash
yarn build
yarn start
```

## Helpful Resources

- [Next.js Documentation](https://nextjs.org/docs) - Official documentation for more advanced topics and API references.
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial for learning Next.js step by step.

## License

This project is licensed under the MIT License.
