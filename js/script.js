console.log("Script loaded successfully!");

welcomeSpeech ();

function welcomeSpeech() {
    let userName = prompt("What is your name:");
    if (userName != "") {
        document.getElementById("user-greeting").textContent = userName;
    }
}

// ambil form dan output box
const form = document.getElementById("massage-us-form");
const output = document.getElementById("output");

// event submit
form.addEventListener("submit", function(e) {
    e.preventDefault(); // biar ga reload halaman

    // ambil nilai input
    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tanggalLahir").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value || "";
    const pesan = document.getElementById("pesan").value;

    // format hasilnya
    output.innerHTML = `
        <div class="hasil">
            <h3>Hasil Input:</h3>
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
            <p><strong>Pesan:</strong> ${pesan}</p>
        </div>
    `;
    
    // reset form setelah submit
    form.reset();
});

