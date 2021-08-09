function dropdownmenu(duration) {
  const trigger = document.querySelectorAll(".nav-trigger");
  const menus = document.querySelectorAll("nav > ul");

  menus.forEach((menu) => {
    menu.style.opacity = "0";
    menu.style.transform = "scale(0)";
    menu.style.position = "absolute";
    menu.style.width = "100%";
    menu.style.transition = "all " + duration + " ease-in-out";
  });

  trigger.forEach((item) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      menus.forEach((menu) => {
        menu.style.opacity === "0"
          ? (menu.style.opacity = "1")
          : (menu.style.opacity = "0");
        menu.style.transform === "scale(0)"
          ? (menu.style.transform = "scale(1)")
          : (menu.style.transform = "scale(0)");
      });
    });
  });
}

export { dropdownmenu };
