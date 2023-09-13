const mainProjectSection = document.getElementById('main-project-section')
const mainHeader = document.getElementById('main-header')
const aboutTextWrapper = document.getElementById('about-text-wrapper');
const escBtnWrapper = document.getElementById('esc-btn-wrapper')

const mainImages = ['../public/images/works_img/w_001_1.png','../public/images/works_img/w_002_cover_1.jpg', '../public/images/works_img/w_003_cover_1.gif', '../public/images/works_img/w_003_cover_2.png', '../public/images/works_img/w_004_1.jpg', '../public/images/works_img/w_004_2.jpg'
,'../public/images/works_img/w_005_1.jpg','../public/images/works_img/w_005_2.jpg','../public/images/works_img/w_006_2.jpg','../public/images/works_img/w_006_cover_1.gif', '../public/images/works_img/w_006_1.png']

const createImage = async (index) => {
    const image = document.createElement('img');
    let randomWidth;

    if(window.innerWidth > 768){
        randomWidth = Math.random()*20 + 25;
    }else{
        // randomWidth = Math.random()*40 + 20;
        randomWidth = 50;
    }
    
    
    // 대표 이미지의 속성 설정
    image.setAttribute('src', mainImages[index]);
    image.setAttribute('width', randomWidth + '%');
    image.setAttribute('height', 'auto');
    image.setAttribute('alt', 'workshop-p project image')
    image.classList.add('main-project-img');

    return image
}

window.addEventListener('load', async ()=>{
    let i = 0

    for(i = 0; i <= 3; i++){

        const image = await createImage(i);

        mainProjectSection.appendChild(image);

        image.addEventListener('load', ()=>{
            setTimeout(()=>{
                image.style.opacity = '1'
                image.style.transform = 'translateY(0%)'
            }, 200)
            
        })
        image.addEventListener('click', goToWorks)
    }

    window.addEventListener('scroll', async function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;

        if(window.scrollY > 100){
            console.log(mainHeader)
            mainHeader.style.backgroundColor = 'rgba(255, 255, 255, 0)'
        }else{
            mainHeader.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        }

        // When the user is [modifier]px from the bottom, fire the event.
        let modifier = 200;
        if(currentScroll + modifier > documentHeight) {
            i++

            if(i <= mainImages.length){
                const image = await createImage(i)
                mainProjectSection.appendChild(image);

                image.addEventListener('load', ()=>{
                    setTimeout(()=>{
                        image.style.opacity = '1'
                        image.style.transform = 'translateY(0%)'
                    }, 200)
            
                })
                image.addEventListener('click', goToWorks)
            }
        }
    })

    // displayAbout();
})

function displayAbout(){
    aboutTextWrapper.style.width = '40%'
    aboutTextWrapper.style.height = '20%'
}

function goToAbout(){
    let randomPosX = Math.random()*40 + 30
    let randomPosY = Math.random()*40 + 30
    aboutTextWrapper.style.display = 'flex'

    if(window.innerWidth < 430){
        aboutTextWrapper.style.left = '50%'
        aboutTextWrapper.style.top = '50%'
    }else{
        aboutTextWrapper.style.left = randomPosX + '%'
        aboutTextWrapper.style.top = randomPosY + '%'
        
    }
    
    aboutTextWrapper.style.opacity = '0.9'
}

escBtnWrapper.addEventListener('click', ()=>{
    aboutTextWrapper.style.display = 'none' 
    aboutTextWrapper.style.opacity = '0'
})