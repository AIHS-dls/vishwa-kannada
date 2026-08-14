const articles=[
 {c:"News",i:"📰",t:"ಇಂದಿನ ಪ್ರಮುಖ ಸುದ್ದಿಗಳು: ಭಾರತ ಮತ್ತು ವಿಶ್ವದ ಅಪ್‌ಡೇಟ್‌ಗಳು",d:"ದೇಶ, ರಾಜ್ಯ ಮತ್ತು ವಿಶ್ವದ ಪ್ರಮುಖ ಘಟನೆಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ತಿಳಿದುಕೊಳ್ಳಿ."},
 {c:"Indian History",i:"🏛️",t:"ಭಾರತದ ಇತಿಹಾಸದ ಪ್ರಮುಖ ತಿರುವುಗಳು",d:"ಪ್ರಾಚೀನ ಭಾರತದಿಂದ ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟದವರೆಗೆ ನಮ್ಮ ಇತಿಹಾಸದ ಕುತೂಹಲಕಾರಿ ಅಧ್ಯಾಯಗಳು."},
 {c:"Karnataka History",i:"🪷",t:"ಕರ್ನಾಟಕದ ರಾಜವಂಶಗಳು ಮತ್ತು ಐತಿಹಾಸಿಕ ಸ್ಥಳಗಳು",d:"ಚಾಲುಕ್ಯರು, ಹೊಯ್ಸಳರು, ವಿಜಯನಗರ ಮತ್ತು ಕರ್ನಾಟಕದ ಶ್ರೀಮಂತ ಪರಂಪರೆಯ ಪರಿಚಯ."},
 {c:"Science & Technology",i:"🔬",t:"AI, Space ಮತ್ತು ಹೊಸ ತಂತ್ರಜ್ಞಾನಗಳ ಜಗತ್ತು",d:"ವಿಜ್ಞಾನ ಮತ್ತು ತಂತ್ರಜ್ಞಾನದಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಬೆಳವಣಿಗೆಗಳನ್ನು ಸರಳ ಕನ್ನಡದಲ್ಲಿ."},
 {c:"Cinema",i:"🎬",t:"ಕನ್ನಡ ಚಿತ್ರರಂಗ: ಹೊಸ ಸಿನಿಮಾಗಳು ಮತ್ತು ಸಿನಿ ಕಥೆಗಳು",d:"ಚಿತ್ರಗಳು, ಕಲಾವಿದರು, ನಿರ್ದೇಶಕರು ಮತ್ತು ಭಾರತೀಯ ಸಿನಿಮಾದ ವಿಶೇಷ ಕಥೆಗಳು."},
 {c:"Sports",i:"🏏",t:"ಕ್ರಿಕೆಟ್ ಮತ್ತು ಕ್ರೀಡಾ ಜಗತ್ತಿನ ಕುತೂಹಲಕಾರಿ ಸಂಗತಿಗಳು",d:"ಕ್ರಿಕೆಟ್ ಸೇರಿದಂತೆ ವಿವಿಧ ಕ್ರೀಡೆಗಳ ದಾಖಲೆಗಳು, ಇತಿಹಾಸ ಮತ್ತು ಪ್ರಮುಖ ಕ್ಷಣಗಳು."},
 {c:"Mystery",i:"🔎",t:"ಇತಿಹಾಸದ ಇನ್ನೂ ಬಗೆಹರಿಯದ ರಹಸ್ಯಗಳು",d:"ಪುರಾತತ್ವ, ಕಳೆದುಹೋದ ನಗರಗಳು ಮತ್ತು ಕುತೂಹಲ ಹುಟ್ಟಿಸುವ ಇತಿಹಾಸದ ಪ್ರಶ್ನೆಗಳು."},
 {c:"Indian History",i:"📜",t:"ಭಾರತದ ಸ್ಮಾರಕಗಳು: ಕಲ್ಲಿನಲ್ಲಿ ಉಳಿದ ಕಥೆಗಳು",d:"ಭಾರತದ ಪ್ರಸಿದ್ಧ ಕೋಟೆಗಳು, ದೇವಾಲಯಗಳು ಮತ್ತು ಸ್ಮಾರಕಗಳ ಹಿಂದಿರುವ ಕಥೆಗಳನ್ನು ತಿಳಿಯಿರಿ."},
 {c:"Karnataka History",i:"🏰",t:"ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ವೈಭವ",d:"ಹಂಪಿಯ ಇತಿಹಾಸ, ಕಲೆ, ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ವಿಜಯನಗರದ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರಭಾವ."}
];

let current="All";
const categories=["All","News","Indian History","Karnataka History","Science & Technology","Cinema","Sports","Mystery"];

function render(list=articles){
 const box=document.getElementById("articles"), empty=document.getElementById("empty");
 box.innerHTML="";
 if(!list.length){empty.hidden=false;return} empty.hidden=true;
 list.forEach(a=>{
  box.insertAdjacentHTML("beforeend",`<article class="article">
   <div class="thumb">${a.i}</div><div class="article-body">
   <span class="tag">${a.c}</span><h3>${a.t}</h3><p>${a.d}</p><span class="date">14 Aug 2026 • Read more →</span>
   </div></article>`);
 });
}
function renderChips(){
 document.getElementById("chips").innerHTML=categories.map(c=>`<button class="chip ${c===current?"active":""}" onclick="${c==="All"?"showHome()":`filterCategory('${c}')`}">${c}</button>`).join("");
}
function filterCategory(c){
 current=c;
 document.getElementById("sectionTitle").textContent=c==="All"?"ಮುಖ್ಯ ಲೇಖನಗಳು":c;
 const q=document.getElementById("search").value.toLowerCase();
 render(articles.filter(a=>(c==="All"||a.c===c)&&(!q||`${a.t} ${a.d} ${a.c}`.toLowerCase().includes(q))));
 renderChips(); window.scrollTo({top:document.querySelector(".content-section").offsetTop-80,behavior:"smooth"});
}
function searchArticles(){
 const q=document.getElementById("search").value.toLowerCase();
 render(articles.filter(a=>(current==="All"||a.c===current)&&(!q||`${a.t} ${a.d} ${a.c}`.toLowerCase().includes(q))));
}
function showHome(){current="All";document.getElementById("sectionTitle").textContent="ಮುಖ್ಯ ಲೇಖನಗಳು";document.getElementById("search").value="";render();renderChips();window.scrollTo({top:0,behavior:"smooth"});}
function toggleMenu(){document.getElementById("nav").classList.toggle("open")}
render();renderChips();
