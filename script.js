lucide.createIcons();
const root = document.documentElement, nav = document.querySelector('.nav'), menu = document.querySelector('.menu-btn');
const saved = localStorage.getItem('kd-theme'); if (saved === 'dark') root.dataset.theme = 'dark';
document.querySelector('.theme-toggle').addEventListener('click', () => { root.dataset.theme = root.dataset.theme === 'dark' ? '' : 'dark'; localStorage.setItem('kd-theme', root.dataset.theme || 'light'); lucide.createIcons() });
menu?.addEventListener('click', () => { nav.classList.toggle('open'); menu.setAttribute('aria-expanded', nav.classList.contains('open')) });
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10));
const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const form = document.getElementById("projectForm");

form?.addEventListener("submit", function (e) {
    const button = form.querySelector("button");
    const msg = form.querySelector(".form-message");

    // Validate the form
    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return;
    }

    // Change button to Sending...
    button.innerHTML = `
        Sending...
        <i data-lucide="loader-circle"></i>
    `;

    button.disabled = true;

    // Refresh Lucide icons
    lucide.createIcons();
});