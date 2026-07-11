const inputEl = document.querySelector('.todoInput');
const addBtn = document.querySelector('.addBtn');
const todoList = document.querySelector('.todoList');

//-----no click
// inputEl.addEventListener ('input' , function(e){
//     const value = e.target.value;
//     console.log(value);
    
// })
// click 
const submitHandler =(event)=>{
event.preventDefault();
const text = inputEl.value;
  console.log(text);
}
addBtn.addEventListener('click' , submitHandler);
