console.log("inside the background js");

// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//   console.log("TabID : " + tabId);
//   if (tab.url && tab.url.includes("chat.openai.com/chat")) {
//     const chatId = tab.url.split("/")[4];
//     console.log("Got the chatId : " + chatId);
//     chrome.tabs.sendMessage(tabId, {
//       type: "NEW",
//       chatId: chatId,
//       chatTitle: tab.title
//     });
//   }
// });

let chatTitle = "";
let chatId = "";

chrome.action.onClicked.addListener(tab => {
    chatId = tab.url.split("/")[4];
    chatTitle = tab.title;
    console.log("Got the chatId : " + chatId + " and chatTitle : " + chatTitle);
    console.log("tabId : " + tab.id);
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['contentScript.js']
    });
});