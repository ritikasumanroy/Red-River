// Sample donor data (replace with API or database fetch in real application)
const donors = [
    { name: "John Doe", bloodGroup: "A+", location: "New York", phone: "123-456-7890" },
    { name: "Jane Smith", bloodGroup: "O-", location: "Los Angeles", phone: "987-654-3210" },
    { name: "Alice Johnson", bloodGroup: "B+", location: "Chicago", phone: "456-789-1234" },
    { name: "Bob Williams", bloodGroup: "AB-", location: "Houston", phone: "789-123-4567" },
    { name: "Emma Brown", bloodGroup: "A-", location: "Miami", phone: "321-654-9870" },
];

// Function to display donors
function displayDonors(donorList) {
    const tableBody = document.querySelector("#donorsTable tbody");
    tableBody.innerHTML = ""; // Clear the table

    donorList.forEach(donor => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${donor.name}</td>
            <td>${donor.bloodGroup}</td>
            <td>${donor.location}</td>
            <td>${donor.phone}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to filter donors
function filterDonors() {
    const bloodGroup = document.getElementById("bloodGroupFilter").value;
    const location = document.getElementById("locationFilter").value.toLowerCase();

    const filteredDonors = donors.filter(donor => {
        const matchesBloodGroup = bloodGroup === "all" || donor.bloodGroup === bloodGroup;
        const matchesLocation = location === "" || donor.location.toLowerCase().includes(location);

        return matchesBloodGroup && matchesLocation;
    });

    displayDonors(filteredDonors);
}

// Load initial data on page load
document.addEventListener("DOMContentLoaded", () => displayDonors(donors));
