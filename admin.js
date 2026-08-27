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

    location.reload();

  }
  else{

    alert(result.error);

  }

}



function editArticle(id){

  alert("Edit option coming next");

}
