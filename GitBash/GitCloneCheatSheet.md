# Git Clone Cheat Sheet

## Clone From a Remote Repository

### Create New Repo

* Add a license/Readme if needed

### Copy Repo URL

* Choose HTTP or SSH and copy the Repo URL from the drop down under the green "code" button

### Clone Repo to desired root directory

* Navigate in GitBash to Root directory where the local repo will reside
* use command "git clone {paste url copied from git hub}"
* wait for file to be transfered

## Clone Report from a Local Repository

### Create Local Repository

* This method is usually for projects where starter files are initialized like Angular, React/Next.js and C#/.Net API Servers

### Create Remote repository

* Do not create Readme or add a license
* copy the HTTP or SSH url from the drop down under the green "code" button

### Link Local Repo to Remote Repo

* navigate in git bash to the project folder
* use the command "git init" to initialize the local repository
* use the command "git add -A" to add files to staging
* use the command "git commit -m '{comment}'" to add commit to repository
* use the command "git remote add origin {url copied from remote repot}"
    * This will link the local repot to the remot repot
* use the command "git branch -M main"
    * This will change the local branch from "master" to "main" if it didnt already default to that
* Use the command "git push -u origin main"
* Wait for files to sync