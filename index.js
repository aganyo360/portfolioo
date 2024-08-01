let isModalOpen= false;
let contrastToggle= false;
const scaleFactor = 1/2;





function toggleContrast(){
    contrastToggle=!contrastToggle;
    if(contrastToggle){
        document.body.classList+= " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }

}

function moveBackground(event){
    const shape = document.querySelectorAll(".shape");
    const x= event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor

    for(let i=0; i< shape.length; i++){
        const isOdd = i % 2 !==0;
        const boolInt =isOdd ? -1 : 1;
        shape[i].style.transform =` translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}
function contact(event){

    event.preventDefault();
    const loading= document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList +=" modal__overlay--visible"
    emailjs
        .sendForm(
            'service_uona3xr',
            'template_xu0nlua',
            event.target,
            'SvmNeIKp872mseky5'
        ).then(()=>{
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
            
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("The email service is temporarily unavailable. Please contact me at wilsonganyo@gmail.com")
        })
    
    setTimeout(() => {
        

    },1000)
}

function ToggleModal(){
   if(isModalOpen){
    isModalOpen=false;
    return document.body.classList.remove('modal--open')
   }
   isModalOpen=true;
    document.body.classList += " modal--open"
}

