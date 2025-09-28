btn = document.getElementById("account")

btn.addEventListner("click",function(){ 
    fetch('http://localhost:5000/get-users')
    .then(response => response.json())
    .then(data => alert('Backend says:', data))
    .catch(error => {
        alert("ERROR : " + error)
    });
})
    
    
    
