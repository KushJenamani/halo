chrome.storage.sync.set({colorPalette: this.colorPalette, color: e}).then(async () => console.log(await chrome.storage.sync.get(["color", "colorPalette"])));
          

let activeColor = null;
let colorPalette = ['powderblue', 'khaki', 'lightpink', 'violet'];


function changeColor (newColor) {
  activeColor = newColor;
} 

function getColor () {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  return activeColor;
}