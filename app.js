/* -------------------------- HOVER PICTURES ------------------- */

//ProfilePictureColor
$("#profilePictures").hover(function() {
    
    $("#profilePictureColor").fadeIn(0);
    $("#profilePicture").hide(0);
    
}, function() {
   
    $("#profilePicture").show(0);
    $("#profilePictureColor").fadeOut(0);
    
});

//resumePictureColor
$("#resumePictures").hover( function() {
    
    $("#resumePictureColor").fadeIn(0);
    $("#resumePicture").hide(0);
    
}, function() {
   
    $("#resumePictureColor").fadeOut(0);
    $("#resumePicture").show(0);
    
});

//portfolioPictureColor
$("#portfolioPictures").hover( function() {
    
    $("#portfolioPictureColor").fadeIn(0);
    $("#portfolioPicture").hide(0);
    
}, function() {
   
    $("#portfolioPictureColor").fadeOut(0);
    $("#portfolioPicture").show(0);
    
});

//contactPictureColor
$("#contactPictures").hover( function() {
    
    $("#contactPictureColor").fadeIn(0);
    $("#contactPicture").hide(0);
    
}, function() {
   
    $("#contactPictureColor").fadeOut(0);
    $("#contactPicture").show(0);
    
});

/* ----------------------------------------------------------- */

function slideLeft(pic, picColor, text, smalltext, icon) {
    $(pic).animate({left:"150%"}, 500);
    $(picColor).animate({left:"150%"}, 500);
    $(text).animate({left:"150%"}, 500);
    $(smalltext).animate({left:"150%"}, 500);
    $(icon).animate({left:"150%"}, 500);
  
}

function slideRight(pic, picColor, text, textV2) {
    $(pic).animate({left:"-150%"});
    $(picColor).animate({left:"-150%"});
    $(text).animate({left:"-150%"});
    $(textV2).animate({left:"-150%"});
}

$("#profilePictures").click(function() {
    
    //ProfileSlide
    slideLeft("#profilePicture", "#profilePictureColor", "#profileText", "#profileTextV2", "#profileIcon");
    
    //ResumeSlide 
    slideLeft("#resumePicture", "#resumePictureColor", "#resumeText", "#resumeTextV2", "#resumeIcon");
    
    //PortfolioSlide
    slideLeft("#portfolioPicture", "#portfolioPictureColor", "#portfolioText", "#portfolioTextV2", "#portfolioIcon");
    
    //ContactSlide
    slideLeft("#contactPicture", "#contactPictureColor", "#contactText", "#contactTextV2", "#contactIcon");
    
    //MainPictureSlide 
    slideRight("#mainPicture", "#mainPictureColor", "#mainText", "#mainTextV2");

    
});

$("#resumePictures").click(function() {
   
    //ProfileSlide
    slideLeft("#profilePicture", "#profilePictureColor", "#profileText", "#profileTextV2", "#profileIcon");
    
    //ResumeSlide 
    slideLeft("#resumePicture", "#resumePictureColor", "#resumeText", "#resumeTextV2", "#resumeIcon");
    
    //PortfolioSlide
    slideLeft("#portfolioPicture", "#portfolioPictureColor", "#portfolioText", "#portfolioTextV2", "#portfolioIcon");
    
    //ContactSlide
    slideLeft("#contactPicture", "#contactPictureColor", "#contactText", "#contactTextV2", "#contactIcon");
    
    
    //MainPictureSlide 
    slideRight("#mainPicture", "#mainPictureColor", "#mainText", "#mainTextV2");
});

$("#portfolioPictures").click(function() {
    
    //ProfileSlide
    slideLeft("#profilePicture", "#profilePictureColor", "#profileText", "#profileTextV2", "#profileIcon");
    
    //ResumeSlide 
    slideLeft("#resumePicture", "#resumePictureColor", "#resumeText", "#resumeTextV2", "#resumeIcon");
    
    //PortfolioSlide
    slideLeft("#portfolioPicture", "#portfolioPictureColor", "#portfolioText", "#portfolioTextV2", "#portfolioIcon");
    
    //ContactSlide
    slideLeft("#contactPicture", "#contactPictureColor", "#contactText", "#contactTextV2", "#contactIcon");    
    
    //MainPictureSlide 
    slideRight("#mainPicture", "#mainPictureColor", "#mainText", "#mainTextV2");
    
})

$("#contactPictures").click(function() {
    
    //ProfileSlide
    slideLeft("#profilePicture", "#profilePictureColor", "#profileText", "#profileTextV2", "#profileIcon");
    
    //ResumeSlide 
    slideLeft("#resumePicture", "#resumePictureColor", "#resumeText", "#resumeTextV2", "#resumeIcon");
    
    //PortfolioSlide
    slideLeft("#portfolioPicture", "#portfolioPictureColor", "#portfolioText", "#portfolioTextV2", "#portfolioIcon");
    
    //ContactSlide
    slideLeft("#contactPicture", "#contactPictureColor", "#contactText", "#contactTextV2", "#contactIcon");    
    
    //MainPictureSlide 
    slideRight("#mainPicture", "#mainPictureColor", "#mainText", "#mainTextV2");
    
    
})




