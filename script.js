function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const whatsappNumber = 9496020230; 
    const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    console.log(text)

    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
}
