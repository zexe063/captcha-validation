let captchabox = document.querySelector(".captcha");
let captchacheck = document.querySelector(".checker");
let refresh = document.querySelector(".refresh");
let check = document.querySelector('.check');
let container = document.querySelector('.container');
console.log(container);


function randomcaptcha(){
    let value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz1234567890";
    let newcaptcha = "";

    for(i=0; i<8; i++){
    newcaptcha = newcaptcha+value[Math.floor(Math.random()*value.length)];
    }
    return newcaptcha;
}

refresh.addEventListener("click",function(){
   captchabox.value = randomcaptcha();
})

check.addEventListener("click", function(){
    let error = document.querySelector(".error");

    if(captchacheck.value.match(captchabox.value)){
     error.innerHTML = "Very Nice captcha matched"
     container.classList.add('valid');   
    }

     else{
        error.innerHTML = "Ohh! Captcha Are Not Matched"
        container.classList.remove('valid');
    }



})