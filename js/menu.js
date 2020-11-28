(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("artia-expanded") === "true" || false;
        
        menuBtnRef.classList.toggle("is-oppen");
        menuBtnRef.setAttribute("artia-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    });
})();