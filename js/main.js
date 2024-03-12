const squares = document.querySelectorAll('.font-square');
const bgLockBtn = document.getElementById('lock-bg');
const bgLockIconBtn = document.getElementById('bg-btn-icon');
const fgLockBtn = document.getElementById('lock-fg');
const fgLockIconBtn = document.getElementById('fg-btn-icon');
const textElement = document.getElementById('lorem');
const pageBg = document.getElementById('page');
const bgBtn = document.getElementById('bgBtn');
let bgLocked = false;
let fgLocked = false;
 


squares.forEach(square => {
    square.addEventListener('click', () => {
        if(!bgLocked){
            changeBgColor(square);
        }
        if(!fgLocked){
            changeFgColor(square);
        }
    })
})

textElement.addEventListener('click', () => {
    if(!bgLocked){
        changeBgColor(textElement);
    }
    if(!fgLocked){
        changeFgColor(textElement);
    }
})

bgBtn.addEventListener('click', () => {
    if(!bgLocked){
        changeBgColor(pageBg);
    }
})


function changeBgColor(element){
    const bgColorInput = document.getElementById('bg-color-input');
    bgColorValue = bgColorInput.value;
    element.style.background = bgColorValue;
}
function changeFgColor(element){
    const fgColorInput = document.getElementById('fg-color-input');
    fgColorValue = fgColorInput.value;
    element.style.color = fgColorValue;
}

bgLockBtn.addEventListener('click', () => {
    if(bgLocked){
        bgLockIconBtn.classList.remove('fa-lock');
        bgLockIconBtn.classList.add('fa-unlock');
        bgLocked = false;
    }
    else{    
        bgLockIconBtn.classList.add('fa-lock');
        bgLockIconBtn.classList.remove('fa-unlock');
        bgLocked = true;
    }
})
fgLockBtn.addEventListener('click', () => {
    if(fgLocked){
        fgLockIconBtn.classList.remove('fa-lock');
        fgLockIconBtn.classList.add('fa-unlock');
        fgLocked = false;
    }
    else{    
        fgLockIconBtn.classList.add('fa-lock');
        fgLockIconBtn.classList.remove('fa-unlock');
        fgLocked = true;
    }
})
