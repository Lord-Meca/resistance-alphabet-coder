const alphabetCode = {
    'A': '0XO01',
    'B': '10ZA0',
    'C': '8+RF',
    'D': '84',
    'E': 'OEX',
    'F': '45',
    'G': '46',
    'H': 'UUU789',
    'I': 'F42',
    'J': 'ZD',
    'K': '978',
    'L': 'VGC',
    'M': 'UISDL+9',
    'N': 'DZAC1',
    'O': 'DCC',
    'P': '45AF',
    'Q': '7812',
    'R': '00220012',
    'S': '152DF',
    'T': 'IODC',
    'U': 'APLD110012',
    'V': 'HZD75',
    'W': 'E88KL',
    'X': 'BBNDX88',
    'Y': 'I44_585',
    'Z': '100220023',
    ' ': '-'
};

function frenchToCode(text) {
    let code = "";
    for (let letter of text.toUpperCase()) {
        if (letter in alphabetCode) {
            code += alphabetCode[letter] + " ";
        } else {
            code += letter + " ";
        }
    }
    return code.trim();
}

function codeToFrench(code) {
    const words = code.split(" ");
    let french = "";
    for (let word of words) {
        if (Object.values(alphabetCode).includes(word)) {
            for (let [letter, codeLetter] of Object.entries(alphabetCode)) {
                if (codeLetter === word) {
                    french += letter;
                }
            }
        } else {
            french += word;
        }
    }
    return french;
}

document.getElementById("francais").addEventListener("input", function() {
    const texteFr = this.value.trim();
    document.getElementById("resultat").innerText = frenchToCode(texteFr);
});

document.getElementById("code").addEventListener("input", function() {
    const texteCode = this.value.trim();
    document.getElementById("resultat").innerText = codeToFrench(texteCode);
});


document.getElementById("copyButton").addEventListener("click", function() {
    const resultat = document.getElementById("resultat");
    const texteCopie = resultat.innerText;

    const tempInput = document.createElement("input");
    tempInput.value = texteCopie;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);
});
