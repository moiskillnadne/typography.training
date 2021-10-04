const root = document.querySelector('.root');
const windowWidth = window.innerWidth
const loginButton = document.querySelector('#login_button');
const loginPopup = document.querySelector('#login_popup');
const payButtonRIAO = document.querySelector('#rule_inside_and_outside_pay_button');

const burgerMenuButton = document.querySelector('.menu_burger_mid_line');
const menuLayerMobile = document.querySelector('#menu_layer_mobile');

const loginPopupStatusHidden = 'none'
const loginPopupStatusShow = 'block'

const isMobileSize = windowWidth < 576

payButtonRIAO.addEventListener('click', (e) => {
    window.location.href = './pages/inexternal/0.html'
})

if(!isMobileSize) {
    loginButton.addEventListener('click', (e) => {
        const buttonRect = loginButton.getBoundingClientRect()
        e.stopPropagation()
    
        if(loginPopup.style.display === loginPopupStatusHidden || loginPopup.style.display === '') {
            loginPopup.style.display = loginPopupStatusShow;
            loginPopup.style.left = `${buttonRect.x - 180}px`
        } else {
            loginPopup.style.display = loginPopupStatusHidden;
        }
    })
    
    root.addEventListener('click', () => {
        if(loginPopup.style.display === loginPopupStatusShow) {
            loginPopup.style.display = loginPopupStatusHidden;
        }
    })
}

burgerMenuButton.addEventListener('click', (e) => {
    console.log(e)

    burgerMenuButton.classList.toggle('menu_burger_mid_line_active')
    menuLayerMobile.classList.toggle('menu_layer_mobile_active')
})