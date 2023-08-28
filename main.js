const password_el = document.querySelector('#password');
const length_el = document.querySelector('#length');
const uppercase_el = document.querySelector('#uppercase');
const lowercase_el = document.querySelector('#lowercase');
const numbers_el = document.querySelector('#numbers');
const symbols_el = document.querySelector('#symbols');

const generate_btn = document.querySelector('#generate');
generate_btn.addEventListener('click', GeneratePassword);
const copy_btn = document.querySelector('#copy');
copy_btn.addEventListener('click', CopyPassword);


const uppercase_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase_chars = 'abcdefghijklmnopqrstuvwxyz';
const numbers_chars = '0123456789';
const symbols_chars = '~!@#$%^&*()';

// const _chars = document.querySelector('#')

function GeneratePassword() {
    let password = '';
    let length = length_el.value;
    console.log(length_el.value);
    let chars = '';

    chars += uppercase_el.checked ? uppercase_chars : '';
    chars += lowercase_el.checked ? lowercase_chars : '';
    chars += numbers_el.checked ? numbers_chars : '';
    chars += symbols_el.checked ? symbols_chars : '';
    // console.log(chars);  // all types of charactes symbols are concatenated

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomIndex, randomIndex + 1);
        // console.log(password);
    }
    
    password_el.value = password;
    console.log(password);
}
GeneratePassword();

async function CopyPassword() {
    if (navigator.clipboard)
        await navigator.clipboard.writeText(password_el.value);
    
    alert('Password is Copied to Clipboard !')
}