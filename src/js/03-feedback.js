import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "feedback-form-state";

const formContainer = document.querySelector('.feedback-form');
const inputContainer = document.querySelector('input');
const textAreaContainer = document.querySelector('textarea');

formContainer.addEventListener('submit', onFormSubmit);
formContainer.addEventListener('input', throttle(onInputDate, 500))

const formData = {};

populateTextarea();

function onInputDate(event){

formData[event.target.name] = event.target.value;
   
   const JSONstring = JSON.stringify(formData);

   localStorage.setItem(LOCAL_STORAGE_KEY, JSONstring);
}

function populateTextarea() {
   const savedMessage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

   if (savedMessage) {
      inputContainer.value = savedMessage.email;
      textAreaContainer.value = savedMessage.message;
   }

 }

 function onFormSubmit(event){
   event.preventDefault();

   console.log(formData);
event.currentTarget.reset();
localStorage.removeItem(LOCAL_STORAGE_KEY);
}



