const inputNumber = document.getElementById('number');
const convertbtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

convertbtn.addEventListener('click', () => converter());

const converter = () => {
    const inputValue = parseInt(inputNumber.value);

    if (isNaN(inputValue)) {
        return output.innerText = 'Please enter a valid number';
    }
    if (inputValue < 1) {
        return output.innerText = 'Please enter a number greater than or equal to 1'
    }
    if (inputValue >= 4000) {
        return output.innerText = 'Please enter a number less than or equal to 3999';
    }
    output.innerText = romanNumeralResult(inputValue);
};

const romanNumeralResult = number => {
    const romanNumValues = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    const decimalToRoman = (num, result) => {
        if (num === 0) {
            return result;
        }

        for (const { value, numeral } of romanNumValues) {
            if (num >= value) {
                return decimalToRoman(num - value, result + numeral);
            }
        }
    };
    return decimalToRoman(number, '');
}