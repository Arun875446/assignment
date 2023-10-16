/*=============== LOADER ===============*/
onload = () =>{
    const load = document.getElementById('load')
    
    setTimeout(() =>{
        load.style.display = 'none'
    }, 2500)
}

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== MIXITUP FILTER PRODUCTS ===============*/
let mixerProducts = mixitup('.products__content', {
    selectors: {
        target: '.products__card',
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */ 
mixerProducts.filter('.delicacies');

/* Link active products */ 
const linkProducts = document.querySelectorAll('.products__item')

function activeProducts(){
    linkProducts.forEach(l=> l.classList.remove('active-product'))
    this.classList.add('active-product')
}
linkProducts.forEach(l=> l.addEventListener('click', activeProducts))

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== EMAIL JS ===============*/
// const contactForm = document.getElementById('contact-form'),
//       contactName = document.getElementById('contact-name'),
//       contactEmail = document.getElementById('contact-email'),
//       contactProject = document.getElementById('contact-project'),
//       contactMessage = document.getElementById('contact-message')
      
// const sendEmail = (e) =>{
//   e.preventDefault()

//   // Check if the field has a value
//   if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
//     // Add and remove color
//     contactMessage.classList.remove('color-blue')
//     contactMessage.classList.add('color-red')

//     // Show message
//     contactMessage.textContent = 'Write all the input fields 📩' 
//   }else{
//     // serviceID - templateID - #form - publicKey
//     emailjs.sendForm('service_kpobgzl','template_y5g9imc','#contact-form','Y3uk2s4v25sk3eLPv')
//       .then(() =>{
//         // Show message and add color
//         contactMessage.classList.add('color-blue')
//         contactMessage.textContent = 'Message sent ✅'

//         // Remove message after three seconds
//         setTimeout(() => {
//           contactMessage.textContent = ''
//         }, 5000);

//       }, (error) =>{
//         alert('OOPS! SOMETHING HAS FAILED...', error)
//       })

//     // To clear the input field
//     contactName.value = ''
//     contactEmail.value = ''
//     contactProject.value = ''
//   }
// }
// contactForm.addEventListener('submit', sendEmail)