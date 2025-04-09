function processText() {
  const input = document.getElementById('inputText').value;

  const colorRegex = /#[0-9A-Fa-f]{6}/g;
  const foundColors = input.match(colorRegex) || [];

  const punctuationFixRegex = /([,.;:!?])(?=\S)/g;
  const fixedText = input.replace(punctuationFixRegex, '$1 ');

  if (foundColors.length > 0) {
    document.body.style.backgroundColor = foundColors[0];
  } else {
    document.body.style.backgroundColor = "#f4f6f8";
  }

  document.getElementById('colorsOutput').textContent = foundColors.join('\n') || 'Кольори не знайдено.';
  document.getElementById('fixedTextOutput').textContent = fixedText;
}
