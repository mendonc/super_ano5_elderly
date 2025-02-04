export const getFormattedDate = () => {
    const today = new Date();
    const day = today.getDate();
    const monthNames = [
      'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
      'jul', 'ago', 'set', 'out', 'nov', 'dez',
    ];
    const month = monthNames[today.getMonth()];
    return `Hoje, ${day} de ${month}`;
  };
  