const API_URL = "https://script.google.com/macros/s/AKfycbwaeZ4DuJM3gDCikPG36kFSNQav74q-6tPqFBUqM0YKbasUi7eskjOUiotjpBxlO4GvuQ/exec";

let articles = [];
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


// Google Sheetನಿಂದ Articles ತರಲು
async function loadArticles() {

  const box = document.getElementById("articles");

  box.innerHTML = `
    <div style="padding:30px;text-align:center;">
      ಲೇಖನಗಳನ್ನು ತರಲಾಗುತ್ತಿದೆ...
    </div>
  `;

  try {

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("API error");
    }

    articles = await response.json();

    render(articles);
    renderChips();

  } catch (error) {

    console.error(error);

    box.innerHTML = `
      <div style="padding:30px;text-align:center;">
        ಲೇಖನಗಳನ್ನು ತರಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.
      </div>
    `;

  }

}


// Articles display
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
      categoryNames[article.category] ||
      article.category ||
      "ಸುದ್ದಿ";


    let imageContent = "📰";

    if (article.image && article.image.trim() !== "") {

      imageContent = `
        <img
          src="${article.image}"
          alt="${article.title}"
          style="width:100%;height:100%;object-fit:cover;">
      `;

    }


    box.insertAdjacentHTML(
      "beforeend",

      `
      <article class="article">

        <div class="thumb">
          ${imageContent}
        </div>

        <div class="article-body">

          <span class="tag">
            ${categoryName}
          </span>

          <h3>
            ${article.title || ""}
          </h3>

          <p>
            ${article.description || ""}
          </p>

          <span class="date">
            ${article.date || ""} • ಇನ್ನಷ್ಟು ಓದಿ →
          </span>

        </div>

      </article>
      `
    );

  });

}


// Category buttons
function renderChips() {

  const chips =
    document.getElementById("chips");


  chips.innerHTML = categories.map(category => {

    const name = categoryNames[category];


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


// Category filter
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

    const categoryMatch =
      category === "All" ||
      article.category === category;


    const fullText =
      `${article.title || ""}
       ${article.description || ""}
       ${article.category || ""}`
      .toLowerCase();


    const searchMatch =
      !searchText ||
      fullText.includes(searchText);


    return categoryMatch && searchMatch;

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


// Search
function searchArticles() {

  const searchText =
    document
      .getElementById("search")
      .value
      .toLowerCase();


  const filtered = articles.filter(article => {

    const categoryMatch =
      current === "All" ||
      article.category === current;


    const fullText =
      `${article.title || ""}
       ${article.description || ""}
       ${article.category || ""}`
      .toLowerCase();


    const searchMatch =
      !searchText ||
      fullText.includes(searchText);


    return categoryMatch && searchMatch;

  });


  render(filtered);

}


// Home
function showHome() {

  current = "All";

  document.getElementById("sectionTitle").textContent =
    "ಮುಖ್ಯ ಲೇಖನಗಳು";

  document.getElementById("search").value = "";

  render(articles);

  renderChips();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// Mobile menu
function toggleMenu() {

  const nav =
    document.getElementById("nav");

  nav.classList.toggle("open");

}


// Website ಆರಂಭವಾದಾಗ
loadArticles();
