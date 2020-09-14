// variables
const submitBtn = document.getElementById('submit'),
       username =document.getElementById('username'),
        email =document.getElementById('email'),
        password =document.getElementById('password'),
        password2 =document.getElementById('password-check'),
        resetBtn=document.getElementById('resetBtn'),
        emailForm =document.getElementById('input-form'),
        listcontainer=document.querySelector('.list-items')

// eventListeners
eventListeners()
function eventListeners(){
    emailForm.addEventListener('submit' , onSubmit)
    document.addEventListener('DOMContentLoaded', onPageLoad)
    resetBtn.addEventListener('click', resetForm)
    listcontainer.addEventListener('click', removeItem)
}



function resetForm(){

    emailForm.reset()
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

    // 

    listTemplate( emailValue)

    addToStorage(emailValue)
}
/* ===Input Validation Ended====  */
function removeItem(e){

    if(e.target.classList.contains('list-items')){
        console.log('yes')
    }
}


/* === Saving to List Functions ====  */

// const table = document.querySelector('table')
function  listTemplate(email){
    // const listcontainer = document.querySelector('.list-items')
    const row = document.createElement('tr')
    row.innerHTML =`
     <td >${email}</td>
     <td><i class="fas fa-check update"></i> <i class="fas fa-trash delete"></i></td>

    `;

    listcontainer.appendChild(row)
}
// storage func
function addToStorage(email ){
    let storeItems =getFromStorage()

    storeItems.push(email)

    localStorage.setItem('items', JSON.stringify(storeItems))

    console.log(storeItems)
}

function getFromStorage(){
    let storeItems = localStorage.getItem('items')
    let items
    if(storeItems === null){
        items = []
    }else{
        items = JSON.parse(storeItems)
    }
    return items

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove()
    }

    deleteFromStorage(e.target.parentElement.previousElementSibling)
}

function deleteFromStorage(item){
  let storeItems = getFromStorage()
  
            storeItems.forEach((itemLS, index)=> {
            if(itemLS === item.textContent){
                console.log('yes true')
                storeItems.splice(index, 1)
            }
        })
        localStorage.setItem('items', JSON.stringify(storeItems))
}


function onPageLoad(){
    let storeItems =getFromStorage()

    storeItems.forEach( (item)=>{
        listTemplate(item)
        
    })

}