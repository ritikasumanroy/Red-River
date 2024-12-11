// Donor Data Array
const donors = [];

// Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Register Donor
function registerDonor() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const location = document.getElementById('location').value;

    if (!name || !age || !bloodGroup || !location) {
        alert('Please fill all fields');
        return;
    }

    donors.push({ name, age, bloodGroup, location });
    alert('Donor Registered Successfully!');
    document.getElementById('donorForm').reset();
}

// Search Blood
function searchBlood() {
    const searchInput = document.getElementById('searchInput').value.toUpperCase();
    const donorList = document.getElementById('donorList');

    donorList.innerHTML = '';

    donors
        .filter(donor => donor.bloodGroup.toUpperCase().includes(searchInput))
        .forEach(donor => {
            const li = document.createElement('li');
            li.textContent = `${donor.name}, ${donor.age} years old, ${donor.bloodGroup}, ${donor.location}`;
            donorList.appendChild(li);
        });

    if (!donorList.hasChildNodes() && searchInput) {
        donorList.innerHTML = `<li>No donors found for blood group "${searchInput}".</li>`;
    }
}
