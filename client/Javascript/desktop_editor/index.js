const { app, BrowserWindow } = require('electron')
const path = require('path')
function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    minHeight: 500,
    minWidth: 300,
    //frame: false,
    webPreferences: {nodeIntegration: true},
    titleBarStyle: "hidden"
  })
  win.loadURL('http://www.akrck02.com/#/lss/app/')
}

app.whenReady().then(() => {
  createWindow()
    

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


