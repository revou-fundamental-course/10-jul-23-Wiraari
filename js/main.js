function allowOnlyNumbers(event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }
}

document.getElementById("berat").addEventListener("keypress", allowOnlyNumbers);
document.getElementById("usia").addEventListener("keypress", allowOnlyNumbers);
document.getElementById("tinggi").addEventListener("keypress", allowOnlyNumbers);

// button hitung BMI
function kalkulatorBMI() {
    var beratInput = document.getElementById("berat");
    var usiaInput = document.getElementById("usia");
    var tinggiInput = document.getElementById("tinggi");
    var result2Div = document.getElementById("result2");
    var result3Div = document.getElementById("result3");
    var result4Div = document.getElementById("result4");
    var result1P = document.getElementById("result1");
    var usiaError = document.getElementById("usiaError");
  

    var berat = parseFloat(beratInput.value.replace(',', '.'));
    var usia = parseInt(usiaInput.value);
    var tinggi = parseFloat(tinggiInput.value.replace(',', '.')) / 100;

    usiaError.innerHTML = '';


    if (isNaN(usia) || usia <= 17) {
        usiaError.innerHTML = "Usia minimal 18 tahun.";
        usiaError.style.color = 'red';
        return;
    }



    var bmi = berat / (tinggi * tinggi);
    var category = "";
    var category2 = "";
    var description = "";
    var description2 = "";
    var description3= "";
    var description4= "";

    
    if (bmi < 18.5) {
        category = "<span class='description-large'>Berat Badan Kurang.</span>";
        category2 = "Hasil BMI < 18.5";
        description = "<span class='description-small'>Anda kekurangan berat badan</span>";
        description2 = "Anda berada dalam kategori kekurangan berat badan.<br>Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
        description3 = "<span class='description-large'>Berat rendah dapat menyebabkan berbagai masalah penyakit :</span>";
        description4 = "Infertilitas<br>Anemia<br>Osteoporosis<br>Sistem Imun Lemah";
    } else if (bmi >= 18.5 && bmi < 22.9) {
        category = "<span class='description-large'>Berat badan normal.</span>";
        category2 = "Hasil BMI diantara 18.5 dan 22.9.";
        description = "<span class='description-small'>Anda memiliki berat badan ideal.</span>";
        description2 = "Anda berada dalam kategori berat badan yang normal<br>Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
        description3 = "<span class='description-large'>Rekomendasi:</span>";
        description4 = "Tetap konsumsi makanan sehat dan bergizi seimbang<br>Tetap aktif bergerak 30 menit per hari.";

    } else if (bmi >= 23 && bmi < 25.9) {
        category = "<span class='description-large'>Berat Badan Lebih.</span>";
        category2 = "Hasil BMI diantara 23 dan 25";
        description = "<span class='description-small'>Anda memiliki berat badan berlebih</span>";
        description2 = "Anda berada dalam kategori overweight atau berat badan berlebih.<br>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        description3 = "<span class='description-large'>Beberapa penyakit yang berasal dari kegemukan:</span>";
        description4 = "Diabetes<br>Hipertensi<br>Sakit Jantung<br>Osteoarthritis";
    } else if (bmi > 26){
        category = "<span class='description-large'>Obesitas</span>";
        category2 = "Hasil BMI lebih dari 25";
        description = "<span class='description-small'>Anda berada dalam kategori obesitas</span>";
        description2 = "Anda berada dalam kategori obesitas.<br>Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.<br>Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
        description3 = "<span class='description-large'>Beberapa penyakit yang berasal dari kegemukan:</span>";
        description4 = "Diabetes<br>Hipertensi<br>Sakit Jantung<br>Osteoarthritis";
    }

    result1P.innerHTML = category + "<br>" + "<br>" +"<span class='resultBMI'>"+ bmi.toFixed(2) +"</span><br>" +  description;
    result2Div.innerHTML = category2;
    result3Div.innerHTML = description2;
    result4Div.innerHTML = description3 + "<br>" + description4;

    result2Div.innerHTML = category2;
}

// button reset
function tombolReset() {
    var beratInput = document.getElementById("berat");
    var usiaInput = document.getElementById("usia");
    var tinggiInput = document.getElementById("tinggi");
    var result1P = document.getElementById("result1");
    var result2Div = document.getElementById("result2");
    var result3Div = document.getElementById("result3");
    var result4Div = document.getElementById("result4");
    var usiaError = document.getElementById("usiaError");

    beratInput.value = "";
    usiaInput.value = "";
    tinggiInput.value = "";

    usiaError.innerHTML = "";
    result1P.innerHTML = "";
    result2Div.innerHTML = "";
    result3Div.innerHTML = "";
    result4Div.innerHTML = "";
}