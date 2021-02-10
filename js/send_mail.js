$( "#mail_form" ).submit(function( event ) {
    event.preventDefault();
    // alert( "submit are  clicked" );
var fn=$('#fname').val();
var ln=$('#lname').val();
var mobile_no=$('#mobileno').val();
var email=$('#email').val();
var service=$('#services_select').val();
var message=$('#message').val();

if(service==""){
  alert('Please Select any Service ');
  return false;
}

console.log('first name='+fn);
console.log('Last name='+ln);
console.log('mobile no='+mobile_no);
console.log('email='+email);
console.log('service='+service);
console.log('Message='+message);

$.ajax({
  type: "POST",
   url: "send_mail.php",
   data: { 
     fn:fn ,
     ln:ln ,
     mobile_no:mobile_no ,
     email:email, 
     service:service,
     message:message
    },
   success: function(feed_back) {
    console.log('feed back=='+feed_back);
    }
 });


  });




