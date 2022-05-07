const { ipcRenderer } = require('electron');

export function updateBranch(branch) {
    alert('boo');
    document.getElementById("branch-dropdown-text").innerHTML = branch;

    if (branch == "Main") {
        alert("is main");
        ipcRenderer.send('branch_update', 'main');
    }
    else if (branch == "Dev") {
        ipcRenderer.send('branch_update', 'dev');
    }
}