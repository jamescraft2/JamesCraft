// Fungsi untuk membuka modal dan menampilkan gambar besar
function openModal(imgSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    var caption = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = imgSrc;
    caption.innerHTML = imgSrc;  // Menampilkan nama gambar atau deskripsi jika diperlukan
}

// Fungsi untuk menutup modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}