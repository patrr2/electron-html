const { app, BrowserWindow } = require('electron')
var main = require('@electron/remote/main')

main.initialize()

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
      }
    })

    main.enable(win.webContents)
  
    win.loadFile('index.html')
  }

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})