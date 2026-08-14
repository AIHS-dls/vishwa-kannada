const articles = [

  {
    c: "News",
    i: "📰",
    t: "ಇಂದಿನ ಪ್ರಮುಖ ಸುದ್ದಿಗಳು: ಭಾರತ ಮತ್ತು ವಿಶ್ವದ ಬೆಳವಣಿಗೆಗಳು",
    d: "ದೇಶ, ರಾಜ್ಯ ಮತ್ತು ವಿಶ್ವದಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಪ್ರಮುಖ ಘಟನೆಗಳ ಸಂಕ್ಷಿಪ್ತ ಮಾಹಿತಿ."
  },

  {
    c: "Indian History",
    i: "🏛️",
    t: "ಭಾರತದ ಇತಿಹಾಸದ ಪ್ರಮುಖ ತಿರುವುಗಳು",
    d: "ಪ್ರಾಚೀನ ಭಾರತದಿಂದ ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟದವರೆಗೆ ನಮ್ಮ ಇತಿಹಾಸದ ಕುತೂಹಲಕಾರಿ ಅಧ್ಯಾಯಗಳು."
  },

  {
    c: "Karnataka History",
    i: "🪷",
    t: "ಕರ್ನಾಟಕದ ರಾಜವಂಶಗಳು ಮತ್ತು ಐತಿಹಾಸಿಕ ಸ್ಥಳಗಳು",
    d: "ಚಾಲುಕ್ಯರು, ಹೊಯ್ಸಳರು, ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ ಮತ್ತು ಕರ್ನಾಟಕದ ಶ್ರೀಮಂತ ಪರಂಪರೆಯ ಪರಿಚಯ."
  },

  {
    c: "Science & Technology",
    i: "🔬",
    t: "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಮತ್ತು ಹೊಸ ತಂತ್ರಜ್ಞಾನದ ಜಗತ್ತು",
    d: "AI, ಬಾಹ್ಯಾಕಾಶ, ವಿಜ್ಞಾನ ಮತ್ತು ತಂತ್ರಜ್ಞಾನದಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಹೊಸ ಬೆಳವಣಿಗೆಗಳನ್ನು ಸರಳ ಕನ್ನಡದಲ್ಲಿ ತಿಳಿದುಕೊಳ್ಳಿ."
  },

  {
    c: "Cinema",
    i: "🎬",
    t: "ಕನ್ನಡ ಚಿತ್ರರಂಗದ ಕುತೂಹಲಕಾರಿ ಸಂಗತಿಗಳು",
    d: "ಕನ್ನಡ ಮತ್ತು ಭಾರತೀಯ ಚಿತ್ರರಂಗದ ಸಿನಿಮಾಗಳು, ಕಲಾವಿದರು, ನಿರ್ದೇಶಕರು ಮತ್ತು ವಿಶೇಷ ಕಥೆಗಳು."
  },

  {
    c: "Sports",
    i: "🏏",
    t: "ಕ್ರೀಡಾ ಜಗತ್ತಿನ ಪ್ರಮುಖ ಸುದ್ದಿಗಳು ಮತ್ತು ದಾಖಲೆಗಳು",
    d: "ಕ್ರಿಕೆಟ್ ಸೇರಿದಂತೆ ವಿವಿಧ ಕ್ರೀಡೆಗಳ ಪ್ರಮುಖ ಘಟನೆಗಳು, ದಾಖಲೆಗಳು ಮತ್ತು ಕುತೂಹಲಕಾರಿ ಸಂಗತಿಗಳು."
  },

  {
    c: "Mystery",
    i: "🔎",
    t: "ಇತಿಹಾಸದ ಇನ್ನೂ ಬಗೆಹರಿಯದ ರಹಸ್ಯಗಳು",
    d: "ಪುರಾತತ್ವ, ಕಳೆದುಹೋದ ನಗರಗಳು ಮತ್ತು ಕುತೂಹಲ ಹುಟ್ಟಿಸುವ ಇತಿಹಾಸದ ರಹಸ್ಯಗಳನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ."
  },

  {
    c: "Indian History",
    i: "📜",
    t: "ಭಾರತದ ಪ್ರಸಿದ್ಧ ಸ್ಮಾರಕಗಳ ಹಿಂದಿರುವ ಕಥೆಗಳು",
    d: "ಕೋಟೆಗಳು, ದೇವಾಲಯಗಳು ಮತ್ತು ಐತಿಹಾಸಿಕ ಸ್ಮಾರಕಗಳ ಹಿಂದೆ ಅಡಗಿರುವ ಕುತೂಹಲಕಾರಿ ಕಥೆಗಳು."
  },

  {
    c: "Karnataka History",
    i: "🏰",
    t: "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ವೈಭವ",
    d: "ಹಂಪಿ, ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ, ಕಲೆ, ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯ ಪರಿಚಯ."
  },

  {
    c: "Science & Technology",
    i: "🚀",
    t: "ಬಾಹ್ಯಾಕಾಶದ ಅದ್ಭುತ ಜಗತ್ತು",
    d: "ಗ್ರಹಗಳು, ನಕ್ಷತ್ರಗಳು, ಬಾಹ್ಯಾಕಾಶ ಸಂಶೋಧನೆ ಮತ್ತು ಮಾನವನ ಅಂತರಿಕ್ಷ ಯಾನದ ಕುತೂಹಲಕಾರಿ ಮಾಹಿತಿ."
  }

];


