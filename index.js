let email=document.querySelector("#email");
let password=document.querySelector("#password");
let submit=document.querySelector("#submit");
let error=document.querySelector("#error");
submit.addEventListener("click",function(event)
{
    event.preventDefault();
    if(email.value==="user@gmail.com" && password.value==="password123")
    {
        window.location.href="dashboard.html";
    }
    else{
        error.innerHTML="Please enter valid email address and password";
        error.style.display="block";
    }
})

