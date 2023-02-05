(() => {
    let currentChatId = document.URL.split("/")[4];
    let currentChatTitle = document.title;

    const extractNewChatEventHandler = () => {
        console.log("ChatID : " + currentChatId + " and chatTitle : " + currentChatTitle);
        var mainDiv = document.getElementsByTagName("main")[0];
        var firstDiv = mainDiv.getElementsByTagName("div")[0];
        var svgElements = firstDiv.getElementsByTagName("svg");
        var btnElements = firstDiv.getElementsByTagName("button");
        while (svgElements.length > 0) {
            svgElements[0].parentNode.removeChild(svgElements[0]);
        }
        while (btnElements.length > 0) {
            btnElements[0].parentNode.removeChild(btnElements[0]);
        }

        var modifiedHtml = "<head><link href='https://chat.openai.com/_next/static/css/8af4b50a84f9959e.css' rel='stylesheet'/></head>" + 
        "<h2 class='text-4xl font-semibold text-center mt-2 ml-auto mr-auto mb-2 flex gap-2 items-center justify-center'>" + currentChatTitle +"</h2>" + firstDiv.innerHTML;
        var file = new Blob([modifiedHtml], { type: "text/html" });
        var link = document.createElement("a");
        link.download = currentChatId + ".html";
        link.href = URL.createObjectURL(file);
        link.click();
    }
    if (typeof currentChatId !== 'undefined') {
        extractNewChatEventHandler();       
    }
})();