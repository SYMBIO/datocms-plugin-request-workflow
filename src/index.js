import './style.sass';

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const stage = plugin.getFieldValue('stage');

  const container = document.createElement('div');
  container.classList.add('container');
  container.textContent = `${stage}`;

  if (stage === 'Nový') {
    const approveButton = document.createElement('button');
    approveButton.classList.add('approveButton');
    approveButton.classList.add('DatoCMS-button--small');
    approveButton.textContent = 'Schválit';
    approveButton.addEventListener('click', () => {
      plugin.saveCurrentItem()
        .then(() => {
          window.top.location.href = `https://wineofczechrepublic.symbio.agency/api/approveRequest?id=${plugin.itemId}&type=${plugin.itemType.id}`;
        })
        .catch(() => plugin.alert('Nepodařilo se schválit položku'));
    });

    const denyButton = document.createElement('button');
    denyButton.classList.add('denyButton');
    denyButton.classList.add('DatoCMS-button--small');
    denyButton.textContent = 'Zamítnout';
    denyButton.addEventListener('click', () => {
      plugin.saveCurrentItem()
        .then(() => {
          window.top.location.href = `https://wineofczechrepublic.symbio.agency/api/denyRequest?id=${plugin.itemId}&type=${plugin.itemType.id}`;
        })
        .catch(() => plugin.alert('Nepodařilo se zamítnout položku'));
    });

    container.appendChild(approveButton);
    container.appendChild(denyButton);
  }

  document.body.appendChild(container);
});
