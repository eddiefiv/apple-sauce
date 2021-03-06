const electron = require('electron');
const url = require('url');
const path = require('path');
const { contextIsolated } = require('process');
import { setupTitlebar, attachTitlebarToWindow } from "custom-electron-titlebar/main";

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Setup titlebar process
setupTitlebar();





// PACKAGE COMMAND
//electron-packager . sauce --overwrite --asar=true --platform=win32 --arch=ia32 --icon=icons/icons8_Apple_Jam_48px.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Apple Sauce"






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

    attachTitlebarToWindow(mainWindow)

    mainWindow.maximize();
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
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