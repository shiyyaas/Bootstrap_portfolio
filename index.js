const btn = document.getElementById("account")
const form = document.getElementById("Register")

// btn.addEventListener("click",function(){ 
//     fetch('http://localhost:5000/get-users')
//     .then(response => response.json())
//     .then(data => {
//         let message = `Found ${data.length} users:\n`;
//         data.forEach(data => {
//             message += `NAME : ${data.name}, EMAIL: ${data.email}\n`;
//         });
//         alert(message);
//     })
//     .catch(error => {
//         alert("ERROR : " + error)
//     });
// })

btn.addEventListener("click", function(){
    form.classList.remove('d-none');
    form.classList.add('d-block');
});