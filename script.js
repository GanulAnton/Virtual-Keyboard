/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable default-case */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
const keyArrId = [
  [
    {
      code: 'Backquote', en: '`', EN: '~', ru: 'ё', RU: 'Ё', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Digit1', en: '1', EN: '!', ru: '1', RU: '!', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit2', en: '2', EN: '@', ru: '2', RU: '"', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit3', en: '3', EN: '#', ru: '3', RU: '№', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit4', en: '4', EN: '$', ru: '4', RU: ';', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit5', en: '5', EN: '%', ru: '5', RU: '%', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit6', en: '6', EN: '^', ru: '6', RU: ':', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit7', en: '7', EN: '&', ru: '7', RU: '?', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit8', en: '8', EN: '*', ru: '8', RU: '*', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit9', en: '9', EN: '(', ru: '9', RU: '(', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit0', en: '0', EN: ')', ru: '0', RU: ')', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Minus', en: '-', EN: '_', ru: '-', RU: '_', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Equal', en: '=', EN: '+', ru: '=', RU: '+', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Backspace', en: 'Backspace', EN: 'Backspace', ru: 'Backspace', RU: 'Backspace', letterEn: 0, letterRu: 0, activeKey: 1,
    },
  ],
  [
    {
      code: 'Tab', en: 'Tab', EN: 'Tab', ru: 'Tab', RU: 'Tab', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'KeyQ', en: 'q', EN: 'Q', ru: 'й', RU: 'Й', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyW', en: 'w', EN: 'W', ru: 'ц', RU: 'Ц', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyE', en: 'e', EN: 'E', ru: 'у', RU: 'У', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyR', en: 'r', EN: 'R', ru: 'к', RU: 'К', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyT', en: 't', EN: 'T', ru: 'е', RU: 'Е', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyY', en: 'y', EN: 'Y', ru: 'н', RU: 'Н', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyU', en: 'u', EN: 'U', ru: 'г', RU: 'Г', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyI', en: 'i', EN: 'I', ru: 'ш', RU: 'Ш', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyO', en: 'o', EN: 'O', ru: 'щ', RU: 'Щ', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyP', en: 'p', EN: 'P', ru: 'з', RU: 'З', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'BracketLeft', en: '[', EN: '{', ru: 'х', RU: 'Х', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'BracketRight', en: ']', EN: '}', ru: 'ъ', RU: 'Ъ', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Backslash', en: '\\', EN: '|', ru: '\\', RU: '/', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Del', en: 'Del', EN: 'Del', ru: 'Del', RU: 'Del', letterEn: 0, letterRu: 0, activeKey: 1,
    },
  ],
  [
    {
      code: 'CapsLock', en: 'CapsLock', EN: 'CapsLock', RU: 'CapsLock', ru: 'CapsLock', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'KeyA', en: 'a', EN: 'A', RU: 'Ф', ru: 'ф', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyS', en: 's', EN: 'S', RU: 'Ы', ru: 'ы', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyD', en: 'd', EN: 'D', RU: 'В', ru: 'в', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyF', en: 'f', EN: 'F', RU: 'А', ru: 'а', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyG', en: 'g', EN: 'G', RU: 'П', ru: 'п', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyH', en: 'h', EN: 'H', RU: 'Р', ru: 'р', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyJ', en: 'j', EN: 'J', RU: 'О', ru: 'о', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyK', en: 'k', EN: 'K', RU: 'Л', ru: 'л', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyL', en: 'l', EN: 'L', RU: 'Д', ru: 'д', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Semicolon', en: ';', EN: ':', RU: 'Ж', ru: 'ж', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Quote', en: "'", EN: '"', RU: 'Э', ru: 'э', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Enter', en: 'Enter', EN: 'Enter', RU: 'Enter', ru: 'Enter', letterEn: 0, letterRu: 0, activeKey: 1,
    },
  ],
  [
    {
      code: 'ShiftLeft', en: 'Shift', EN: 'Shift', RU: 'Shift', ru: 'Shift', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'KeyZ', en: 'z', EN: 'Z', RU: 'Я', ru: 'я', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyX', en: 'x', EN: 'X', RU: 'Ч', ru: 'ч', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyC', en: 'c', EN: 'C', RU: 'С', ru: 'с', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyV', en: 'v', EN: 'V', RU: 'М', ru: 'м', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyB', en: 'b', EN: 'B', RU: 'И', ru: 'и', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyN', en: 'n', EN: 'N', RU: 'Т', ru: 'т', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyM', en: 'm', EN: 'M', RU: 'Ь', ru: 'ь', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Comma', en: ',', EN: '<', RU: 'Б', ru: 'б', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Period', en: '.', EN: '>', RU: 'Ю', ru: 'ю', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Slash', en: '/', EN: '?', RU: '.', ru: ',', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'ArrowUp', en: '↑', EN: '↑', RU: '↑', ru: '↑', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'ShiftRight', en: 'Shift', EN: 'Shift', RU: 'Shift', ru: 'Shift', letterEn: 0, letterRu: 0, activeKey: 1,
    },
  ],
  [
    {
      code: 'ControlLeft', en: 'Ctrl', EN: 'Ctrl', RU: 'Ctrl', ru: 'Ctrl', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'MetaLeft', en: 'Win', EN: 'Win', RU: 'Win', ru: 'Win', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'AltLeft', en: 'Alt', EN: 'Alt', RU: 'Alt', ru: 'Alt', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'Space', en: ' ', EN: ' ', RU: ' ', ru: ' ', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'AltRight', en: 'alt', EN: 'alt', RU: 'alt', ru: 'alt', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'ArrowLeft', en: '←', EN: '←', RU: '←', ru: '←', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'ArrowDown', en: '↓', EN: '↓', RU: '↓', ru: '↓', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'ArrowRight', en: '→', EN: '→', RU: '→', ru: '→', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'ControlRight', en: 'Ctrl', EN: 'Ctrl', RU: 'Ctrl', ru: 'Ctrl', letterEn: 0, letterRu: 0, activeKey: 1,
    },
  ],
];

