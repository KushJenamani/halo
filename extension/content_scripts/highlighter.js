/*
    This module handles the highlighting feature and exports details of the highlights.
*/

//  Disable highlighting when mouseover Extension

let active = false;

let currentURL;

async function highlightFunc(color) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    const highlight = document.createElement('span');
    highlight.style.backgroundColor = color;

    highlight.appendChild(range.extractContents());
    range.insertNode(highlight);
    highlight.addEventListener("ondblclick", () => highlight.parentNode.removeChild(highlight));

    selection.removeAllRanges();

    storeHighlight(range, color);

}

async function storeHighlight (range, color) {
    // Store it
    
    const downData = {};
    downData[currentURL] = {
        highlights: {}
    };
    console.log(downData);
    const upData = await chrome.storage.sync.get(downData);
    console.log(upData);

    const newKey = '' + range.startContainer + range.startOffset + range.endContainer + range.endOffset;
    upData[currentURL].highlights[newKey] = [range, color];
    chrome.storage.sync.set(upData);

}

async function buildHighlights(url) {
    const downData = {};
    downData[currentURL] = {
        highlights: {}
    };
    console.log(downData);
    const upData = await chrome.storage.sync.get(downData);
    console.log(upData);

    for (const highlight of upData[url].highlights) {
        highlightFunc(highlight[0], highlight[1]);
    }
}

(async () => {

const response = await chrome.runtime.sendMessage({greeting: "url"});
console.log(response);
currentURL = response.url;
console.log(currentURL);
  


document.addEventListener("keydown", (evt) =>
{
    console.log(evt);
    if (evt.code === "KeyZ" && !evt.ctrlKey && !evt.shiftKey && !evt.altKey && !evt.metaKey) {
        active = !active;
        console.log(`Toggled: ` + active);
    }
});



// Highlight the Selected text
let currColor = "#ccc";
document.addEventListener("mouseup", async () =>
{
    if (!active) {return;}
    currColor = await chrome.storage.sync.get(["color"]);

    console.log(currColor.color);

    highlightFunc(currColor.color);
});



})();
