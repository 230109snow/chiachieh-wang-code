function fetchData() {
    const url = `https://api.thecatapi.com/v1/images/search`;

    fetch(url,{headers: {
        'x-api-key': "live_JnDJxEA1DCW2HgQEte7GlLzx1dphr0XGNQ0qiMMMHy2yZjQ53hbZN3q44lD1xg9s"
      }}).then((response) => response.json()).then((data) => {
        console.log(data);
        const divField = document.getElementById("container");

        const img = document.createElement("img");
        img.width = 300;
        img.src=data[0].url;

        divField.appendChild(img);

    })
 
  
}

async function fetchD(){
  const url = `https://api.thecatapi.com/v1/images/search`;
  const response = await fetch(url);
  const data = response.json();

  console.log(data);
}