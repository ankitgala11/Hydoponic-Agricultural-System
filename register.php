<?php

session_start();

?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Register</title>

    <?php include 'css/style.php' ?>
    <?php include 'links/links.php' ?>




</head>

<?php
include 'dbcon.php';
if(isset($_POST['submit'])){
$fname = mysqli_real_escape_string($con, $_POST['fname']);
$lname = mysqli_real_escape_string($con, $_POST['lname']);
$email = mysqli_real_escape_string($con, $_POST['email']);
$password = mysqli_real_escape_string($con, $_POST['password']);
$cpassword = mysqli_real_escape_string($con, $_POST['cpassword']);

$pass= password_hash($password, PASSWORD_BCRYPT);
$cpass= password_hash($cpassword, PASSWORD_BCRYPT);

$emailquery ="select * from registration where email='$email' ";
$query= mysqli_query($con, $emailquery);
$emailcount= mysqli_num_rows($query);

if($emailcount> 0){
    ?>
            <script>
            alert("email already exists")
            </script>
            <?php
}else{
    if($password === $cpassword){
        $insertquery="insert into registration( fname, lname, email, password, cpassword) values('$fname','$lname','$email','$pass','$cpass')";

        $iquery=mysqli_query($con, $insertquery);

                if($iquery){
            ?>
            <script>
            alert("Insertion Successful")
            </script>
            <?php

        }else{
        ?>
            <script>
            alert("Insertion Unsuccessful")
            </script>
            <?php

        }

    }else{
        echo "Password are not matching";
    }
}

}


?>

<body class="bg-gradient-primary">

    <div class="container">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form action="<?php echo htmlentities($_SERVER['PHP_SELF']);?> " method="POST" class="user">
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" id="exampleFirstName" name="fname"
                                            placeholder="First Name" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-user" id="exampleLastName" name="lname"
                                            placeholder="Last Name" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user" id="exampleInputEmail" name="email"
                                        placeholder="Email Address"required>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" class="form-control form-control-user" name="password"
                                            id="exampleInputPassword" placeholder="Password"required>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control form-control-user" name="cpassword"
                                            id="exampleRepeatPassword" placeholder="Repeat Password"required>
                                    </div>
                                </div>
                                <button  type="submit" name="submit" class="btn btn-primary btn-user btn-block">
                                    Register Account
                                </button>
                                <hr>
                                <!-- <a href="index.html" class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Register with Google
                                </a> -->
                                <!-- <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </a> -->
                            </form>
                            <hr>
                            <!-- <div class="text-center">
                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                            </div> -->
                            <div class="text-center">
                                <a class="small" href="login.php">Already have an account? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

 

</body>

</html>