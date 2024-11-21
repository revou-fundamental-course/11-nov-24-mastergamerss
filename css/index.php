<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nama = $_POST["nama"];
  $email = $_POST["email"];
  $pesan = $_POST["pesan"];

  // Lakukan pemrosesan data atau kirim email ke dokter

  // Contoh pengiriman email menggunakan PHPMailer
  // require 'vendor/autoload.php';
  // $mail = new PHPMailer\PHPMailer\PHPMailer();
  // $mail->setFrom($email, $nama);
  // $mail->addAddress('dokter@example.com', 'Dokter');
  // $mail->Subject = 'Pertanyaan dari ' . $nama;
  // $mail->Body = $pesan;
  // if ($mail->send()) {
  //   echo 'Email berhasil dikirim';
  // } else {
  //   echo 'Terjadi kesalahan saat mengirim email';
  // }
}

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check which form is submitted
    if (isset($_POST["login"])) {
        // Process login form
        handleLoginForm();
    } elseif (isset($_POST["signup"])) {
        // Process sign up form
        handleSignUpForm();
    }
}

// Function to handle login form submission
function handleLoginForm()
{
    // Retrieve form inputs
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Perform login authentication
    if (authenticateUser($username, $password)) {
        // Redirect to logged-in page
        header("Location: logged_in.php");
        exit();
    } else {
        // Invalid credentials, display error message
        echo "Invalid username or password.";
    }
}

// Function to handle sign up form submission
function handleSignUpForm()
{
    // Retrieve form inputs
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Validate inputs
    if (validateSignUpInputs($username, $email, $password)) {
        // Create new user account
        createUserAccount($username, $email, $password);

        // Redirect to login page
        header("Location: login.php");
        exit();
    } else {
        // Invalid inputs, display error messages
        // You can customize the error messages based on the validation rules
        echo "Invalid username, email, or password.";
    }
}
// Function to authenticate user
function authenticateUser($username, $password)
{
    // Here, you can implement your authentication logic
    // For example, you can check against a database of user credentials

    // Return true if the credentials are valid, otherwise false
    // Replace this with your actual
}
$nama = $_POST['nama'];
$email = $_POST['email'];





// Proses data yang dikirimkan dari formulir
$nama = $_POST['nama'];
$email = $_POST['email'];
$pesan = $_POST['pesan'];
$tanggal = $_POST['tanggal'];
$waktu = $_POST['waktu'];

// Kirim respons otomatis
$subject = "Terima kasih atas janji dokter Anda";
$message = "Halo $nama,\n\nTerima kasih telah membuat janji dengan dokter kami pada tanggal $tanggal pukul $waktu. Kami akan segera menghubungi Anda untuk mengonfirmasi janji tersebut.\n\nTerima kasih,\nTim Dokter Kami";
$headers = "From: info@dokterkami.com";


?>


