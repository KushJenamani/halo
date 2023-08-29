/*
    This module handles the highlighting feature and exports details of the highlights.
*/

//  Disable highlighting when mouseover Extension

let active = false;

let currentURL;

async function highlightFunc(color, range = null) {
    const selection = window.getSelection();
    range = range ? range : selection.getRangeAt(0);

    console.log(range);

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
    const upData = await chrome.storage.local.get(downData);
    console.log(upData);

    const newKey = '' + range.startContainer + range.startOffset + range.endContainer + range.endOffset;
    const newEntry = [range, color];
    upData[currentURL].highlights[newKey] = newEntry;

    console.log(newEntry);
    chrome.storage.local.set(upData);

}

async function buildHighlights(url) {
    const downData = {};
    downData[currentURL] = {
        highlights: {}
    };
    console.log(downData);
    const upData = await chrome.storage.local.get(downData);
    console.log(upData);

    const highlights = Object.entries(upData[url].highlights);
    for (const [range, color] of highlights) {
        console.log(range, color);
        highlightFunc(color, range);
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
    currColor = await chrome.storage.local.get(["color"]);
    if (typeof currColor === undefined) {
        chrome.storage.local.set({
            colorPalette: ['purple', 'lightpink', 'khaki', 'powderblue', 'lime'],
            color: 'khaki'
        }).then(async () => {
            currColor = await chrome.storage.local.get(["color"]);
        });
        
    }
    console.log(currColor.color);

    highlightFunc(currColor.color);
});



})();
