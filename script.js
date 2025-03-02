// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling for contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Semua field harus diisi!');
        return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Silakan masukkan alamat email yang valid.');
        return;
    }

    // Simulate form submission (you can replace this with actual AJAX call)
    alert('Terima kasih! Pesan Anda telah dikirim.');
    this.reset(); // Reset the form fields
});

// Function to calculate savings results
function calculateSavingsResults(total, interestRate, years) {
    const interestEarned = total * (interestRate / 100) * years;
    const futureEstimate = total + interestEarned;
    
    // Update the results in the HTML
    document.getElementById('total-savings').innerText = `Rp ${total.toFixed(2)}`;
    document.getElementById('interest-earned').innerText = `Rp ${interestEarned.toFixed(2)}`;
    document.getElementById('future-estimate').innerText = `Rp ${futureEstimate.toFixed(2)}`;
}

// Function to handle savings input and calculate results
function handleSavingsCalculation() {
    const totalSavingsInput = document.getElementById('total-savings-input').value;
    const interestRateInput = document.getElementById('interest-rate-input').value;
    const yearsInput = document.getElementById('years-input').value;

    const totalSavings = parseFloat(totalSavingsInput);
    const interestRate = parseFloat(interestRateInput);
    const years = parseInt(yearsInput);

    // Validate inputs
    if (isNaN(totalSavings) || isNaN(interestRate) || isNaN(years)) {
        alert('Silakan masukkan nilai yang valid untuk semua field.');
        return;
    }

    calculateSavingsResults(totalSavings, interestRate, years);
}

// Event listener for calculating savings
document.getElementById('calculate-savings-btn').addEventListener('click', handleSavingsCalculation);

// Function to handle sending money to savings
document.getElementById('send-money-btn').addEventListener('click', function () {
    const sendAmountInput = document.getElementById('send-amount').value;
    const paymentMethod = document.getElementById('payment-method').value;

    const sendAmount = parseFloat(sendAmountInput);

    // Validate send amount
    if (isNaN(sendAmount) || sendAmount <= 0) {
        alert('Silakan masukkan jumlah uang yang valid.');
        return;
    }

    if (paymentMethod === 'qris') {
        // Generate QR code
        const qrCode = new QRious({
            element: document.getElementById('qris-canvas'),
            value: 'Selamat menunaikan ibadah puasa Ramadan',
            size: 200 // Size of the QR code
        });
        document.getElementById('qris-canvas').style.display = 'block'; // Show the QR code
    } else {
        // Simulate sending money via bank transfer
        alert(`Anda telah mengirim Rp ${sendAmount.toFixed(2)} melalui Transfer Bank.`);
    }

    // Reset the input field
    document.getElementById('send-amount').value = '';
});