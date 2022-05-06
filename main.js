const electron = require('electron');
const url = require('url');
const path = require('path');
const https = require('https');
const fs = require('fs');
const { contextIsolated } = require('process');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;





// PACKAGE COMMAND
//electron-packager . sauce --overwrite --asar=true --platform=win32 --arch=ia32 --icon=icons/icons8_Apple_Jam_48px.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Apple Sauce"





const file = fs.createWriteStream("gitindex.html");
const request = https.get("https://raw.githubusercontent.com/eddiefiv/apple-sauce/main/index.html", function(response) {
   response.pipe(file);

   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});

// Listen for app to be ready
app.on('ready', function() {
    // Create new window
    mainWindow = new BrowserWindow({
        resizable: true,
        autoHideMenuBar: true,
        //titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true
        }
    });

    mainWindow.maximize();
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'gitindex.html'),
        protocol: 'file',
        slashes: true
    }));

//    mainWindow.loadURL('https://rawcdn.githack.com/eddiefiv/apple-sauce/main/index.html');

    // Quit app when closed
    mainWindow.on('closed', function() {
        app.quit();
    })

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    // Insert menu
    Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [
    {
        label: 'File'
    }
];

// Add developer tools to environment if not in prod mode
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu:[
            {
                label: 'Toggle DevTools',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                },
            },
            {
                role: 'reload'
            }
        ]
    });
}