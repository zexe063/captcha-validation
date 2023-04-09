let captchabox = document.querySelector(".captcha");
let captchacheck = document.querySelector(".checker");
let refresh = document.querySelector(".refresh");
let check = document.querySelector('.check');




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