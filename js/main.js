const tabBtns = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.menu-section');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
