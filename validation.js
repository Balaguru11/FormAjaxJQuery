$(document).ready(function() {
  $('#Username').on('input', function() {
    var input = $(this);
    var is_name=input.val();
    if(is_name){
      input.removeClass("invalid").addClass("valid");
      $('#nameError').addClass('error').removeClass('error_show');
    }
    else{
      input.removeClass("valid").addClass("invalid");
      $('#nameError').addClass('error_show').removeClass('error');
    }
  });

  // email id
  $('#email').on('input', function() {
    var input = $(this);
    var check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_email = check.test(input.val());
    if(is_email){
      input.removeClass('invalid').addClass('valid');
      $('#mailError').addClass('error').removeClass('error_show');
    }else{
      input.removeClass('valid').addClass('invalid');
      $('#mailError').addClass('error_show').removeClass('error');
    }
  });

  //password 
  $('#password').on('input', function() {
    var input = $(this);
    var check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    var is_password = check.test(input.val());
    if(is_password){
      input.removeClass('invalid').addClass('valid');
      $('#pwdFormatError').addClass('error').removeClass('error_show');
    }else{
      input.removeClass('valid').addClass('invalid');
      $('#pwdFormatError').addClass('error_show').removeClass('error');
    }
  })

  // password Match
  $('#confirmpassword').on('input', function() {
    var input = $(this)
    var inputVal = input.val();
    var pwd = $('#password').val();
    // var is_match = pwd.test(input.val());
    if(inputVal == pwd){
      input.removeClass('invalid').addClass('valid');
      $('#pwdMatchError').addClass('error').removeClass('error_show');
    }else{
      input.removeClass('valid').addClass('invalid');
      $('#pwdMatchError').addClass('error_show').removeClass('error');
    }
  });

    // After Form Submitted Validation
  $("form").submit(function(event){
    $("input").trigger("input");
    var form_data=$("#signup").serializeArray();
    console.log(form_data);
    var error_free=true;
    for (var input in form_data){
      var element=$(form_data[input]['name']);
      console.log(element);
      var valid=element.hasClass("valid");
      var error_element=$("span", element.parent());
      if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
      else{error_element.removeClass("error_show").addClass("error");}
    }
    if (!error_free){
      alert('Please fill all the fields')
      event.preventDefault();
    }
    else{
      alert('No errors: Form will be submitted');
    }
  });

});


