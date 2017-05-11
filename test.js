var bigTextSize;
var smallTextSize;
var iconWH;
var mainText;
var windowWidth;


function bigTextResize(firstText, secondText, thirdText, fourthText) {
/*    document.getElementById("profileText").style.fontSize = bigTextSize;
    console.log(bigTextSize);*/
    $(profileText).css("fontSize", bigTextSize );
    $(resumeText).css("fontSize", bigTextSize);
    $(portfolioText).css("fontSize", bigTextSize);
    $(contactText).css("fontSize", bigTextSize);
    console.log("The bigTextSize is : " + bigTextSize);
    
}

function smallTextResize(firstText, secondText, thirdText, fourthText) {
    
    $(firstText).css("fontSize", smallTextSize);
    $(secondText).css("fontSize", smallTextSize);
    $(thirdText).css("fontSize", smallTextSize);
    $(fourthText).css("fontSize", smallTextSize);
    
}

function iconResize(firstImage, secondImage, thirdImage, fourthImage) {
    
    $(firstImage).css("width", iconWH);
    $(firstImage).css("height", iconWH);
    
    $(secondImage).css("width", iconWH);
    $(secondImage).css("height", iconWH);
    
    $(thirdImage).css("width", iconWH);
    $(thirdImage).css("height", iconWH);
    
    $(fourthImage).css("width", iconWH);
    $(fourthImage).css("height", iconWH);
    
}

function introText(intro, job) {
    
    $(intro).css("fontSize", mainText);
    $(job).css("fontSize", jobText);
}

function resizeObjects() {
    
    windowWidth = window.innerWidth;
    console.log("windowwidth : " + windowWidth);
    
    if (windowWidth < 1200 && windowWidth > 500) {
        
        bigTextSize = (window.innerWidth / 30) + "px";
        smallTextSize = (window.innerWidth / 50) + "px";
        iconWH = (window.innerWidth / 18) + "px";
        console.log("IconWidth is : " + iconWH);
        mainText = (window.innerWidth / 20) + "px";
        jobText = (window.innerWidth / 30) + "px";

    }
    else if (windowWidth < 500) {
        
        bigTextSize = (window.innerWidth / 20) + "px";
        smallTextSize = (window.innerWidth / 33) + "px";
        iconWH = (window.innerWidth / 8) + "px";
        console.log("IconWidth is : " + iconWH);
        mainText = (window.innerWidth / 10) + "px";
        jobText = (window.innerWidth / 20) + "px";
        
    }
    else {
        
        bigTextSize = (window.innerWidth / 50) + "px";
        smallTextSize = (window.innerWidth / 85) + "px";
        iconWH = (window.innerWidth / 18) + "px";
        console.log("IconWidth is : " + iconWH);
        mainText = (window.innerWidth / 40) + "px";
        jobText = (window.innerWidth / 50) + "px";
        
    }
    
    bigTextResize("#profileText", "#resumeText", "#portfolioText", "#contactText");
    smallTextResize("#profileTextV2", "#resumeTextV2", "#portfolioTextV2", "#contactTextV2");
    iconResize("#profileIcon" , "#resumeIcon", "#portfolioIcon", "#contactIcon");
    introText("#mainText", "#webdev");
};

$(document).ready(resizeObjects());

// varför behöver jag inte onvoka "resizeObjects?"
window.onresize = resizeObjects;

