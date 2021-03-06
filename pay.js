const payLayout = document.querySelector('#pay_layout')
const payLayoutCloseButton = document.querySelector('.pay_layout_close_button')
const loginLayerMobile = document.querySelector('#login_layer_mobile')
const allThemesPayButton = document.querySelector('#all_themes_pay_button')
const firstStepCirclesImg = document.querySelector('#first_step_circles_img')
const allThemesTitle = document.querySelector('#all_themes_title')
const allThemes = document.querySelector('#all_themes_card')
const insideAndOutsideCard = document.querySelector('#inside_and_outside_card')

const ruleInsideAndOutsidePayButton = document.querySelector('#rule_inside_and_outside_pay_button')
const textLayoutPayButton = document.querySelector('#text_layout_pay_button')
const anchorObjectPayButton = document.querySelector('#anchor_objects')
const mobulePayButton = document.querySelector('#module_pay_button')

// const allThemesStudyButton = document.querySelector('#all_themes_study_button')
const insideAndOutsideStudyButton = document.querySelector('#inside_and_outside_study_button')
const insideAndOutsideStudyButtonMobile = document.querySelector('#inside_and_outside_study_button_mobile')

const textLayoutStudyButton = document.querySelector('#layout_text_study_button')
const textLayoutStudyButtonMobile = document.querySelector('#layout_text_study_button_mobile')

const anchorObjectStudyButton = document.querySelector('#anchor_objects_study_button')
const anchorObjectStudyButtonMobile = document.querySelector('#anchor_objects_study_button_mobile')


const moduleStudyButton = document.querySelector('#module_study_button')
const tryButton = document.querySelector('#try_button')
const authLayout = document.querySelector('#auth_layout')

// Pay cards
const allThemesCardPay = document.querySelector('#all_themes_card');
const insideAndOutsideCardPay = document.querySelector('#inside_and_outside_card');
const textLayoutCardPay = document.querySelector('#text_layout_card');
const anchorObjectCardPay = document.querySelector('#anchor_object_card');

// Pay cards mobile
const allThemesCardMobile = document.querySelector('#all_themes_card_mobile');
const insideAndOutsideCardPayMobile = document.querySelector('#inside_and_outside_card_mobile');
const textLayoutCardPayMobile = document.querySelector('#text_layout_card_mobile');
const anchorObjectCardPayMobile = document.querySelector('#anchor_object_card_mobile');

allThemesCardMobile.addEventListener('click', async (e) => {
  const email = localStorage.getItem('email')
  console.log(email)

  const result = await fetch(`${backend}/getPaidLessons`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
  })

  const lessons = await result.json()
  const lessonTitles = lessons.map(item => item.lesson)
  const disableAllPayButton = lessonTitles.includes('?????? ????????')

  if(!disableAllPayButton) {
    payButtonOnclick(e)
  }
})

insideAndOutsideCardPayMobile.addEventListener('click', async (e) => {
  const email = localStorage.getItem('email')
  const result = await fetch(`${backend}/getPaidLessons`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
  })

  const lessons = await result.json()
  const lessonTitles = lessons.map(item => item.lesson)
  const disableInexternalPayButton = lessonTitles.includes('??????????????????E ?? ????????????E') || lessonTitles.includes('?????? ????????')

  if(!disableInexternalPayButton) {
    payButtonOnclick(e)
  }
})

textLayoutCardPayMobile.addEventListener('click', async (e) => {
  const email = localStorage.getItem('email')
  const result = await fetch(`${backend}/getPaidLessons`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
  })

  const lessons = await result.json()
  const lessonTitles = lessons.map(item => item.lesson)
  const disableTextLayoutPayButton = lessonTitles.includes('?????????????? ????????????') || lessonTitles.includes('?????? ????????')
  if(!disableTextLayoutPayButton) {
    payButtonOnclick(e)
  }
})

anchorObjectCardPayMobile.addEventListener('click', async (e) => {
  const email = localStorage.getItem('email')
  const result = await fetch(`${backend}/getPaidLessons`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
  })

  const lessons = await result.json()
  const lessonTitles = lessons.map(item => item.lesson)
  const disableAnchorObjectPayButton = lessonTitles.includes('?????????????? ??????????????') || lessonTitles.includes('?????? ????????')
  if(!disableAnchorObjectPayButton) {
    payButtonOnclick(e)
  }
})

