const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem('portfolio-theme'))
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

  localStorage.setItem('portfolio-theme', bodyClass)
  localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
  const navUl = document.querySelector('.nav__list')

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars')
    btnHamburger.classList.add('fa-times')
    navUl.classList.add('display-nav-list')
  } else {
    btnHamburger.classList.remove('fa-times')
    btnHamburger.classList.add('fa-bars')
    navUl.classList.remove('display-nav-list')
  }
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top')

  if (
    body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    btnScrollTop.style.display = 'block'
  } else {
    btnScrollTop.style.display = 'none'
  }
}

document.addEventListener('scroll', scrollUp)

// -------

// Carousel

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  slides.forEach(slide => {
    slide.style.transform = `translateX(${offset}%)`;
  });
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

// Initial slide
showSlide(currentSlide);

// -------

// Achievements list
const achievementData = [
  { src: 'Achievements/Cert2.png', majorText: 'Perse Coding Team Challenge 2023', minorText: 'Round 1 – Merit', category: 'Computing' },
  { src: 'Achievements/Cert3.png', majorText: 'Perse Coding Team Challenge 2024', minorText: 'Round 1 – Merit', category: 'Computing' },
  { src: 'Achievements/Cert5.png', majorText: 'HCI Sieberrsec Capture The Flag (CTF) 2024', minorText: '12th place out ~50 teams – score of 3992', category: 'Computing' },
  { src: 'Achievements/Cert1.png', majorText: 'Huawei Programming Contest 2024', minorText: 'Participation', category: 'Computing' },
  { src: 'Achievements/Cert4.png', majorText: 'AI4I® – Literacy in AI', minorText: 'Certificate of Completion', category: 'Computing' },
  { src: 'Achievements/Cert24.png', majorText: 'Japan Super Science Fair (JSSF) 2024', minorText: 'Participation in a science fair in Japan', category: 'STEM' },
  { src: 'Achievements/Cert25.png', majorText: 'Design competition: creating habitats on new worlds – Science Zone 2 @ JSSF', minorText: '1st Prize. Conducted by By Dr. Saeko S. Hayashi, Institute for the Physics and Mathematics of the Universe, The University of Tokyo', category: 'STEM' },
  { src: 'Achievements/Cert12.png', majorText: 'Big-D Camp 2024 by SUTD, NP and SST', minorText: 'Design Excellence Award', category: 'STEM' },
  { src: 'ARTC_Camp_2/ARTC_Image_4.jpg', majorText: 'IDP ARTC×SimTech×SST Innovation Camp 2023', minorText: 'Design Excellence Award', category: 'STEM' },
  { src: 'Achievements/Hackathon_Tech_2024_Group_photo_copy.jpeg', majorText: 'SST-SMU IDP Technopreuship Hackathon 2024', minorText: 'Participation', category: 'STEM' },
  { src: 'Achievements/Cert6.png', majorText: '1st Singapore Physics League (SPhL) [12 June 2021]', minorText: 'Participation', category: 'Physics' },
  { src: 'Achievements/Cert7.png', majorText: 'Singapore Junior Physics Olympiad 2022 (Individual)', minorText: 'Participation', category: 'Physics' },
  { src: 'Achievements/Cert7.png', majorText: 'Singapore Junior Physics Olympiad (Team) [2nd Singapore Physics League (SPhL)]', minorText: 'Honourable Mention', category: 'Physics' },
  { src: 'Achievements/Cert11.png', majorText: 'SST Book Prize (S3)', minorText: 'Mathematics', category: 'Maths' },
  { src: 'Achievements/Cert8.png', majorText: 'Australian Mathematics Competition 2022', minorText: 'Certificate of Credit (Year Eight, Junior Division)', category: 'Maths' },
  { src: 'Achievements/Cert9.png', majorText: 'Australian Mathematics Competition 2023', minorText: 'Certificate of Credit (Year Eight, Intermediate Division)', category: 'Maths' },
  { src: 'Achievements/Cert23.png', majorText: 'Australian Mathematics Competition 2024', minorText: 'Profiency Award (Year Ten, Intermediate Division)', category: 'Maths' },
  { src: 'Achievements/Cert10.png', majorText: 'Singapore and Asian Schools Math Olympiad 2023', minorText: 'Bronze Award (Grade 9)', category: 'Maths' },
  { src: 'Achievements/SASMO-2021.png', majorText: 'Singapore and Asian Schools Math Olympiad 2021', minorText: '(Certificate unavailable) Participation (Grade 7)', category: 'Maths' },
  { src: 'Achievements/Cert14.jpeg', majorText: 'International Math Contest 2021', minorText: 'Participation', category: 'Maths' },
  { src: 'Achievements/Cert15.jpeg', majorText: 'International Math Contest 2023', minorText: 'Certificate of Merit', category: 'Maths' },
  { src: 'Achievements/Cert16.png', majorText: 'MOE Edusave of Academic Achievement', minorText: '2021', category: 'Academics' },
  { src: 'Achievements/Cert17.png', majorText: 'MOE Edusave Good Progress Award', minorText: '2021', category: 'Academics' },
  { src: 'Achievements/Cert18.png', majorText: 'MOE Edusave Scholarships for Independent Schools (ESIS) (Yearly Award)', minorText: '2022; For being in the top 10% of my school cohort with good conduct', category: 'Academics' },
  { src: 'Achievements/Cert19.png', majorText: 'MOE Edusave Scholarships for Independent Schools (ESIS) (Yearly Award)', minorText: '2023; For being in the top 10% of my school cohort with good conduct', category: 'Academics' },
  { src: 'Achievements/Cert20.png', majorText: "JA It's My Business!™", minorText: 'Completed in 2021', category: 'Others' },
  { src: 'Achievements/Cert21.png', majorText: "JA Economics for Success®", minorText: 'Completed in 2022', category: 'Others' },
  { src: 'Achievements/Cert22.png', majorText: "Singapore Canoe Federation – Kayaking Proficiency Personal Skill Star Award", minorText: 'One Star Award – 2023', category: 'Others' },
  // Add more achievement data as needed
];

