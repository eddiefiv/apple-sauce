const electron = require('electron');
const { ipcMain } = require('electron');
const url = require('url');
const path = require('path');
const https = require('https');
const fs = require('fs');
const { exec } = require("child_process");

const {app, BrowserWindow, Menu} = electron;

let mainWindow;
var isWindowReady = false;




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
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.maximize();

    isWindowReady = true;
    
    /*exec('py functions.py', (err, stdout, stderr) => {
        if (err) {
            throw err;
        }
    });*/
});

// Quit app when closed
try {
    mainWindow.on('close', function() {
        app.quit();
    });
} catch (e) {
    // Do nothing with error
}

// Catch branch updates
ipcMain.on('branch_update_main', (event, arg) => {
    console.log("branch updated to: " + arg);
});
ipcMain.on('branch_update_dev', () => {
    console.log("branch updated to: " + arg);
});


//    mainWindow.loadURL('https://rawcdn.githack.com/eddiefiv/apple-sauce/main/index.html');

/*function downloadFiles(branch) {
    if (branch == "main") {
        const html_file = fs.createWriteStream("gitindex.html");
        const html_request = https.get("https://raw.githubusercontent.com/eddiefiv/apple-sauce/main/index.html", function(response) {
            response.pipe(html_file);

            // after download completed close filestream
            html_file.on("finish", () => {
                html_file.close();
                console.log("HTML Download Completed");
                const css_file = fs.createWriteStream("gitstyles.css");
                const css_request = https.get("https://raw.githubusercontent.com/eddiefiv/apple-sauce/main/styles.css", function(response2) {
                    response2.pipe(css_file);

                    // after download completed close filestream
                    css_file.on("finish", () => {
                        css_file.close();
                        console.log("HTML Download Completed");
                        const js_file = fs.createWriteStream("gitindex.js");
                        const js_request = https.get("https://raw.githubusercontent.com/eddiefiv/apple-sauce/main/script.js", function(response3) {
                            response3.pipe(js_file);

                            // after download completed close filestream
                            js_file.on("finish", () => {
                                js_file.close();
                                console.log("HTML Download Completed");
                                doEverythingElse();
                            });
                        });
                    });
                });
            });
        });
    }
    else if (branch == "dev") {
        const html_file = fs.createWriteStream("gitindex.html");
        const html_request = https.get("https://raw.githubusercontent.com/eddiefiv/apple-sauce/dev/index.html", function(response) {
            response.pipe(html_file);

            // after download completed close filestream
            html_file.on("finish", () => {
                html_file.close();
                console.log("HTML Download Completed");
                const css_file = fs.createWriteStream("gitstyles.css");
                const css_request = https.get("https://raw.githubusercontent.com/eddiefiv/apple-sauce/dev/styles.css", function(response2) {
                    response2.pipe(css_file);

                    // after download completed close filestream
                    css_file.on("finish", () => {
                        css_file.close();
                        console.log("HTML Download Completed");
                        const js_file = fs.createWriteStream("gitindex.js");
                        const js_request = https.get("https://raw.githubusercontent.com/eddiefiv/apple-sauce/dev/script.js", function(response3) {
                            response3.pipe(js_file);

                            // after download completed close filestream
                            js_file.on("finish", () => {
                                js_file.close();
                                console.log("HTML Download Completed");
                                doEverythingElse();
                            });
                        });
                    });
                });
            });
        });
    }
}

downloadFiles("dev");*/