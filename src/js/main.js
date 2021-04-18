import '../css/style.css'
import '../css/style.scss'

let allInputs = document.querySelectorAll('.actions__input')

let h1 = document.createElement('h1')
let h2 = document.createElement('h2')
let h3 = document.createElement('h3')
let h4 = document.createElement('h4')
let h5 = document.createElement('h5')
let h6 = document.createElement('h6')

function createTag(tagName, value, place) {
    let tag = document.querySelector(`${tagName}[class = 'result__text']`)
    tag.innerText = value;
    return document.querySelector(`.${place}`).append(tag)
}

function createMD(tagName , value) {
    let hashtag;
    if (tagName == 'h1') {
        hashtag = '#'
        return document.querySelector(`${tagName}[class = 'preview__text']`).innerText = `${hashtag} ${value}`
    } else if (tagName == 'h2') {
        hashtag = '##'
        return document.querySelector(`${tagName}[class = 'preview__text']`).innerText = `${hashtag} ${value}`
    } else if (tagName == 'h3') {
        hashtag = '###'
        return document.querySelector(`${tagName}[class = 'preview__text']`).innerText = `${hashtag} ${value}`
    } else if (tagName == 'h4') {
        hashtag = '####'
        return document.querySelector(`${tagName}[class = 'preview__text']`).innerText = `${hashtag} ${value}`
    } else if (tagName == 'h5') {
        hashtag = '#####'
        return document.querySelector(`${tagName}[class = 'preview__text']`).innerText = `${hashtag} ${value}`
    } else if (tagName == 'h6') {
        hashtag = '######'
        return document.querySelector(`${tagName}[class = 'preview__text']`).innerText = `${hashtag} ${value}`
    }
}

allInputs.forEach(item => {
    item.oninput = () => {
        if (item.id == 'h1') {
            createTag('h1', item.value, 'fields__result')
            createMD('h1', item.value)
            
        }
        else if (item.id == 'h2') {
            createTag('h2', item.value, 'fields__result')
            createMD('h2', item.value)
        }
        else if (item.id == 'h3') {
            createTag('h3', item.value, 'fields__result')
            createMD('h3', item.value)

        }
        else if (item.id == 'h4') {
            createTag('h4', item.value, 'fields__result')
            createMD('h4', item.value)

        }
        else if (item.id == 'h5') {
            createTag('h5', item.value, 'fields__result')
            createMD('h5', item.value)

        }
        else if (item.id == 'h6') {
            createTag('h6', item.value, 'fields__result')
            createMD('h6', item.value)

        }
    }
})

{/* 
<h1> пример </h1>
<h2> пример </h2>
<h3>пример</h3>
<h4> пример </h4>
<h5> пример </h5>
<h6>пример</h6>
 */}

 //            createTag(h2, item.value, 'result__text', 'fields__result')


