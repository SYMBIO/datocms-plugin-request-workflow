import './style.sass';

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const stage = plugin.getFieldValue('stage');

  const container = document.createElement('div');
  container.classList.add('container');
  container.textContent = `Stav: ${stage}`;

  const approveButton = document.createElement('button');
  approveButton.classList.add('approveButton');
  approveButton.textContent = 'Schválit';
  approveButton.addEventListener('click', () => {
    plugin.saveCurrentItem()
      .then(() => {
        window.location.href = `https://wineofczechrepublic.symbio.agency/api/approveRequest?id=${plugin.itemId}&type=${plugin.itemType.id}`;
      })
      .catch(() => console.log('Could not save this record'));
  });

  const denyButton = document.createElement('button');
  denyButton.classList.add('denyButton');
  denyButton.textContent = 'Zamítnout';

  container.appendChild(approveButton);
  container.appendChild(denyButton);

  document.body.appendChild(container);
});
