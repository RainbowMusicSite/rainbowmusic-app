const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 1080,
    height: 1080,
    resizable: false,
  });
  win.loadFile("index.html");
}