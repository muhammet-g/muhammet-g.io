window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "@fortawesome/fontawesome-free/js/all.min";
import "/node_modules/sweetalert2/dist/sweetalert2.all.min";

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

document
  .querySelectorAll(".product-option input[type='radio']")
  .forEach((item) =>
    item.addEventListener("change", () => {
      document.querySelectorAll(".product-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    })
  );

document.getElementById("current-year").innerHTML = new Date().getFullYear();
