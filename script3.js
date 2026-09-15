let pilihan = prompt(
  "MENU UTAMA\n" +
    "1. Mengetahui Umur \n " +
    "2. Bilangan Positif & Negatif \n " +
    "3. Angka Besar Atau Kecil \n " +
    "4. Nilai Predikat \n " +
    "5. Challange Project\n " +
    "Masukan Pilihan:",
);

switch (pilihan) {
  case "1":
    let umur = Number(prompt("Masukan Umur Anda:"));
    if (umur >= 17) {
      console.log("Anda sudah cukup umur.");
    } else {
      console.log("Anda belum cukup umur.");
    }
    break;

  case "2":
    let bilangan = Number(prompt("Masukan bilangan:"));
    if (bilangan > 0) {
      console.log("Bilangan positif");
    } else if (bilangan < 0) {
      console.log("Bilangan negatif");
    } else {
      console.log("Bilangan nol");
    }
    break;

  case "3":
    let angka1 = Number(prompt("Masukan angka pertama"));
    let angka2 = Number(prompt("Masukan angka kedua"));
    if (angka > angka2) {
      console.log("angka terbesar adalah" + angka1);
    } else if (angka2 > angka1) {
      console.log("angka terbesar adalah" + angka2);
    } else {
      console.log("kedua angka sama besar");
    }
    break;

  case "4":
    let nilai = Number(prompt("Masukkan nilai Anda:"));
    if (nilai >= 90) {
      console.log("Nilai Anda A");
    } else if (nilai >= 80) {
      console.log("Nilai Anda B");
    } else if (nilai >= 70) {
      console.log("Nilai Anda C");
    } else if (nilai >= 60) {
      console.log("Nilai Anda D");
    } else {
      console.log("Nilai Anda E");
    }
    break;

    case "5":
    let namasiswa = prompt("Masukkan nama siswa:");
    let kelas = prompt("Masukkan kelas siswa:");
    let nilaitugas = Number(prompt("Masukkan nilai tugas siswa:"));
    let nilaiuts = Number(prompt("Masukkan nilai UTS siswa:"));
    let nilaiuas = Number(prompt("Masukkan nilai UAS siswa:"));
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
    console.log("======================");
    console.log("HASIL PENILAIAN SISWA");
    console.log("======================");
    console.log("Nama Siswa: " + namasiswa);
    console.log("Kelas: " + kelas);
    console.log("Nilai Tugas: " + nilaitugas);
    console.log("Nilai UTS: " + nilaiuts);
    console.log("Nilai UAS: " + nilaiuas);
    console.log("Nilai Akhir: " + nilaiakhir);
    console.log("Keterangan: " + keterangan);
    console.log("======================");
    break;
} 

