const container = document.querySelector('.box');
console.log(container.textContent);

const go_btn=document.querySelector(".go");
go_btn.addEventListener('click',function(){
    
  let  x=document.querySelector(".ip_txt").value;
const request = new XMLHttpRequest();
let url = "https://restcountries.com/v2/name/" + x;

request.open('GET',url);
const data=request.send();
console.log(request.responseText);
request.addEventListener('load',function(){
    const [data] = (JSON.parse(this.responseText));
    console.log(data);
    
    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  const frame = document.createElement('div');
  frame.innerHTML=html;
  frame.classList.add('container');
    console.log(data.name);
    console.log(data.flag);
    console.log(html);
    // container.appendChild(frame);
    if(document.querySelector('.container')){
        document.querySelector('.container').remove();
    }
    container.insertAdjacentElement('beforeend',frame);
    console.log(container);
});
    console.log("hello world" , x);
   

});


document.querySelector(".ip_txt")