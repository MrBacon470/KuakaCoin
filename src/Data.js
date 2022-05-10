const D = x => new Decimal(x)
//create all the variables in a data object for saving
function getDefaultObject() {
    return {
        money: D(1e6),
        coins: D(0),
        previousPrice: D(0),
        currentPrice: D(0),
        buyAmount: 0,
    }
}
let data = getDefaultObject()
//saving and loading
function save(){
    window.localStorage.setItem('kuakaCoin', JSON.stringify(data))
}
function load() {
    let savedata = JSON.parse(window.localStorage.getItem('kuakaCoin'))
    if (savedata !== undefined) fixSave(data, savedata)
}
//fix saves
function fixSave(main=getDefaultObject(), data) {
    if (typeof data === "object") {
        Object.keys(data).forEach(i => {
            if (main[i] instanceof Decimal) {
                main[i] = D(data[i]!==null?data[i]:main[i])
            } else if (typeof main[i]  == "object") {
                fixSave(main[i], data[i])
            } else {
                main[i] = data[i]
            }
        })
        return main
    }
    else return getDefaultObject()
}
function exportSave(){
    save()
    let exportedData = btoa(JSON.stringify(data));
    const exportedDataText = document.createElement("textarea");
    exportedDataText.value = exportedData;
    document.body.appendChild(exportedDataText);
    exportedDataText.select();
    exportedDataText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(exportedDataText);
}
function importSave(){
    let importedData = prompt("Paste your save data here!")
    data = Object.assign(getDefaultObject(), JSON.parse(atob(importedData)))
    save()
    location.reload()
}
window.setInterval(function(){
    save()
}, 10000);
window.onload = function (){
    load()
}
//full reset
function fullReset(){
    exportSave()
    window.localStorage.removeItem('kuakaCoin')
    prevAmount = D(0)
    location.reload()
}
function deleteSave(){
        window.localStorage.removeItem('kuakaCoin')
        location.reload()
}

function noConfirmDelete(){
    window.localStorage.removeItem('kuakaCoin')
    location.reload()
}

