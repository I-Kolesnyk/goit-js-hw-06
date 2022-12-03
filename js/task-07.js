const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', handleFontSizeControl);

function handleFontSizeControl(event) {
  spanRef.style.fontSize = event.currentTarget.value + 'px';
}
