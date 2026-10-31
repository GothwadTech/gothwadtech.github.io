(() => {
  const menuButton = document.querySelector('.mobile-menu');
  const navigation = document.querySelector('#main-navigation');
  const year = document.querySelector('#current-year');

  if (year) year.textContent = new Date().getFullYear();
  if (!menuButton || !navigation) return;

  const setMenuOpen = (isOpen) => {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('nav-open', isOpen);
    menuButton.classList.toggle('is-open', isOpen);
  };

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });
})();
