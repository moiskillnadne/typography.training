const backend = 'https://typography.training/api'
const devStand = 'http://localhost:5555/api'
const windowWidth = window.innerWidth

window.onload = async () => {
  const root = document.querySelector('.root')
  const body = document.querySelector('body')

  const loginButton = document.querySelector('#login_button')
  const loginPopup = document.querySelector('#login_popup')
  const accountButton = document.querySelector('#account_button')
  const accountLayerMobile = document.querySelector('#account_layer_mobile')
  const accountTitleLabel = document.querySelector('#account_title')

  const accountPopup = document.querySelector('#account_popup')
  const accountPopupSquare = document.querySelector('.square_arrow_account')


  const logoutButton = document.querySelector('#logout_button')
  const logoutButtonMobile = document.querySelector('#logout_button_mobile')
  const accountEmailLabel = document.querySelector('#account_email')

  const burgerMenuButton = document.querySelector('.menu_burger_mid_line')
  const menuLayerMobile = document.querySelector('#menu_layer_mobile')
  const closeMenuLayerButton = document.querySelector('.menu_layer_close_button')

  const loginPopupStatusHidden = 'none'
  const loginPopupStatusShow = 'block'

  const loginLayerCloseButton = document.querySelector('.login_layer_close_button')
  const loginLayerMobile = document.querySelector('#login_layer_mobile')
  const accountLayerCloseButton = document.querySelector('.account_layer_close_button')

  const authLayoutCloseButton = document.querySelector('.auth_layout_close_button')

  const loginInput = document.querySelector('#login_email_input')
  const loginInputLayout = document.querySelector('#login_email_input_layout')
  const loginInputLayoutMobile =document.querySelector('#login_email_input_layout_mobile')
  const sendEmailButton = document.querySelector('#send_email_button')
  const sendEmailButtonLayout = document.querySelector('#send_email_button_layout')
  const sendEmailButtonLayoutMobile = document.querySelector('#send_email_button_layout_mobile')
  const sendEmailButtonIcon = document.querySelector('#send_email_button_icon')
  const sendEmailButtonIconMobile = document.querySelector('#send_email_button_icon_mobile')
  const sendEmailButtonIconLayout = document.querySelector('#send_email_button_icon_layout')

  const allThemesPayButton = document.querySelector('#all_themes_pay_button')
  const allThemesPayButtonMobile = document.querySelector('#all_themes_pay_button_mobile')

  const ruleInsideAndOutsidePayButton = document.querySelector('#rule_inside_and_outside_pay_button')
  const ruleInsideAndOutsidePayButtonMobile = document.querySelector('#rule_inside_and_outside_pay_button_mobile')

  const textLayoutPayButton = document.querySelector('#text_layout_pay_button')
  const textLayoutPayButtonMobile = document.querySelector('#text_layout_pay_button_mobile')

  const anchorObjectPayButton = document.querySelector('#anchor_objects')
  const anchorObjectPayButtonMobile = document.querySelector('#anchor_objects_pay_button_mobile')

  const firstStepCirclesImg = document.querySelector('#first_step_circles_img')
  const allThemesTitle = document.querySelector('#all_themes_title')
  const allThemes = document.querySelector('#all_themes_card')
  const insideAndOutsideCard = document.querySelector('#inside_and_outside_card')
  const mobulePayButton = document.querySelector('#module_pay_button')

  const allThemesStudyButton = document.querySelector('#all_theme_study_button')
  const allThemesStudyButtonMobile = document.querySelector('#all_theme_study_button_mobile')

  const insideAndOutsideStudyButton = document.querySelector('#inside_and_outside_study_button')
  const insideAndOutsideStudyButtonMobile = document.querySelector('#inside_and_outside_study_button_mobile')

  const textLayoutStudyButton = document.querySelector('#layout_text_study_button')
  const textLayoutStudyButtonMobile = document.querySelector('#layout_text_study_button_mobile')

  const anchorObjectStudyButton = document.querySelector('#anchor_objects_study_button')
  const anchorObjectStudyButtonMobile = document.querySelector('#anchor_objects_study_button_mobile')

  const moduleStudyButton = document.querySelector('#module_study_button')

  const mainFlowDesktop = document.querySelector('#main_flow')
  const mainFlowMobile = document.querySelector('#main_flow_mobile')

  const isMobileSize = windowWidth < 576
  const email = localStorage.getItem('email')

  if(window.mobileCheck()) {
    mainFlowDesktop.style.display = 'none'
    mainFlowMobile.style.display = 'flex'
  } else {
    mainFlowDesktop.style.display = 'flex'
    mainFlowMobile.style.display = 'none'
  }

  if (email) {
    loginButton.style.display = 'none'
    accountButton.style.display = 'block'
  } else {
    loginButton.style.display = 'block'
    accountButton.style.display = 'none'
  }

  if (email) {
    const result = await fetch(`${backend}/getPaidLessons`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
    })

    const lessons = await result.json()
    showButtonCondition(lessons)
  }

  if (!window.mobileCheck()) {
    if (loginButton) {
      loginButton.addEventListener('click', async (e) => {
        const buttonRect = loginButton.getBoundingClientRect()
        e.stopPropagation()

        if (loginPopup.style.display === loginPopupStatusHidden || loginPopup.style.display === '') {
          loginPopup.style.display = loginPopupStatusShow
          loginPopup.style.left = `${buttonRect.x - 155}px`
        } else {
          loginPopup.style.display = loginPopupStatusHidden
        }
      })

      root.addEventListener('click', () => {
        if (loginPopup.style.display === loginPopupStatusShow) {
          loginPopup.style.display = loginPopupStatusHidden
        }
      })
    }

    if (accountButton) {
      accountButton.addEventListener('click', (e) => {
        const buttonRect = accountButton.getBoundingClientRect()
        e.stopPropagation()
        console.log('account_button click')

        if (accountPopup.style.display === loginPopupStatusHidden || accountPopup.style.display === '') {
          accountPopup.style.display = loginPopupStatusShow
          accountPopup.style.left = `${buttonRect.x - 152}px`

          const localStorageEmail = localStorage.getItem('email')
          let emailLabel

          if (localStorageEmail.length > 25) {
            emailLabel = `${localStorageEmail.slice(0, 25)}...`
          } else {
            emailLabel = localStorageEmail
          }

          const children = accountEmailLabel.childNodes
          if (!children[0]) {
            const emailLabelNode = document.createTextNode(emailLabel)
            accountEmailLabel.appendChild(emailLabelNode)
          }
        } else {
          accountPopup.style.display = loginPopupStatusHidden
        }
      })
    }
  } else {

    if(loginButton) {
      loginButton.addEventListener('click', () => {
        loginLayerMobile.classList.add('login_layer_mobile_active')
      })
    }

    if (accountButton) {
      accountButton.addEventListener('click', (e) => {
          const localStorageEmail = localStorage.getItem('email')
          let emailLabel

          if (localStorageEmail.length > 35) {
            emailLabel = `${localStorageEmail.slice(0, 25)}...`
          } else {
            emailLabel = localStorageEmail
          }

          console.log(emailLabel)
          accountTitleLabel.innerHTML = emailLabel
          accountLayerMobile.classList.add('login_layer_mobile_active')
      })
    }
  }

  burgerMenuButton.addEventListener('click', (e) => {

    const isScroll = body.style.overflow

    if(isScroll === 'hidden') {
      body.style.overflow = 'scroll'
    } else {
      body.style.overflow = 'hidden'
    }


    // setTimeout(() => burgerMenuButton.classList.toggle('menu_burger_mid_line_active'), 300)
    burgerMenuButton.style.display = 'none'
    menuLayerMobile.classList.toggle('menu_layer_mobile_active')
  })

  closeMenuLayerButton.addEventListener('click', () => {
    burgerMenuButton.style.display = 'block'
    menuLayerMobile.classList.toggle('menu_layer_mobile_active')
  })

  loginLayerCloseButton.addEventListener('click', () => {
    loginLayerMobile.classList.remove('login_layer_mobile_active')
  })
  accountLayerCloseButton.addEventListener('click', () => {
    accountLayerMobile.classList.remove('login_layer_mobile_active')
  })

  authLayoutCloseButton.addEventListener('click', () => {
    // authLayout.style.backdropFilter = 'blur(0)'
    authLayout.style.opacity = '0'

    setTimeout(() => authLayout.style.display = 'none', 250)
  })

  loginInput.addEventListener('input', onLoginInputChange)

  loginInputLayout.addEventListener('input', (e) => onLoginInputChange(e, true))
  loginInputLayoutMobile.addEventListener('input', (e) => onLoginInputChange(e))

  logoutButton.addEventListener('click', () => {
    localStorage.removeItem('email')

    accountPopup.style.display = loginPopupStatusHidden
    loginButton.style.display = 'block'
    accountButton.style.display = 'none'
  })
  logoutButtonMobile.addEventListener('click', () => {
    localStorage.removeItem('email')

    loginButton.style.display = 'block'
    accountButton.style.display = 'none'

    accountLayerMobile.classList.remove('login_layer_mobile_active')
  })

  sendEmailButton.addEventListener('click', async (e) => {
    sendEmailButtonIcon.src = './media/icons/loading.svg'
    sendEmailButtonIcon.classList.toggle('active_loading')

    const emailValue = loginInput.value

    if (validateEmail(emailValue)) {
      const resp = await fetch(`${backend}/sendemailcode`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          email: emailValue,
        }),
      })
      const json = await resp.json()
      if (resp.ok) {
        console.log(json)
        sendEmailButtonIcon.classList.toggle('active_loading')
        sendEmailButtonIcon.src = './media/icons/check.png'
      }
    }
  })

  sendEmailButtonLayout.addEventListener('click', async (e) => {
    sendEmailButtonIconLayout.src = './media/icons/loading.svg'
    sendEmailButtonIconLayout.classList.toggle('active_loading')

    const emailValue = loginInputLayout.value

    if (validateEmail(emailValue)) {
      const resp = await fetch(`${backend}/sendemailcode`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          email: emailValue,
        }),
      })
      const json = await resp.json()
      if (resp.ok) {
        console.log(json)
        sendEmailButtonIconLayout.classList.toggle('active_loading')
        sendEmailButtonIconLayout.src = './media/icons/check.png'
      }
    }
  })

  sendEmailButtonIconMobile.addEventListener('click', async (e) => {
    sendEmailButtonIconMobile.src = './media/icons/loading.svg'
    sendEmailButtonIconMobile.classList.toggle('active_loading')

    const emailValue = loginInputLayoutMobile.value

    if (validateEmail(emailValue)) {
      const resp = await fetch(`${backend}/sendemailcode`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          email: emailValue,
        }),
      })
      const json = await resp.json()
      if (resp.ok) {
        console.log(json)
        sendEmailButtonIconMobile.classList.toggle('active_loading')
        sendEmailButtonIconMobile.src = './media/icons/check.png'
      }
    }
  })

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const token = urlParams.get('token')

  if (token) {
    const resp = await fetch(`${backend}/verifyToken`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        token,
      }),
    })

    const json = await resp.json()

    if (resp.ok) {
      localStorage.setItem('email', json.email)
      window.location.search = ''

      loginButton.style.display = 'none'
      accountButton.style.display = 'block'
    }
  }

  const paymentToken = urlParams.get('paymentToken')
  const lessonTitle = urlParams.get('lesson')
  const userEmail = urlParams.get('user')

  if (paymentToken && lessonTitle && userEmail) {
    const resp = await fetch(`${backend}/checkPayment`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        paymentToken,
        email: userEmail,
        lesson: lessonTitle,
      }),
    })

    window.location.search = ''

    const result = await fetch(`${backend}/getPaidLessons`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        email: email,
      }),
    })

    const lessons = await result.json()
    showButtonCondition(lessons)
  }

  function showButtonCondition(lessons) {

    lessons.forEach((lesson) => {
      switch (lesson.lesson) {
        case '?????? ????????':
          allThemesPayButton.style.display = 'none'
          allThemesPayButtonMobile.style.display = 'none'

          allThemesStudyButton.style.display = 'block'
          allThemesStudyButtonMobile.style.display = 'block'

          allThemesStudyButton.innerHTML = '??????????????'
          allThemesStudyButtonMobile.innerHTML = '??????????????'

          allThemesStudyButton.classList.remove('study_button')
          allThemesStudyButton.classList.add('bought_button')

          allThemesStudyButtonMobile.classList.remove('study_button')
          allThemesStudyButtonMobile.classList.add('bought_button')

          ruleInsideAndOutsidePayButton.style.display = 'none'
          ruleInsideAndOutsidePayButtonMobile.style.display = 'none'

          insideAndOutsideStudyButton.style.display = 'block'
          insideAndOutsideStudyButtonMobile.style.display = 'block'

          textLayoutPayButton.style.display = 'none'
          textLayoutPayButtonMobile.style.display = 'none'

          textLayoutStudyButton.style.display = 'block'
          textLayoutStudyButtonMobile.style.display = 'block'

          anchorObjectPayButton.style.display = 'none'
          anchorObjectPayButtonMobile.style.display = 'none'

          anchorObjectStudyButton.style.display = 'block'
          anchorObjectStudyButtonMobile.style.display = 'block'

          allThemesCardPay.style.cursor = 'default'
          insideAndOutsideCardPay.style.cursor = 'default'
          textLayoutCardPay.style.cursor = 'default'
          anchorObjectCardPay.style.cursor = 'default'
          break

        case '??????????????????E ?? ????????????E':
          ruleInsideAndOutsidePayButton.style.display = 'none'
          insideAndOutsideStudyButton.style.display = 'block'
          insideAndOutsideCardPay.style.cursor = 'default'
          break

        case '?????????????? ????????????':
          textLayoutPayButton.style.display = 'none'
          textLayoutStudyButton.style.display = 'block'
          textLayoutCardPay.style.cursor = 'default'
          break

        case '?????????????? ??????????????':
          anchorObjectPayButton.style.display = 'none'
          anchorObjectStudyButton.style.display = 'block'
          anchorObjectCardPay.style.cursor = 'default'
          break

        // case '????????????':
        //     mobulePayButton.style.display = 'none'
        //     moduleStudyButton.style.display = 'block'
        //     break;

        default:
          console.log('Something wrong with switch case..')
      }
    })
  }


  function onLoginInputChange(e, isLayout = false) {
    const email = e.target.value

    if (!isLayout) {
      if (validateEmail(email)) {
        console.log('check')
        sendEmailButton.disabled = false
        sendEmailButton.style.backgroundColor = '#000000'
        sendEmailButton.style.border = '2px solid #000000'

        sendEmailButtonLayoutMobile.disabled = false
        sendEmailButtonLayoutMobile.style.backgroundColor = '#000000'
        sendEmailButtonLayoutMobile.style.border = '2px solid #000000'
      } else {
        sendEmailButton.disabled = true
        sendEmailButtonLayoutMobile.disabled = true
      }
    } else {
      if (validateEmail(email)) {
        sendEmailButtonLayout.disabled = false
        sendEmailButtonLayout.style.backgroundColor = '#000000'
        sendEmailButtonLayout.style.border = '2px solid #000000'
      } else {
        sendEmailButtonLayout.disabled = true
      }
    }
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
