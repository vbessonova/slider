const projectsArr = [
  {
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request',
    img: 'images/with_armchairs.jpg',
  },
  {
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request',
    img: 'images/slider_image/Sochi_Thieves.jpg',
  },
  {
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request',
    img: 'images/slider_image/Rostov-on-Don_Patriotic.jpg',
  },
]

const city = document.querySelector('.city')
const area = document.querySelector('.area')
const time = document.querySelector('.time')
const cost = document.querySelector('.cost')
const img = document.querySelector('.block-numb-slider__named-project-img')
const linkTest = document.querySelectorAll('.named-project-photo__title')
const circleNumber = document.querySelectorAll('.circle')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
let currentIndex = 0

arrowLeft.addEventListener('click', () => {
  currentIndex -= 1;
  if (currentIndex < 0) currentIndex = 2
  setProject(currentIndex);
})

arrowRight.addEventListener('click', () => {
  currentIndex = +currentIndex + 1;
  if (currentIndex === 3) currentIndex = 0
  setProject(currentIndex);
})

const onChangeClass = (currentNumber, nameOfClass ) => {
  for (let currentBlock of currentNumber) {
    currentBlock.addEventListener("click", () => {
      for (let item of currentNumber) {
        item.classList.remove(`${nameOfClass}_active`);
      }
      currentBlock.classList.add(`${nameOfClass}_active`);
      if (nameOfClass === 'dots') {
        currentIndex = currentBlock.dataset.number
        setProject(currentIndex);
      }
      if (nameOfClass === 'named') {
        currentIndex = currentBlock.dataset.project
        setProject(currentIndex)
      }
    })
  }
}

onChangeClass(circleNumber, 'dots')
onChangeClass(linkTest, 'named')

const setProject = (index = 1) => {
  city.innerText = projectsArr[index].city
  area.innerText = projectsArr[index].area
  time.innerText = projectsArr[index].time
  cost.innerText = projectsArr[index].cost
  img.style.backgroundImage = `url(${projectsArr[index].img})`

  combiningActions(index, circleNumber, 'dots')
  combiningActions(index, linkTest,'named')
}

const combiningActions = (index, currentNumber, nameOfClass) => {
  for (let item of currentNumber) {
    item.className = item.className.replace(` ${nameOfClass}_active`, "");
  }
  currentNumber[index].className += ` ${nameOfClass}_active`;
}