alert('please fill up the form to proceed')

const form = document.querySelector('#creat-account-form');
const usernameInput = document.querySelector('#username');
const emailInput= document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput= document.querySelector('#confirm-password');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    
    if (isFormValid()== true){
        form.submit();
    }else{
        
        event.preventDefault();
   }
});

function isFormValid(){
  const inputContainers = form.querySelectorAll('.input-group');
  let result= true;
  inputContainers.forEach((container)=>{
    if (container.classList.contains('error')){
     result = false;   
    }
  }); 
  
  return result;
}

function validateForm() {

 //USERNAME 
 if (usernameInput.value.trim() == '') {
    setError(usernameInput, 'Name can not be empty');
 } else if(usernameInput.value.trim().length < 6 || usernameInput.value.trim().length >40){
    setError(usernameInput, 'Name must have a minimun of 6 and maximum of 40 charecters');
 } else{
    setSuccess(usernameInput);
 }

//EMAIL 
if (emailInput.value.trim() == '') {
    setError(emailInput, 'please provide your email address');
}else if (isEmailValid(emailInput.value)){
 setSuccess(emailInput);   
}else{
    setError(emailInput, 'Please provide a valid email address');
}

//PASSWORD
if (passwordInput.value.trim() =='') {
    setError(passwordInput,'Password cannot be empty');
}else if (passwordInput.value.trim().length <8 || passwordInput.value.trim().length >80) {
  setError(passwordInput, 'Password must have a minimum of 8 and maximum of 80 charecters');  
}else{
    setSuccess(passwordInput);
}

//CONFIRM PASSWORD 
if (confirmPasswordInput.value.trim() == '') {
    setError(confirmPasswordInput, 'Password cannot be empty');
}else if (confirmPasswordInput.value !== passwordInput.value) {
 setError(confirmPasswordInput, 'Password does not match');   
}else{
    setSuccess(confirmPasswordInput);
}
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains('success')) {
     parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement; 
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');  
}

function isEmailValid(email){
 const reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
 return reg.test(email);
}
