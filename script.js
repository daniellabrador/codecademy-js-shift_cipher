class ShiftCipher {
    constructor(shift){
        this._shift = shift;
    }

    encrypt(string){
        const stringArr = string.toUpperCase().split('');
        
        for (let i=0; i<stringArr.length; ++i){
            // Tranform into decimal code
            let character = stringArr[i];
            let overShift;
            character = character.charCodeAt();

            // Shift numbers if within alphabet code
            if (character>=65 && character<=90){

                character += this._shift;

                if (character > 90){
                    overShift = character - 90;
                    character = 64 + overShift;
                } else if (character < 65){
                    overShift = 65 - character;
                    character = 91 - overShift;
                }
            }

            stringArr[i] = String.fromCharCode(character);
        }

        const encryptedString = stringArr.join('');
        // console.log(encryptedString);
        return encryptedString;
    }

    decrypt(string){
        const stringArr = string.toLowerCase().split('');
        
        for (let i=0; i<stringArr.length; ++i){
            // Tranform into decimal code
            let character = stringArr[i];
            let overShift;
            character = character.charCodeAt();

            // Shift numbers if within alphabet code
            if (character>=97 && character<=122){

                character -= this._shift;

                if (character > 122){
                    overShift = character - 122;
                    character = 96 + overShift;
                } else if (character < 97){
                    overShift = 97 - character;
                    character = 123 - overShift;
                }
            }

            stringArr[i] = String.fromCharCode(character);
        }

        const decryptedString = stringArr.join('');
        // console.log(decryptedString);
        return decryptedString;

    }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('REPLACE WITH STRING YOU WISH TO ENCRYPT'))
console.log(cipher.decrypt('REPLACE WITH STRING YOU WISH TO DECRYPT')); // try decrypting `KV YQTMU!` (shift: 2)
