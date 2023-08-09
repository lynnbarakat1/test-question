const validateEmail = (str) => {
    const stringArr = str.split('');

    // check if the email greater than 256
    if (stringArr.length > 256) {
        return false;
    }

    // check if the email starts with @ char
    if (stringArr[0] == '@') {
        return false;
    }

    // check if the email includes @ char or no 
    if (!stringArr.includes('@')) {
        return false;
    }

    // check if the email include . char or no 
    if (!stringArr.includes('.')) {
        return false;
    }

    let atCharIndex = 0;
    let dotCharIndex = 0

    // check if the . char directly after the @ char
    for (let i = 0; i <= stringArr.length; i++) {

        if (stringArr[i] == '@') {
            atCharIndex = i;
        }

        if (stringArr[i] == '.') {
            dotCharIndex = i;
        }


        if (stringArr[i] == '@' && stringArr[i + 1] == '.') {
            return false;
        }
    }

    // check if the . char before or after the @ char 
    if (dotCharIndex < atCharIndex) {
        return false;
    }

    // check if the email include @ char more than once 
    if (stringArr?.filter(arr => arr == '@').length > 1) {
        return false
    }

    return true
}

console.log(validateEmail('lynbarakat98@gmail.com'))