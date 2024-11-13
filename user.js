// let users = [
//     {
//         "id": "1",
//         "firstname": "John",
//         "lastname": "Doe",
//         "password": "newpass",
//         "email": "naveen.ara@gmail.com",
//         "username": "test1",
//         "phone": "9654602735",
//         "active": 1
//     },
//     {
//         "id": "2",
//         "lastname": "another-user",
//         "password": "password123",
//         "email": "another@example.com",
//         "username": "test2",
//         "phone": "9876543210",
//         "active": 1
//     },
//     {
//         "id": "3",
//         "firstname": "test3",
//         "lastname": "third-user",
//         "password": "pass456",
//         "email": "third@example.com",
//         "username": "test3",
//         "phone": "1234567890",
//         "active": 0
//     },
//     {
//         "id": "4",
//         "firstname": "test3",
//         "lastname": "third-user",
//         "password": "pass456",
//         "email": "third@example.com",
//         "username": "test3",
//         "phone": "1234567890",
//         "active": 0
//     }
// ];

// let addUserBtn = document.querySelector("#usertitleright button");
// let tableBody = document.querySelector("#tablebody");

// function addUserRow(user)
// {
//     let newRow=`<tr>
//                     <td class="p-2">${user.id}</td>
//                     <td class="p-2">${user.firstname}</td>
//                     <td class="p-2">${user.lastname}</td>
//                     <td class="p-2">${user.password}</td>
//                     <td class="p-2">${user.email}</td>
//                     <td class="p-2">${user.username}</td>
//                     <td class="p-2">${user.phone}</td>
//                     <td class="p-2">${user.active}</td>
//                 </tr>`;
//         tableBody.innerHTML+=newRow;
// }
// addUserBtn.addEventListener("click",function()
// {
//     let userIndex=0;
//     if(userIndex<users.length)
//     {
//         let user=users[userIndex];
//         addUserRow(user);


//         userIndex++;
//     }
//     else
//     {
//         alert("No more users to add");
//     }
// })

function addUserData()
{
    window.location.href="AddUserForm.html";
}
function loadUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || []; // Retrieve users from localStorage
// console.log(users);
    let tableBody = document.getElementById("tablebody");
    tableBody.innerHTML = ""; // Clear any existing rows

    users.forEach(user => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td class="p-2">${user.id}</td>
            <td class="p-2">${user.firstname}</td>
            <td class="p-2">${user.lastname}</td>
            <td class="p-2">${user.password}</td>
            <td class="p-2">${user.email}</td>
            <td class="p-2">${user.username}</td>
            <td class="p-2">${user.phone}</td>
            <td class="p-2 text-sla">${user.active}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Load the users when the page loads
window.addEventListener("load", loadUsers);
