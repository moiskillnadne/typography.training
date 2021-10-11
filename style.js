const firstStepCirclesImg = document.querySelector('#first_step_circles_img')
const doubleCirclesImg = document.querySelector('#double_circles_img');
const questionBlockImg = document.querySelector('#question_block_img');
const lightningImg = document.querySelector('#lightning_block_object');
const fourCirclesImg = document.querySelector('#four_circles_img');
const triangleObject = document.querySelector('#triangle_object_img');

// changeWidthOfImgs(window.innerWidth)

window.onresize = (e) => {
    const innerWidth = e.target.innerWidth

    
    // changeWidthOfImgs(innerWidth)
    
}

function changeWidthOfImgs(width) {
    if(width > 1400) {
        firstStepCirclesImg.style.width = '600px';
        doubleCirclesImg.style.width = '600px'
        questionBlockImg.style.width = '600px'
        lightningImg.style.width = '600px'
        fourCirclesImg.style.width = '600px'
        triangleObject.style.width = '600px'
    } else if(width < 1000) {
        firstStepCirclesImg.style.width = '300px';
        doubleCirclesImg.style.width = '300px'
        questionBlockImg.style.width = '300px'
        lightningImg.style.width = '300px'
        fourCirclesImg.style.width = '300px'
        triangleObject.style.width = '300px'

    } else if(width < 1400 && width > 1000) {
        firstStepCirclesImg.style.width = `${calculateWidthOfImg(width)}px`
        doubleCirclesImg.style.width = `${calculateWidthOfImg(width)}px`
        questionBlockImg.style.width = `${calculateWidthOfImg(width)}px`
        lightningImg.style.width = `${calculateWidthOfImg(width)}px`
        fourCirclesImg.style.width = `${calculateWidthOfImg(width)}px`
        triangleObject.style.width = `${calculateWidthOfImg(width)}px`
    }
}

function calculateWidthOfImg(width) {
    return ((width - 1000) * 0.45) + 300;
}