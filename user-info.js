// Sample user data (can be fetched from a backend API in a real application)
const users = [
    { name: "John Doe", bloodGroup: "A+", email: "john.doe@example.com", phone: "123-456-7890" },
    { name: "Jane Smith", bloodGroup: "B-", email: "jane.smith@example.com", phone: "987-654-3210" },
    { name: "Alice Johnson", bloodGroup: "O+", email: "alice.johnson@example.com", phone: "456-789-1234" },
    { name: "Bob Williams", bloodGroup: "AB-", email: "bob.williams@example.com", phone: "789-123-4567" },
];

// Function to populate user data into the table
function loadUserData() {
    const tableBody = document.querySelector("#userTable tbody");

    users.forEach(user => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.bloodGroup}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Load data on page load
document.addEventListener("DOMContentLoaded", loadUserData);