let shiftFlag = false;
let langFlag = (localStorage.getItem('new')) ? localStorage.getItem('new') : 'RU';
localStorage.setItem('new', langFlag);


const textarea = document.createElement('textarea');
textarea.setAttribute('autofocus', 'autofocus');
textarea.classList.add('textarea');
document.body.appendChild(textarea);
const textareaSelector = document.querySelector('.textarea');

textarea.addEventListener('blur', () => {
  textarea.focus();
});

const divParent = document.createElement('div');
divParent.classList.add('keyboard');
document.body.appendChild(divParent);
const divParentSelector = document.querySelector('.keyboard');
for (let i = 0; i < 5; i++) {
  const div = document.createElement('div');
  div.classList.add('keyboard__row');
  divParentSelector.appendChild(div);
}
const textUnder = document.createElement('p');
textUnder.classList.add('textUnderBoard');
document.body.appendChild(textUnder);
document.querySelector('.textUnderBoard').textContent = 'Для смены языка используйте сочетание клавиш Shift+Alt';

function createKeyboard(lang, shift) {
  if (!shift) {
    if (lang === 'en') {
      const row = document.querySelectorAll('.keyboard__row');
      row.forEach((el, i) => {
        let out = '';
        for (j = 0; j < keyArrId[i].length; j++) {
          out += `<div class ="k-key ${keyArrId[i][j].code}">${keyArrId[i][j].en}</div>`;
        }
        el.innerHTML = out;
      });
    }
    if (lang === 'EN') {
      const row = document.querySelectorAll('.keyboard__row');
      row.forEach((el, i) => {
        let out = '';
        for (j = 0; j < keyArrId[i].length; j++) {
          if (keyArrId[i][j].letterEn === 1) {
            out += `<div class ="k-key ${keyArrId[i][j].code}">${keyArrId[i][j].EN}</div>`;
          } else {
            out += `<div class ="k-key ${keyArrId[i][j].code}">${keyArrId[i][j].en}</div>`;
          }
        }
        el.innerHTML = out;
      });
    }
    if (lang === 'ru') {
      const row = document.querySelectorAll('.keyboard__row');
      row.forEach((el, i) => {
        let out = '';
        for (j = 0; j < keyArrId[i].length; j++) {
          out += `<div class ="k-key ${keyArrId[i][j].code}">${keyArrId[i][j].ru}</div>`;
        }
        el.innerHTML = out;
      });
    }
    if (lang === 'RU') {
      const row = document.querySelectorAll('.keyboard__row');
      row.forEach((el, i) => {
        let out = '';
        for (j = 0; j < keyArrId[i].length; j++) {
          if (keyArrId[i][j].letterRu === 1) {
            out += `<div class ="k-key ${keyArrId[i][j].code}">${keyArrId[i][j].RU}</div>`;
          } else {
            out += `<div class ="k-key ${keyArrId[i][j].code}">${keyArrId[i][j].ru}</div>`;
          }
        }
        el.innerHTML = out;
      });
    }
  } else {
    if (lang === 'en') {
      const row = document.querySelectorAll('.keyboard__row');
      row.forEach((el, i) => {
        let out = '';
        for (j = 0; j < keyArrId[i].length; j++) {
          out += `<div class ="k-key ${keyArrId[i][j].code}">${keyArrId[i][j].EN}</div>`;
        }
        el.innerHTML = out;
      });
    }
    if (lang === 'EN') {
      const row = document.querySelectorAll('.keyboard__row');
      row.forEach((el, i) => {
        let out = '';
        for (j = 0; j < keyArrId[i].length; j++) {
          if (keyArrId[i][j].letterEn === 1) {
            out += `<div class ="k-key ${keyArrId[i][j].code}">${keyArrId[i][j].en}</div>`;
          } else {
            out += `<div class ="k-key ${keyArrId[i][j].code}">${keyArrId[i][j].EN}</div>`;
          }
        }
        el.innerHTML = out;
      });
    }
    if (lang === 'ru') {
      const row = document.querySelectorAll('.keyboard__row');
      row.forEach((el, i) => {
        let out = '';
        for (j = 0; j < keyArrId[i].length; j++) {
          out += `<div class ="k-key ${keyArrId[i][j].code}">${keyArrId[i][j].RU}</div>`;
        }
        el.innerHTML = out;
      });
    }
    if (lang === 'RU') {
      const row = document.querySelectorAll('.keyboard__row');
      row.forEach((el, i) => {
        let out = '';
        for (j = 0; j < keyArrId[i].length; j++) {
          if (keyArrId[i][j].letterEn === 1) {
            out += `<div class ="k-key ${keyArrId[i][j].code}">${keyArrId[i][j].ru}</div>`;
          } else {
            out += `<div class ="k-key ${keyArrId[i][j].code}">${keyArrId[i][j].RU}</div>`;
          }
        }
        el.innerHTML = out;
      });
    }
  }
}


