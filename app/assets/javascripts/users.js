/* global $, Stripe */
//Document ready. 
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var signupBtn = $('#form-signup-btn');
  
    //Set Stripe public key.
    Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
   
      //When user clicks form submit btn
    signupBtn.click(function(event){
      //prevent default submission behavior.
      event.preventDefault();
<<<<<<< HEAD
      signupBtn.val("Processing").prop('disabled', true);
    
    //Collect the credit card fields.
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
        
    //Use Stripe Js library to check for card errors.
=======
      signupBtn.val('Processing').prop('disabled', true);
    
      //Collect the credit card fields.
      var ccNum = $('#card_number').val(),
          cvcNum = $('#card_code').val(),
          expMonth = $('#card_month').val(),
          expYear = $('#card_year').val();
        
    //Use Stripe JS library to check for card errors.
>>>>>>> b15f24cd8d86df835246c705b47461da9da7a8eb
    var error = false;
    
    //Validate card number.
    if(!Stripe.card.validateCardNumber(ccNum)) {
      error = true;
<<<<<<< HEAD
      alert('The credit card number appears to be invalid');
    }
    
    //Validate card number.
    if(!Stripe.card.validateCVC(cvcNum)) {
      error = true;
      alert('The CVC number appears to be invalid');
    }
    
    //Validate expiration date.
    if(!Stripe.card.validateExpiry(expMonth, expYear)) {
      error = true;
      alert('The expiration date appears to be invalid');
=======
      alert('The credit card number appears to be invalid.');
    }
    
     //Validate card number.
    if(!Stripe.card.validateCVC(cvcNum)) {
      error = true;
      alert('The CVC number appears to be invalid.');
    }
    
     //Validate card number.
    if(!Stripe.card.validateExpiry(expMonth, expYear)) {
      error = true;
      alert('The expiration date appears to be invalid.');
>>>>>>> b15f24cd8d86df835246c705b47461da9da7a8eb
    }
    
    if (error) {
      //If there are card errors, don't send to Stripe.
<<<<<<< HEAD
      signupBtn.prop('disabled', false).val("Sign Up");
    } else {
      //Send the card info to Stripe.
=======
      signupBtn.prop('disbaled', false).val("Sign Up");
    } else {
      //Send card information to Stripe.
>>>>>>> b15f24cd8d86df835246c705b47461da9da7a8eb
      Stripe.createToken({
        number: ccNum,
        cvc: cvcNum,
        exp_month: expMonth,
        exp_year: expYear
<<<<<<< HEAD
      }, stripeResponseHandler);  
    }
 
 
 return false; 
  });
=======
      }, stripeResponseHandler); 
    }
     
    return false;
   });
>>>>>>> b15f24cd8d86df835246c705b47461da9da7a8eb
  
  //Stripe will return a card token.
  function stripeResponseHandler(status, response) {
    //Get the token from the response.
    var token = response.id;
<<<<<<< HEAD
  
   //Inject card token as hidden field into form.
   theForm.append( $('<input type="hidden" name="user[stripe_card_token]">').val(token) );
   
   //Submit form to our Rails app.
   theForm.get(0).submit();
=======
   
    //Inject card token as hidden field into form.
    theForm.append( $('<input type="hidden" name="use[stripe_card_token]">').val(token) );
    
    //Submit form to our Rails app.
    theForm.get(0).submit();
>>>>>>> b15f24cd8d86df835246c705b47461da9da7a8eb
  }
});