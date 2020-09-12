// variables
const submitBtn = document.getElementById('submit'),
       username =document.getElementById('username'),
        email =document.getElementById('email'),
        password =document.getElementById('password'),
        password2 =document.getElementById('password-check'),
        resetBtn=document.getElementById('resetBtn'),
        emailForm =document.getElementById('input-form')

// eventListeners
eventListeners()
function eventListeners(){
    emailForm.addEventListener('submit' , onSubmit)
    document.addEventListener('DOMContentLoaded', onPageLoad)
}

function onPageLoad(){

    submitBtn.disable = true

}

// functions 
function onSubmit (e){
e.preventDefault()


    checkInputs()
}

function checkInputs(){

    const usernameValue = username.value.trim()
    const emailValue= email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()


    if(usernameValue === ''){  
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank')
    }else{
        setSuccessFor(username)
    }

    // email
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    }
    else{
        setSuccessFor(email)
    }

    // password
    if(passwordValue === ''){
        setErrorFor(password, 'password cannot be blank')
    }
    // else if condition for mix num with char ...
    else{
        setSuccessFor(password)
    }
    // password
    if(password2Value === ''){
        setErrorFor(password2, 'Confirmation cannot be blank')
    }else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Passwords does not match')
    }
    else{
        setSuccessFor(password2)
    }
    


    function isEmail(email){
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)

    }






    // success and error function
    function setErrorFor(input, message){
        const inputControl =input.parentElement  //.inputBox
        const small = inputControl.querySelector('small')
        //add err msg inside small
        small.innerText = message
        //add error class
        inputControl.className ='inputBox error'
    }

    function setSuccessFor(input){
        const inputControl =input.parentElement;
        inputControl.className='inputBox success'
    }





}