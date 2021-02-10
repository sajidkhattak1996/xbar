<?php
$feed_back="";
if(isset($_POST['fn'])){
    
    // form data
    $to = 'sajidktkkpk@email.com';
    $subject = $_POST['service'];
    $message = $_POST['message']; 
    $from =$_POST['email'];
    
    
    // $feed_back=$from;

    // echo $feed_back;
    
    // Sending email
    if(mail($to, $subject, $message)){
        $feed_back='Your mail has been sent successfully.';
    } else{
        $feed_back='Unable to send email. Please try again.';
    }
}

 echo $feed_back;
?>