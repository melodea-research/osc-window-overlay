const { app, BrowserWindow, screen } = require('electron');
const osc = require('node-osc');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: `${__dirname}/preload.js`
    },
  });

  mainWindow.loadFile('index.html');
  mainWindow.setIgnoreMouseEvents(true);

  mainWindow.on('ready-to-show', () => {
    const windowBounds = mainWindow.getBounds();
    const display = screen.getDisplayNearestPoint({
      x: windowBounds.x,
      y: windowBounds.y,
    });

    console.log(`Window is on display:`, display);

    const { width: workWidth, height: workHeight } = display.workArea;
    mainWindow.setPosition(0, 0);
    mainWindow.setSize(workWidth, workHeight);
  });

  const oscServer = new osc.Server(3333, '0.0.0.0');
  oscServer.on('message', (msg) => {
    if (msg[0] === '/overlay_brightness') {
      const alpha = Math.max(0, Math.min(1, msg[1]));
      mainWindow.webContents.send('update-alpha', alpha);
    }
  });
});
