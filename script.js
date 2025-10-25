const inputField = document.querySelector('#password');
const outputField = document.querySelector('#output');

function passwordChecker(){
    let password = inputField.value;

    if(password.length < 8){

        outputField.innerHTML = 'Password is too short';
        outputField.style.color = 'red';

    }else{

        outputField.innerHTML = 'Password is long enough';
        outputField.style.color = 'green';

        if(password.search(/[a-z]/) == -1){
            outputField.innerHTML = 'Password is missing a lowercase letter';
            outputField.style.color = 'red';
        }else if(password.search(/[A-Z]/) == -1){
            outputField.innerHTML = 'Password is missing a uppercase letter';
            outputField.style.color = 'red';
        }else if(password.search(/[0-9]/) == -1){
            outputField.innerHTML = 'Password is missing a number';
            outputField.style.color = 'red';
        }else if(password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\;\']/) == -1){
            outputField.innerHTML = 'Password is missing a special character';
            outputField.style.color = 'red';
        }else{
            outputField.innerHTML = 'Password is strong enough';
            outputField.style.color = 'green';
        }
    }
}

inputField.addEventListener('input', passwordChecker);