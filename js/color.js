function openColorPicker(event) {
    const nextInput = event.target.querySelector('.color-input');
    if(nextInput){
        nextInput.click();
    }
}

function updateColor(event) {
    const color = event.target.value;
    const colorBox = event.target.parentNode;
    const colorId = colorBox.id;
    colorBox.style.backgroundColor = color;
    console.log(colorBox.classList)

    const root = document.documentElement;

    switch(colorId){
        case 'color_box_1':
            const svgColor1 = document.getElementById("svgColor1").setAttribute('fill', color)
            const svgColor2 = document.getElementById("svgColor2").setAttribute('fill', color)
            const svgColor3 = document.getElementById("svgColor3").setAttribute('fill', color)
            const svgColor7 = document.getElementById("svgColor7").setAttribute('fill', color)
            const svgColor22 = document.getElementById("svgColor22").setAttribute('fill', color)
            root.style.setProperty('--color1', color)
            break;
        case 'color_box_2':
            const svgColor4 = document.getElementById("svgColor4").setAttribute('fill', color)
            const svgColor5 = document.getElementById("svgColor5").setAttribute('fill', color)
            const svgColor6 = document.getElementById("svgColor6").setAttribute('fill', color)
            const svgColor21 = document.getElementById("svgColor21").setAttribute('fill', color)
            root.style.setProperty('--color2', color)
            break;
        case 'color_box_3':
            const svgColor9 = document.getElementById("svgColor9").setAttribute('fill', color)
            const svgColor11 = document.getElementById("svgColor11").setAttribute('fill', color)
            const svgColor15 = document.getElementById("svgColor15").setAttribute('fill', color)
            root.style.setProperty('--color3', color)
        default:
            console.log('ID Inválido')
            break;
    }
}

document.querySelectorAll('.color-input').forEach(function(input) {
    input.addEventListener('input', function(event){
        updateColor(event);
    });
});




const svgColor1 = document.getElementById("svgColor1").setAttribute('fill', '#252525')
const svgColor2 = document.getElementById("svgColor2").setAttribute('fill', '#252525')
const svgColor3 = document.getElementById("svgColor3").setAttribute('fill', '#252525')
const svgColor22 = document.getElementById("svgColor22").setAttribute('fill', '#252525')

const svgColor4 = document.getElementById("svgColor4").setAttribute('fill', '#151515')
const svgColor5 = document.getElementById("svgColor5").setAttribute('fill', '#151515')
const svgColor6 = document.getElementById("svgColor6").setAttribute('fill', '#151515')
const svgColor21 = document.getElementById("svgColor21").setAttribute('fill', '#151515')
const svgColor7 = document.getElementById("svgColor7").setAttribute('fill', '#151515')


const svgColor9 = document.getElementById("svgColor9").setAttribute('fill', '#050505')
const svgColor11 = document.getElementById("svgColor11").setAttribute('fill', '#050505')
const svgColor15 = document.getElementById("svgColor15").setAttribute('fill', '#050505')
const svgColor16 = document.getElementById("svgColor16").setAttribute('fill', '#050505')
const svgColor18 = document.getElementById("svgColor18").setAttribute('fill', '#050505')
const svgColor19 = document.getElementById("svgColor19").setAttribute('fill', '#050505')