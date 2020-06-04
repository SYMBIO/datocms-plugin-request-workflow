import './style.sass';

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const stage = plugin.getFieldValue('stage');

  const container = document.createElement('div');
  container.classList.add('container');
  container.textContent = `Stav: ${stage}`;

  document.body.appendChild(container);
});
