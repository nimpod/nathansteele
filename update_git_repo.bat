REM Automate updating of my git repo, and deploy new version of website.

set commit_message=%1

call git add .
call git commit -m %1
call git push origin master
call npm run deploy