allThemesCardPay.addEventListener('click', async (e) => {
  const email = localStorage.getItem('email')
  console.log(email)

  const result = await fetch(`${backend}/getPaidLessons`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
  })

  const lessons = await result.json()
  const lessonTitles = lessons.map(item => item.lesson)
  const disableAllPayButton = lessonTitles.includes('?????? ????????')

  console.log(disableAllPayButton)
  if(!disableAllPayButton) {
    payButtonOnclick(e)
  }
})
insideAndOutsideCardPay.addEventListener('click', async (e) => {
  const email = localStorage.getItem('email')
  const result = await fetch(`${backend}/getPaidLessons`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
  })

  const lessons = await result.json()
  const lessonTitles = lessons.map(item => item.lesson)
  const disableInexternalPayButton = lessonTitles.includes('??????????????????E ?? ????????????E') || lessonTitles.includes('?????? ????????')

  if(!disableInexternalPayButton) {
    payButtonOnclick(e)
  }
})
textLayoutCardPay.addEventListener('click', async (e) => {
  const email = localStorage.getItem('email')
  const result = await fetch(`${backend}/getPaidLessons`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
  })

  const lessons = await result.json()
  const lessonTitles = lessons.map(item => item.lesson)
  const disableTextLayoutPayButton = lessonTitles.includes('?????????????? ????????????') || lessonTitles.includes('?????? ????????')
  if(!disableTextLayoutPayButton) {
    payButtonOnclick(e)
  }
})
anchorObjectCardPay.addEventListener('click', async (e) => {
  const email = localStorage.getItem('email')
  const result = await fetch(`${backend}/getPaidLessons`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
  })

  const lessons = await result.json()
  const lessonTitles = lessons.map(item => item.lesson)
  const disableAnchorObjectPayButton = lessonTitles.includes('?????????????? ??????????????') || lessonTitles.includes('?????? ????????')
  if(!disableAnchorObjectPayButton) {
    payButtonOnclick(e)
  }
})

const globalProblems = {
  inexternal: { name: '??????????????????E ?? ????????????E', data: [1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 16] },
  anchor: { name: '?????????????? ??????????????', data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
  text: { name: '?????????????? ????????????', data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  tryout: { name: '??????????????????????', data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
}

tryButton.addEventListener('click', () => {
  const email = localStorage.getItem('email')

  console.log('try button')

  if(email) {
    window.location.href = './pages/tryout/1.html'
  }

  if(!email && !window.mobileCheck()) {
    authLayout.style.display = 'grid'

    authLayout.style.backdropFilter = 'blur(16)'
    authLayout.style.opacity = '1'
  }

  if(!email && window.mobileCheck()) {
    loginLayerMobile.classList.add('login_layer_mobile_active')
  } 
})

insideAndOutsideStudyButton.addEventListener('click', async (e) => {
  const courseProgress = await fetch(`${backend}/getCourseProgress`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      email: localStorage.getItem('email'),
      lessonTitle: e.target.dataset.title,
    }),
  })

  const json = await courseProgress.json()
  console.log(json)
  if (json.length === 0) {
    window.location.href = `./pages/inexternal/1.html`
  }

  const tasks = json[0].tasks
  if (tasks.length === 0) {
    window.location.href = `./pages/inexternal/1.html`
  }
  const currentTask = tasks[tasks.length - 1]
  const currentTaskIndex = globalProblems.inexternal.data.indexOf(currentTask.id)
  const nextTask = globalProblems.inexternal.data[currentTaskIndex + 1]

  if (currentTaskIndex + 1 === globalProblems.inexternal.data.length) {
    window.location.href = `./pages/inexternal/final.html`
  }

  if (currentTaskIndex + 1 !== globalProblems.inexternal.data.length) {
    window.location.href = `./pages/inexternal/${nextTask}.html`
  }
})

insideAndOutsideStudyButtonMobile.addEventListener('click', async (e) => {
  const courseProgress = await fetch(`${backend}/getCourseProgress`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      email: localStorage.getItem('email'),
      lessonTitle: e.target.dataset.title,
    }),
  })

  const json = await courseProgress.json()
  console.log(json)
  if (json.length === 0) {
    window.location.href = `./pages/inexternal/1.html`
  }

  const tasks = json[0].tasks
  if (tasks.length === 0) {
    window.location.href = `./pages/inexternal/1.html`
  }
  const currentTask = tasks[tasks.length - 1]
  const currentTaskIndex = globalProblems.inexternal.data.indexOf(currentTask.id)
  const nextTask = globalProblems.inexternal.data[currentTaskIndex + 1]

  if (currentTaskIndex + 1 === globalProblems.inexternal.data.length) {
    window.location.href = `./pages/inexternal/final.html`
  }

  if (currentTaskIndex + 1 !== globalProblems.inexternal.data.length) {
    window.location.href = `./pages/inexternal/${nextTask}.html`
  }
})

