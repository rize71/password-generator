const number = [1,2,3,4,5,6,7,8,9,0];
const symbol = ["~", "!", "@","#", "$", "%", "^", "&", "*", "()","_","+","{","}","|",":","<",">","?"];
const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());

const generatePassword = (length, hasNumber, hasSymbols, hasLowercase, hasUppercase) => {
    const availableCharacter = [
        ...(hasSymbols ? symbol : []),
        ...(hasNumber ? number : []),
        ...(hasUppercase ? uppercaseLetters : []),
        ...(hasLowercase ? lowercaseLetters : [])
    ];

    let password = "";

    if(availableCharacter.length === 0) return "";

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * availableCharacter.length);
        password += availableCharacter[randomIndex];
    }
    return password;
}

console.log(generatePassword(12, true, true, true, false));