document.addEventListener("DOMContentLoaded", function () {

  Promise.all([
    fetch("components/header.html").then(res => res.text()),
    fetch("components/footer.html").then(res => res.text())
  ]).then(([header, footer]) => {

    document.getElementById("header-placeholder").innerHTML = header;
    document.getElementById("footer-placeholder").innerHTML = footer;

    // ⭐ HEADER LOAD HONE KE BAAD MOBILE MENU INIT
    if (typeof initMobileMenu === "function") {
      initMobileMenu();
    }

    setActiveMenu();

    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  });

  function setActiveMenu() {
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll('#navmenu a').forEach(link => {
      let linkPage = link.getAttribute("href");

      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  }

});