createKeyboard(langFlag, 0);
document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.altKey) {
    switch (langFlag) {
      case 'ru':
        langFlag = 'en';
        break;
      case 'RU':
        langFlag = 'EN';
        break;
      case 'en':
        langFlag = 'ru';
        break;
      case 'EN':
        langFlag = 'RU';
        break;
    }
  } else if (event.code === 'CapsLock') {
    switch (langFlag) {
      case 'ru':
        langFlag = 'RU';
        break;
      case 'RU':
        langFlag = 'ru';
        break;
      case 'en':
        langFlag = 'EN';
        break;
      case 'EN':
        langFlag = 'en';
        break;
    }
    createKeyboard(langFlag);
  } else if (event.shiftKey) {
    shiftFlag = true;
    createKeyboard(langFlag, shiftFlag);
  }
  localStorage.setItem('new', langFlag);
});


document.addEventListener('keydown', (e) => {
  for (let i = 0; i < keyArrId.length; i++) {
    for (let j = 0; j < keyArrId[i].length; j++) {
      if (e.code === keyArrId[i][j].code) {
        const tapButton = document.querySelector(`.${e.code}`);
        tapButton.classList.add('tap');
        const textareaSelector = document.querySelector('.textarea');
        if (shiftFlag === false) {
          switch (langFlag) {
            case 'en':
              if (keyArrId[i][j].activeKey === 0) {
                e.preventDefault();
                const start = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = start + 1;
              }
              break;
            case 'EN':
              if (keyArrId[i][j].activeKey === 0) {
                e.preventDefault();
                const start = textareaSelector.selectionStart;
                if (keyArrId[i][j].letterEn === 1) {
                  textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
                } else {
                  textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
                }
                textareaSelector.selectionEnd = start + 1;
              }
              break;
            case 'RU':
              if (keyArrId[i][j].activeKey === 0) {
                e.preventDefault();
                const start = textareaSelector.selectionStart;
                if (keyArrId[i][j].letterRu === 1) {
                  textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
                } else {
                  textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
                }
                textareaSelector.selectionEnd = start + 1;
              }
              break;
            case 'ru':
              if (keyArrId[i][j].activeKey === 0) {
                e.preventDefault();
                const start = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = start + 1;
              }
              break;
          }
        } else {
          switch (langFlag) {
            case 'en':
              if (keyArrId[i][j].activeKey === 0) {
                e.preventDefault();
                const start = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = start + 1;
              }
              break;
            case 'EN':
              if (keyArrId[i][j].activeKey === 0) {
                e.preventDefault();
                const start = textareaSelector.selectionStart;
                if (keyArrId[i][j].letterEn === 1) {
                  textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
                } else {
                  textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
                }
                textareaSelector.selectionEnd = start + 1;
              }
              break;
            case 'RU':
              if (keyArrId[i][j].activeKey === 0) {
                e.preventDefault();
                const start = textareaSelector.selectionStart;
                if (keyArrId[i][j].letterRu === 1) {
                  textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
                } else {
                  textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
                }
                textareaSelector.selectionEnd = start + 1;
              }
              break;
            case 'ru':
              if (keyArrId[i][j].activeKey === 0) {
                e.preventDefault();
                const start = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = start + 1;
              }
              break;
          }
        }
      }
    }
  }
});


