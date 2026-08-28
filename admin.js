const API_URL = "https://script.google.com/macros/s/AKfycbwTvaf6H0ETygmY5bRJXP_5QgLYaeIYcXAjp0JtCaMB1mCxa_TMYKPaIZ5hTUCyGoqAVg/exec";

async function deleteArticle(id){

  alert("Delete clicked: " + id);


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
        "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body:form.toString()
    });


  const result =
    await response.text();


  alert(result);

}
