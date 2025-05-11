let containerDiv = document.getElementById("container");

fetch('https://rickandmortyapi.com/api/character')
.then(res => res.json())
  .then(data => {
data.results.forEach(item => {
    let card=document.createElement("div")
    card.classList.add("card")
    let name=document.createElement("h4")
    let img = document.createElement("img");
    name.innerText=`${item.name}`
    img.src = item.image;
    card.appendChild(name)
    card.appendChild(img);   
    containerDiv.appendChild(card)
    });
 
  });