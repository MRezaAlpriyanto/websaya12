// JavaScript untuk validasi formulir kontak
const form = document.getElementById('contactForm');
const namaInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const pesanInput = document.getElementById('pesan');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validasi input
    if (validateForm()) {
        // Kirim data formulir (simulasi)
        setTimeout(() => {
            responseDiv.innerHTML = `<p>Pesan telah berhasil dikirim!</p>`;
            // Reset formulir setelah pesan berhasil dikirim
            form.reset();
            responseDiv.style.color = 'green';
        }, 1000);
    }
});

function validateForm() {
    let isValid = true;

    if (namaInput.value.trim() === '') {
        isValid = false;
        responseDiv.innerHTML = `<p>Silakan masukkan nama Anda.</p>`;
        responseDiv.style.color = 'red';
    } else if (emailInput.value.trim() === '') {
        isValid = false;
        responseDiv.innerHTML = `<p>Silakan masukkan alamat email Anda.</p>`;
        responseDiv.style.color = 'red';
    } else if (pesanInput.value.trim() === '') {
        isValid = false;
        responseDiv.innerHTML = `<p>Silakan masukkan pesan Anda.</p>`;
        responseDiv.style.color = 'red';
    }

    return isValid;
}
