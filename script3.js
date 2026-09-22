    let pilihan = "1";
 
    let output = document.getElementById("output");
 
    const tombolMenu = document.querySelectorAll(".menu button");
 
    tombolMenu.forEach(function (tombol) {
      tombol.addEventListener("click", function () {
        pilihan = tombol.getAttribute("data-menu");
 
        for (let i = 1; i <= 5; i++) {
          document.getElementById("form-" + i).hidden = (String(i) !== pilihan);
        }
 
        tombolMenu.forEach(function (t) { t.removeAttribute("aria-current"); });
        tombol.setAttribute("aria-current", "true");
 
        output.innerHTML = "";
      });
    });

    document.getElementById("tombolProses").addEventListener("click", proses);
 
    function proses() {
      const kolom = document.querySelectorAll("#form-" + pilihan + " input");
      for (let i = 0; i < kolom.length; i++) {
        if (kolom[i].value.trim() === "") {
          output.innerHTML = "Lengkapi semua kolom terlebih dahulu.";
          return;
        }
      }
 
let pilihan = prompt(
  "MENU UTAMA\n" +
    "1. Mengetahui Umur\n" +
    "2. Bilangan Positif & Negatif\n" +
    "3. Angka Besar Atau Kecil\n" +
    "4. Nilai Predikat\n" +
    "5. Challenge Project\n" +
    "Masukan Pilihan:",
);

let output = document.getElementById("output");

switch (pilihan) {
  case "1":
    let umur = Number(document.getElementById("umur").value);

    if (umur >= 17) {
      output.innerHTML = "Anda sudah cukup umur.";
    } else {
      output.innerHTML = "Anda belum cukup umur.";
    }
    break;

  case "2":
    let bilangan = Number(document.getElementById("bilangan").value);

    if (bilangan > 0) {
      output.innerHTML = "Bilangan positif";
    } else if (bilangan < 0) {
      output.innerHTML = "Bilangan negatif";
    } else {
      output.innerHTML = "Bilangan nol";
    }
    break;

  case "3":
    let angka1 = Number(document.getElementById("angka1").value);
    let angka2 = Number(document.getElementById("angka2").value);

    if (angka1 > angka2) {
      output.innerHTML = "Angka terbesar adalah " + angka1;
    } else if (angka2 > angka1) {
      output.innerHTML = "Angka terbesar adalah " + angka2;
    } else {
      output.innerHTML = "Kedua angka sama besar";
    }
    break;

  case "4":
    let nilai = Number(document.getElementById("nilai").value);

    if (nilai >= 90) {
      output.innerHTML = "Nilai Anda A";
    } else if (nilai >= 80) {
      output.innerHTML = "Nilai Anda B";
    } else if (nilai >= 70) {
      output.innerHTML = "Nilai Anda C";
    } else if (nilai >= 60) {
      output.innerHTML = "Nilai Anda D";
    } else {
      output.innerHTML = "Nilai Anda E";
    }
    break;

  case "5":
    let namasiswa = document.getElementById("namasiswa").value;
    let kelas = document.getElementById("kelas").value;
    let nilaitugas = Number(document.getElementById("nilaitugas").value);
    let nilaiuts = Number(document.getElementById("nilaiuts").value);
    let nilaiuas = Number(document.getElementById("nilaiuas").value);

    let nilaiakhir = nilaitugas * 0.3 + nilaiuts * 0.3 + nilaiuas * 0.4;

    let keterangan;

    if (nilaiakhir >= 90) {
      keterangan = "Sangat Baik"; 
    } else if (nilaiakhir >= 80) {
      keterangan = "Baik";
    } else if (nilaiakhir >= 75) {
      keterangan = "Cukup";
    } else {
      keterangan = "Belum lulus";
    }

    output.innerHTML =
      "======================<br>" +
      "HASIL PENILAIAN SISWA<br>" +
      "======================<br>" +
      "Nama Siswa: " + namasiswa + "<br>" +
      "Kelas: " +  kelas +  "<br>" +
      "Nilai Tugas: " +  nilaitugas + "<br>" +
      "Nilai UTS: " + nilaiuts + "<br>" +
      "Nilai UAS: " + nilaiuas + "<br>" +
      "Nilai Akhir: " + nilaiakhir + "<br>" +
      "Keterangan: " + keterangan + "<br>" +
      "======================";

    break;
}
    }
