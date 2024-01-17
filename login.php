<link rel="stylesheet" type="text/css" href="/public/styles/site.css" media="all">

<?php
$title = 'addarecipe';
$nav_login_class = 'active_page';
?>

<!DOCTYPE html>
<html lang="en">
<title>Login</title>
<body>
<?php include 'includes/header.php'; ?>



<h2>Login to Campus Cookouts Below!</h2>
<p>Once logged in, please feel free to add recipes to our site. We are eager to hear your ideas!</p>

<?php if (is_user_logged_in()) { ?>
<div class="log">
<h2>Welcome <?php echo htmlspecialchars($current_user['name']); ?>!</h2>
<p>Now that you are logged in, if you would like to add a recipe to our site, please visit the Add A Recipe page seen in the navigation bar above</p>
</div>
<?php } ?>

<?php if (!is_user_logged_in()) { ?>
<h3>Sign In</h3>

<?php echo login_form('/addarecipe', $session_messages);

} ?>
</body>
</html>