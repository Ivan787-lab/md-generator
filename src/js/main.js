import '../css/style.css'
import '../css/style.scss'

function createLine(tag, value) {
    if (value != '') {
        let elem = document.createElement(tag)
        elem.innerHTML = value
        elem.classList.add('result__text')
        return document.querySelector('.fields__result').append(elem)
    }
}

function createLineMD(tag, value) {
    let elem = document.createElement(tag)
    let hashtag
    if (tag == 'h1' && value != '') {
        hashtag = '#'
        elem.innerHTML = `${hashtag} ${value}`
        elem.classList.add('preview__text')
        return document.querySelector('.fields__preview').append(elem)
    } else if (tag == 'h2' && value != '') {
        hashtag = '##'
        elem.innerHTML = `${hashtag} ${value}`
        elem.classList.add('preview__text')

        return document.querySelector('.fields__preview').append(elem)
    } else if (tag == 'h3' && value != '') {
        hashtag = '###'
        elem.innerHTML = `${hashtag} ${value}`
        elem.classList.add('preview__text')

        return document.querySelector('.fields__preview').append(elem)
    } else if (tag == 'h4' && value != '') {
        hashtag = '####'
        elem.innerHTML = `${hashtag} ${value}`
        elem.classList.add('preview__text')

        return document.querySelector('.fields__preview').append(elem)
    } else if (tag == 'h5' && value != '') {
        hashtag = '#####'
        elem.innerHTML = `${hashtag} ${value}`
        elem.classList.add('preview__text')

        return document.querySelector('.fields__preview').append(elem)
    } else if (tag == 'h6' && value != '') {
        hashtag = '######'
        elem.innerHTML = `${hashtag} ${value}`
        elem.classList.add('preview__text')
        return document.querySelector('.fields__preview').append(elem)
    } else if (tag == 'p' && value != '') {
        elem.classList.add('preview__text')
        elem.innerHTML = value
        return document.querySelector('.fields__preview').append(elem)
    }
}

function createLink(value, url) {
    if (value != '' && url != '') {
        let link = document.createElement('a')
        link.innerHTML = value
        link.setAttribute('href', url)
        link.setAttribute('target', '_blank')
        return document.querySelector('.fields__result').append(link)

    }
}

function createLinkMD(value, url) {
    if (value != '') {
        let text = document.createElement('p')
        text.innerHTML = `[${value}](${url})`
        return document.querySelector('.fields__preview').append(text)
    }
}

function createlist(array, tag) {
    let list = document.createElement(tag)
    list.classList.add('result__list')
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li')
        li.innerHTML = array[i].value
        list.append(li)

    }
    document.querySelector('.fields__result').append(list)
}

function createListMD(array, tag) {
    let list = document.createElement(tag)
    list.classList.add('preview__list')
    if (tag == 'ul') {
        for (let i = 0; i < array.length; i++) {
            let li = document.createElement('li')
            li.innerHTML = `* ${array[i].value}`
            list.append(li)
        }
        return document.querySelector('.fields__preview').append(list)
    }
    if (tag == 'ol') {
        for (let i = 0; i < array.length; i++) {
            let li = document.createElement('li')
            li.innerHTML = `${i + 1}. ${array[i].value}`
            list.append(li)
        }
        return document.querySelector('.fields__preview').append(list)
    }
}

let makeBtn = document.querySelector('.actions__make-btn')
let textarea = document.querySelector('.actions__textarea')
let selectList = document.querySelector('.create-list__select')
let createButtonList = document.querySelector('.create-list__create-btn')
let input = document.querySelector('.create-list__input-number')
let allInputsForList = []
let variant;
selectList.onchange = () => {
    variant = selectList.value;
    input.disabled = false
    if (variant == 'ul') {
        input.oninput = () => {
            if (input.value.length >= 1) {
                createButtonList.disabled = false
            }
        }
        createButtonList.addEventListener('click', () => {
            let value = input.value
            input.disabled = true
            for (let i = 1; i < parseInt(value) + 1; i++) {
                let inputForLi = document.createElement('input')
                inputForLi.classList.add('li-container__input')
                inputForLi.id = `for-li__${i}`
                inputForLi.setAttribute('placeholder', `Поле ввода для li ${i}`)
                document.querySelector('.create-list__li-container').append(inputForLi)

                allInputsForList.push(inputForLi)
            }
            createButtonList.disabled = true
            selectList.disabled = true
        })

    }
    else if (variant == 'ol') {
        input.oninput = () => {
            if (input.value.length >= 1) {
                createButtonList.disabled = false
            }
        }
        createButtonList.addEventListener('click', () => {
            let value = input.value
            input.disabled = true
            for (let i = 1; i < parseInt(value) + 1; i++) {
                let inputForLi = document.createElement('input')
                inputForLi.classList.add('li-container__input')
                inputForLi.id = `for-li__${i}`
                inputForLi.setAttribute('placeholder', `Поле ввода для li ${i}`)
                document.querySelector('.create-list__li-container').append(inputForLi)
                allInputsForList.push(inputForLi)
            }
            createButtonList.disabled = true
            selectList.disabled = true
        })

    }
}


makeBtn.addEventListener('click', () => {
    for (let i = 1; i < 7; i++) {
        createLine(`h${i}`, document.querySelector(`#h${i}`).value)
        createLineMD(`h${i}`, document.querySelector(`#h${i}`).value)
        document.querySelector(`#h${i}`).value = ''
    }
    createLine('p', textarea.value)
    createLineMD('p', textarea.value)
    textarea.value = ''
    createLink(document.querySelector('#input-text').value, document.querySelector('#input-url').value)
    createLinkMD(document.querySelector('#input-text').value, document.querySelector('#input-url').value)
    document.querySelector('#input-text').value = ''
    document.querySelector('#input-url').value = ''

    allInputsForList.forEach(element => {
        element.parentNode.removeChild(element)
    })
    createlist(allInputsForList, variant)
    createListMD(allInputsForList, variant)
})

