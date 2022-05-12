<?php include('db_connect.php'); ?>

<?php
if(isset($_POST['submit'])){
$username=$_POST['username'];
$password=$_POST['password'];
$email=$_POST['email'];
$contact_no=$_POST['contact_no'];
$query="INSERT INTO student (username,password,email,contact_no)
VALUES('{$username}','{$password}','{$email}','{$contact_no}');";
$performQuery=mysqli_query($connection, $query);
if(!$performQuery)
echo 'Query unsuccessful';
else
echo 'Query successful';
$insertedId=mysqli_insert_id($connection);
}
?>
<?php include('db_close.php'); ?>