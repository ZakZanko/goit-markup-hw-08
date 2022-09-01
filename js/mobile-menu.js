(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mobile__menu--open"),
    closeMenuBtn: document.querySelector(".mobile__menu--close"),
    menu: document.querySelector(".mobile-menu"),
    body: document.querySelector("body"),
    menuList: document.querySelector(".menu__nav--list"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.menuList.addEventListener("click", removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    refs.body.classList.toggle("no-scroll");
  }

  function removeMenu() {
    refs.menu.classList.add("is-hidden");
  }
})();
