const API_URL = "https://script.google.com/macros/s/AKfycbwTvaf6H0ETygmY5bRJXP_5QgLYaeIYcXAjp0JtCaMB1mCxa_TMYKPaIZ5hTUCyGoqAVg/exec";

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


// Image URL ಸರಿಪಡಿಸುವ function
function getImageUrl(url) {

  if (!url) return "";

  url = String(url).trim();

  // Google Drive link
  if (url.includes("drive.google.com")) {

    let match =
      url.match(/\/d\/([^/]+)/);

    if (match && match[1]) {

      return "https://drive.google.com/thumbnail?id=" +
        match[1] +
        "&sz=w1000";

    }

    // open?id=FILE_ID
    match =
      url.match(/[?&]id=([^&]+)/);

    if (match && match[1]) {

      return "https://drive.google.com/thumbnail?id=" +
        match[1] +
        "&sz=w1000";

    }

  }

  return url;
}


// Google Sheetನಿಂದ articles
async function loadArticles() {

  const box =
    document.getElementById("articles");

  box.innerHTML = `
    <div style="padding:30px;text-align:center;">
      ಲೇಖನಗಳನ್ನು ತರಲಾಗುತ್ತಿದೆ...
    </div>
  `;

  try {

    const response =
      await fetch(API_URL);

    if (!response.ok) {
      throw new Error("API error");
    }

    articles =
      await response.json();

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

  const box =
    document.getElementById("articles");

  const empty =
    document.getElementById("empty");

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


    const imageUrl =
      getImageUrl(article.image);


    let imageContent = `
      <div class="no-image">
        📰
      </div>
    `;


    if (imageUrl) {

      imageContent = `
        <img
          src="${imageUrl}"
          alt="${article.title || "ವಿಶ್ವ ಕನ್ನಡ"}"
          loading="lazy"
          style="
            width:100%;
            height:100%;
            object-fit:cover;
            display:block;
          "
          onerror="
            this.style.display='none';
            this.parentElement.innerHTML='📰';
          "
        >
      `;

    }


    box.insertAdjacentHTML(
      "beforeend",

      `
      <div>
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
      ${article.date || ""}
    </span>
    
</div>

  </div>

</article>

</div>      `
    );

  });

}


// Category chips
function renderChips() {

  const chips =
    document.getElementById("chips");

  chips.innerHTML =
    categories.map(category => {

      const name =
        categoryNames[category];


      return `
        <button
          class="chip ${
            current === category
              ? "active"
              : ""
          }"
          onclick="${
            category === "All"
              ? "showHome()"
              : `filterCategory('${category}')`
          }">

          ${name}

        </button>
      `;

    }).join("");

}


// Category filter
function filterCategory(category) {

  current = category;

  document.getElementById(
    "sectionTitle"
  ).textContent =
    categoryNames[category];


  const searchText =
    document
      .getElementById("search")
      .value
      .toLowerCase();


  const filtered =
    articles.filter(article => {

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


      return categoryMatch &&
             searchMatch;

    });


  render(filtered);

  renderChips();

}


// Search
function searchArticles() {

  const searchText =
    document
      .getElementById("search")
      .value
      .toLowerCase();


  const filtered =
    articles.filter(article => {

      const categoryMatch =
        current === "All" ||
        article.category === current;


      const fullText =
        `${article.title || ""}
         ${article.description || ""}
         ${article.category || ""}`
        .toLowerCase();


      return categoryMatch &&
        (!searchText ||
         fullText.includes(searchText));

    });


  render(filtered);

}


// Home
function showHome() {

  current = "All";

  document.getElementById(
    "sectionTitle"
  ).textContent =
    "ಮುಖ್ಯ ಲೇಖನಗಳು";

  document.getElementById(
    "search"
  ).value = "";

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

async function deleteArticle(id){

  alert("Delete clicked ID = " + id);

  if(!confirm("ಈ ಲೇಖನವನ್ನು delete ಮಾಡಬೇಕೆ?")){
    return;
  }
  const form = new URLSearchParams();

  form.append("action","delete");

  form.append("row", id + 2);


  const response =
    await fetch(API_URL,{
      method:"POST",
      headers:{
        "Content-Type":
        "application/x-www-form-urlencoded"
      },
      body:form.toString()
    });


  const result =
    await response.json();


  if(result.success){

    alert("Article deleted");

    loadArticles();

  }
  else{

    alert(result.error);

  }

}


function editArticle(id){

  alert("Edit option coming next");

}


// Start
loadArticles();
