function registerDonor() {
    const name = document.getElementById('donorName').value;
    const email = document.getElementById('donorEmail').value;
    const bloodGroup = document.getElementById('donorBloodGroup').value;
    const phone = document.getElementById('donorPhone').value;

    if (name && email && bloodGroup && phone) {
        const donor = { name, email, bloodGroup, phone };
        let donors = JSON.parse(localStorage.getItem('donors')) || [];
        donors.push(donor);
        localStorage.setItem('donors', JSON.stringify(donors));
        alert('Thank you for registering as a donor!');
        document.getElementById('donateForm').reset();
    } else {
        alert('Please fill in all fields!');
    }
}
