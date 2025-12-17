// Hamburger Menu Logic
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '<i class="ph ph-list"></i>';
document.querySelector('nav').appendChild(hamburger);

const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="ph ph-x"></i>' 
        : '<i class="ph ph-list"></i>';
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="ph ph-list"></i>';
    });
});

// Contact Form Logic
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil nilai dari input
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    const myEmail = "emailanda@contoh.com";

    // Buat subject dan body email
    const subject = `Pesan Portofolio dari ${name}`;
    const body = `Halo Ikhsan,\n\nSaya ${name} (${email}) ingin menyampaikan pesan:\n\n${message}`;

    // Buka aplikasi email bawaan
    window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