anchorObjectStudyButton.addEventListener('click', async (e) => {
  const courseProgress = await fetch(`${backend}/getCourseProgress`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      email: localStorage.getItem('email'),
      lessonTitle: e.target.dataset.title,
    }),
  })

  const json = await courseProgress.json()
  if (json.length === 0) {
    window.location.href = `./pages/anchor/1.html`
  }
  const tasks = json[0].tasks
  if (tasks.length === 0) {
    window.location.href = `./pages/anchor/1.html`
  }
  const currentTask = tasks[tasks.length - 1]
  const currentTaskIndex = globalProblems.anchor.data.indexOf(currentTask.id)
  const nextTask = globalProblems.anchor.data[currentTaskIndex + 1]

  if (currentTaskIndex + 1 === globalProblems.anchor.data.length) {
    window.location.href = `./pages/anchor/final.html`
  }

  if (currentTaskIndex + 1 !== globalProblems.anchor.data.length) {
    window.location.href = `./pages/anchor/${nextTask}.html`
  }
})

anchorObjectStudyButtonMobile.addEventListener('click', async (e) => {
  const courseProgress = await fetch(`${backend}/getCourseProgress`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      email: localStorage.getItem('email'),
      lessonTitle: e.target.dataset.title,
    }),
  })

  const json = await courseProgress.json()
  if (json.length === 0) {
    window.location.href = `./pages/anchor/1.html`
  }
  const tasks = json[0].tasks
  if (tasks.length === 0) {
    window.location.href = `./pages/anchor/1.html`
  }
  const currentTask = tasks[tasks.length - 1]
  const currentTaskIndex = globalProblems.anchor.data.indexOf(currentTask.id)
  const nextTask = globalProblems.anchor.data[currentTaskIndex + 1]

  if (currentTaskIndex + 1 === globalProblems.anchor.data.length) {
    window.location.href = `./pages/anchor/final.html`
  }

  if (currentTaskIndex + 1 !== globalProblems.anchor.data.length) {
    window.location.href = `./pages/anchor/${nextTask}.html`
  }
})

textLayoutStudyButton.addEventListener('click', async (e) => {
  const courseProgress = await fetch(`${backend}/getCourseProgress`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      email: localStorage.getItem('email'),
      lessonTitle: e.target.dataset.title,
    }),
  })

  const json = await courseProgress.json()
  if (json.length === 0) {
    window.location.href = `./pages/text/1.html`
  }
  const tasks = json[0].tasks
  if (tasks.length === 0) {
    window.location.href = `./pages/text/1.html`
  }
  const currentTask = tasks[tasks.length - 1]
  const currentTaskIndex = globalProblems.anchor.data.indexOf(currentTask.id)
  const nextTask = globalProblems.anchor.data[currentTaskIndex + 1]


  if (currentTaskIndex + 1 === globalProblems.text.data.length) {
    window.location.href = `./pages/text/final.html`
  }

  if (currentTaskIndex + 1 !== globalProblems.text.data.length) {
    window.location.href = `./pages/text/${nextTask}.html`
  }
})

textLayoutStudyButtonMobile.addEventListener('click', async (e) => {
  const courseProgress = await fetch(`${backend}/getCourseProgress`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      email: localStorage.getItem('email'),
      lessonTitle: e.target.dataset.title,
    }),
  })

  const json = await courseProgress.json()
  if (json.length === 0) {
    window.location.href = `./pages/text/1.html`
  }
  const tasks = json[0].tasks
  if (tasks.length === 0) {
    window.location.href = `./pages/text/1.html`
  }
  const currentTask = tasks[tasks.length - 1]
  const currentTaskIndex = globalProblems.anchor.data.indexOf(currentTask.id)
  const nextTask = globalProblems.anchor.data[currentTaskIndex + 1]


  if (currentTaskIndex + 1 === globalProblems.text.data.length) {
    window.location.href = `./pages/text/final.html`
  }

  if (currentTaskIndex + 1 !== globalProblems.text.data.length) {
    window.location.href = `./pages/text/${nextTask}.html`
  }
})

let checkout

payLayout.addEventListener('click', closePayModalAnimation)
payLayoutCloseButton.addEventListener('click', closePayModalAnimation)
authLayout.addEventListener('click', (e) => {
  const isLayout = e.target == authLayout

  if (isLayout) {
    authLayout.style.backdropFilter = 'blur(0);'
    authLayout.style.opacity = '0'

    setTimeout(() => {
      authLayout.style.display = 'none'
    }, 500)
  }
})

allThemesPayButton.addEventListener('click', async (e) => {
  e.stopImmediatePropagation()
  const email = localStorage.getItem('email')

  const result = await fetch(`${backend}/getPaidLessons`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
  })

  const lessons = await result.json()
  const lessonTitles = lessons.map(item => item.lesson)
  const disableAllPayButton = lessonTitles.includes('?????? ????????')

  if(!disableAllPayButton) {
    payButtonOnclick(e)
  }
})

