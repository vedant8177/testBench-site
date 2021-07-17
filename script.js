var navBtn = document.querySelector("#hamburger"),
    closeBtn = document.querySelector("#close-menu");

    navBtn.addEventListener("click", () => {
        document.querySelector("#hamburger-body").style.top = "0";
    });

    closeBtn.addEventListener("click", () => {
        document.querySelector("#hamburger-body").style.top = "-50%";
    });