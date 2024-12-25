import {app, BrowserWindow} from "electron";
// we will use "path" because Mac device need forword slashes (/) but window need backword slash (\) to read path 
import path from "path"
import { isDev } from "./util.js";

type test = string;

app.on("ready", ()=>{
    const mainWindow = new BrowserWindow({});
    mainWindow.webContents.openDevTools();

    if(isDev()){
        mainWindow.loadURL("http://localhost:5170/");
    }
    else{
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))

    }

})