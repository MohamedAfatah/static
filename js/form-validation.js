/*
 * Form Validation
 */
$(function () {

  $('select[required]').css({
    position: 'absolute',
    display: 'inline',
    height: 0,
    padding: 0,
    border: '1px solid rgba(255,255,255,0)',
    width: 0
  });

  $("#formValidate").validate({
    rules: {
      cname: {
        required: true,
        minlength: 5
      },
      curl: {
        required: true,
        url: true
      },
      bname: {
        required: true,
        minlength: 5
      },
      brole: {
        required: true,
        minlength: 5
      },
      cbusiness: {
        required: true,
        minlength: 5
      },
    },
    //For custom messages
    messages: {
      cname: {
        required: "Enter a username",
        minlength: "Enter at least 5 characters"
      },
      curl: "Enter your website",
    },
    errorElement: 'div',
    errorPlacement: function (error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error)
      } else {
        error.insertAfter(element);
      }
    }
  });
});