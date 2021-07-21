import "./styles/main.scss";

/* MOBILE BUTTON ACTIVATION */

const btn = document.getElementById("menu-toggle");
const action = {
    open: "open",
    close: "close"
};
let button = action.open;

btn.addEventListener("click", () => {
    if(btn.classList.contains(action.open)){
        btn.classList.remove(button);
        button = action.close;
    }
    else if(btn.classList.contains(action.close)){
        btn.classList.remove(button);
        button = action.open;
    }
    void btn.offsetWidth;
    btn.classList.add(button);
});

$(document).ready(function() {
    $(".navbar__btn").click(function() {
        if($(".mobile").hasClass("mobile--open")){
            $(".mobile").removeClass("mobile--open");
            $(".mobile").css('top', '-100%');
            $(".mobile").css('background-color', 'transparent');
            $(".mobile__action").css('color', 'transparent');
            $(".navbar").removeClass('snow__logo');
            $('.navbar').css('background-color', '#fff');
            $(".navbar__line:after").css('color', 'black');
            $(".navbar__line").removeClass('snow');
            $(".mobile__flag").css('opacity', '0');
            $('.navbar').css('box-shadow', '0 2px 4px 0 rgba(0, 0, 0, 0.2)');
            $(".navbar__logo").removeClass('snow__logo');
        }
        else{
            $(".mobile").addClass("mobile--open");
            $(".mobile").css('top', '0');
            $(".mobile").css('background-color', '#fb6107');
            $(".mobile__action").css('display', 'block');
            $(".mobile__action").css('color', 'snow');
            $(".mobile__flag").css('opacity', '1');
            $(".navbar").addClass('snow__logo');
            $('.navbar').css('background-color', '#fb6107');
            $('.navbar').css('box-shadow', '0 0px 0px 0 rgb(0 0 0 / 20%)');
            $(".navbar__line").addClass('snow');
            $(".navbar__logo").addClass('snow__logo');
        }
    });
    /* BUTTON VALIDATION */
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      
      function validate() {
        const $result = $(".information__message");
        const email = $("#information__input").val();
        $result.text("");

        $(".information__btn").click(function() {
            if (validateEmail(email)) {
                $result.text(email + " has a valid format!");
                $('.information__input').removeClass('information--error');
                $('.information__input').addClass('information--success');
                $result.css("color", "green");
                $('.information__message').focus();
              } else {
                $result.text(email + " doesn't have a valid format!");
                $('.information__input').removeClass('information--success');
                $('.information__input').addClass('information--error');
                $result.css("color", "red");
                $('.information__message').focus();
              }
        });
        return false;
      }
      
      $("#information__input").on("input", validate);

      setInterval(function() {
        $('.information__input').removeClass('information--success');
        $('.information__input').removeClass('information--error');
      }, 20000);

      let email = $("#information__input").val();
      let result = $(".information__message");

      $(".information__btn").click(function() {
        if (email == "") {
            result.text("Please enter an email.");
            $('.information__message').focus();
          } 
    });

    $('.mobile__action').click(function() {
      if($(".mobile").hasClass("mobile--open")){
        $(".mobile").removeClass("mobile--open");
        $(".mobile").css('top', '-100%');
            $(".mobile").css('background-color', 'transparent');
            $(".mobile__action").css('color', 'transparent');
            $(".navbar").removeClass('snow__logo');
            $('.navbar').css('background-color', '#fff');
            $(".navbar__line:after").css('color', 'black');
            $(".navbar__line").removeClass('snow');
            $(".mobile__flag").css('opacity', '0');
            $('.navbar').css('box-shadow', '0 2px 4px 0 rgba(0, 0, 0, 0.2)');
    }
    else{
        $(".mobile").addClass("mobile--open");
    }
    });
});

/* SLIDESHOW */

$(".slideshow > .slideshow__slide:gt(0)").hide();

setInterval(function() {
  $('.slideshow > .slideshow__slide:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slideshow');
}, 5000);
