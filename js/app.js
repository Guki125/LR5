function processText() {
  const input = document.getElementById('inputText').value;

  // 1. Знайти всі кольори типу #ABCDEF
  const colorRegex = /#[0-9A-Fa-f]{6}/g;
  const foundColors = input.match(colorRegex) || [];

  // 2. Виправити розділові знаки
  const punctuationFixRegex = /([,.;:!?])(?=\S)/g;
  const fixedText = input.replace(punctuationFixRegex, '$1 ');

  // 3. Якщо є кольори — змінити фон на перший з них
  if (foundColors.length > 0) {
    document.body.style.backgroundColor = foundColors[0];
  } else {
    document.body.style.backgroundColor = "#f4f6f8"; // стандартний фон
  }

  // Вивід
  document.getElementById('colorsOutput').textContent = foundColors.join('\n') || 'Кольори не знайдено.';
  document.getElementById('fixedTextOutput').textContent = fixedText;
}
