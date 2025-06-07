const container = document.getElementById('letter-container');
const letters = ["💓","💗","💕"];

function createFlyingLetter() {
  const letter = document.createElement('span');
  letter.classList.add('letter');
  letter.innerText = letters[(Math.floor(Math.random() * letters.length))];
  

  const size = Math.random() * 20 + 10;
  letter.style.fontSize = `${size}px`;

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const endX = (Math.random() - 0.5) * 1300;  // random x direction
  const endY = (Math.random() - 0.5) * 1300;  // random y direction

  letter.style.left = `${startX}px`;
  letter.style.top = `${startY}px`;
  letter.style.setProperty('--x', `${endX}px`);
  letter.style.setProperty('--y', `${endY}px`);

  container.appendChild(letter);

  setTimeout(() => {
    container.removeChild(letter);
  }, 8000);


}
function CreateFlingimg(){

  const startimgX = Math.random() * window.innerWidth;
  const startimgY = Math.random() * window.innerHeight;
  const endimgX = (Math.random() - 0.5) * 1500;  // random x direction
  const endimgY = (Math.random() - 0.5) * 1500;
  const urll=["img/4.jpg","img/6.jpg","img/8.jpg","img/9.jpg","img/10.jpg","img/11.jpg",
  "img/12.jpg","img/20.jpg","img/21.jpg","img/22.jpg","img/17.jpg","img/3.jpg","img/17.jpg","img/14.jpg"]
  const img = document.createElement("img");
  img.classList.add('imgg');
  img.src=urll[(Math.floor(Math.random() * urll.length))];
  img.style.left = `${startimgX}px`;
  img.style.top = `${startimgY}px`;
  img.style.setProperty('--x', `${endimgX}px`);
  img.style.setProperty('--y', `${endimgY}px`);
  container.appendChild(img);
  setTimeout(() => {
    container.removeChild(img);
  }, 15000);
}

const word="ILyNTK"
function FlyingLetter() {
  
  const letter = document.createElement('span');
  letter.classList.add('letter');
  letter.innerText = word[(Math.floor(Math.random() * word.length))];
  

  const size = Math.random() * 20 + 10;
  letter.style.fontSize = `${size}px`;

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const endX = (Math.random() - 0.5) * 1300;  // random x direction
  const endY = (Math.random() - 0.5) * 1300;  // random y direction

  letter.style.left = `${startX}px`;
  letter.style.top = `${startY}px`;
  letter.style.setProperty('--x', `${endX}px`);
  letter.style.setProperty('--y', `${endY}px`);

  container.appendChild(letter);

  setTimeout(() => {
    container.removeChild(letter);
  }, 6000);


}

// Tạo liên tục các chữ bay mỗi 100ms
setInterval(createFlyingLetter, 100);
setInterval(FlyingLetter, 100);
setInterval(CreateFlingimg, 1500);
