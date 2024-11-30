const { ipcRenderer } = require('electron');

ipcRenderer.on('update-alpha', (event, alpha) => {
    document.body.style.backgroundColor = `rgba(0, 0, 0, ${alpha.toFixed(2)})`;
});