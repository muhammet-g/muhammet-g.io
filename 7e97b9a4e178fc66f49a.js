window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "@fortawesome/fontawesome-free/js/all.min";
import "/node_modules/sweetalert2/dist/sweetalert2.all.min";
import "./sass/custom.scss";

document
  .querySelectorAll('[data-bs-toggle="tooltip"]')
  .forEach((item) => new bootstrap.Tooltip(item));

document.querySelectorAll(".add-to-cart-btn").forEach((item) => {
  item.addEventListener("click", () => {
    // alert("أضيف إلى عربة الشراء");
    const Swal = require("sweetalert2");
    Swal.fire({
      title: "أضيف إلى عربة الشراء",
      icon: "success",
    });
  });
});

document.querySelectorAll(".size-option input[type='radio']").forEach((item) =>
  item.addEventListener("change", () => {
    document.querySelectorAll(".size-option").forEach((i) => {
      i.classList.remove("active");
    });
    item.parentNode.parentNode.classList.add("active");
  })
);

document.querySelectorAll(".color-option input[type='radio']").forEach((item) =>
  item.addEventListener("change", () => {
    document.querySelectorAll(".color-option").forEach((i) => {
      i.classList.remove("active");
    });
    item.parentNode.parentNode.classList.add("active");
  })
);

// حساب سعر أجمالي المنتج

document.querySelectorAll("[data-product-quantity]").forEach((item) => {
  item.addEventListener("change", () => {
    const newQuantity = item.value;
    const parent = item.closest("[data-product-info]");
    const pricePerUnit = parent.getAttribute("data-product-price");
    const totalPriceForProduct = newQuantity * pricePerUnit;
    parent.querySelector(".total-price-for-product").innerHTML =
      totalPriceForProduct + "$";

    calculateTotalPrice();
  });
});

document.querySelectorAll("[data-remove-from-card]").forEach((item) => {
  item.addEventListener("click", () => {
    item.closest("[data-product-info]").remove();
    calculateTotalPrice();
  });
});

function calculateTotalPrice() {
  let totalPriceForAllProduct = 0;
  document.querySelectorAll("[data-product-info]").forEach((product) => {
    const pricePerUnite = product.getAttribute("data-product-price");
    const quantity = product.querySelector("[data-product-quantity]").value;
    const totalPriceForProduct = pricePerUnite * quantity;

    totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
  });
  document.getElementById("total-price-for-all-product").innerHTML =
    totalPriceForAllProduct + "$";
}

