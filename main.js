const {app,BrowserWindow} = require('electron');

app.on('ready',createWindow);

function createWindow(){
  const mainWindow = new BrowserWindow({
    height:600,
    width:1000
  });
  mainWindow.loadURL('file://'+__dirname+"/index.html")
}
