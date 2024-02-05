const display = document.querySelector("#display")
const button = document.querySelectorAll('button')

button.forEach((item) => {
    item.addEventListener('click', () =>{
        if(item.id == 'clear') {
            display.innerText='';
        
        } else if (item.id == 'backspace'){
            let string =display.innerText.tostring();
            display.innerText = string.substr(0,string.length - 1) 
            
        } else if (display.innerText != '' && item.id == 'equal' ){
            display.innerText = eval(display.innerText);

        } else if (display.innerText == '' && item.id == 'equal'){
            display.innerText = 'Empty!';
        }else {
            display.innerText += item.id;
        }
})})

const themeToggleBtn1 = document.querySelector('.theme-toggler');
const themeToggleBtn2 = document.querySelector('.calculator');
const themeToggleBtn3 = document.querySelector('.toggler-icon');
let isdark = true;
themeToggleBtn.onclick = () => {
    calculator.classlist. toggle('dark')
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}

