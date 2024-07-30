//SvmNeIKp872mseky5 - Public Key
// service_uona3xr -service id
// template_b3scibo -template_id
function contact(event){
    event.preventDefault()
    // emailjs
    //     .sendForm(
    //         'service_uona3xr',
    //         'template_b3scibo',
    //         event.target,
    //         'SvmNeIKp872mseky5'
    //     ).then(()=>{

    //         console.log('it workS')
    //     })
    const loading= document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList +=" modal__overlay--visible"
    setTimeout(()=>{
        // loading.classList.remove("modal__overlay--visible")
        // success.classList +="modal__overlay--visible"

    },1000)
}