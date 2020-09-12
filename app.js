// variables
const submitBtn = document.getElementById('submit'),
       username =document.getElementById('username'),
        email =document.getElementById('email'),
        password =document.getElementById('password'),
        resetBtn=document.getElementById('resetBtn'),
        emailForm =document.getElementById('input-form')




//event listeners
eventListeners()

function eventListeners(){
    document.addEventListener('DOMContentLoaded', appInit);

    username.addEvenListener('onchange', validateField);
    email.addEvenListener('onchange', validateField);
    password.addEvenListener('onchange', validateField);
}

//functions
function appInit(){
   const disabled= submitBtn.disabled = true;
    let btns = document.querySelector('.btns')

    if(disabled === true){
        btns.firstElementChild.classList.remove('submit')
    }else{
        btns.firstElementChild.classList.add('submit')

    }


}

function validateField() {
    let errors;
    console.log('ffrom...')

    validateLength(this)

}

function validateLength(field){
    if(field.value.length > 0){
        field.classList.add('valid');
        // field.classList.remove('error');
    }else{
        // field.classList = 'error';
        field.classList.add('error');
    }
}