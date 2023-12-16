function login() {
    // Lấy giá trị từ ô nhập liệu
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Gửi yêu cầu đăng nhập đến server
    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Kiểm tra kết quả trả về từ server
        if (data.status === "success") {
            // Nếu đăng nhập thành công, chuyển hướng đến trang chủ
            window.location.href = "home.html";
        } else {
            // Hiển thị thông báo lỗi hoặc xử lý tùy thuộc vào yêu cầu
            alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.");
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
