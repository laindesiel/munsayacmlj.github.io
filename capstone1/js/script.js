$(document).ready(function (){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      4000);    
});


 window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && (screen.width > 1023))  {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
//        document.body.scrollTop = 0;
//        document.documentElement.scrollTop = 0;
        $("html, body").animate({ scrollTop: 0 }, 'slow');
        return false;
    }