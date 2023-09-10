let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@ç";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value; // pega o valor que o usuário selecionou

slider.oninput = function () {
    sizePassword.innerHTML = this.value; //recebe o valor que tem atualmente no slider
}

function generatePassword() {

    let pass = "";

    // criar um for para ir selecionando aleatoriamente os elementos do charset e ir criando a senha com o tamanho que for selecionado no slider
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))

    }

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    newPassword = pass;

}

function copyPassword() {
    alert("Senha copiada com sucesso!");

    // copiar senha quando clicar
    navigator.clipboard.writeText(newPassword);
}