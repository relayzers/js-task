// 1. heftenin gunlerini tapan proqram yaziriq
//     prompt ile heftenin necenci gunu oldugunu aliriq (1-7 arasinda reqem olmalidir)
//     eger deyer === 1 ekrana yazdirin bu gun bazar ertesidir ve.s

// bu taski hem if else hemde switch case ile yazin
// --------------------------------------------------------------------


// let day = +prompt("GUNU DAXIL EDIN")

// if (day === 1) {
//     console.log("Bazar ertesi");
// } else if (day === 2) {
//     console.log("Cersenbe axsami");
// } else if (day === 3) {
//     console.log("Cersenbe axsami");
// } else if (day === 4) {
//     console.log("Cersenbe axsami");
// } else if (day === 5) {
//     console.log("Cersenbe axsami");
// } else if (day === 6) {
//     console.log("Cersenbe axsami");
// } else if (day === 6) {
//     console.log("Cersenbe axsami");
// } else {
//     console.log("Duzgun Daxil Edin");
// }

// _________________________________________________________________________________________________________________________



// 2. ilin aylarini tapan proqram yaziriq
//     prompt ile ilin necenci ayi oldugunu aliriq (1-12 arasinda reqem olmalidir)
//     eger deyer === 1 ekrana yazdirin bu ay yanvar ayidir ve.s

// bu taski hem if else hemde switch case ile yazin
//let month = +prompt("Ayı Daxil edin")

// if (month === 1) {
//     console.log("Yanvar");
// } else if (month === 2) {
//     console.log("Fevral");
// } else if (month === 3) {
//     console.log("Mart");
// } else if (month === 4) {
//     console.log("Aprel");
// } else if (month === 5) {
//     console.log("May");
// } else if (month === 6) {
//     console.log("Iyun");
// } else if (month === 7) {
//     console.log("Iyul");
// } else if (month === 8) {
//     console.log("Avqust");
// } else if (month === 9) {
//     console.log("Sentyabr");
// } else if (month === 10) {
//     console.log("Oktyabr");
// } else if (month === 11) {
//     console.log("Noyabr");
// } else if (month === 12) {
//     console.log("Dekabr");
// } else {
//     console.log("BELƏ AY YOXDUR");
// }
// _________________________________________________________________________________________________________________________



// 3. dersde yazdigimiz kimi gender yoxlayan proqram yazin
//     bu taski hem if else hemde switch case ile yazin

// let gender = prompt("Gender daxil edin")

// if (gender === "k") {
//     console.log("Kişi")
// } else if (gender === "q") {
//     console.log("Qadın")
// } else if (gender === "K") {
//     console.log("Kişi")
// } else if (gender === "Q") {
//     console.log("Qadın")
// } else {
//     console.log("Bele gender Yoxdur")
// }



// _________________________________________________________________________________________________________________________



// 4. Bir party var.Bu partyde yaxsi qardaslar ve gozel xanimlar istirak edecek.Eger yas 18den boyukdurse ekrana yazilsin salam salam cenab ve ya xanim istifadeciden gelen ad

// let ad = prompt("Adınızı Daxil Edin");
// let gender = prompt("Gender Daxil edin");
// let year = +prompt("Yaşınızı Daxil Edin");

// if (year === 18) {
//     console.log(`Salam ${ad} Xoş Gəldiniz`);
// } else if (year > 18) {
//     console.log(`Salam ${ad} Xoş Gəldiniz`);
// } else if (gender === "k") {
//     console.log(`Salam Cenab ${ad} Xoş Gəldiniz`);
// } else if (gender === "q") {
//     console.log(`Salam Xanim ${ad} Xoş Gəldiniz`);
// }
// else {
//     console.log(`Salam ${ad} Sizin yaşınız balacadır`);
// }


// _________________________________________________________________________________________________________________________


// istifadeciden alacaqlarimiz
// name,gender,age
// ve burda gender yoxlamasini if else ile age yoxlamasini ise ternary operatoru ile edin...

// _________________________________________________________________________________________________________________________

// 5. ev almaga gedmisik.Evin kvadrati 2000den coxdurse ve evin qiymeti 99.999-dursa ve eynile valyuta azn-e beraberdirse evi aliram
// eks halda hec bir hal mene maraqli deyil.Evi almiram
// makler deyilem.Alverciler narahat etmesin

// let valyuta = prompt("Valyuta Daxil edin")
// let kvadrat = +prompt("Kvadrati Daxil edin")
// let qiymet = +prompt("Qiymeti Daxil edin")

// if (valyuta === "azn") {
//     console.log("Sizin Axtardığınız Ev Budur");
// } else if (kvadrat === "2000") {
//     console.log("Sizin Axtardığınız Ev Budur");
// } else if (qiymet === "99999") {
//     console.log("Sizin Axtardığınız Ev Budur");
// } else {
//     console.log("Almıram Qardaş əl çək");
// }