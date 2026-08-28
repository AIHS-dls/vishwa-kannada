const API_URL = "https://script.google.com/macros/s/AKfycbwTvaf6H0ETygmY5bRJXP_5QgLYaeIYcXAjp0JtCaMB1mCxa_TMYKPaIZ5hTUCyGoqAVg/exec";

async function loadAdminArticles(){

  const box =
    document.getElementById("articles");


  const response =
    await fetch(API_URL);


  const articles =
    await response.json();


  box.innerHTML = "";


  articles.forEach((article,index)=>{

    box.innerHTML += `

    <div style="
      background:#f5f5f5;
      padding:15px;
      margin:10px 0;
      border-radius:10px;
    ">

    <h3>${article.title}</h3>

    <p>${article.date}</p>


    <button onclick="deleteArticle(${index})">
    🗑 Delete
    </button>


    </div>

    `;

  });

}



async function deleteArticle(id){

  if(!confirm("ಈ ಲೇಖನ delete ಮಾಡಬೇಕೆ?")){
    return;
  }


  const form =
    new URLSearchParams();


  form.append("action","delete");

  form.append("row", id + 2);


  const response =
    await fetch(API_URL,{
      method:"POST",
      headers:{
        "Content-Type":
        "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body:
      form.toString()
    });


  const result =
    await response.json();


  if(result.success){

    alert("Deleted");

    loadAdminArticles();

  }
  else{

    alert(result.error);

  }

}


loadAdminArticles();
