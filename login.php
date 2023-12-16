<?php
$servername = "localhost";
$username = "Hoang";
$password = "1";
$dbname = "chatbug";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE username=? AND password=?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Đăng nhập thành công
    echo "Login successful!";
} else {
    // Đăng nhập thất bại 
    echo "Login failed! Invalid username or password.";
}

$stmt->close();
$conn->close();
?>
