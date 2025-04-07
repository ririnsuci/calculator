function hitungPersen() {
    let pilihan = document.getElementById("pilihan").value;
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil = 0;

    if (isNaN(angka1) || isNaN(angka2)) {
        alert("Harap masukkan angka yang valid!");
        return;
    }

    if (pilihan === "1") {
        hasil = (angka1 / 100) * angka2;
    } else if (pilihan === "2") {
        hasil = (angka1 / angka2) * 100;
    } else if (pilihan === "3") {
        hasil = (angka1 * angka2) / 100;
    }

    document.getElementById("hasil").innerText = hasil.toFixed(2);
}
