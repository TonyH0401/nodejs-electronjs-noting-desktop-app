const { contextBridge, ipcRenderer } = require('electron');
// const { electron } = require('process');

contextBridge.exposeInMainWorld('api', {
    title: "Hello, please take a note!",
    electron: process.versions.electron,
    createNote: (data) => ipcRenderer.invoke('create-file', data)
})