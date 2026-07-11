const submitEl = document.querySelector('.button');
const form = document.getElementById('form');

const submitDefault = (e) => {
    e.preventDefault();
}
const submitHandler = () => {

    let name = document.getElementById('name')
    let email = document.getElementById('Email')
    let message = document.getElementById('message')
    name = name.value 
    localStorage.setItem('name' , name);
    email = email.value 
    localStorage.setItem('email' , email);

    localStorage.setItem('message' , message);

    console.log("اطلاعات در LocalStorage ذخیره شد.")
}

submitEl.addEventListener('click', submitHandler);
form.addEventListener('submit', submitDefault)