REM For context, this script is set to run whenever I login to this laptop
REM See the 'Task Scheduler' on my laptop for my info
REM The task is called "Get new scrobble data" which automates the running of the python script to get my newest scrobble data

python C:\dev\nathansteele\src\components\music\python_stuff\regenerate_top_albums_data.py

call git add .
call git commit -m "[...Updating scrobble data...]"
call git push origin master
call npm run deploy
