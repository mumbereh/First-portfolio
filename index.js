/* eslint-disable max-len */

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const closeBtn = document.querySelector('.close-button');
const links = document.querySelectorAll('.links');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuToggle.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('show');
  closeBtn.style.display = 'none';
  menuToggle.style.display = 'block';
});

links.forEach((n) => n.addEventListener('click', () => {
  nav.classList.remove('show');
  menuToggle.style.display = 'block';
}));

const project = [
  {
    src: 'images/61.png',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required',
  },
  {
    src: 'images/4.png',
    title: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  },
  {
    src: 'images/1.png',
    title: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  },
  {
    src: 'images/2.png',
    title: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car. Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  },
];

const proContainer = document.querySelector('.pro-container');

for (let i = 0; i < project.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <div class="card">
      <div class="pic">
        <img src="${project[i].src}" alt="">
      </div>
      <div>
        <h2 class="title">${project[i].title}</h2>
        <ul class="field">
          <li class="cano">FACEBOOK</li>
          <li class="tag">&#8226; Full Stack Dev </li>
          <li class="tag">&#8226; 2015</li>
        </ul>
        <p class="desk-praa">${project[i].description}</p>
        <ul class="trainning">
          <li class="other-skills">html</li>
          <li class="ruby">Ruby on rails</li>
          <li class="other-skills">css</li>
          <li class="other-skills">javascript</li>
        </ul>
        <button  onclick="openPopup()" class="card-btn">See Project</button>
      </div>
    </div>
  `;

  proContainer.appendChild(card);
}

const section = document.createElement('div');
section.className = 'popup';

const popups = [
  {
    id: '01',
    src: 'images/61.png',
    title: 'Tonic',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    live: 'https://mumbereh.github.io/First-portfolio',
    project: 'https://github.com/mumbereh/First-portfolio',
  },
  {
    id: '02',
    src: 'images/4.png',
    title: 'Multi-Post Stories',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    live: 'https://mumbereh.github.io/canopy-website',
    project: 'https://github.com/mumbereh/canopy-website',
  },
  {
    id: '03',
    src: 'images/1.png',
    title: 'Facebook 360',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    live: 'https://mumbereh.github.io/Swampflix',
    project: 'https://github.com/mumbereh/Swampflix',
  },
  {
    id: '04',
    src: 'images/2.png',
    title: 'Uber Navigation',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    live: 'https://mumbereh.github.io/Lambada',
    project: 'https://github.com/mumbereh/Lambada',
  },
];

// Select the card button and the popup container
const cardBtn = document.querySelector('.card-btn');
const popupContainer = document.querySelector('.popup');

// Create a function to show the popup
function showPopup() {
  // Add a class to the popup container to show it
  popupContainer.classList.add('show');

  // Remove any existing content from the popup
  popupContainer.innerHTML = '';

  // Loop through the popups array and create the content for each popup
  popups.forEach((popup) => {
    const popupContent = `
      <div class="popup">
        <h2 class="title">${popup.title}</h2>
        <ul class="field">
          <li class="cano">CANOPY</li>
          <li class="tag">&#8226; Back End Dev </li>
          <li class="tag">&#8226; 2015</li>
        </ul>
        <img src="${popup.src}" alt="">
        <div class="pop-para">
          <p>${popup.description1}</p><br>
          <p>${popup.description2}</p>
        </div>
        <div class="pop-skills">
       <ul class="trainning2">
        <li class="other-skills">HTML</li>
        <li class="other-skills">CSS</li>
        <li class="other-skills">JavaScript</li>
        <li id="desk2" class="ruby">Ruby </li>
        <li id="desk2" class="other-skills" >BootStrap</li>
    </ul>
    <a href="https://mumbereh.github.io/First-portfolio">
    <button type="submit">See source<img class="search" src="icon/popup.png"></button>
  </a>
    <a href="https://github.com/mumbereh/First-portfolio">
    <button type="submit">See source<img class="search" src="icon/popup.png"></button>
  </a>
</div> 
      
    `;
    // Append the popup content to the popup container
    popupContainer.innerHTML = popupContent;
  });
}

// Add a click event listener to the card button to show the popup when clicked
cardBtn.addEventListener('click', showPopup);

/* eslint-disable max-len */