let currentAchievementIndex = 0;
const itemsPerPage = 4;

function displayItems(container, items) {
  const itemContainer = document.getElementById('itemContainer');
  itemContainer.innerHTML = '';
  items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('achievement-item');
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.majorText;

      const majorText = document.createElement('p');
      majorText.classList.add('major-text');
      majorText.textContent = item.majorText;

      const minorText = document.createElement('p');
      minorText.classList.add('minor-text');
      minorText.textContent = item.minorText;

      itemDiv.appendChild(img);
      itemDiv.appendChild(majorText);
      itemDiv.appendChild(minorText);

      itemDiv.dataset.category = item.category;
      document.querySelector(container).appendChild(itemDiv);
      // itemContainer.appendChild(itemDiv);
  });
}

function filterItems(category) {
const items = document.querySelectorAll('.achievement-item');
items.forEach(item => {
  if (category === 'All' || item.dataset.category === category) {
    item.classList.remove('hidden');
  } else {
    item.classList.add('hidden');
  }
});
}

displayItems('.achievement-grid', achievementData);
filterItems("Computing")


function showTimeline(timelineNumber) {
  const timeline1 = document.getElementById('timeline1');
  const timeline2 = document.getElementById('timeline2');
  const timeline3 = document.getElementById('timeline3');
  const timeline4 = document.getElementById('timeline4');
  const timeline5 = document.getElementById('timeline5');

  if (timelineNumber === 1) {
    timeline1.style.display = 'flex';
    timeline2.style.display = 'none';
    timeline3.style.display = 'none';
    timeline4.style.display = 'none';
    timeline5.style.display = 'none';
    //filterActiveClass_Timeline(allTimelines, timelineNumber);
  } else if (timelineNumber === 2) {
    timeline1.style.display = 'none';
    timeline2.style.display = 'flex';
    timeline3.style.display = 'none';
    timeline4.style.display = 'none';
    timeline5.style.display = 'none';
    //filterActiveClass_Timeline(allTimelines, timelineNumber);
  } else if (timelineNumber === 3) {
    timeline1.style.display = 'none';
    timeline2.style.display = 'none';
    timeline3.style.display = 'flex';
    timeline4.style.display = 'none';
    timeline5.style.display = 'none';
    //filterActiveClass_Timeline(allTimelines, timelineNumber);
  } else if (timelineNumber === 4) {
    timeline1.style.display = 'none';
    timeline2.style.display = 'none';
    timeline3.style.display = 'none';
    timeline4.style.display = 'flex';
    timeline5.style.display = 'none';
    //filterActiveClass_Timeline(allTimelines, timelineNumber);
  } else if (timelineNumber === 5) {
    timeline1.style.display = 'none';
    timeline2.style.display = 'none';
    timeline3.style.display = 'none';
    timeline4.style.display = 'none';
    timeline5.style.display = 'flex';
    //filterActiveClass_Timeline(allTimelines, timelineNumber);
  }
}

showTimeline(1);

/* Pop-ups

document.addEventListener("DOMContentLoaded", () => {
  const openPopup = document.getElementById("openPopup");
  const closePopup = document.getElementById("closePopup");
  const popup = document.getElementById("popup");

  openPopup.addEventListener("click", () => {
    popup.style.display = "flex";
  });
  
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });
  
  window.addEventListener("click", (event) => {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});*/


window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
