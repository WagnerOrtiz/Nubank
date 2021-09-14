let email = document.querySelector('input#email')
let cpf = document.querySelector('input#cpf')
let password = document.querySelector('input#password')
let btn = document.querySelector('input#btn')
let users = []



//CPF MASK
cpf.addEventListener('keypress', () => {
  if(cpf.value.length == 3 || cpf.value.length == 7){
    cpf.value += "."
  }
  else if (cpf.value.length ==11){
    cpf.value += "-"
  }
})


//LISTENERS ON BUTTONS AND INPUTS
password.addEventListener('keypress', function (pressed){ 
    if (pressed.keyCode === 13) {
     pressed.preventDefault();
     document.getElementById("btn").click();
    }
});
cpf.addEventListener('keypress', function (pressed){ 
  if (pressed.keyCode === 13) {
    pressed.preventDefault();
    document.getElementById("btn").click();
}
});
btn.addEventListener('click', () => {
    ValidateEmail(email) === true ?  ValidateCpf(cpf) : alert("Invalid email address!")
    ValidateCpf === true ? ValidatePassword(password)  : alert("Invalid CPF number!")
})



//FUNCTIONS TO VALIDATE DATA  
function ValidateEmail(email) {
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validEmail)) {
       return (true);
    } else {
      return (false);
    }
}

function ValidateCpf(strCPF){
  var Soma;
  var Resto;
  Soma = 0;
if (strCPF == "00000000000" ||
              "11111111111" ||
              "22222222222" ||
              "33333333333" ||
              "44444444444" ||
              "55555555555" ||
              "66666666666" ||
              "77777777777" ||
              "88888888888" ||
              "99999999999") 
              return false;

for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
  return true;
}


function ValidatePassword (password){
  var pattern = /[1-9]{6}/
  if(password.length!=6){
    alert("Incorrect password!")
  }
  else if (password.match(pattern)){
    console.log("All Fine!")
  }
  else{
    alert("Incorrect password!")
  }
}


//MASK FOR PHONE NUMBER
telefone.addEventListener('keypress', () =>{

})

