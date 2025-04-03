# GitBash Cheat Sheet

## Common File Navigation Commands

### Change Directory

* cd {Directory name}
* moves to the named directory
* Can use the "tab" key to auto complete the directory name

### Make Directory

* mkdir {Directory name}
* makes a new directory with the named directory

### List Files/Folders

* ls
* lists all folders and files inside a directory

### Create File

* touch {file_name.{ext type}}
* creates a new file with the file name and extension type specified

### Move or Renamd Directory

* mv [option(s)] argument(s)
* mv is used to move or rename directories. Without this command, you would have to individually rename each file which is tedious. mv allows you to do batch file renaming which can save you loads of time.

### Remove Directory

* rmdir [option(s)] directory_names
* rmdir will remove empty directories. This can help clean up space on your computer and keep files and folders organized. It It’s important to note that there are two ways to remove directories: rm and rmdir. The distinction between the two is that rmdir will only delete empty
directories, whereas rm will remove directories and files regardless if they contain data or not.

## Common "git" Commands

### CHeck Repot Status

* git status
* display the status of the local repo compared to the remote repo on GitHub or Bitbucket

### Add All Files to Staging

* git add -A
* Stages any files on local repo to be added to the remote repo - A tells git to search from the current thru all it's sub-folders for changes

### Add Current Folder Files to Staging

* git add .
* Stages any files on local repo to be added to the remote repo . tells git to search just the current folder only for changes

### Add Specific File to Staging

* git add {file_name}
* Stages only the file given on local repo to be added to the remote repo

### Commit Changes to Repository

* git commit -m '{commit message}'
* Tells git I am done adding files to be uploaded to remote repo - m' message' is stored in the repo; should describe the changes made
* Alternate formats: m ' message' / m" message" / m " message"

### Push Local Branch to Repository (Defualt Repository)

* git push origin main
    * git push: tells get to copy the local files to the remote repo
    * origin: is the name or nickname assigned to the remote for your git (origin is the default for github)
    * main: the branch that should recieve the file changes in the remote repository

### Create a New Branch

* git checkout -b {branch-name}
* branch name is usually describes what the branch is accomplishing, like a bug fix or a feature add

## Switch Branches

* git checkout {branch-name}
* usually used to switch from "-b" branch to the main branch to sync code with the main local branch "git checkout main"

### List All Remote Repositories

* git remote -v
* lists all remote repositories associated with a local repo and their  nicknames
* example of this is when there is a heroku deployment, you would use "git push heroku main" to push local code to heroku for production deployment