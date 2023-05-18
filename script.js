const menu = document.querySelector(".head");

function toggleMenu() {
  const intro = document.querySelector("#menu");
  const menu = document.querySelector(".menu-btn");
  menu.classList.toggle("hide");
  intro.classList.toggle("hide");
}

menu.addEventListener("click", toggleMenu);

const defaultTitle = "Multi-Post Stories Gain + Glory";
// const defaultImg = 'assets/images/card.jpeg';
const defaultTech = ["Ruby on Rails", "CSS", "HTML", "JavaScript"];

const works = [
  {
    title: defaultTitle,
    img: "",
    technologies: defaultTech,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    source: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: defaultTitle,
    img: "",
    technologies: defaultTech,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    source: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "defaultTitle",
    img: "",
    technologies: ["Python", "CSS", "HTML", "JavaScript"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    source: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: defaultTitle,
    img: "",
    technologies: defaultTech,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    source: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

for (let work = 0; work < works.length; work += 1) {
  const workSection = document.getElementById("works");
  const div = document.createElement("div");
  div.classList.add("work");
  div.classList.add("card");
  const imageDiv = document.createElement("div");
  imageDiv.className = "card-img";
  const img = document.createElement("img");
  img.src = works[work].img;
  div.appendChild(imageDiv);
  imageDiv.appendChild(img);

  const content = document.createElement("div");
  content.className = "card-content";
  div.appendChild(content);
  const title = document.createElement("h3");
  title.textContent = works[work].title;
  title.className = "card-heading";
  content.appendChild(title);
  const tech = works[work].technologies;
  const languages = document.createElement("ul");
  languages.className = "languages";
  for (let i = 0; i < tech.length; i += 1) {
    const lang = document.createElement("li");
    lang.textContent = tech[i];
    lang.className = "language";
    languages.appendChild(lang);
  }
  content.appendChild(languages);

  const x = document.createElement("a");
  // x.addEventListener('click', createPopup(work)); //add function to make popup
  const button = document.createElement("button");
  button.className = "card-button";
  button.textContent = "See Project";
  x.appendChild(button);
  content.appendChild(x);

  x.setAttribute("onclick", `createPopup(${work})`);

  workSection.appendChild(div);
}

function closePopup() {
  const div = document.querySelector(".popup-bg");
  if (div !== null) {
    div.remove();
  }
}

let card = null;
let globalID = 99;
const bg = document.createElement("div");
bg.className = "popup-bg";

function createPopup(id) {
  globalID = id;
  closePopup();
  card = document.createElement("div");
  bg.appendChild(card);
  const project = works[id];
  card.classList.add("popup");
  if (window.innerWidth > 768) {
    card.classList.add("popup-desktop");
  }

  card.classList.add("hide-desktop");
  card.id = "popup-card";
  card.style.display = "flex";
  document.body.appendChild(bg);

  const closeButton = document.createElement("img");
  closeButton.src = "assets/images/Icon.png";
  if (window.innerWidth > 768) {
    closeButton.className = "closePopupDesktop";
  } else {
    closeButton.className = "closePopup";
  }
  closeButton.setAttribute("onclick", "closePopup()");
  card.appendChild(closeButton);

  const img = document.createElement("img");
  img.src = "assets/images/card.jpeg";
  if (window.innerWidth > 768) {
    img.className = "popupImgDesktop";
  } else {
    img.className = "popupImg";
  }
  card.appendChild(img);

  const title = document.createElement("h3");
  title.textContent = project.title;

  const titleDesktop = document.createElement("div");
  if (window.innerWidth > 768) {
    titleDesktop.className = "popupTitleDesktop";
    titleDesktop.appendChild(title);
    card.appendChild(titleDesktop);
    title.className = "popupTitleDesk";
  } else {
    title.className = "popupTitle";
    card.appendChild(title);
  }

  const tech = works[id].technologies;
  const languages = document.createElement("ul");
  languages.classList.add("languages");
  if (window.innerWidth > 768) {
    languages.classList.add("popupLangDesktop");
  } else {
    languages.classList.add("popupLang");
  }
  for (let i = 0; i < tech.length; i += 1) {
    const lang = document.createElement("li");
    lang.textContent = tech[i];
    lang.classList.add("language");
    lang.classList.add("popupTech");
    languages.appendChild(lang);
  }
  card.appendChild(languages);

  const info = document.createElement("p");
  info.textContent = works[id].description;
  if (window.innerWidth > 768) {
    info.className = "popupInfoDesktop";
  } else {
    info.className = "popupInfo";
  }
  card.appendChild(info);

  const buttonDiv = document.createElement("div");
  if (window.innerWidth > 768) {
    buttonDiv.className = "popupButtonsDesktop";
  } else {
    buttonDiv.className = "popupButtons";
  }
  let button = document.createElement("a");
  button.className = "popupBtn";
  button.href = project.live;
  button.innerHTML =
    '<button class="card-button" >See live<img src="assets/images/live.png" class="btn-icon"></img></button>';
  button.id = "about-btn";
  buttonDiv.appendChild(button);
  button = document.createElement("a");
  button.className = "popupBtn";
  button.href = project.source;
  button.innerHTML =
    '<button class="card-button">See source <img src="assets/images/Vector.png" class="btn-icon"></img> </button>';
  button.id = "about-btn";
  buttonDiv.appendChild(button);
  if (window.innerWidth > 768) {
    titleDesktop.appendChild(buttonDiv);
  } else {
    card.appendChild(buttonDiv);
  }
}

window.addEventListener("resize", () => {
  bg.removeChild(card);
  document.body.removeChild(bg);
  createPopup(globalID);
});

// form validation
const form = document.querySelector(".form");
const email = document.getElementById("email");
const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const error = document.getElementById("error");
error.className = "error";

//add local storage
const nameInput = document.getElementById("name");
const message = document.getElementById("message");

form.addEventListener("input", () => {
  const input = {
    name: nameInput.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem("input", JSON.stringify(input));
});

const existingInput = JSON.parse(localStorage.getItem("input"));
if (existingInput) {
  nameInput.value = existingInput.name;
  email.value = existingInput.email;
  message.value = existingInput.message;
}

window.addEventListener("load", () => {
  const isValid = email.value.length !== 0 || emailRegex.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

email.addEventListener("input", () => {
  const isValid = email.value.length !== 0 && emailRegex.test(email.value);
  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
    if (email.value.toLowerCase() !== email.value) {
      error.textContent = `Email address should be lowercase, try ${email.value.toLowerCase()}`;
    } else {
      error.textContent = "Please enter a valid email address";
    }
  }
});

form.addEventListener("submit", (event) => {
  const isValid = email.value.length !== 0 && emailRegex.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    if (email.value.toLowerCase() !== email.value) {
      error.textContent = `Email address should be lowercase, try ${email.value.toLowerCase()}`;
    } else {
      error.textContent = "Please enter a valid email address";
    }
    event.preventDefault();

    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
    form.requestSubmit();
  }
});
