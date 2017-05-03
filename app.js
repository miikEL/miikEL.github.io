function slideLeft(pic, picColor, text, smalltext, icon) {
    $(pic).animate({left:"100%"}, 500);
    $(picColor).animate({left:"100%"}, 500);
    $(text).animate({left:"100%"}, 500);
    $(smalltext).animate({left:"100%"}, 500);
    $(icon).animate({left:"100%"}, 500);
  
}

function slideRight(pic, picColor, text, textV2) {
    $(pic).animate({right:"100%"});
    $(picColor).animate({right:"100%"});
    $(text).animate({left:"-100%"});
    $(textV2).animate({left:"-100%"});
}


//ProfilePicture
$("#profilePictures").hover(function() {
    
    $("#profilePictureColor").fadeIn(300);
}, function() {
    
    $("#profilePictureColor").fadeOut(300);
});

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

//ResumePicture
$("#resumePictures").hover(function() {
    
    $("#resumePictureColor").fadeIn(300);
}, function() {
    
    $("#resumePictureColor").fadeOut(300);
});

//PortfolioPicture
$("#portfolioPictures").hover(function() {
    
    $("#portfolioPictureColor").fadeIn(300);
}, function() {
    
    $("#portfolioPictureColor").fadeOut(300);
});

//ContactPicture
$("#contactPictures").hover(function() {
    
    $("#contactPictureColor").fadeIn(300);
}, function() {
    
    $("#contactPictureColor").fadeOut(300);
});


