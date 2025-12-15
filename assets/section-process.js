document.addEventListener('click', (e) => {
  const tab = e.target.closest('.process-tab');
  if (!tab) return;

  const wrapper = tab.closest('.process-tabs-wrapper');
  if (!wrapper) return;

  const id = tab.dataset.tab;

  wrapper.querySelectorAll('.process-tab').forEach(t =>
    t.classList.remove('is-active')
  );

  wrapper.querySelectorAll('.process-tab-panel').forEach(p =>
    p.classList.remove('is-active', 'is-visible')
  );

  tab.classList.add('is-active');

  const panel = wrapper.querySelector(`[data-tab-content="${id}"]`);
  if (!panel) return;

  panel.classList.add('is-active');

  requestAnimationFrame(() => {
    panel.classList.add('is-visible');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.process-tabs-wrapper').forEach(wrapper => {
    const panel = wrapper.querySelector('.process-tab-panel.is-active');
    if (!panel) return;

    panel.classList.add('is-init');

    requestAnimationFrame(() => {
      panel.classList.remove('is-init');
      panel.classList.add('is-visible');
    });
  });
});
