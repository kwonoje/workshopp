const header = document.querySelector('header')
const headerBorderBottom = document.getElementById('header-border-bottom')
const footer = document.getElementById('footer');
const footerBorderTop = document.getElementById('footer-border-top')

// 페이지 이동

function goToWorks(){
    location.href = '/works';
}

function goToHome(){
    location.href = '/';
}


window.addEventListener('load', ()=>{
    footer.style.transform = 'translateY(0%)'
    footerBorderTop.style.width = '100%'
    headerBorderBottom.style.width = '100%'
})