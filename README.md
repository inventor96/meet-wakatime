# ⚠️ DEPRECATED ⚠️
Funny enough, right around the same time that I decided to work on this, the official WakaTime plugin was updated to send heartbeats every minute during an active call! This was included in version [3.0.24](https://github.com/wakatime/browser-wakatime/releases/tag/3.0.24) on October 1st, 2024. So nobody needs this plugin anymore unless you've decided to stick to a version older than 3.0.24.

# WakaTime for Google Meet
A basic Chrome extension to log time in [WakaTime](https://wakatime.com) while you're in an active [Google Meet](https://meet.google.com) meeting.

Sometimes you don't interact with your Google Meet meeting, and so the official WakaTime extension doesn't report your activity. This extension looks for you being in an active meeting, and sends heartbeats to WakaTime every 30 seconds. The "active meeting" status is determined by the URL: if the URL includes a meeting ID (e.g. `meet.google.com/aaa-bbbb-ccc`), then it's considered an active meeting.

## Installing
I don't feel like putting forth the effort to create and maintain a very simple extension on the Chrome Web Store, so you'll have to install this yourself using the Developer options of the browser. Installation looks something like this:

1. Clone the repo
1. [Load the unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)

## Extension Options
You can edit the extension options just like any other extension: open up "Manage Extesions", open the "Details" for this extension, and then click the link to open "Extension Options". The options are pretty self-explanitory.~