let current = "All";


const categories = [
  "All",
  "News",
  "Indian History",
  "Karnataka History",
  "Science & Technology",
  "Cinema",
  "Sports",
  "Mystery"
];


const categoryNames = {

  "All": "ಎಲ್ಲಾ ವಿಷಯಗಳು",

  "News": "ಸುದ್ದಿ",

  "Indian History": "ಭಾರತೀಯ ಇತಿಹಾಸ",

  "Karnataka History": "ಕರ್ನಾಟಕ ಇತಿಹಾಸ",

  "Science & Technology": "ವಿಜ್ಞಾನ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ",

  "Cinema": "ಸಿನಿಮಾ",

  "Sports": "ಕ್ರೀಡೆ",

  "Mystery": "ರಹಸ್ಯ"

};


function render(list = articles) {

  const box = document.getElementById("articles");

  const empty = document.getElementById("empty");


  box.innerHTML = "";


  if (!list.length) {

    empty.hidden = false;

    return;

  }


  empty.hidden = true;


  list.forEach(article => {

    const categoryName =
      categoryNames[article.c] || article.c;


    box.insertAdjacentHTML(

      "beforeend",

      `
      <article class="article">

        <div class="thumb">
          ${article.i}
        </div>

        <div class="article-body">

          <span class="tag">
            ${categoryName}
          </span>

          <h3>
            ${article.t}
          </h3>

          <p>
            ${article.d}
          </p>

          <span class="date">
            14 ಆಗಸ್ಟ್ 2026 • ಇನ್ನಷ್ಟು ಓದಿ →
          </span>

        </div>

      </article>
      `

    );

  });

}


function renderChips() {

  const chips =
    document.getElementById("chips");


  chips.innerHTML = categories.map(category => {

    const name =
      categoryNames[category];


    if (category === "All") {

      return `
        <button
          class="chip ${current === "All" ? "active" : ""}"
          onclick="showHome()">

          ${name}

        </button>
      `;

    }


    return `
      <button
        class="chip ${current === category ? "active" : ""}"
        onclick="filterCategory('${category}')">

        ${name}

      </button>
    `;

  }).join("");

}


function filterCategory(category) {

  current = category;


  document.getElementById("sectionTitle").textContent =
    categoryNames[category];


  const searchText =
    document
      .getElementById("search")
      .value
      .toLowerCase();


  const filtered = articles.filter(article => {

    const matchesCategory =
      category === "All" ||
      article.c === category;


    const fullText =
      `${article.t} ${article.d} ${article.c}`
      .toLowerCase();


    const matchesSearch =
      !searchText ||
      fullText.includes(searchText);


    return matchesCategory && matchesSearch;

  });


  render(filtered);

  renderChips();


  const content =
    document.querySelector(".content-section");


  if (content) {

    window.scrollTo({

      top: content.offsetTop - 80,

      behavior: "smooth"

    });

  }

}


function searchArticles() {

  const searchText =
    document
      .getElementById("search")
      .value
      .toLowerCase();


  const filtered = articles.filter(article => {

    const matchesCategory =
      current === "All" ||
      article.c === current;


    const fullText =
      `${article.t} ${article.d} ${article.c}`
      .toLowerCase();


    const matchesSearch =
      !searchText ||
      fullText.includes(searchText);


    return matchesCategory && matchesSearch;

  });


  render(filtered);

}


function showHome() {

  current = "All";


  document.getElementById("sectionTitle").textContent =
    "ಮುಖ್ಯ ಲೇಖನಗಳು";


  document.getElementById("search").value =
    "";


  render();

  renderChips();


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}


function toggleMenu() {

  const nav =
    document.getElementById("nav");


  nav.classList.toggle("open");

}


/* Website ಆರಂಭವಾದಾಗ */

render();

renderChips();
