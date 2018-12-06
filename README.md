# AlarmClock

<b>Setup: run 'npm install' from the project root directory</b>

To run the development server, run 'npm run start' from the project root directory. This will start a Webpack Dev Server instance. If your browser doesn't open automatically, browse to http://localhost:8080.

To build the project, run 'npm run build' from the project root directory. This will create a 'build' folder containing the bundled code. Once this is complete, open 'build/index.html' in a browser.

To use the clock, select a time from the dropdown menus and click 'Set Alarm'. An alert will let you know that an alarm has been set, and a message on the clock will
update to reflect that as well. You can only set one alarm at a time, and if you set a new alarm while you have one already set, the new one will override the previous
one. To reset/clear the alarm, click the 'Reset Alarm' button.
