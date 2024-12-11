// Load user data from LocalStorage
document.addEventListener('DOMContentLoaded', () => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (storedProfile) {
        document.getElementById('profileName').value = storedProfile.name;
        document.getElementById('profileEmail').value = storedProfile.email;
        document.getElementById('profileBloodGroup').value = storedProfile.bloodGroup;
        document.getElementById('profilePhone').value = storedProfile.phone;
    }
});

// Update user profile data and save to LocalStorage
function updateProfile() {
    const name = document.getElementById('profileName').value;
    const email = document.getElementById('profileEmail').value;
    const bloodGroup = document.getElementById('profileBloodGroup').value;
    const phone = document.getElementById('profilePhone').value;

    if (name && email && bloodGroup && phone) {
        const updatedProfile = { name, email, bloodGroup, phone };
        localStorage.setItem('userProfile', JSON.stringify(updatedProfile));

        alert('Profile updated successfully!');
    } else {
        alert('Please fill in all fields before updating.');
    }
}
