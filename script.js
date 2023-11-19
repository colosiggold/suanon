document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Đoạn code ở đây sẽ gửi thông tin đến server hoặc xử lý dữ liệu theo cách bạn muốn
  // Ở đây, chúng ta chỉ hiển thị thông báo thành công
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('successMessage').classList.remove('hidden');
});