document.addEventListener('keyup', (e) => {
  for (let j = 0; j < keyArrId.length; j++) {
    for (let i = 0; i < keyArrId[j].length; i++) {
      if (e.code === keyArrId[j][i].code) {
        const tapButton = document.querySelector(`.${keyArrId[j][i].code}`);
        tapButton.classList.remove('tap');
      }
    }
  }
});


document.addEventListener('mousedown', (evt) => {
  for (let i = 0; i < keyArrId.length; i++) {
    for (let j = 0; j < keyArrId[i].length; j++) {
      if (evt.target.classList.contains(keyArrId[i][j].code)) {
        const pressButton = document.querySelector(`.${keyArrId[i][j].code}`);
        pressButton.classList.add('tap');
        switch (langFlag) {
          case 'en':
            if (keyArrId[i][j].activeKey === 0) {
              const start = textareaSelector.selectionStart;
              textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
              textareaSelector.selectionEnd = start + 1;
            }
            break;
          case 'EN':
            if (keyArrId[i][j].activeKey === 0) {
              const start = textareaSelector.selectionStart;
              if (keyArrId[i][j].letterEn === 1) {
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
              } else {
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
              }
              textareaSelector.selectionEnd = start + 1;
            }
            break;
          case 'RU':
            if (keyArrId[i][j].activeKey === 0) {
              const start = textareaSelector.selectionStart;
              if (keyArrId[i][j].letterRu === 1) {
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
              } else {
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
              }
              textareaSelector.selectionEnd = start + 1;
            }
            break;
          case 'ru':
            if (keyArrId[i][j].activeKey === 0) {
              const start = textareaSelector.selectionStart;
              textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArrId[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
              textareaSelector.selectionEnd = start + 1;
            }
            break;
        }
      }
    }
  }
});

document.addEventListener('mouseup', (evt) => {
  for (let i = 0; i < keyArrId.length; i++) {
    for (let j = 0; j < keyArrId[i].length; j++) {
      if (evt.target.classList.contains(keyArrId[i][j].code)) {
        const pressButton = document.querySelector(`.${keyArrId[i][j].code}`);
        pressButton.classList.remove('tap');
      }
    }
  }
});


document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('Tab')) {
    const s = textareaSelector.selectionStart;
    textareaSelector.value = `${textareaSelector.value.substring(0, textareaSelector.selectionStart)}\t${textareaSelector.value.substring(textareaSelector.selectionEnd)}`;
    textareaSelector.selectionEnd = s + 1;
  } else if (event.target.classList.contains('Enter')) {
    const s = textareaSelector.selectionStart;
    textareaSelector.value = `${textareaSelector.value.substring(0, textareaSelector.selectionStart)}\n${textareaSelector.value.substring(textareaSelector.selectionEnd)}`;
    textareaSelector.selectionEnd = s + 1;
  } else if (event.target.classList.contains('Space')) {
    const s = textareaSelector.selectionStart;
    textareaSelector.value = `${textareaSelector.value.substring(0, textareaSelector.selectionStart)} ${textareaSelector.value.substring(textareaSelector.selectionEnd)}`;
    textareaSelector.selectionEnd = s + 1;
  } else if (event.target.classList.contains('Delete')) {
    const s = textareaSelector.selectionStart;
    textareaSelector.value = `${textareaSelector.value.substring(0, textareaSelector.selectionStart)}${textareaSelector.value.substring(textareaSelector.selectionEnd + 1)}`;
    textareaSelector.selectionEnd = s - 1;
  } else if (event.target.classList.contains('Backspace')) {
    const start = textareaSelector.selectionStart;
    textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart - 1) + textareaSelector.value.substring(textareaSelector.selectionEnd);
    textareaSelector.selectionEnd = start - 1;
  } else if (event.target.classList.contains('ArrowDown')) {
    textareaSelector.selectionStart += 70;
  } else if (event.target.classList.contains('ArrowUp')) {
    textareaSelector.selectionStart = textareaSelector.selectionEnd;
    if (textareaSelector.selectionEnd - 70 < 0) {
      textareaSelector.selectionEnd = 0;
    } else {
      textareaSelector.selectionEnd -= 70;
    }
  } else if (event.target.classList.contains('ArrowLeft')) {
    textareaSelector.selectionStart -= 1;
    textareaSelector.selectionEnd -= 1;
  } else if (event.target.classList.contains('ArrowRight')) {
    textareaSelector.selectionStart += 1;
  }
});


