import projectsdat from '../project_data.js'


const projectIndex = localStorage.getItem('index');
const main = document.querySelector('main')
const worksSlidingTextWrapper = document.getElementById('works-sliding-text-wrapper')
const worksSlidingBorderBottom = document.getElementById('works-sliding-border-bottom');

const projectImg = projectsdat[projectIndex].img;

window.addEventListener('load', ()=>{
    worksSlidingTextWrapper.classList.add('el-show')
    worksSlidingBorderBottom.style.width = '100%'
})

for(let i = 0; i < projectImg.length; i++){
    const imageEl = document.createElement('img');
    imageEl.setAttribute('src', projectImg[i])
    imageEl.setAttribute('alt', 'workshop-p project image')
    imageEl.classList.add('project-img')
    if(i == projectImg.length-1){
        imageEl.style.marginBottom = '50px'
    }
    
    main.appendChild(imageEl)

    imageEl.addEventListener('load', ()=>{
        setTimeout(()=>{
            imageEl.style.opacity = '1'
            imageEl.style.transform = 'translateY(0%)'
        }, 200)
        
    })
}
