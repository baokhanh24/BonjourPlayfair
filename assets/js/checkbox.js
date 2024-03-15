let buttons = document.querySelectorAll(".content__list-color--itemss");

buttons.forEach(button =>{
  button.addEventListener('click' , function(){
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active')
  })
})