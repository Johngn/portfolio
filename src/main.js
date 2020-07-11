$("#slidein").fadeIn(3000)

// FORM
$(function () {
  var form = $("#form")
  var formMessages = $("#span")

  $(form).submit(function (e) {
    e.preventDefault()

    var formData = $(form).serialize()

    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData,
    })
      .done(function (response) {
        $(formMessages).removeClass("error")
        $(formMessages).addClass("success")

        $(formMessages).text(response)

        $("#name").val("")
        $("#email").val("")
        $("#message").val("")
      })
      .fail(function (data) {
        $(formMessages).removeClass("success")
        $(formMessages).addClass("error")

        if (data.responseText !== "") {
          $(formMessages).text(data.responseText)
        } else {
          $(formMessages).text("An error occured.")
        }
      })
  })

  // TITLE FADE IN
  $("#slidein").fadeIn(3000)

  // NAVBAR AND TITLE SCROLL EFFECTS
  // $(window).scroll(function () {
  //     if ($(this).scrollTop() > 550) {
  //         $(".navbar").css({"background-color": "rgba(0, 0, 0, 0.9)"})
  //         // $('#slidein').fadeOut(2000);
  //         $('#intro').animate({opacity: "1"}, 1500);
  //     } else {
  //         $(".navbar").css("background-color", "rgba(0, 0, 0, 0.1)");
  //         $('#slidein').fadeIn(2000);
  //     }
  // })

  // NAVBAR SCROLL
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"))
    if (target.length) {
      event.preventDefault()
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      )
    }
  })

  // PORTFOLIO HOVER EFFECTS
  $(".gutter-fix").hover(
    function () {
      $(this).addClass("transition")
    },
    function () {
      $(this).removeClass("transition")
    }
  )
})
