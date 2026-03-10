// Newsletter form validation

document.getElementById("subscribeForm").addEventListener("submit", function(e){

    e.preventDefault()

    let email = document.getElementById("email").value
    let message = document.getElementById("message")

    if(email === ""){
        message.innerText = "Please enter your email"
    }
    else{
        message.innerText = "Thank you for subscribing!"
    }

})