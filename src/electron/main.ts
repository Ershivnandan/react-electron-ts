import {app, BrowserWindow, ipcMain} from "electron";
// we will use "path" because Mac device need forword slashes (/) but window need backword slash (\) to read path 
import path from "path"
import { isDev } from "./util.js";
import { getStaticData, pollResources } from "./resourceManager.js";
import { getPreloadPath } from "./pathresolver.js";

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
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))

    }

    pollResources(mainWindow);

    ipcMain.handle("getStaticData", ()=>{
        return getStaticData();
    })

})