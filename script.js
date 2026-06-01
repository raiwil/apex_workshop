const links = Array.from(document.querySelectorAll('.nav a'));
const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const activeId = '#' + entry.target.id;
    links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === activeId));
  });
}, { rootMargin: '-30% 0px -60% 0px', threshold: 0.1 });

sections.forEach((section) => observer.observe(section));

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const targetId = button.getAttribute('data-copy');
    const codeEl = document.getElementById(targetId);
    if (!codeEl) return;
    try {
      await navigator.clipboard.writeText(codeEl.innerText);
      const old = button.textContent;
      button.textContent = 'Kopiert';
      setTimeout(() => button.textContent = old, 1400);
    } catch (e) {
      const old = button.textContent;
      button.textContent = 'Fehler';
      setTimeout(() => button.textContent = old, 1400);
    }
  });
});


document.querySelectorAll('.section-header').forEach(header => {

  header.addEventListener('click', () => {

    const section = header.closest('.sidebar-section');

    section.classList.toggle('collapsed');

  });

});
