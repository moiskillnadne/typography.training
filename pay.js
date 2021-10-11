
const payLayout = document.querySelector('#pay_layout');
const allThemesPayButton = document.querySelector('#all_themes_pay_button');
const firstStepCirclesImg = document.querySelector('#first_step_circles_img')
const allThemesTitle = document.querySelector('#all_themes_title');
const allThemes = document.querySelector('#all_themes_card');
const insideAndOutsideCard = document.querySelector('#inside_and_outside_card');

const ruleInsideAndOutsidePayButton = document.querySelector('#rule_inside_and_outside_pay_button');
const textLayoutPayButton = document.querySelector('#text_layout_pay_button');
const anchorObjectPayButton = document.querySelector('#anchor_objects');
const mobulePayButton = document.querySelector('#module_pay_button');

const allThemesStudyButton = document.querySelector('#all_themes_study_button');
const insideAndOutsideStudyButton = document.querySelector('#inside_and_outside_study_button');
const textLayoutStudyButton = document.querySelector('#layout_text_study_button');
const anchorObjectStudyButton = document.querySelector('#anchor_objects_study_button');
const moduleStudyButton = document.querySelector('#module_study_button');
const tryButton = document.querySelector('#try_button');


tryButton.addEventListener('click', () => {
    window.location.href = './pages/tryout/1.html';
})

insideAndOutsideStudyButton.addEventListener('click', (e) => {
    window.location.href = './pages/inexternal/1.html';
})

anchorObjectStudyButton.addEventListener('click', (e) => {
    window.location.href = './pages/anchor/1.html';
})

textLayoutStudyButton.addEventListener('click', (e) => {
    window.location.href = './pages/text/1.html'
})

let checkout;

payLayout.addEventListener('click', closePayModalAnimation)

allThemesPayButton.addEventListener('click', payButtonOnclick)
ruleInsideAndOutsidePayButton.addEventListener('click', payButtonOnclick)
textLayoutPayButton.addEventListener('click', payButtonOnclick)
anchorObjectPayButton.addEventListener('click', payButtonOnclick)
mobulePayButton.addEventListener('click', payButtonOnclick)

allThemes.addEventListener('click', payButtonOnclick)
insideAndOutsideCard.addEventListener('click', payButtonOnclick)


function closePayModalAnimation(e) {
    checkout.destroy();
    payLayout.style.backdropFilter = 'blur(0);'
    payLayout.style.opacity = '0'
    
    setTimeout(() => {
        payLayout.style.display = 'none';
    }, 500)
}

function openPayModalAnimation(token, id, title) {
    payLayout.style.display = 'grid';

    payLayout.style.backdropFilter = 'blur(16)'
    payLayout.style.opacity = '1'

    //Инициализация виджета. Все параметры обязательные.
    checkout = new window.YooMoneyCheckoutWidget({
        confirmation_token: token, //Токен, который перед проведением оплаты нужно получить от ЮKassa
        return_url: `https://typography.training?paymentToken=${id}&lesson=${title}&user=${localStorage.getItem('email')}`, //Ссылка на страницу завершения оплаты, это может быть любая ваша страница

        //При необходимости можно изменить цвета виджета, подробные настройки см. в документации
        //customization: {
        //Настройка цветовой схемы, минимум один параметр, значения цветов в HEX
        //colors: {
            //Цвет акцентных элементов: кнопка Заплатить, выбранные переключатели, опции и текстовые поля
            //controlPrimary: '#00BF96', //Значение цвета в HEX

            //Цвет платежной формы и ее элементов
            //background: '#F2F3F5' //Значение цвета в HEX
        //}
        //},
        error_callback: function(error) {
            console.log(error)
        }
    });

    //Отображение платежной формы в контейнере
    checkout.render('payment-form');
}

async function payButtonOnclick(e) {
    e.stopImmediatePropagation();

    const body = {
        price: e.target.dataset.price,
        title: e.target.dataset.title
    }

    const result = await fetch(`${backend}/createBill`, {
        method: "POST",
        body: JSON.stringify(body)
    })

    const paymentObject = await result.json()

    if(result.ok) {
        console.log(paymentObject)
        openPayModalAnimation(paymentObject.confirmation.confirmation_token, paymentObject.id, body.title)
    } 
}