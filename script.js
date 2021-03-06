const nums = document.querySelectorAll('.num span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();


function runAnimation() {
  nums.forEach((num, index) => {
    const nextToLast = nums.length - 1;

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && index !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling){
        num.nextElementSibling.classList.add()
      }
    })
  })
}