document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("sendBtn");

  sendButton.addEventListener("click", function () {
    // Ambil semua input berdasarkan ID yang telah ditambahkan di HTML
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const subjectInput = document.getElementById("subjectInput");
    const messageTextarea = document.getElementById("messageTextarea");

    // Validasi sederhana (Anda bisa mengembangkannya)
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageTextarea.value.trim() === "") {
        alert("Mohon lengkapi semua field yang wajib diisi!");
        return;
    }
    
    // Tampilkan pesan sukses
    alert("Warning!!! This Is E. Gozalie Speaking || Your Message sent successfully! Thank you for connecting.");

    // Kosongkan input setelah tombol ditekan
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageTextarea.value = "";
  });
});