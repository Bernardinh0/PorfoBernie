const sections = document.querySelectorAll('.section')

console.log(sections)
for (let i = 0; i < sections.length; i++) {
	sections[i].addEventListener('click', () => {
		//Si il est deja actif
		cleanSection(sections);//remove class active
 
		sections[i].classList.add('active') //On active la premiere section
		sections[i].children[1].style.display='flex';
	
	});//End click
}

function cleanSection(elements) {
	for (let i = 0; i < elements.length; i++) {
		elements[i].classList.remove('active');
		elements[i].children[1].style.display = 'none';
	}
}


//20/02/22: Fenêtre avec texte qui disparait
/*for (let i = 0; i < sections.length; i++) {
	sections[i].addEventListener('click', hideContent)
	bool = true
	function hideContent() {
		let sectionContent = document.querySelectorAll('.sectionContent')
		for (j = 0; j < sectionContent.length; j++) {
			if (bool && i != j) {
				console.log(sectionContent)
				sectionContent[j].classList.add('sectionConetntJs')
				bool = false
				console.log(bool)
			} else {
				if (i == j) {
					sectionContent[j].classList.remove('sectionConetntJs')
					bool = true
					console.log(bool)
				}
			}
		}
	}
}*/

/*
// On click event for each section
	if(section.contains('active')){ //si ta section a déjà la classe "active"
		sections.forEach((section)=>{
			section.addEventListener('click',()=>{
				// remove active class from all another section
				// and add it to the selected section
				sections.forEach((section) => {
					section.classList.remove('active')
				})
		section[0].classList.add('active')
		
		}else{ //Sinon on ajoute la classe "active"
		section.classList.add('active')
		}
})
})*/
/*
console.log('expandingCards')
const panels = document.querySelectorAll(".panel")
for (let i = 0; i < panels.length; i++) {
	
	panels[i].addEventListener('click',function(){
		console.log(this)
		// this est le panel sur lequel nous avons cliqué
		removeAllActiveClass(panels)
		
		this.classList.add('active')
	})
}
function removeAllActiveClass(panels){
	for (var j = 0; j < panels.length; j++) {
			panels[j].classList.remove('active')
	}
}*/


/*CAROUSSEL
CAROUSSEL
CAROUSSEL
CAROUSSEL
CAROUSSEL
CAROUSSEL*/


/*Accordeon*/

let photos = document.querySelectorAll('.photo')
let myIntrests = document.querySelector('.myIntrestsPhotos')
let intrestsBtnR = document.querySelector('#buttonRight')
let intrestsBtnL = document.querySelector('#buttonLeft')
let intrestsText = document.querySelectorAll(".intrestsText  p")

IntrestsCount = 0

function changeImg() {


   if (IntrestsCount > photos.length - 1) {

      IntrestsCount = 0
   }
   if (IntrestsCount < 0) {

      IntrestsCount = photos.length - 1
   }




   swipe = 'translateX(' + IntrestsCount * -700 + 'px)'

   myIntrests.style.transform = swipe


}

for (i = 0; i < intrestsText.length; i++) {

   intrestsText[i].classList.add("intrestTextJs2")
   console.log(intrestsText[i])
   intrestsText[0].classList.remove("intrestTextJs2")
}

function changeIntrestsText() {
   console.log(IntrestsCount)

   for (i = 0; i < intrestsText.length + 1; i++) {

      intrestsText[IntrestsCount].classList.remove("intrestTextJs2")

      intrestsText[i].classList.add("intrestTextJs2")

   }
}

intrestsBtnR.addEventListener('click', swipeRight)


function swipeRight() {




   IntrestsCount++
   changeImg()


   changeIntrestsText()


}

intrestsBtnL.addEventListener('click', swipeLeft)

function swipeLeft() {

   IntrestsCount--

   changeImg()

   changeIntrestsText()

   console.log(IntrestsCount)
}
