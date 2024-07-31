let isModalOpen= false;
let contrastToggle= false;

function toggleContrast(){
    contrastToggle=!contrastToggle;
    if(contrastToggle){
        document.body.classList+= " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
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