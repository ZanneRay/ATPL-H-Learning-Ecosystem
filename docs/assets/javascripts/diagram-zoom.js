(() => {
  const SELECTOR = '.mermaid, .md-content img, .md-content svg:not(.mermaid svg)';

  function createViewer() {
    const viewer = document.createElement('div');
    viewer.className = 'diagram-viewer';
    viewer.setAttribute('aria-hidden', 'true');
    viewer.innerHTML = `
      <div class="diagram-viewer__toolbar">
        <button type="button" data-action="out" title="Zoom out">−</button>
        <button type="button" data-action="reset" title="Reset zoom">100%</button>
        <button type="button" data-action="in" title="Zoom in">+</button>
        <button type="button" data-action="close" title="Close">×</button>
      </div>
      <div class="diagram-viewer__stage">
        <div class="diagram-viewer__content"></div>
      </div>`;
    document.body.appendChild(viewer);
    return viewer;
  }

  const viewer = createViewer();
  const stage = viewer.querySelector('.diagram-viewer__stage');
  const content = viewer.querySelector('.diagram-viewer__content');
  const resetButton = viewer.querySelector('[data-action="reset"]');
  let scale = 1;
  let x = 0;
  let y = 0;
  let dragging = false;
  let startX = 0;
  let startY = 0;

  function render() {
    content.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    resetButton.textContent = `${Math.round(scale * 100)}%`;
  }

  function reset() {
    scale = 1; x = 0; y = 0; render();
  }

  function close() {
    viewer.classList.remove('is-open');
    viewer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('diagram-viewer-open');
    content.innerHTML = '';
  }

  function open(source) {
    content.innerHTML = '';
    const clone = source.cloneNode(true);
    clone.removeAttribute('id');
    clone.classList.remove('zoomable-diagram');
    clone.style.maxWidth = 'none';
    clone.style.width = 'auto';
    clone.style.height = 'auto';
    content.appendChild(clone);
    reset();
    viewer.classList.add('is-open');
    viewer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('diagram-viewer-open');
  }

  function enhance(root = document) {
    root.querySelectorAll(SELECTOR).forEach((el) => {
      if (el.closest('.diagram-viewer') || el.dataset.zoomReady) return;
      el.dataset.zoomReady = 'true';
      el.classList.add('zoomable-diagram');
      el.setAttribute('title', 'Click to enlarge');
      el.addEventListener('click', (event) => {
        event.preventDefault();
        open(el);
      });
    });
  }

  viewer.addEventListener('click', (e) => {
    const action = e.target.closest('button')?.dataset.action;
    if (action === 'close') close();
    if (action === 'in') { scale = Math.min(5, scale * 1.25); render(); }
    if (action === 'out') { scale = Math.max(0.25, scale / 1.25); render(); }
    if (action === 'reset') reset();
    if (e.target === viewer) close();
  });

  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    scale = Math.max(0.25, Math.min(5, scale * (e.deltaY < 0 ? 1.12 : 0.89)));
    render();
  }, { passive: false });

  stage.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.diagram-viewer__toolbar')) return;
    dragging = true;
    startX = e.clientX - x;
    startY = e.clientY - y;
    stage.setPointerCapture(e.pointerId);
    stage.classList.add('is-dragging');
  });
  stage.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    x = e.clientX - startX;
    y = e.clientY - startY;
    render();
  });
  stage.addEventListener('pointerup', () => { dragging = false; stage.classList.remove('is-dragging'); });
  stage.addEventListener('pointercancel', () => { dragging = false; stage.classList.remove('is-dragging'); });

  document.addEventListener('keydown', (e) => {
    if (!viewer.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === '+' || e.key === '=') { scale = Math.min(5, scale * 1.25); render(); }
    if (e.key === '-') { scale = Math.max(0.25, scale / 1.25); render(); }
    if (e.key === '0') reset();
  });

  const boot = () => setTimeout(() => enhance(document), 350);
  if (typeof document$ !== 'undefined') document$.subscribe(boot);
  else document.addEventListener('DOMContentLoaded', boot);
  new MutationObserver(() => enhance(document)).observe(document.body, { childList: true, subtree: true });
})();