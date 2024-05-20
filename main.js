const wordInput = document.getElementById('wordInput');
const convertButton = document.getElementById('convertButton');
const convertedWord1Text = document.getElementById('convertedWord1Text');
const convertedWord2Text = document.getElementById('convertedWord2Text');
const convertedWord3Text = document.getElementById('convertedWord3Text');
const copyButton1 = document.getElementById('copyButton1');
const copyButton2 = document.getElementById('copyButton2');
const copyButton3 = document.getElementById('copyButton3');

const iconSets = {
    'set1': {
        'A': 'А',
        'B': 'Б',
        'C': 'C',
        'D': 'Д',
        'E': 'Є',
        'F': 'F',
        'G': 'G',
        'H': 'H',
        'I': 'Ї',
        'J': 'J',
        'K': 'K',
        'L': 'Г',
        'M': 'Ѫ',
        'N': 'Й',
        'O': 'Ѳ',
        'P': 'P',
        'Q': 'Ф',
        'R': 'Я',
        'S': '$',
        'T': 'T',
        'U': 'Ц',
        'V': 'Ѵ',
        'W': 'Ш',
        'X': 'Ж',
        'Y': 'Ч',
        'Z': 'З'
    },
    'set2': {
        'A': '卂',
        'B': '乃',
        'C': '匚',
        'D': 'ᗪ',
        'E': '乇',
        'F': '千',
        'G': 'Ꮆ',
        'H': '卄',
        'I': '丨',
        'J': 'ﾌ',
        'K': 'Ҝ',
        'L': 'ㄥ',
        'M': '爪',
        'N': '几',
        'O': 'ㄖ',
        'P': '卩',
        'Q': 'Ɋ',
        'R': '尺',
        'S': '丂',
        'T': 'ㄒ',
        'U': 'ㄩ',
        'V': 'ᐯ',
        'W': '山',
        'X': '乂',
        'Y': 'ㄚ',
        'Z': '乙'
    },
    'set3': {
        'A': 'A҉',
        'B': 'B҉',
        'C': 'C҉',
        'D': 'D҉',
        'E': 'E҉',
        'F': 'F҉',
        'G': 'G҉',
        'H': 'H҉',
        'I': 'I҉',
        'J': 'J҉',
        'K': 'K҉',
        'L': 'L҉',
        'M': 'M҉',
        'N': 'N҉',
        'O': 'O҉',
        'P': 'P҉',
        'Q': 'Q҉',
        'R': 'R҉',
        'S': 'S҉',
        'T': 'T҉',
        'U': 'U҉',
        'V': 'V҉',
        'W': 'W҉',
        'X': 'X҉',
        'Y': 'Y҉',
        'Z': 'Z҉'
    }
};

convertButton.addEventListener('click', () => {
  const word = wordInput.value.toUpperCase();
  let convertedString1 = '';
  let convertedString2 = '';
  let convertedString3 = '';

  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    const icon1 = iconSets.set1[char];
    const icon2 = iconSets.set2[char];
    const icon3 = iconSets.set3[char];

    if (icon1) {
      convertedString1 += icon1;
    } else {
      convertedString1 += char;
    }

    if (icon2) {
      convertedString2 += icon2;
    } else {
      convertedString2 += char;
    }
    if (icon3) {
        convertedString3 += icon3;
      } else {
        convertedString3 += char;
      }
    }
  
    convertedWord1Text.textContent = convertedString1;
    convertedWord2Text.textContent = convertedString2;
    convertedWord3Text.textContent = convertedString3;
  
    // Copy functionality for each converted word
    copyButton1.addEventListener('click', () => {
      const clipboardText = convertedWord1Text.textContent;
      navigator.clipboard.writeText(clipboardText)
        .then(() => {
          alert("Copied first converted word!");
        })
        .catch(err => {
          console.error("Error copying first word:", err);
        });
    });
  
    copyButton2.addEventListener('click', () => {
      const clipboardText = convertedWord2Text.textContent;
      navigator.clipboard.writeText(clipboardText)
        .then(() => {
          alert("Copied second converted word!");
        })
        .catch(err => {
          console.error("Error copying second word:", err);
        });
    });
  
    copyButton3.addEventListener('click', () => {
      const clipboardText = convertedWord3Text.textContent;
      navigator.clipboard.writeText(clipboardText)
        .then(() => {
          alert("Copied third converted word!");
        })
        .catch(err => {
          console.error("Error copying third word:", err);
        });
    });
  });