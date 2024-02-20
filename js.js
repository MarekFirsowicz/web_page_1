const scrollBtn = document.querySelector('.arrowDownBtn')

scrollBtn.addEventListener('click', (e)=>{
    console.log('ok')
    document.querySelector('main').scrollIntoView({
        behavior: 'smooth'})
})