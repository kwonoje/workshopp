// 변수
const worksMain = document.getElementById('works-main')
const cursorText = document.getElementById('cursor-text');
const worksRightSection = document.getElementById('works-right-section');
const worksLeftSection = document.getElementById('works-left-section');
const previewImage = document.getElementById('preview-img')
const prevImgSource = document.getElementById('prev-img-source')
const mainImage = document.getElementById('main-img');
const mainImgSource = document.getElementById('main-img-source')
const worksList = document.getElementById('works-list');
const worksHalfBorder = document.getElementById('works-half-border')
const worksSlidingTextWrapper = document.getElementById('works-sliding-text-wrapper')
const worksSlidingBorderBottom = document.getElementById('works-sliding-border-bottom');


const sectionRect = worksRightSection.getBoundingClientRect()
const x = sectionRect.left
const sectionWidth = worksRightSection.clientWidth

let imgIndex = 0
let projectIndex = 0

// 프로젝트 데이터 연결
import projectsdat from '../project_data.js'


async function makeProjectList(e){
    const tr = document.createElement('tr');
    tr.classList.add('work-list-tr');

    const tdIndex = document.createElement('td')
    const tdYear = document.createElement('td')
    const tdType = document.createElement('td')
    const tdLocation = document.createElement('td')

    tdIndex.innerText = e.index
    tdYear.innerText = e.year
    tdType.innerText = e.type
    tdLocation.innerText = e.location

    tr.appendChild(tdIndex);
    tr.appendChild(tdYear);
    tr.appendChild(tdType);
    tr.appendChild(tdLocation);

    worksList.appendChild(tr)
}

// Event-Listeners

window.addEventListener('load', async () => {
    let isMobile = false

    if(window.innerWidth < 430){
        isMobile = true
    }else{
        isMobile = false
    }
    
    worksSlidingTextWrapper.classList.add('el-show')
    worksHalfBorder.style.height = '100%'
    worksSlidingBorderBottom.style.width = '100%'

    console.log(isMobile)

    projectsdat.forEach(async e => {
        await makeProjectList(e)
    })

    footer.style.transform = 'translateY(0%)'
    footerBorderTop.style.width = '100%'

    const workListTr = document.querySelectorAll('.work-list-tr');

    workListTr.forEach((e, i)=>{
        if(isMobile){
            e.addEventListener('click', ()=>{
                localStorage.setItem('index', i.toString())
                window.location.href='../../views/mo_project_img.html'
            })
            
        }else{
            e.addEventListener('mouseover', ()=>{
                prevImgSource.setAttribute('src', projectsdat[i].img[0])
                // previewImage.style.opacity = '1'
            })
            e.addEventListener('mouseleave', ()=>{
                previewImage.style.opacity = '0'
            })
            e.addEventListener('click', ()=>{
                worksLeftSection.style.width = '30%'
                worksRightSection.style.width = '70%'
                worksHalfBorder.style.left = '30%'
                mainImage.style.opacity = '1'
                projectIndex = i
                imgIndex = 0
                mainImgSource.setAttribute('src', projectsdat[projectIndex].img[0])
            })
        }
        
    })
    worksList.classList.add('el-show')
}
)

worksRightSection.addEventListener('mousemove', (e)=>{
    let imageList = projectsdat[projectIndex].img
    const cursorX = e.clientX
    const cursorY = e.clientY

    cursorText.style.opacity = '1'
    cursorText.style.left = cursorX + 'px'
    cursorText.style.top = cursorY + 'px'

    cursorText.innerText = `${imgIndex + 1}/${imageList.length}`
})

worksRightSection.addEventListener('mouseleave', ()=>{
    cursorText.style.opacity = '0'
})

worksRightSection.addEventListener('click', (e)=>{
    let imageList = projectsdat[projectIndex].img

    imgIndex++

    if(imgIndex > imageList.length-1){
        imgIndex = 0
    }

    cursorText.innerText = `${imgIndex + 1}/${imageList.length}`

    mainImgSource.setAttribute('src', imageList[imgIndex]);

    mainImage.style.opacity = '1'
})

window.addEventListener("keydown", (e) => {
    let imageList = projectsdat[projectIndex].img

    if(e.key == 'ArrowRight'){
        imgIndex++
        
        if(imgIndex > imageList.length-1){
            imgIndex = 0
        }
        cursorText.innerText = `${imgIndex + 1}/${imageList.length}`
    }else if(e.key == 'ArrowLeft'){
        imgIndex--
        
        if(imgIndex < 0){
            imgIndex = imageList.length-1
        }
        cursorText.innerText = `${imgIndex + 1}/${imageList.length}`
    }

    mainImgSource.setAttribute('src', imageList[imgIndex]);
});

