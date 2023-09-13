const aboutHalfBorder = document.getElementById('about-half-border')
const aboutInfoBorderBottoms = document.querySelectorAll('.about-info-border-bottom')
const aboutInfoSections = document.querySelectorAll('.about-info-section')
const aboutMapSection = document.getElementById('about-map-section')

window.addEventListener('load', ()=>{
	aboutHalfBorder.style.height = '100%'
	aboutInfoBorderBottoms.forEach(el => {
		el.style.width = '100%'
	})
	const mapTitle = aboutMapSection.querySelector('.about-title')
	mapTitle.addEventListener('click', ()=>{
		container.classList.toggle('about-el-show')
	})
	aboutInfoSections.forEach(el => {
		const title = el.querySelector('.about-title')
		const text = el.querySelector('.about-text')

		setTimeout(()=>{
			el.style.opacity = '1'
			el.style.transform = 'translateY(0%)'
			// aboutMapSection.style.opacity = '1'
			// aboutMapSection.style.transform = 'translateY(0%)'
		}, 500)
		
		title.addEventListener('click', ()=>{
			text.classList.toggle('about-el-show')
		})
	})
})



var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.55651391818643, 126.94773014108459), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var marker = new kakao.maps.Marker({
    position: options.center
});

marker.setMap(map);