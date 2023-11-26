document.querySelector('.down_arrow').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor link
    document.querySelector('.about_us_section').scrollIntoView({ behavior: 'smooth' });
});
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var elementToHide = document.getElementById('down_arrow'); 
function hideElementOnScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        elementToHide.style.display = 'none';
    } else {
        elementToHide.style.display = 'block'; 
    }
}

window.onscroll = function() {
    hideElementOnScroll(); 
    updateLayout();
};

const images = ["lib/images/apple can.png", "lib/images/mango can.png", "lib/images/orange can.png"]
let currentIndex = 0;

function changeImage() {
    const image = document.getElementById("can");
    image.src = images[currentIndex]; 
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(changeImage, 2000); 
} 

setTimeout(changeImage, 2000);  

const headingWrapperAbout = document.querySelector('.heading-wrapper-about');
const headingWrapperproducts = document.querySelector('.heading-wrapper-products');
const headingWrappereco = document.querySelector('.heading-wrapper-eco');
const headingWrapperFAQ = document.querySelector('.heading-wrapper-FAQ');
const headingWrappercontact = document.querySelector('.heading-wrapper-contact'); 
const options = {
    threshold: 0.5
}; 

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {            
            entry.target.style.transform = 'translateX(0)';
            observer.unobserve(entry.target); // stop observing once animation is done
        } else {            
            entry.target.style.transform = 'translateX(-300px)';
        }
    });
}, options);
if (screenWidth > 768) { 
observer.observe(headingWrapperAbout);
observer.observe(headingWrapperproducts);
observer.observe(headingWrappereco);
observer.observe(headingWrapperFAQ);
observer.observe(headingWrappercontact);
}
const exploreBtn = document.querySelector('.explore_btn');
const about_para = document.querySelector('.para-wrapper') 
const eco_para = document.querySelector('.para-wrapper-eco') 

const observer1 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer1.unobserve(entry.target); 
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateY(50px)';
        }
    });
}, options);

observer1.observe(exploreBtn);
observer1.observe(about_para);  
observer1.observe(eco_para); 

function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    var allAnswers = document.querySelectorAll('.answer');
    
    allAnswers.forEach(function (a) {
        if (a.id !== answerId) {
            a.style.display = 'none';
        }
    });

    if (answer.style.display === 'none') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}
if (screenWidth > 768) {  
    var add = 0;
} else{
    var add = 500; 
}
 
function updateLayout() {
    var windowWidth = window.innerWidth; 
    var horLength = document.querySelector(".element-wrapper").scrollWidth + 130; 
    var distFromTop = document.querySelector(".products_section").offsetTop;
    var scrollDistance = distFromTop + horLength - windowWidth;
    document.querySelector(".products_section").style.height = horLength + add + "px";
     
    var scrollTop = window.pageYOffset;
    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
        document.querySelector(".element-wrapper").style.transform = "translateX(-" + (scrollTop - distFromTop) + "px)";
    }
}
 
updateLayout();

window.addEventListener("resize", function() {
    updateLayout();
});

function shop_nav(textValue) {
    sessionStorage.setItem("textValue", textValue);
    window.location.href = "shop.html";
}



 
   