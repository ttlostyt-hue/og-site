const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const infoDialog = document.getElementById('infoDialog');

menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.querySelectorAll('a').forEach(item => item.classList.toggle('active', item === link));
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('launchButton').addEventListener('click', event => {
  event.preventDefault();
  if (typeof infoDialog.showModal === 'function') infoDialog.showModal();
  else alert("This demo isn't connected to a live game download yet.");
});
document.getElementById('dialogClose').addEventListener('click', () => infoDialog.close());
document.getElementById('dialogOkay').addEventListener('click', () => infoDialog.close());
infoDialog.addEventListener('click', event => {
  if (event.target === infoDialog) infoDialog.close();
});

document.getElementById('copyEmail').addEventListener('click', async () => {
  const status = document.getElementById('copyStatus');
  try {
    await navigator.clipboard.writeText('RELIFE');
    status.textContent = 'Copied “RELIFE” to clipboard.';
  } catch {
    status.textContent = 'Project name: RELIFE';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