textareaSelector.onkeydown = function (e) {
  if (e.code === 'Tab') {
    e.preventDefault();
    const s = this.selectionStart;
    this.value = `${this.value.substring(0, this.selectionStart)}\t${this.value.substring(this.selectionEnd)}`;
    this.selectionEnd = s + 1;
  }
};
document.addEventListener('keydown', (e) => {
  if (e.code === 'AltLeft' || e.code === 'AltRight') {
    e.preventDefault();
  }
});

document.addEventListener('keyup', () => {
  shiftFlag = false;
  createKeyboard(langFlag, shiftFlag);
});
// changing language, CapsLock, Shift on click
document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('MetaLeft')) {
    if (langFlag === 'en') {
      langFlag = 'ru';
    } else if (langFlag === 'ru') {
      langFlag = 'en';
    } else if (langFlag === 'EN') {
      langFlag = 'RU';
    } else if (langFlag === 'RU') {
      langFlag = 'EN';
    } createKeyboard(langFlag);
  } else if (event.target.classList.contains('CapsLock')) {
    if (langFlag === 'EN') {
      langFlag = 'en';
    } else if (langFlag === 'RU') {
      langFlag = 'ru';
    } else if (langFlag === 'en') {
      langFlag = 'EN';
    } else if (langFlag === 'ru') {
      langFlag = 'RU';
    } createKeyboard(langFlag);
  } else if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) {
    shiftFlag = true;
    createKeyboard(langFlag, shiftFlag);
  }
  localStorage.setItem('new', langFlag);
});


document.addEventListener('mouseup', () => {
  createKeyboard(langFlag, false);
});
