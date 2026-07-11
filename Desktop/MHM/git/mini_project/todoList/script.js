const inputEl = document.querySelector('.todoInput');
const addBtn = document.querySelector('.addBtn');
const todoListEl = document.querySelector('.todoList');
const inputGroup = document.querySelector('.input-group');




const submitHandler =(event)=>{
event.preventDefault();
const text = inputEl.value;
if(text.trim() !== ''){
   const html = `
            <li class="todo-item">
                <span>${text}</span>
            </li>
        `;
        todoListEl.insertAdjacentHTML('beforeend', html);
         inputEl.value = '';
        inputEl.focus();
}else {
  console.log(err);

}}

const deleteItemHandler =() =>{
const item = event.target.closest('.todo-item');
    if (item) {
        item.remove();
        console.log('deleted');
    }
}

addBtn.addEventListener('click' , submitHandler);
todoListEl.addEventListener('click' , deleteItemHandler)
console.log('asddas');