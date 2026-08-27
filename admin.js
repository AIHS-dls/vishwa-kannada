async function deleteArticle(id){

  if(!confirm("ಈ ಲೇಖನವನ್ನು delete ಮಾಡಬೇಕೆ?")){
    return;
  }


  const form = new URLSearchParams();

  form.append("action","delete");

  form.append("row", id + 2);


  const response =
    await fetch(API_URL,{
      method:"POST",
      body:form
    });


  const text =
    await response.text();


  alert(text);

  console.log(text);

}
