# SSH KeyGen Cheat Sheet

## Generate SSH Key

### Open Command Terminal (Gitbash)

* cd to your root(user) folder

### Generate Ed25519 SSH Key

* run command:
* ssh-keygen -t ed25519 -C "your_email@example.com"

### --OR--

### Generate RSA SSH Key

* run command:
* ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

### Choose file location

* press enter to select the current folder (root) for the SSH directory

### Choose passphrase

* enter a passphrase to use when syncing files to remote repositories


## Retrieve SSH Key & Link to GitHub

### Navigate to Github
 
* Navigate to Settings
* Navigate to SSH and GPG keys
* click add new SSH Key button

### Run Command to Copy SSH Key to Clipboard

* clip< ~/.ssh/id_ed25519.pub>

### Paste SSH Key into SSH Section of GitHub

* Key should look something like:
* ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJt... your_email@example.com