const citiesByCountry = {
  dz: [
    "الجزائر العاصمة",
    "وهران",
    "قسنطينة",
    "عنابة",
    "البليدة",
    "باتنة",
    "سيدي بلعباس",
    "سطيف",
    "تيزي وزو",
    "تلمسان",
    "بجاية",
    "بسكرة",
    "الجلفة",
    "ورقلة",
    "جيجل",
    "سكيكدة",
    "قالمة",
    "أدرار",
    "الشلف",
    "الأغواط",
    "أم البواقي",
    "بومرداس",
    "الطارف",
    "عين الدفلى",
    "عين تموشنت",
    "غرداية",
    "تيميمون",
    "المغير",
    "الأبيض سيدي الشيخ",
    "المنيعة",
  ],
  bh: [
    "المحرق",
    "المنامة",
    "الرفاع",
    "الحد",
    "السنابس",
    "عيسى",
    "جد حفص",
    "الدراز",
    "سترة",
    "البديع",
  ],
  dj: ["مدينة جيبوتي", "علي صبيح", "تاجورة", "دخيل", "أوبوك"],
  eg: [
    "القاهرة",
    "الإسكندرية",
    "الجيزة",
    "الشرقية",
    "الدقهلية",
    "البحيرة",
    "المنوفية",
    "القليوبية",
    "الغربية",
    "كفر الشيخ",
    "الفيوم",
    "بني سويف",
    "المنيا",
    "أسيوط",
    "سوهاج",
    "قنا",
    "أسوان",
    "الأقصر",
    "مطروح",
    "البحر الأحمر",
    "الوادي الجديد",
    "جنوب سيناء",
    "شمال سيناء",
    "بورسعيد",
    "الإسماعيلية",
    "السويس",
    "دمياط",
  ],
  iq: [
    "بغداد",
    "البصرة",
    "نينوى",
    "أربيل",
    "كركوك",
    "الأنبار",
    "بابل",
    "القادسية",
    "ديالى",
    "ذي قار",
    "السليمانية",
    "صلاح الدين",
    "كربلاء",
    "المثنى",
    "ميسان",
    "واسط",
    "دهوك",
    "النجف",
    "حلبجة",
  ],
  jo: [
    "عمان",
    "الزرقاء",
    "إربد",
    "العقبة",
    "البلقاء",
    "الطفيلة",
    "المفرق",
    "معان",
    "الكرك",
    "جرش",
    "عجلون",
    "مادبا",
  ],
  kw: ["العاصمة", "حولي", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير"],
  lb: ["بيروت", "جبل لبنان", "البقاع", "النبطية", "الجنوب", "الشمال"],
  ly: [
    "طرابلس",
    "بنغازي",
    "مصراتة",
    "البيضاء",
    "سبها",
    "الزاوية",
    "سرت",
    "الخمس",
    "زليتن",
    "درنة",
    "طبرق",
    "غريان",
    "المرج",
    "ترهونة",
    "بني وليد",
    "الواحات",
    "أوجلة",
    "إجدابيا",
    "الكفرة",
  ],
  mr: [
    "نواكشوط",
    "نواذيبو",
    "أطار",
    "كيهيدي",
    "سلفا",
    "تجكجة",
    "روصو",
    "العيون",
    "النعمة",
    "باسكنو",
    "ازويرات",
    "بير أم اغرين",
  ],
  ma: [
    "الرباط",
    "الدار البيضاء",
    "فاس",
    "مراكش",
    "طنجة",
    "أغادير",
    "مكناس",
    "وجدة",
    "الحسيمة",
    "تطوان",
    "الجديدة",
    "خريبكة",
    "القنيطرة",
    "آسفي",
    "العرائش",
    "بني ملال",
    "الناظور",
    "تارودانت",
    "تازة",
    "المحمدية",
    "الصويرة",
    "القصر الكبير",
    "زاكورة",
    "ورزازات",
    "الرشيدية",
  ],
  om: [
    "مسقط",
    "ظفار",
    "مسندم",
    "البريمي",
    "الداخلية",
    "الظاهرة",
    "الوسطى",
    "شمال الباطنة",
    "جنوب الباطنة",
    "شمال الشرقية",
    "جنوب الشرقية",
  ],
  ps: [
    "القدس",
    "رام الله",
    "الخليل",
    "نابلس",
    "بيت لحم",
    "جنين",
    "طولكرم",
    "قلقيلية",
    "سلفيت",
    "طوباس",
    "غزة",
    "خانيونس",
    "دير البلح",
    "رفح",
  ],
  qa: [
    "الدوحة",
    "الريان",
    "الوكرة",
    "الخوير",
    "أم صلال",
    "مسيعيد",
    "الشحانية",
    "الخور",
    "الغويرية",
    "الذخيرة",
    "العريقة",
  ],
  sa: [
    "الرياض",
    "جدة",
    "مكة المكرمة",
    "المدينة المنورة",
    "الدمام",
    "الخبر",
    "بريدة",
    "تبوك",
    "الطائف",
    "الأحساء",
    "حائل",
    "نجران",
    "جازان",
    "أبها",
    "خميس مشيط",
    "الباحة",
    "عرعر",
    "سكاكا",
  ],
  so: [
    "مقديشو",
    "هرجيسا",
    "بوصاصو",
    "بيدوا",
    "كيسمايو",
    "جالكعيو",
    "برعو",
    "بورعو",
    "جاروي",
    "لاس عانود",
    "هارجيسا",
    "بربرة",
  ],
  sd: [
    "الخرطوم",
    "أم درمان",
    "بور سودان",
    "كسلا",
    "الأبيض",
    "ود مدني",
    "نيالا",
    "كادقلي",
    "الدمازين",
    "الجنينة",
    "الفاشر",
    "دنقلا",
    "سنار",
    "ربك",
    "الحصاحيصا",
    "بربر",
    "عطبرة",
    "شندي",
  ],
  sy: [
    "دمشق",
    "حلب",
    "حمص",
    "اللاذقية",
    "طرطوس",
    "حماة",
    "إدلب",
    "درعا",
    "الرقة",
    "دير الزور",
    "الحسكة",
    "السويداء",
    "القنيطرة",
  ],
  tn: [
    "تونس",
    "صفاقس",
    "سوسة",
    "القيروان",
    "بنزرت",
    "نابل",
    "أريانة",
    "تطاوين",
    "مدنين",
    "قفصة",
    "قبلي",
    "القصرين",
    "المهدية",
    "المنستير",
    "زغوان",
    "جندوبة",
    "باجة",
    "الكاف",
    "سليانة",
    "منوبة",
    "قابس",
  ],
  ae: [
    "أبو ظبي",
    "دبي",
    "الشارقة",
    "عجمان",
    "أم القيوين",
    "رأس الخيمة",
    "الفجيرة",
    "العين",
    "خورفكان",
    "دبا الفجيرة",
    "دبا الحصن",
  ],
  ye: [
    "صنعاء",
    "عدن",
    "تعز",
    "الحديدة",
    "إب",
    "المكلا",
    "سيئون",
    "البيضاء",
    "ذمار",
    "عمران",
    "حجة",
    "صعدة",
    "الضالع",
    "لحج",
    "أبين",
    "المحويت",
    "ريمة",
    "شبوة",
    "مأرب",
    "الجوف",
  ],
  km: [
    "موروني",
    "متساميولي",
    "فومبوني",
    "دوموني",
    "واتسيمبوه",
    "مويلي",
    "بانجيني",
    "نيوماكيلي",
    "مبيني",
    "سيمبا",
    "هامبيو",
  ],
};

document.querySelectorAll('select[name="country"]').forEach((item) => {
  item.addEventListener("change", () => {
    const country = item.value;

    const cities = citiesByCountry[country];

    document
      .querySelectorAll("#paymentcities option")
      .forEach((option) => option.remove());

    const firstOption = document.createElement("option");
    const optionText = document.createTextNode("اختر المدينة");
    firstOption.appendChild(optionText);
    firstOption.setAttribute("value", "");
    firstOption.setAttribute("disabled", "true");
    firstOption.setAttribute("selected", "true");

    const city_options = document.getElementById("paymentcities");
    city_options.appendChild(firstOption);

    cities.forEach((city) => {
      const newOption = document.createElement("option");
      const optionText = document.createTextNode(city);
      newOption.appendChild(optionText);
      newOption.setAttribute("value", city);
      city_options.appendChild(newOption);
    });
  });
});

document
  .querySelectorAll("#form-checkout input[name='payment-method']")
  .forEach((item) => {
    item.addEventListener("change", () => {
      const paymentMethod = item.value;
      const inp = document.querySelectorAll("#credit_card_info input");
      if (paymentMethod === "on-delivery") {
        inp.forEach((i) => {
          i.style.display = "none";
        });
      } else {
        inp.forEach((i) => {
          i.style.display = "block";
        });
      }
    });
  });
document.getElementById("current-year").innerHTML = new Date().getFullYear();
