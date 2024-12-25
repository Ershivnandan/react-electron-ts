import {app, BrowserWindow, ipcMain} from "electron";
import { isDev } from "./util.js";
import { getStaticData, pollResources } from "./resourceManager.js";
import { getPreloadPath, getUIPath } from "./pathresolver.js";

app.on("ready", ()=>{
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath(),
        }
    });
    mainWindow.webContents.openDevTools();

    if(isDev()){
        mainWindow.loadURL("http://localhost:5170/");
    }
    else{
    mainWindow.loadFile(getUIPath())

    }

    pollResources(mainWindow);

    ipcMain.handle("getStaticData", ()=>{
        return getStaticData();
    })

})