# Vercel Deployment Guide

This guide will help you deploy an existing frontend project to Vercel. Vercel supports multiple frameworks, and the deployment process is straightforward. Follow the steps below to get your project up and running on Vercel.

## Table of Contents
- [Using CLI](#using-cli)
- [Steps for Vercel Deployment](#steps-for-vercel-deployment)
  - [1. Connect to Your Git Provider](#1-connect-to-your-git-provider)
  - [2. Import Your Repository](#2-import-your-repository)
  - [3. Configure Settings (Optional)](#3-configure-settings-optional)
  - [4. Deploy Your Project](#4-deploy-your-project)
  - [5. View Your Deployment](#5-view-your-deployment)

## Using CLI

To deploy an existing project using the Vercel CLI, use the following command:

```sh
vercel --cwd [path-to-project]
```

Your project can be any web application that outputs static HTML content (e.g., HTML, CSS, and JavaScript). If your project uses one of Vercel's supported frameworks, Vercel will automatically detect the optimal build and deployment configurations.

## Steps for Vercel Deployment

### 1. Connect to Your Git Provider

On the **New Project** page, under the **Import Git Repository** section, select the Git provider you want to import your project from. You can connect with **GitHub**, **GitLab**, or **Bitbucket** by following the prompts to sign in.

### 2. Import Your Repository

Find the repository you'd like to import from the list and click **Import**.

### 3. Configure Settings (Optional)

Vercel will automatically detect the framework and build settings. However, you can customize these settings as needed:

- **Build & Output Settings**: Update framework, build command, output directory, install command, or development command.
- **Environment Variables**: Expand the **Environment Variables** section to add or update variables.
- **Additional Properties**: Configure further by adding a `vercel.json` file to your project. You can add this file before deploying or later and redeploy the project.

### 4. Deploy Your Project

Press the **Deploy** button to create the Project and deploy it based on your chosen configurations.

### 5. View Your Deployment

Once deployed, select the Project in the dashboard and click the **Domain** to view the deployment. This page is now accessible to anyone with the URL.

Enjoy the confetti! 🎉

## Additional Resources

For more information on getting started with Vercel, refer to the official [Vercel documentation](https://vercel.com/docs/getting-started-with-vercel/import).

