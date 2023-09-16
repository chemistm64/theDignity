// set the local storage
checkingLocalSto = window.localStorage.getItem("color-selection");

if (checkingLocalSto !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-selection")
  );

  // remove active class
  document.querySelectorAll(".setting-box .spans-color span").forEach((e) => {
    e.classList.remove("active");
    // add active class to the element which has same data-color of local storage
    if (e.dataset.color === window.localStorage.getItem("color-selection")) {
      e.classList.add("active");
    }
  });
}
///////////////// local storage for randomBackground
let backgroundStatus = true;
let theHolder;
if (localStorage.getItem("random") === "yes") {
  backgroundStatus = true;
  randomFunction();
  document
    .querySelectorAll(".background-selection .background-buttons span")
    .forEach((buttons) => {
      buttons.classList.remove("active");
      if (localStorage.getItem("random") === "yes") {
        document
          .querySelector(".background-selection .background-buttons span.yes")
          .classList.add("active");
      }
    });
} else {
  backgroundStatus = false;
  this.clearInterval(theHolder);
  document
    .querySelectorAll(".background-selection .background-buttons span")
    .forEach((buttons) => {
      buttons.classList.remove("active");
      if (localStorage.getItem("random") === "no") {
        document
          .querySelector(".background-selection .background-buttons span.no")
          .classList.add("active");
      }
    });
}

// switch background images over a specific time

// [1] select the element
landingPage = document.querySelector(".landing-page");
// landingPage.style.backgroundImage = `url(../images/highway.jpg)`;
// [1] intitate a random Number
arrayOfImages = [
  "../images/highway.jpg",
  "../images/forests.jpg",
  "../images/moon.jpg",
  "../images/weather.jpg",
  "../images/landscape.jpg",
];
// randomNumber = Math.floor(Math.random() * arrayOfImages.length);
// landingPage.style.backgroundImage = `url(${arrayOfImages[randomNumber]})`;

// create a setime function

function randomFunction() {
  if (backgroundStatus === true) {
    theHolder = setInterval(() => {
      randomNumber = Math.floor(Math.random() * arrayOfImages.length);
      landingPage.style.backgroundImage = `url(${arrayOfImages[randomNumber]})`;
    }, 2000);
  }
}

//
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("no")) {
    backgroundStatus = false;
    this.clearInterval(theHolder);

    this.localStorage.setItem("random", e.target.dataset.value);
  }
  if (e.target.classList.contains("yes")) {
    backgroundStatus = true;
    randomFunction();
    this.localStorage.setItem("random", e.target.dataset.value);
  }
});

// Ending Switch background images over a specific time
////
////
///

// Embarking on Setting Box
//selecting the elements
theIcon = document.querySelector(".setting-box .icon i");
console.log(theIcon);
AllSpans = document.querySelectorAll(".setting-box .spans-color span");

theIcon.onclick = function () {
  document.querySelector(".setting-box").classList.toggle("close-open");
  this.classList.toggle("fa-spin");
};

AllSpans.forEach((span) => {
  span.addEventListener("click", function (e) {
    window.localStorage.setItem("color-selection", e.target.dataset.color);
    console.log(e.target.dataset.color);
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    //remove acive class from all childreen
    e.target.parentElement.querySelectorAll(".active").forEach((span) => {
      span.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// remove and setting active class for background random
theButtonContainer = document.querySelectorAll(
  ".background-selection .background-buttons span"
);
theButtonContainer.forEach((span) => {
  span.addEventListener("click", function (e) {
    e.target.parentElement.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// control the randomization of background theough buttons

// Finishing Setting Box

// embarking on our-skills sections
// ourskillsSpans = document.querySelectorAll(".our-skills .skill-progress span");
// ourskillsSpans.forEach((span) => {
//   span.style.width = span.dataset.width;
// });

// dynamic display for our-skills percent
// [1] the area above the section
window.onscroll = function () {
  theHeightAboveSection = document.querySelector(".our-skills").offsetTop;
  theHeightOfSectionItSelf = document.querySelector(".our-skills").offsetHeight;
  theHeightOfOpenedWindow = this.innerHeight;
  scroolTop = this.pageYOffset;

  if (
    scroolTop >
    theHeightAboveSection + theHeightOfSectionItSelf - theHeightOfOpenedWindow
  ) {
    ourskillsSpans = document.querySelectorAll(
      ".our-skills .skill-progress span"
    );
    ourskillsSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
// Ending the  our-skills sections
// embarking on our-gallery content
let galleriesImages = document.querySelectorAll(".our-gallery .images-box img");
galleriesImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    theOverLay = document.createElement("div");
    theOverLay.className = "over-lay";
    document.body.append(theOverLay);
    theDiv = document.createElement("div");
    theDiv.classList.add("pop-up");
    theSpan = document.createElement("span");
    theSpan.className = "gallery-span";
    spanText = document.createTextNode("X");
    theSpan.appendChild(spanText);
    theDiv.append(theSpan);
    document.body.append(theDiv);
    theHeading = document.createElement("h3");
    theHeading.className = "gallery-heading";
    HeadingText = document.createTextNode(e.target.dataset.quote);
    theHeading.style.textAlign = "center";
    theHeading.append(HeadingText);
    theDiv.appendChild(theHeading);
    // create the img
    theImg = document.createElement("img");
    theImg.src = e.target.getAttribute("src");
    theImg.className = "handmage-image";
    theDiv.append(theImg);
    thePara = document.createElement("p");
    thePara.className = "created-by";
    thePara.append(document.createTextNode("Created By : Mohamed Saleh Nasr"));
    theDiv.append(thePara);
  });
});
// ending the our-gallery content

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery-span")) {
    theOverLay.remove();
    theDiv.remove();
  }
});

//embarking in nav-bullets
navBullets = document.querySelectorAll(".nav-bullets .spans-funds span");
navBullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.nav).scrollIntoView({
      behavior: "smooth",
    });
  });
});
/// display and remove nav bullets
theButton = document.querySelector(".navs-control .button button");

theButton.addEventListener("click", function () {
  theButton.classList.toggle("remove");
  if (theButton.classList.contains("remove")) {
    theButton.innerHTML = "display";
    theButton.style.backgroundColor = "orange";

    document.querySelector(".nav-bullets .spans-funds").style.display = "none";
  } else {
    document.querySelector(".nav-bullets .spans-funds").style.display = "block";
    theButton.innerHTML = "Hidden";
    theButton.style.backgroundColor = "black";
  }
});

// dynamic reach to the sections through clicking on the nav spans

allHeadingSpan = document.querySelectorAll(
  ".heading-area .links-container .links a "
);
console.log(allHeadingSpan);
allHeadingSpan.forEach((span) => {
  span.addEventListener("click", function (e) {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// starting menu active
theMenuButton = document.querySelector(".links-container .toggle-menu");
theLinksMenu = document.querySelector(".links-container .links");
console.log(theLinksMenu);

theMenuButton.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  theLinksMenu.classList.toggle("open");
};

theLinksMenu.onclick = function (e) {
  e.stopPropagation();
};

document.addEventListener("click", function (e) {
  if (e.target !== theMenuButton && e.target !== theLinksMenu) {
    if (theLinksMenu.classList.contains("open")) {
      theMenuButton.classList.toggle("menu-active");
      theLinksMenu.classList.toggle("open");
    }
  }
});
