const pIcture = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg','image6.jpg'];
const imgAlt = {
  'image1.jpg': 'Totoise',
  'image2.jpg': 'Heart',
  'image3.jpg':'Clock',
  'image4.jpg': 'Be Smile',
  'image5.jpg':'Night',
};
const thumbBar = document.querySelector('.thumb-bar');
const bUtton = document.querySelector('button');
const overlay = document.querySelector('.overlay');
for (let i = 0; i < pIcture.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src','photos/' + pIcture[i]);
  newImage.setAttribute('alt', imgAlt[pIcture[i]]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', function() {
    const displayedImage = document.querySelector('.displayed-img');
    displayedImage.setAttribute('src','photos/' + pIcture[i]);
    displayedImage.setAttribute('alt', imgAlt[pIcture[i]]);
  });
}
bUtton.addEventListener('click', function() {
  const currentClass = bUtton.getAttribute('class');
  if (currentClass === 'dark') {
    bUtton.setAttribute('class', 'light');
    bUtton.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    bUtton.setAttribute('class', 'dark');
    bUtton.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});