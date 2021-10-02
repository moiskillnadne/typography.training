const root = document.querySelector('.root');
const loginButton = document.querySelector('#login_button');
const loginPopup = document.querySelector('#login_popup');

const loginPopupStatusHidden = 'none'
const loginPopupStatusShow = 'block'

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