
const index = document.createElement('script');
index.setAttribute("type", "module");
index.setAttribute("src", chrome.runtime.getURL('highlighter.js'));

const head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
head.insertBefore(index, head.lastChild);

console.log(index);