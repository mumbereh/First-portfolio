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
    description: [
      'A daily selection of privately personalized reads no accounts or sign-ups required',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    ],
    details: 'See project',
    live: 'https://mumbereh.github.io/First-portfolio',
    source: 'https://github.com/mumbereh/First-portfolio',
  },

  {
    src: 'images/4.png',
    title: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    details: 'See project',
    live: 'https://mumbereh.github.io/canopy-website',
    source: 'https://github.com/mumbereh/canopy-website',
  },

  {
    src: 'images/1.png',
    title: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    details: 'See project',
    live: 'https://mumbereh.github.io/Swampflix',
    source: 'https://github.com/mumbereh/Swampflix',
  },

  {
    src: 'images/2.png',
    title: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car. Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    details: 'See project',
    live: 'https://mumbereh.github.io/Lambada',
    source: 'https://github.com/mumbereh/Lambada',
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
        <p class="desk-praa">${project[i].description[0]}</p>
        <ul class="trainning">
          <li class="other-skills">html</li>
          <li class="ruby">Ruby on rails</li>
          <li class="other-skills">css</li>
          <li class="other-skills">javascript</li>
        </ul>
        <button class="card-btn">${project[i].details}  </button>
      </div>
    </div>
  `;

  proContainer.appendChild(card);
}

// const seeItems = document.querySelector('.card-btn');
// const cardsContainer = document.querySelector('.pop');
const section = document.createElement('div');
section.className = 'popup';

// Select the card button and the popup container
const popupModal = document.querySelector('#popup-modal');
const cardBtn = document.querySelectorAll('.card-btn');
const popupContainer = document.querySelector('.popup');

// Loop through the popups array and create the content for each popup
// popups.forEach((popup, popupindex), cardBtn((btn, btnIndex).addEventListener('click', () => {
// console.log(cardBtn)

// iterate over project objects and details button and compare index
// if indexes are same show card from that index.
// fill the content of popupContainer using matching index
project.forEach((pCard, cardIndex) => {
  cardBtn.forEach((btn, btnIndex) => {
    btn.addEventListener('click', () => {
      if (btnIndex === cardIndex) {
      // Add a class to the popup container to show it
        popupModal.style.display = 'block';
        popupModal.innerHTML = `
        <div class="popup">
          <h2 class="pop-title">${project[cardIndex].title}</h2>
          <ul class="pop-field">
            <li class="cano">CANOPY</li>
            <li class="tag">&#8226; Back End Dev </li>
            <li class="tag">&#8226; 2015</li>
          </ul>
          <div class="pop-img-container">
            <img class="pop-img" src="${project[cardIndex].src}" alt="">
          </div>
          <div class="pop-para">
            <p>${project[cardIndex].description}</p>
          </div>
          <div class="pop-skills">
            <ul class="pop-training">
              <li class="other-skills">HTML</li>
              <li class="other-skills">CSS</li>
              <li class="other-skills">JavaScript</li>
              <li class="ruby">Ruby </li>
              <li class="bootstrap" >BootStrap</li>
            </ul>
          </div>
          <div class="pop-links">
            <button class="pop-link1 pop-card-btn" type="submit">
              See source
                <img class="search" src="icon/popup.png">
            </button>
            <button class="pop-link2 pop-card-btn" type="submit">
              See source<img class="search" src="icon/popup.png">
            </button>
          </div>

      </div> `;

        popupContainer.style.display = 'flex';
      }
    });
  });
});