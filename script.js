const reviealElements = document.querySelectorAll("[data-reveal]");
const scroolReaveal = function(){
    len=reviealElements.length;
    for(let i=0;i<len;i++){
        // console.log(reviealElements[i].getBoundingClientRect().top < window.inner);
        const isElementsOnScreen= reviealElements[i].getBoundingClientRect().top < window.innerHeight ;      
        if(isElementsOnScreen){
            reviealElements[i].classList.add("revealed")
        }
        else{
            reviealElements[i].classList.remove("revealed")
    
        }
    }

}

window.addEventListener("scroll",scroolReaveal);
window.addEventListener("load",scroolReaveal)
