//Import main Stylesheet
import './style.sass'

const typeTarget: string = "typewrite-text"



function printHello() {
    console.log("print Hello World");
}

function typewrite() {
    const elem: Element | null = document.querySelector('#' + typeTarget)?.querySelector('.typed') ?? null;

    if(elem == null)
        return;

    const toType: string = elem?.textContent ?? "";
    elem.textContent = "";
    
    var index: number = 0
    
    var typeOne = (_: Event) => {
        elem.textContent += toType == null ? "" : toType[index++];
        if(index < toType.length)
            window.setTimeout(typeOne, 70);
    }

    window.setTimeout(typeOne, 70);
}

window.onload = () => typewrite()

export {printHello, typewrite};
