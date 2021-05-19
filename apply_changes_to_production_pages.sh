#!/bin/sh

# This script applies, commits and pushes the changes made on the pages
# targetting demo app of RDV-Solidarités to the pages targetting the prod app
# ---------------------------------------------------------------

# Make sure we fail and exit if an error is encountered
set -e

# Prints text with colour based on the message's importance level
print_text () {
  if [ "$2" == "info" ]
  then
      COLOR="96m"
  elif [ "$2" == "success" ]
  then
      COLOR="92m"
  elif [ "$2" == "warning" ]
  then
      COLOR="93m"
  elif [ "$2" == "danger" ]
  then
      COLOR="91m"
  else
      COLOR="0m"
  fi

  STARTCOLOR="\e[$COLOR"
  ENDCOLOR="\e[0m"

  printf "$STARTCOLOR%b$ENDCOLOR$ENDCHARACTER" "$1";
}

# Exits the script after printing a warning message
exit_with_message () {
  print_text "$1\n" "warning"
  exit 1
}

print_text "\nPush changes\n" "info"
print_text "------------------------\n\n"

# Gets the current branch by looking for `*` character
# - `s/` is for substitution
# - `/p` prints the result
current_branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

# Make sure that we are on main branch
print_text "Branch check: "
if [ $current_branch != "main" ]
then
    print_text "Failed\n" "danger"
    exit_with_message "To be able to deploy you need to be on the 'main' branch. Aborting."
else
    print_text "OK\n" "success"
fi

print_text "\n"

# Get the git status
# - `porcelain` flag returns the output in an easy to parse format for scripts
st=$(git status --porcelain 2> /dev/null)

# Make sure that the status is clean
print_text "Git status check: "
if [[ "$st" != "" ]];
then
    print_text "Failed\n" "danger"
    exit_with_message "To be able to deploy, 'git status' should be clean. Aborting."
else
    print_text "OK\n" "success"
fi

print_text "\n"

git pull -r origin main
print_text "Pulling latest 'main' changes: "
print_text "OK\n" "success"

print_text "\n"

print_text "Copying the file: "

cp pages/experimentations/ardennes-demo/index.js pages/experimentations/ardennes/index.js

print_text "Copying the file: "
print_text "OK\n" "success"

git add pages/experimentations/ardennes/index.js
git commit -m "chore(experimentations): Apply changes to production pages"
git push origin main

print_text "Pushing to 'master': "
print_text "OK\n" "success"

print_text "\n"


