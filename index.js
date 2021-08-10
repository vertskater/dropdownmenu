function dropdownmenu(settings) {
  const trigger = document.querySelectorAll(".nav-trigger");
  const menus = document.querySelectorAll("nav > ul");

  if (settings.appearance === "scale") {
    menus.forEach((menu) => {
      menu.style.opacity = "0";
      menu.style.transform = "scale(0)";
      menu.style.position = "absolute";
      menu.style.transition = "all " + settings.duration + " ease-in-out";
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
  } else {
    menus.forEach((menu) => {
      menu.style.opacity = "0";
      menu.style.height = "0";
      menu.style.position = "absolute";
      menu.style.transition = "all " + settings.duration + " ease-in-out";
    });

    trigger.forEach((item) => {
      item.style.cursor = "pointer";
      item.addEventListener("click", () => {
        menus.forEach((menu) => {
          menu.style.opacity === "0"
            ? (menu.style.opacity = "1")
            : (menu.style.opacity = "0");
          menu.style.height === "0px"
            ? (menu.style.height = "100vh")
            : (menu.style.height = "0px");
        });
      });
    });
  }
}

export { dropdownmenu };
