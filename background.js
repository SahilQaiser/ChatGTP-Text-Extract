
let chatTitle = "";
let chatId = "";

chrome.action.onClicked.addListener(tab => {
    chatId = tab.url.split("/")[4];
    chatTitle = tab.title;
    console.log("Got the chatId : " + chatId + " and chatTitle : " + chatTitle);
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['contentScript.js'] 
    });
});