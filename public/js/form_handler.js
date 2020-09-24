(function () {

  function init(){
    $('#submit').click(submitButtonHandler);
  }

  function submitButtonHandler (evt) {
    console.log('Ajax Submit button pressed.');
     var resForm = document.getElementById('newReservationForm');

     var recaptcha = $("#g-recaptcha-response").val();
     if (recaptcha === "") {
        event.preventDefault();
        alert("Please check the recaptcha");
     } else {
      evt.preventDefault();
      evt.stopPropagation();

      // Disable form while submit is processing
      $('#newReservationForm').attr('disabled', true);

      var fieldNames = ["first_name", "last_name", "email", "phone", "amount"];
      for (var i = 0; i < fieldNames.length; i+=1) {
        $('#' + fieldNames[i] +' span.glyphicon').addClass('hide');
        $('#' + fieldNames[i]).removeClass('has-error has-feedback');
        $('#' + fieldNames[i] + ' span.help-block.text-danger sm').text("");
      }

      // Show processor GIF
      $('.ajaxLoader').fadeIn();

      //make the AJAX call
      $.ajax({
        url: '/addReservation',
        type: 'POST',
        data: {
          first_name: resForm.first_name.value,
          last_name: resForm.last_name.value,
          email: resForm.email.value,
          phone: resForm.phone.value,
          amount: resForm.amount.value,
        },
        success: postSuccessHandler,
        error: postFailureHandler // TODO : what does failure mean exactly?? I don't want it to fail if the data is wrong right?
      });
    }
  }

  // Reset the UI on success
  function postSuccessHandler (jsonData) { // TODO : update to add success toast
    console.log("Axaj Post Success Handler Called");
    for(var key in jsonData) {
        console.log(jsonData[key]);
    }
    if (jsonData.errors) {
      console.log("Updating form errors");
      var errMessages = [];
      for (var err in jsonData.errors) {
        console.log(jsonData.errors[err]);

        $('#' + jsonData.errors[err].param +' span.glyphicon').removeClass('hide');
        $('#' + jsonData.errors[err].param).addClass('has-error has-feedback');
        $('#' + jsonData.errors[err].param + ' span.help-block.text-danger sm').text(jsonData.errors[err].msg);
        grecaptcha.reset();
      }
    } else { // repopulate the form with empty input
      console.log("Form submitted successfully");
      toastr.success('Form submitted successfully', null, {positionClass: 'toast-bottom-full-width'});
      $('#newReservationForm input').val('');
      grecaptcha.reset();
    }

    $('.ajaxLoader').fadeOut();
  };

  // Update UI with failures???
  function postFailureHandler (jsonData) { //TODO : update to create a pretty error
    console.log("Ajax Post Failure Handler Called");
    //$('#newReservationForm').reset();
    $('#newReservationForm input').val('');
    $('.ajaxLoader').fadeOut();
  };

//init on document ready
$(document).ready(init);
})();
