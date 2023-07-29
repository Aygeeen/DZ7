const buttons = document.querySelectorAll('.btn')
const answers = document.querySelectorAll('.answer')
buttons.forEach((button, i)=>{
    button.addEventListener('click', ()=>{
        answers[i].classList.toggle('show')
        if (answers[i].classList.contains('show')){
            button.textContent = 'скрыть ответ'
        }else{
            button.textContent = 'показать ответ'
        }
    })
})
