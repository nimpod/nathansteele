REM For context, this script is set to run whenever I login to this laptop
REM See the 'Task Scheduler' on my laptop for my info
REM The task is called "Get new scrobble data" which automates the running of the python script to get my newest scrobble data

echo %cd%
cd C:\dev\nathansteele\src\components\music\python_stuff\
echo %cd%

python regenerate_scrobbles_data.py

cd C:\dev\nathansteele

git add .
git commit -m "[...Updating scrobbles data...]"
git push origin master
npm run deploy
