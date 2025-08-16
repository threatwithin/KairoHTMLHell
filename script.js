const $ = s => document.querySelector(s);

window.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();

  $('#pingBtn').addEventListener('click', () => {
    $('#status').textContent = 'pong';
    setTimeout(() => $('#status').textContent = '', 1200);
  });

  const form = $('#vibeForm');
  const input = $('#vibeInput');
  const list = $('#vibeList');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addItem(text);
    input.value = '';
  });

  function addItem(text) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${escapeHtml(text)}</span><button aria-label="remove">remove</button>`;
    li.querySelector('button').addEventListener('click', () => li.remove());
    list.prepend(li);
  }

  const toggle = $('#themeToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');
});

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
