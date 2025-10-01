const btn = document.getElementById("account")
const formdisplay = document.getElementById("formdisplay")
const form = document.getElementById("Register")

btn.addEventListener("click", function(){
    formdisplay.classList.remove('d-none');
    formdisplay.classList.add('d-block');
});

form.addEventListener("submit",function(event){
    event.preventDefault();
    let name = form.elements.name.value;
    let email = form.elements.email.value;
    let password = form.elements.password.value;

    if (name == "" || email == "" || password == ""){
        alert("Type something broh, It have to be not empty.....")
    }
    const userdata = {
        "name" : name,
        "email" : email,
        "password": password
    };
})