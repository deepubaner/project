<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>
</head>
<body>
<?php
$con=mysqli_connect('localhost','root','','insertbooking');
echo"successfully connected";
?>
<?php
if(isset($_REQUEST['submit']))
{
echo "<pre>";
print_r($_REQUEST);
$firstname=$_REQUEST['firstname'];
$lastname=$_REQUEST['lastname'];
$email=$_REQUEST['email'];
$aadhar=$_REQUEST['aadhar'];
$phone=$_REQUEST['phone'];
$address=$_REQUEST['address'];
$date=$_REQUEST['date'];

$query=mysqli_query($con,"INSERT INTO `insertbooking`.`booking` (firstname, lastname, email, aadhar, phone, address, date) VALUES ('$firstname', '$lastname', '$email', '$aadhar', '$phone', '$address', '$date')");
  echo "Addeded Successfully";
  }
header('location:bookingform.php')
?>
</body>
</html>