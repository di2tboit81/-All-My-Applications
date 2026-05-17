const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow(){
    const win = new BrowserWindow({
        width: 1100,
        height: 750,
        autoHideMenuBar: true
    });

    // 🔥 FIX PATH (ANTI ERROR)
    win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);