REM For context, this script is set to run whenever I login to this laptop
REM See the 'Task Scheduler' on my laptop for my info
REM The task is called "Get new scrobble data" which automates the running of the python script to get my newest scrobble data

cd C:\dev\nathansteele\src\components\music\python_stuff\

python C:\dev\nathansteele\src\components\music\python_stuff\regenerate_scrobbles_data.py

REM call git add .
REM call git commit -m "[...Updating scrobbles data...]"
REM call git push origin master
REM call npm run deploy
