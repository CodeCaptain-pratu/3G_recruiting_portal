let users = JSON.parse(localStorage.getItem("users")) || []; // Load existing users or initialize as an empty array
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let userdata={
        id:document.getElementById("userId").value,
        firstname:document.getElementById("firstname").value,
        lastname:document.getElementById("lastname").value,
        password:document.getElementById("password").value,
        email:document.getElementById("email").value,
        username:document.getElementById("username").value,
        phone:document.getElementById("phone").value,
        active:document.getElementById("active").value,
    };
    users.push(userdata);
    localStorage.setItem("users", JSON.stringify(users)); // Save the updated array to localStorage

    // console.log(userdata);
    form.reset();
    window.location.href = "user.html"; // Redirect to user page

//    addRowToTable();

});
// function addRowToTable(){
//     let row=document.createElement("tr");
//     row.innerHTML=`<tr id="tablerow">
//                         <td class="p-2">${users.id}</td>
//                         <td class="p-2">${users.firstname}</td>
//                         <td class="p-2">${users.lastname}</td>
//                         <td class="p-2">${users.password}</td>
//                         <td class="p-2">${users.email}</td>
//                         <td class="p-2">${users.username}</td>
//                         <td class="p-2">${users.phone}</td>
//                         <td class="p-2 text-sla">${users.active}</td>
//                     </tr>`;
//     document.querySelector("#tablebody").appendChild(row);
// }
let button = document.querySelector("button");
button.addEventListener("click",function(){
    window.location.href="user.html";
});