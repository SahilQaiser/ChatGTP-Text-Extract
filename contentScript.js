console.log("Inside the contentScript.js [outside]");

// (() => {
//     let currentChat = "";
//     let currentChatTitle = "";
//     console.log("Inside the contentScript.js");

//     chrome.runtime.onUpdate.addListener((obj, sender, response) => {
//         console.log("Recieved msg in ContentScript");
//         const { type, chatId, chatTitle } = obj;
        
//         if (type == "NEW") {
//             currentChat = chatId;
//             currentChatTitle = chatTitle;
//             newChatLoaded();
//         }
//         response("Recieved the message");
//     });

//     const newChatLoaded = () => {
//         const extractorBtnExists = document.getElementById("extractor-btn");
//         console.log("extractor-btn doesnt exists : " + extractorBtnExists);
//         if (!extractorBtnExists) {
//             const extractorBtn = document.createElement("img");
//             extractorBtn.src = chrome.runtime.getURL("extract.png");
//             extractorBtn.className = "gpt-button " + "extractor-btn";
//             extractorBtn.title = "Click to save current chat in a file";

//             chatControlsForm = document.getElementsByTagName("form")[0];
//             chatControlsFormDiv = chatControlsForm.getElementsByTagName("div");

            
//             chatControlsFormDiv.append(extractorBtn);
//             extractorBtn.addEventListener("click", extractNewChatEventHandler);
//         }
//     }

//     newChatLoaded();

//     const extractNewChatEventHandler = () => {
//         console.log("downloading the chat with ID : " + currentChat);
//     }

// })();