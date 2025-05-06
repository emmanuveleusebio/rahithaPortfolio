function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const whatsappNumber = 7025887273; 
    const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
}
