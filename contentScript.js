// const html2pdf = require('html2pdf.bundle.min.js');
(() => {
    let currentChatId = document.URL.split("/")[4];
    // console.log("document.URL.includes(auth0.openai.com) : " + document.URL.includes("auth0.openai.com"));
    // console.log("document.URL.includes(auth/login) : " + document.URL.includes("auth/login"));
    const isLoginPage = (document.URL.includes("auth0.openai.com") || document.URL.includes("auth/login")) ? true : false;
    let currentChatTitle = document.title;

    // const generatePDF = (htmlElement) => {
    //     var opt = {
    //         margin: 1,
    //         filename: currentChatId + '.pdf',
    //         image: { type: 'jpeg', quality: 0.98 },
    //         html2canvas: { scale: 2 },
    //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    //     };
    //     html2pdf().set(opt).from(element).save();
    //     var link = document.createElement("a");
    //     link.download = currentChatId + ".pdf";
    //     link.href = URL.createObjectURL(file);
    //     link.click();
    // }

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
        modifiedHtml += "<script src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'</script>";
        // generatePDF(modifiedHtml);
        var file = new Blob([modifiedHtml], { type: "text/html" });
        var link = document.createElement("a");
        link.download = currentChatId + ".html";
        link.href = URL.createObjectURL(file);
        link.click();
    }
    if (typeof currentChatId !== 'undefined' && !isLoginPage) {
        extractNewChatEventHandler();       
    }
})();