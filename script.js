let body = document.body;
body.style.fontFamily = "Monospace";
let section = document.querySelector('.cart-container');

let content = document.createElement("div");
section.append(content);
content.style.padding = '0 1rem'
section.style.boxShadow = '2px 4px 5px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.24)';

section.style.width = '20rem';
section.style.heading = '100vh'
body.style.display = "flex";
body.style.justifyContent = "center";
let image = document.querySelector('img')
image.style.width = '100%';


let h1 = document.createElement("h1");
content.append(h1);
let heading = h1.innerText = "Running Shoe";
let createId = h1.setAttribute('id', 'heading')
h1.style.display = "flex";
h1.style.justifyContent = "center";
h1.style.fontSize = "30px";

let p = document.createElement('p');
let createParaId = p.setAttribute('id', 'para');
p.style.textAlign = "center";
p.style.opacity = '0.7'
content.append(p)
p.innerHTML = "<b>Lightweight & Breathable :</b> Exclusive design and durable materials every step feels light and breezy. Breathable, free-moving fabrics which adjust according to your foot and creates an astoundingly easy-going experience."


let createButton = document.createElement('button');
content.append(createButton);
createButton.innerHTML = "Add to cart";
createButton.style.width = '100%';
let createButtonId = createButton.setAttribute('id', 'cart-btn');
let styleBtn = document.querySelector("#cart-btn");
styleBtn.style.padding = '10px';
styleBtn.style.marginBottom = '20px';
console.log(styleBtn);
styleBtn.style.backgroundColor = '#7591FF';
styleBtn.style.border = 'none';
styleBtn.style.borderRadius = '5px';
styleBtn.style.color = 'white';