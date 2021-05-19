const project1 = document.querySelector('#project-1-button');
const project2 = document.querySelector('#project-2-button');
const project3 = document.querySelector('#project-3-button');
const project4 = document.querySelector('#project-4-button');
const modalbg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal')
project1.addEventListener('click',()=>{
  modal.classList.add('is-active');
});
project2.addEventListener('click',()=>{
  modal.classList.add('is-active');
});
project3.addEventListener('click',()=>{
  modal.classList.add('is-active');
});
project1.addEventListener('click',()=>{
  modal.classList.add('is-active');
});

modalbg.addEventListener('click',() => {
  modal.classList.remove('is-active');
})