ruleInsideAndOutsidePayButton.addEventListener('click', async (e) => {
  e.stopImmediatePropagation()
  const email = localStorage.getItem('email')
  const result = await fetch(`${backend}/getPaidLessons`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
  })

  const lessons = await result.json()
  const lessonTitles = lessons.map(item => item.lesson)
  const disableInexternalPayButton = lessonTitles.includes('??????????????????E ?? ????????????E')

  if(!disableInexternalPayButton) {
    payButtonOnclick(e)
  }
})

textLayoutPayButton.addEventListener('click', async (e) => {
  e.stopImmediatePropagation()
  const email = localStorage.getItem('email')
  if(email) {
    const result = await fetch(`${backend}/getPaidLessons`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
    })
  
    const lessons = await result.json()
    const lessonTitles = lessons.map(item => item.lesson)
    const disableTextLayoutPayButton = lessonTitles.includes('?????????????? ????????????')
    if(!disableTextLayoutPayButton) {
      payButtonOnclick(e)
    }
  }

  if(!email) {
    authLayout.style.display = 'grid'

    authLayout.style.backdropFilter = 'blur(16)'
    authLayout.style.opacity = '1'

  }
})

anchorObjectPayButton.addEventListener('click', async (e) => {
  e.stopImmediatePropagation()
  const email = localStorage.getItem('email')
  const result = await fetch(`${backend}/getPaidLessons`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
  })

  const lessons = await result.json()
  const lessonTitles = lessons.map(item => item.lesson)
  const disableAnchorObjectPayButton = lessonTitles.includes('?????????????? ??????????????')
  if(!disableAnchorObjectPayButton) {
    payButtonOnclick(e)
  }
})

// mobulePayButton.addEventListener('click', payButtonOnclick)


function closePayModalAnimation(e) {
  checkout.destroy()
  payLayout.style.backdropFilter = 'blur(0);'
  payLayout.style.opacity = '0'

  setTimeout(() => {
    payLayout.style.display = 'none'
  }, 500)
}

function openPayModalAnimation(token, id, title) {
  payLayout.style.display = 'grid'

  payLayout.style.backdropFilter = 'blur(16)'
  payLayout.style.opacity = '1'

  //?????????????????????????? ??????????????. ?????? ?????????????????? ????????????????????????.
  checkout = new window.YooMoneyCheckoutWidget({
    confirmation_token: token, //??????????, ?????????????? ?????????? ?????????????????????? ???????????? ?????????? ???????????????? ???? ??Kassa
    return_url: `https://typography.training?paymentToken=${id}&lesson=${title}&user=${localStorage.getItem('email')}`, //???????????? ???? ???????????????? ???????????????????? ????????????, ?????? ?????????? ???????? ?????????? ???????? ????????????????

    //?????? ?????????????????????????? ?????????? ???????????????? ?????????? ??????????????, ?????????????????? ?????????????????? ????. ?? ????????????????????????
    //customization: {
    //?????????????????? ???????????????? ??????????, ?????????????? ???????? ????????????????, ???????????????? ???????????? ?? HEX
    //colors: {
    //???????? ?????????????????? ??????????????????: ???????????? ??????????????????, ?????????????????? ??????????????????????????, ?????????? ?? ?????????????????? ????????
    //controlPrimary: '#00BF96', //???????????????? ?????????? ?? HEX

    //???????? ?????????????????? ?????????? ?? ???? ??????????????????
    //background: '#F2F3F5' //???????????????? ?????????? ?? HEX
    //}
    //},
    error_callback: function (error) {
      console.log(error)
    },
  })

  //?????????????????????? ?????????????????? ?????????? ?? ????????????????????
  checkout.render('payment-form')
}

async function payButtonOnclick(e) {
  e.stopImmediatePropagation()

  const email = localStorage.getItem('email')

  if (email) {
    const body = {
      price: e.target.dataset.price,
      title: e.target.dataset.title,
    }

    const result = await fetch(`${backend}/createBill`, {
      method: 'POST',
      body: JSON.stringify(body),
    })

    const paymentObject = await result.json()

    if (result.ok) {
      console.log(paymentObject)
      openPayModalAnimation(paymentObject.confirmation.confirmation_token, paymentObject.id, body.title)
    }
  } else {

    if(window.mobileCheck()) {
      loginLayerMobile.classList.add('login_layer_mobile_active')
    }

    if(!window.mobileCheck()) {
      authLayout.style.display = 'grid'

      authLayout.style.backdropFilter = 'blur(16)'
      authLayout.style.opacity = '1'
    }
  }
}
