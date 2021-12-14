a = '';
b = '';
c = 1;
sign = 1;
outp = document.querySelector('#input');
secout = document.querySelector('#buffer')
secout.value = 0;

check0 = 1;
Click = (event) => {
    content = event.target.textContent;
    switch (content) {
        case '/':
            if (sign) {
                a = div(a);
                outp.value = b;
                secout.value = a;
                a = '';
                b += ' ';
                break;
            } else break;
        case '*':
            if (sign) {
                a = mul(a);
                outp.value = b;
                secout.value = a;
                a = '';
                b += ' ';
                break;
            } else break;
        case '+':
            if (sign) {
                a = sum(a);
                outp.value = b;
                secout.value = a;
                a = '';
                b += ' ';
                break;
            } else break;
        case '-':
            if (sign) {
                a = sub(a);
                outp.value = b;
                secout.value = a;
                a = '';
                b += ' ';
                break;
            } else break;
        case 'C':
            a = clear(a);
            secout.value = a;
            outp.value = a;
            a = '';
            break;
        case '←':
            a = remElem(a);
            secout.value = a;
            outp.value = b + a;
            break;
        case '=':
            a = calc(a);
            secout.value = a;
            outp.value = '';
            b = a;
            a = '';
            break;
        case '.':
            a = point(a);
            secout.value = a;
            outp.value = b + a;
            break;
        default:
            sign = 1;
            a += content;
            if (a[0] === '0') {
                a = a.slice(1, a.length);
                outp.value = '0';
                secout.value = '0';
            } else {
                outp.value = b + a;
                secout.value = a;
            }
    }
};


calc = (a) => {
    a = eval(b + a);
    c = 1;
    sign = 1;
    return a;
}

clear = (a) => {
    a = '0';
    b = '';
    c = 1;
    sign = 1;
    return a;
}

remElem = (a) => {

    if (!a == '') {
        console.log(1);
        a = a.substr(0, a.length - 1);
        b += a;
        b = b.substr(0, b.length - a.length);
    } else {
        console.log(12);
        b = '';
        return 0;
    }

    return a;
}

point = (a) => {
    if (c) {
        a += '.';
        c = 0;
        return a;
    } else return a;
}

mul = (a) => {
    if (sign) {
        b += a + ' *';
        a = '* ';
        c = 1;
        sign = 0;
        return a;
    } else return a;
}

div = (a) => {
    if (sign) {
        b += a + ' /';
        a = '/ ';
        c = 1;
        sign = 0;
        return a;
    } else return a;
}
sub = (a) => {
    if (sign) {
        b += a + ' -';
        a = '- ';
        c = 1;
        sign = 0;
        return a;
    } else return a;
}

sum = (a) =>
 {
    if (sign) {
        b += a + ' +'
        a = '+';
        c = 1;
        sign = 0;
        return a;
    } else return a;
}



document.querySelectorAll("td").forEach(element => {
    element.addEventListener("click", Click);
})