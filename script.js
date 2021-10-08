const backend = 'https://typography.training/api'
const devStand = 'http://localhost:5555/api'

window.onload = async () => {
    const root = document.querySelector('.root');
    const windowWidth = window.innerWidth

    const loginButton = document.querySelector('#login_button');
    const loginPopup = document.querySelector('#login_popup');
    const accountButton = document.querySelector('#account_button');
    const accountPopup = document.querySelector('#account_popup');
    const logoutButton = document.querySelector('#logout_button');

    const payButtonRIAO = document.querySelector('#rule_inside_and_outside_pay_button');
    const payButtonAnchorObjects = document.querySelector('#anchor_objects')

    const burgerMenuButton = document.querySelector('.menu_burger_mid_line');
    const menuLayerMobile = document.querySelector('#menu_layer_mobile');

    const loginPopupStatusHidden = 'none'
    const loginPopupStatusShow = 'block'

    const loginLayerCloseButton = document.querySelector('.login_layer_close_button')
    const loginLayerMobile = document.querySelector('#login_layer_mobile')

    const loginInput = document.querySelector('#login_email_input')
    const sendEmailButton = document.querySelector('#send_email_button')
    const sendEmailButtonIcon = document.querySelector('#send_email_button_icon')

    const isMobileSize = windowWidth < 576

    payButtonRIAO.addEventListener('click', (e) => {
        window.location.href = './pages/inexternal/1.html'
    })

    payButtonAnchorObjects.addEventListener('click', () => {
        window.location.href = './pages/anchor/1.html'
    })

    if(localStorage.getItem('email')) {
        loginButton.style.display = 'none'
        accountButton.style.display = 'block'
    } else {
        loginButton.style.display = 'block'
        accountButton.style.display = 'none'
    }

    if(!isMobileSize) {
        if(loginButton) {
            loginButton.addEventListener('click', async (e) => {
                const buttonRect = loginButton.getBoundingClientRect()
                e.stopPropagation()
        
                if(loginPopup.style.display === loginPopupStatusHidden || loginPopup.style.display === '') {
                    loginPopup.style.display = loginPopupStatusShow;
                    loginPopup.style.left = `${buttonRect.x - 155}px`
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


        if(accountButton) {
            accountButton.addEventListener('click', (e) => {
                const buttonRect = accountButton.getBoundingClientRect()
                e.stopPropagation()
        
                if(accountPopup.style.display === loginPopupStatusHidden || accountPopup.style.display === '') {
                    accountPopup.style.display = loginPopupStatusShow;
                    accountPopup.style.left = `${buttonRect.x - 15}px`
                } else {
                    accountPopup.style.display = loginPopupStatusHidden;
                }
            })
        }
    } else {
        loginButton.addEventListener('click', () => {
            loginLayerMobile.classList.add('login_layer_mobile_active')
        })
    }

    burgerMenuButton.addEventListener('click', (e) => {
        console.log(e)

        burgerMenuButton.classList.toggle('menu_burger_mid_line_active')
        menuLayerMobile.classList.toggle('menu_layer_mobile_active')
    })

    loginLayerCloseButton.addEventListener('click', () => {
        loginLayerMobile.classList.remove('login_layer_mobile_active')
        console.log('close login')

    })

    loginInput.addEventListener('input', (e) => {
        const email = e.target.value

        if(validateEmail(email)) {
            sendEmailButton.disabled = false
            sendEmailButton.style.backgroundColor = '#000000';
        } else {
            sendEmailButton.disabled = true
        }
    })

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('email')

        accountPopup.style.display = loginPopupStatusHidden;
        loginButton.style.display = 'block'
        accountButton.style.display = 'none'
    })


    sendEmailButton.addEventListener('click', async (e) => {
        sendEmailButtonIcon.src = './media/icons/loading.svg'
        sendEmailButtonIcon.classList.toggle('active_loading')

        const emailValue = loginInput.value

        if(validateEmail(emailValue)) {
            const resp = await fetch(`${backend}/sendemailcode`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    email: emailValue
                })
            })
            const json = await resp.json()
            if(resp.ok) {
                console.log(json)
                sendEmailButtonIcon.classList.toggle('active_loading')
                sendEmailButtonIcon.src = './media/icons/check.png'
            }
        }
    })


    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const token = urlParams.get('token')

    console.log('inside domcontentloaded')

    if(token) {
        const resp = await fetch(`${backend}/verifyToken`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                token
            })
        })

        const json = await resp.json()

        if(resp.ok) {
            localStorage.setItem('email', json.email)
            window.location.search = ''

            loginButton.style.display = 'none'
            accountButton.style.display = 'block'
        }
        
    }
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
