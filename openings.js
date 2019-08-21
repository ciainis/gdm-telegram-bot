const openings = [
  'Gentile',
  'Certo',
  'Subito',
  'Eccomi',
  'Va bene',
  'Cheppalle',
  'Sempre pronti',
  'Comandi',
  'Sì',
  'Senza di me non saresti niente',
  'Ovvio',
  'Senza dubbio',
  'Senza esitazione',
  'A disposizione'
];

module.exports = () => openings[Math.floor(Math.random() * openings.length)];
