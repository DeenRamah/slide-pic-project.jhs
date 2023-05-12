 //<i class="fa-solid fa-angle-right"></i>
//<i class="fa-solid fa-angle-left"></i>

const left = document.querySelector(".left")
const right = document.querySelector(".right")
const nuneslide = document.querySelector(".nunez")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")

let livehNumber = 1;

const length  = images.length





for(let i = 0; i < length; i ++){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div)
}

//to reset the bg of the buttons to be clear for it change when going to the next image


const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor = "white"

const resetBg = () =>{
    buttons.forEach((button) =>{
        button.style.backgroundColor = "transparent";
    })
}

buttons.forEach((button, i) => {
    button.addEventListener("click", ()=>{
        resetBg()
        nuneslide.style.transform = `translateX(-${i * 800}px)`;
        livehNumber = i+ i
        button.style.backgroundColor = "white";
    })
})






const nextNunes = () =>{
    nuneslide.style.transform = `translateX(-${livehNumber * 800}px)`;
    livehNumber++;

}

const prevnunez = () =>{
    nuneslide.style.transform = `translateX(-${(livehNumber-2) * 800}px)`
    livehNumber --;

}


 const getFirstslide = () =>{
    nuneslide.style.transform = `transateX(0px)`;
    livehNumber = 1;
 }

 const getlastSlide = () =>{
    nuneslide.style.transform = `translateX(${(length - 1) * 800}px)`;
    livehNumber = 1;
 }

//we can create a function of changing the color to reduce junk
const ChangeColor = () =>{
    resetBg()
    buttons[livehNumber - 1].style.backgroundColor = "white";
} 
right.addEventListener("click", ()=> {
    livehNumber < length ? nextNunes() : prevnunez();
    ChangeColor();
    //resetBg()
    //buttons[livehNumber - 1].style.backgroundColor = " white";
})

left.addEventListener("click", ()=> {
    livehNumber > 1 ? prevnunez() : getlastSlide();
    ChangeColor();  
    //resetBg()
    //buttons[livehNumber -1].style.backgroundColor = "white";
})
/**
 * right.addEventListener("click", ()=>{
    if(sliderNumber < images.length){
        nuneslide.style.transform = `translateX(-${livehNumber * 800}px)`;
        livehNumber++;
    }else{
        nuneslide.style.transform = `translateX(0px)`
        livehNumber = 1;
    }

    ////
        if(sliderNumber < images.length){
        nextNunes()
    }else{

        prevnunez()
    }
*/
//creating the buttons in the bottom class the creatring an html class in js and adding value using the append child

 