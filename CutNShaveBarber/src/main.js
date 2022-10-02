//return home page
function returnToHome(){
    window.open('index.html','_self');
    if(body.style.overflow = "hidden"){
        body.style.overflow = "auto";
    }
}

//close navigation bar
function closeNav(){
    let burger = document.getElementById('burger');
    let items = document.getElementById('buttons');
    let body = document.getElementById('body');
    
    burger.classList.toggle('change');
    items.classList.toggle('displayItem');
    body.classList.toggle('displayItem');
}

//when click burger
function burgerClick(){
    let burger = document.getElementById('burger');
    let items = document.getElementById('buttons');
    let body = document.getElementById('body');

    burger.classList.toggle('change');
    items.classList.toggle('displayItem');
    body.classList.toggle('displayItem');
}

//when scroll down, to top button appear
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    let buttonTop = document.getElementById('toTop');
    if(document.documentElement.scrollTop>=40){
        buttonTop.style.display = "block";
    }else{
        buttonTop.style.display = "none";
    }
}

//when click to top button
function toTop(){
    document.documentElement.scrollTop = 0;
}

//when click booking
function appearPopUp2(){
    let login = document.getElementById('login');
    login.classList.toggle('appear');
}


//login pop up
function appearPopUp(){
    let burger = document.getElementById('burger');
    let items = document.getElementById('buttons');
    
    let login = document.getElementById('login');

    burger.classList.toggle('change');
    items.classList.toggle('displayItem');
    login.classList.toggle('appear');
}

//close login & signup pop up
function closePopUp(){
    location.reload();
}

//signup pop up
function signupAppear(){
    let login = document.getElementById('login');
    let signup = document.getElementById('signup');

    login.classList.toggle('appear');
    signup.style.display="block";
}

//return to login page
function returnToLogin(){
    let login = document.getElementById('login');
    let signup = document.getElementById('signup');

    login.classList.toggle('appear');
    signup.style.display="none";
}

