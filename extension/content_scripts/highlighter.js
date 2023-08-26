/*
    This module handles the highlighting feature and exports details of the highlights.
*/

let active = false;

document.addEventListener("keydown", (evt) =>
{
    if (evt.code === "KeyZ") {
        active = !active;
        console.log(`Toggled: {active}`);
    }
    else {
        console.log(`{evt.code}`);
    }
});



// Highlight the Selected text
let color = "#888";
document.addEventListener("mouseup", () =>
{
    if (!active) {return;}
});
