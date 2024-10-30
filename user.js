const apiUrl = 'http://localhost:3000/users'; // Replace with your actual API URL

const exampleUser = {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    password: "secret",
    email: "john@example.com",
    username: "johndoe",
    phone: "1234567890",
    active: 1
};

function addUserToUI(user) {
    const userContainer = document.getElementById("usercards");
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-card");
    userDiv.dataset.userId = user.id; // Set the user ID in dataset
    userDiv.innerHTML = `
        <h1 class="text-sm bg-red-800">${user.firstname}</h1>
        <p>Lastname: ${user.lastname}</p>
        <p>Password: ${user.password}</p>
        <p>Email: ${user.email}</p>
        <p>Username: ${user.username}</p>
        <p>Phone: ${user.phone}</p>
        <p>Active: ${user.active}</p>
    `;
    userContainer.appendChild(userDiv);
}

async function deleteUser() {
    try {
        const userContainer = document.getElementById("usercards");
        const userToDelete = userContainer.firstChild; 

        if (userToDelete) {

            console.log("User ID to delete:", userId); 

            const response = await fetch(`${apiUrl}/${userId}`, { method: 'DELETE' });

            if (response.ok) {
                userToDelete.remove(); 
                console.log("User deleted successfully");
            } else {
                console.log("Failed to delete user:", response.statusText);
            }
        } else {
            console.log("No users to delete");
        }
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}

addUserToUI(exampleUser);
