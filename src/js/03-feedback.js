import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "feedback-form-state";

const formContainer = document.querySelector('.feedback-form');
const inputContainer = document.querySelector('input');
const textAreaContainer = document.querySelector('textarea');

formContainer.addEventListener('submit', onFormSubmit);
formContainer.addEventListener('input', throttle(onInputDate, 500));


let dateForm = localStorage.getItem(LOCAL_STORAGE_KEY);
dateForm = dateForm ? JSON.parse(dateForm) : {};

populateTextarea();

function onInputDate(event){
dateForm[event.target.name] = event.target.value;
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dateForm));
}

function onFormSubmit(event){
   event.preventDefault();

   if(inputContainer.value === "" || textAreaContainer.value === ""){
      return alert('Заповніть, будь ласка, усі поля форми!')
   }

   console.log(dateForm);
   event.currentTarget.reset();
   localStorage.removeItem(LOCAL_STORAGE_KEY);
   dateForm = {};

}

function populateTextarea() {

   inputContainer.value = dateForm['email'] ? dateForm['email'] : "";
   textAreaContainer.value = dateForm['message'] ? dateForm['message'] : "";

   }
  
  
 





