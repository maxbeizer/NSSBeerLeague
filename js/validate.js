$(document).ready(function() {
// START validate plugin
$("#signUp").validate({
  rules: {
    contactNumber: {
      required: true,
      phoneUS: true
    },
    cardNumber: {
      required: true,
      creditcard: true
    }
  }
});

jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, ""); 
    return this.optional(element) || phone_number.length > 9 &&
        phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
}, "Please specify a valid phone number");
//END validate plugin
});