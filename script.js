let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}
document.querySelectorAll('input[type="number"]').forEach(inputnumber =>{
    inputnumber.oninput = () =>{
        if(inputnumber.ariaValueMax.length > inputnumber.maxlength) inputnumber.value = inputnumber.value.slice(0, inputnumber.maxlength);
    };
});

function popup(){
    alert("Do not share your email password with anyone...Thank YOU!!");
};



