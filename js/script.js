const row = document.querySelector(".row");
const wrapper = document.querySelector(".wrapper");
const registerlink = document.querySelector(".register-link");
const loginlink = document.querySelector(".login-link");

registerlink.onclick = () => {
  wrapper.classList.add("active");
};

loginlink.onclick = () => {
  wrapper.classList.remove("active");
};

// Dapatkan elemen tombol login
const tombolLogin = document.querySelector(".btn.animation");

// Tambahkan event listener klik pada tombol login
tombolLogin.addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir bawaan

  // Scroll ke bagian hero
  const bagianHero = document.querySelector(".hero");
  bagianHero.scrollIntoView({ behavior: "smooth" });
});
// Dapatkan elemen tombol register
const tombolregister = document.querySelector(".btn.animation");

// Tambahkan event listener klik pada tombol login
tombolregister.addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir bawaan

  // Scroll ke bagian hero
  const bagianHero = document.querySelector(".hero");
  bagianHero.scrollIntoView({ behavior: "smooth" });
});

//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toogle("active");
};

// Fungsi untuk menampilkan pesan balasan setelah login
function tampilkanBalasan() {
  var pesan = "Selamat datang! Anda telah berhasil login.";
  // Tampilkan pesan balasan di elemen dengan id "pesan-balasan"
  document.getElementById("pesan-balasan").innerHTML = pesan;
}

// Fungsi untuk menangani login
function login() {
  // Lakukan proses login di sini
  // ...

  // Ambil nilai username dan password dari elemen input
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Lakukan validasi login
  if (username === "admin" && password === "password") {
    // Jika login berhasil, lakukan tindakan yang sesuai
    // Misalnya, arahkan pengguna ke halaman utama atau tampilkan pesan sukses
    tampilkanBalasan();
  } else {
    // Jika login gagal, tampilkan pesan error atau tindakan yang sesuai
    alert("Username atau password salah. Silakan coba lagi.");
  }

  // Panggil fungsi tampilkanBalasan setelah login berhasil
  tampilkanBalasan();
}
function redirect() {
  // Redirect pengguna ke halaman form buat janji dan tanya dokter
  window.location.href = "form-buat-janji-dokter.php";
}
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the login form
  var loginForm = document.querySelector(".form-box.login form");

  // Get the register form
  var registerForm = document.querySelector(".form-box.register form");

  // Add event listener for login form submit
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation
    var username = loginForm.querySelector('input[type="text"]').value;
    var password = loginForm.querySelector('input[type="password"]').value;

    // Check if username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter username and password");
      return;
    }

    // Submit the form
    loginForm.submit();
  });

  // Add event listener for register form submit
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation
    var username = registerForm.querySelector('input[type="text"]').value;
    var email = registerForm.querySelector('input[type="email"]').value;
    var password = registerForm.querySelector('input[type="password"]').value;

    // Check if username, email, and password are not empty
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Please enter username, email, and password");
      return;
    }

    // Submit the form
    registerForm.submit();
  });
});
