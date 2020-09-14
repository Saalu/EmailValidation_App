// variables
const submitBtn = document.getElementById('submit'),
       username =document.getElementById('username'),
        email =document.getElementById('email'),
        password =document.getElementById('password'),
        password2 =document.getElementById('password-check'),
        resetBtn=document.getElementById('resetBtn'),
        emailForm =document.getElementById('input-form')

    // EventListeners
        eventListeners()
    function  eventListeners(){
        emailForm.addEventListener('submit', checkInputs)
        // document.addEventListener('DOMContentLoaded', onPageLoad)

    }


    function checkInputs(e){
        e.preventDefault()

        const  usernameValue =username.value.trim()
        const emailValue =email.value.trim()
        const passwordValue=password.value.trim()
        const password2Value=password2.value.trim()


        if(usernameValue === ''){
            setErrorFor(username, 'Please username cannot be empty' )
        }else{
            setSuccessFor(username )

        }

        if(emailValue=== ''){
            setErrorFor(email, 'Please email cannot be empty' )

        }else if(!isEmail(emailValue)){
            setErrorFor(email, 'Email is not valid' )

        }else{
            setSuccessFor(email )

        }
        if(passwordValue=== ''){
            setErrorFor(password, 'Please password cannot be empty' )

        }else if(passwordValue.length < 8){
            setErrorFor(password, 'Password should be at least 8 characters')
            
        }else {
            setSuccessFor(password, 'Good!')
        }
        
        if(password2Value=== ''){
            setErrorFor(password2, 'Please confirm password' )

        }else if(password2Value !== passwordValue){
            setErrorFor(password2, 'Password does not match' )

        } else if(password2Value.length < 8){
            // setErrorFor(password, 'Password should be at least 8 characters' )

        }
        else{
            setSuccessFor(password2 )

        }


    }

// email validation func
function isEmail(email){
    return  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
}
// passwordvalidation func

function isPassword(password){
    if(password < 8){
        return password
    }
}

// error and success
function  setErrorFor(input, message){
    const inputControl = input.parentElement,
          small = inputControl.querySelector('small')

    small.textContent = message
    inputControl.className = 'inputBox error'


}
function  setSuccessFor(input,e){
    const inputControl = input.parentElement,
    small = inputControl.querySelector('small')

    inputControl.className = 'inputBox success'
    if(e.target.classList.contains('error')){
        small.remove()

    }
    
}  