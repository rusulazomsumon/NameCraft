const wordInput = document.getElementById("wordInput");
const convertButton = document.getElementById("convertButton");
const convertedWord1Text = document.getElementById("convertedWord1Text");
const convertedWord2Text = document.getElementById("convertedWord2Text");
const convertedWord3Text = document.getElementById("convertedWord3Text");
const copyButton1 = document.getElementById("copyButton1");
const copyButton2 = document.getElementById("copyButton2");
const copyButton3 = document.getElementById("copyButton3");
const copyButton4 = document.getElementById("copyButton4");

const iconSets = {
  set1: {
    A: "А",
    B: "Б",
    C: "C",
    D: "Д",
    E: "Є",
    F: "F",
    G: "G",
    H: "H",
    I: "Ї",
    J: "J",
    K: "K",
    L: "Г",
    M: "Ѫ",
    N: "Й",
    O: "Ѳ",
    P: "P",
    Q: "Ф",
    R: "Я",
    S: "$",
    T: "T",
    U: "Ц",
    V: "Ѵ",
    W: "Ш",
    X: "Ж",
    Y: "Ч",
    Z: "З",
  },
  set2: {
    A: "卂",
    B: "乃",
    C: "匚",
    D: "ᗪ",
    E: "乇",
    F: "千",
    G: "Ꮆ",
    H: "卄",
    I: "丨",
    J: "ﾌ",
    K: "Ҝ",
    L: "ㄥ",
    M: "爪",
    N: "几",
    O: "ㄖ",
    P: "卩",
    Q: "Ɋ",
    R: "尺",
    S: "丂",
    T: "ㄒ",
    U: "ㄩ",
    V: "ᐯ",
    W: "山",
    X: "乂",
    Y: "ㄚ",
    Z: "乙",
  },
  set3: {
    A: "A҉",
    B: "B҉",
    C: "C҉",
    D: "D҉",
    E: "E҉",
    F: "F҉",
    G: "G҉",
    H: "H҉",
    I: "I҉",
    J: "J҉",
    K: "K҉",
    L: "L҉",
    M: "M҉",
    N: "N҉",
    O: "O҉",
    P: "P҉",
    Q: "Q҉",
    R: "R҉",
    S: "S҉",
    T: "T҉",
    U: "U҉",
    V: "V҉",
    W: "W҉",
    X: "X҉",
    Y: "Y҉",
    Z: "Z҉",
  },
  set4: {
    A: "🅰",
    B: "🅱",
    C: "🅲",
    D: "🅳",
    E: "🅴",
    F: "🅵",
    G: "🅶",
    H: "🅷",
    I: "🅸",
    J: "🅹",
    K: "🅺",
    L: "🅻",
    M: "🅼",
    N: "🅽",
    O: "🅾",
    P: "🅿",
    Q: "🆀",
    R: "🆁",
    S: "🆂",
    T: "🆃",
    U: "🆄",
    V: "🆅",
    W: "🆆",
    X: "🆇",
    Y: "🆈",
    Z: "🆉",
  },
};

// random icon library 
const iconLibrary = [
  "🌊 🐚", // Icon 1
  "🎸🎧⋆", // Icon 2
  "🌷🧺", // Icon 3
  "🩰🦢", // Icon 4
  "🎀🕯️",
  "˚˖𓍢ִ໋🌷͙֒✧˚",
  ".🎀༘⋆",
  "▄▀▄▀▄▀▄",
  "✽✦✽.◦",
  "＊*•̩̩͙✩•̩̩͙*˚",
  "-ˏˋ♥̩͙♥̩̩̥͙♥̩̥̩ ⑅",
  "୨⎯ 🌹 ",
  "▰▱▰▱▰",
  
];



convertButton.addEventListener("click", () => {
  const word = wordInput.value.toUpperCase();
  let convertedString1 = "";
  let convertedString2 = "";
  let convertedString3 = "";
  let convertedString4 = "";

  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    const icon1 = iconSets.set1[char];
    const icon2 = iconSets.set2[char];
    const icon3 = iconSets.set3[char];
    const icon4 = iconSets.set4[char];

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
    if (icon4) {
      convertedString4 += icon4;
    } else {
      convertedString4 += char;
    }
  }
  // assinging converted value 
  convertedWord1Text.textContent = convertedString1;
  convertedWord2Text.textContent = convertedString2;
  convertedWord3Text.textContent = convertedString3;
  convertedWord4Text.textContent = convertedString4;

  // #############RandomIcon##################
   // Get all converted strings
   const convertedStrings = [convertedString1, convertedString2, convertedString3, convertedString4];

   // Loop through converted strings and add icons
   convertedStrings.forEach((convertedString, index) => {
     const iconIndex = Math.floor(Math.random() * iconLibrary.length); // Random icon selection
     const randomIcon = iconLibrary[iconIndex];
 
     // Update text content with icons for each converted string
     const convertedWordElement = document.getElementById(`convertedWord${index + 1}Text`);
     convertedWordElement.textContent = `${randomIcon}${convertedString}${randomIcon}`;
   });

  // ########Add border class to all spans in convertedWordContainer############
  const convertedSpans = document.querySelectorAll("#convertedWordContainer span");
  convertedSpans.forEach(spanElement => {
    spanElement.classList.add("border-class");  
  });

});

// ###############Copy functionality for each converted word#################
const convertedWordElements = document.querySelectorAll(
  "#convertedWordContainer p span"
);

convertedWordElements.forEach((convertedWordText) => {
  convertedWordText.addEventListener("click", () => {
    const clipboardText = convertedWordText.textContent;
    navigator.clipboard
      .writeText(clipboardText)
      .then(() => {
        // Success message
        const messageContainer = document.getElementById("message-container");
        messageContainer.innerHTML = ""; // Clear any existing messages
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.classList.add("success");
        messageElement.textContent = "Name Style Copied! Now Peste Anywhere";
        messageContainer.appendChild(messageElement);

        // Optional: Remove message after a short duration
        setTimeout(() => messageElement.remove(), 2000);
      })
      .catch((err) => {
        // Error message
        const messageContainer = document.getElementById("message-container");
        messageContainer.innerHTML = ""; // Clear any existing messages
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.classList.add("error");
        messageElement.textContent = "Error copying text!";
        messageContainer.appendChild(messageElement);

        // Optional: Remove message after a short duration
        setTimeout(() => messageElement.remove(), 2000);
        console.error("Error copying text:", err); // Log error to console for debugging
      });
  });
});

// $$$$$$$$$$$$$$$$RandomIconCodeHere$$$$$$$$$$$$$$$
