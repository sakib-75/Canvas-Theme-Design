window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {

  if (window.matchMedia("(min-width: 975px)").matches) {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector(".logo").style.height = "60px";
      document.querySelector(".header-body").style.height = "60px";
      for (i = 0; i < 5; i++) {
        document.getElementsByClassName("nav-link")[i].style.height = "60px";
        document.getElementsByClassName("nav-link")[i].style.padding = "20px 25px";
      }
      document.querySelector(".menu-icon-sec").style.padding = "20px 0px";

    } else {
      document.querySelector(".logo").style.height = "100px";
      document.querySelector(".header-body").style.height = "100px";
      for (i = 0; i < 5; i++) {
        document.getElementsByClassName("nav-link")[i].style.height = "100px";
        document.getElementsByClassName("nav-link")[i].style.padding = "40px 25px";
      }
      document.querySelector(".menu-icon-sec").style.padding = "40px 0px";

    }

  }

}


function menuFunction() {
  let x = document.querySelector(".nav-list");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function subMenu_1_Toggle(s) {
  let serial = s;

  for (i = 0; i < 2; i++) {
    let subMenu1 = document.getElementsByClassName("sub-menu-1")[i];
    let icon = document.getElementsByClassName("right-icon-1")[i];

    if (i == serial) {
      if (subMenu1.style.display == "block") {
        subMenu1.style.display = "none";
        icon.style.transform = "rotate(0deg)";

      } else {
        subMenu1.style.display = "block";
        icon.style.transform = "rotate(90deg)";
      }

    } else {
      subMenu1.style.display = "none";
      icon.style.transform = "rotate(0deg)";
    }
  }

}


function subMenu_2_Toggle(s) {
  let serial = s;

  for (i = 0; i < 4; i++) {
    let subMenu2 = document.getElementsByClassName("sub-menu-2")[i];
    let icon = document.getElementsByClassName("right-icon")[i];

    if (i == serial) {
      if (subMenu2.style.display == "block") {
        subMenu2.style.display = "none";
        icon.style.transform = "rotate(0deg)";

      } else {
        subMenu2.style.display = "block";
        icon.style.transform = "rotate(90deg)";
      }

    } else {
      subMenu2.style.display = "none";
      icon.style.transform = "rotate(0deg)";
    }
  }

}