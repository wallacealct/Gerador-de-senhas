//
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");

let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

//função para deixar o valor dinamico - o size password vai fazer aparecer o valor que esta no slider//
slider.oninput = function(){
   sizePassword.innerHTML = this.value; 
}
//função para gerar a senha//
function generatePassword(){
    
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));

    }
    password.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;
    
}



