
$(document).ready(function(){
  $('.your-slider').slick({
    dots: true,          
    infinite: true,      
    speed: 500,          
    slidesToShow: 1,     
    slidesToScroll: 1   
  })
  $(function() {
    $("#Form").on("submit", function(e){
     e.preventDefault();
  
     var fname = $("#fname").val();
     var lname = $("#lname").val();
     var email = $("#email").val();
     var password = $("#password").val();

     console.log(fname, lname, email ,password);
  
  
     if(fname == ""){
         $("#span1").text("This field is required")
     }
     else{
         $("#span1").text("")
     }if(lname == ""){
         $("#span2").text("This field is required")
     }
     else{
         $("#span2").text("")
     }if(email == ""){
         $("#span3").text("This field is required")
     }
    if(password == ""){
      $("#span4").text("This field is required")
  }
     else{
         $("#span4").text("")
     }
  
     if(fname !== "" && lname !== "" && email !== "" && password !== ""){
         window.location.href = "thankyou.html"
     }
  
    })
  });



});

const scrollBtn = document.querySelector("#scroll-to-top-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 800) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none"
    }

});


scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})