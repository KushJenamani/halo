/*
    This module handles the highlighting feature and exports details of the highlights.
*/

//  Disable highlighting when mouseover Extension

let active = false;

document.addEventListener("keydown", (evt) =>
{
    if (evt.code === "KeyZ") {
        active = !active;
        console.log(`Toggled: ` + active);
    }
    else {
        console.log(evt.code);
    }
});



// Highlight the Selected text
let currColor = "#ccc";
document.addEventListener("mouseup", async () =>
{
    if (!active) {return;}
    currColor = await chrome.storage.sync.get(["color"]);

    console.log(currColor.color);

    const selection = window.getSelection();
    const range = new Range();

    range.setStart(selection.anchorNode, selection.anchorOffset);
    range.setEnd(selection.focusNode, selection.focusOffset);

    const highlight = document.createElement('span');
    highlight.style.backgroundColor = currColor.color;
    highlight.addEventListener("ondblclick", () => highlight.parentNode.removeChild(highlight));

    range.surroundContents(highlight);
});
