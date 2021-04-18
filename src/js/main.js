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
    } else if (tag == 'h2'  && value != '')  {
        hashtag = '##'
        elem.innerHTML = `${hashtag} ${value}`
        elem.classList.add('preview__text')

        return document.querySelector('.fields__preview').append(elem)
    } else if (tag == 'h3'  && value != '') {
        hashtag = '###'
        elem.innerHTML = `${hashtag} ${value}`
        elem.classList.add('preview__text')

        return document.querySelector('.fields__preview').append(elem)
    } else if (tag == 'h4'  && value != '') {
        hashtag = '####'
        elem.innerHTML = `${hashtag} ${value}`
        elem.classList.add('preview__text')

        return document.querySelector('.fields__preview').append(elem)
    } else if (tag == 'h5'  && value != '') {
        hashtag = '#####'
        elem.innerHTML = `${hashtag} ${value}`
        elem.classList.add('preview__text')

        return document.querySelector('.fields__preview').append(elem)
    } else if (tag == 'h6'  && value != '') {
        hashtag = '######'
        elem.innerHTML = `${hashtag} ${value}`
        elem.classList.add('preview__text')
        return document.querySelector('.fields__preview').append(elem)
    } else if (tag == 'p'  && value != '') {
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

function createLinkMD(value,url) {
    if (value != '') {
        let text = document.createElement('p')
        text.innerHTML = `[${value}](${url})`
        return document.querySelector('.fields__preview').append(text)     
    }
}

let makeBtn = document.querySelector('.actions__make-btn')
let textarea = document.querySelector('.actions__textarea')

makeBtn.addEventListener('click', () => {
    for (let i = 1; i < 7; i++) {
        createLine(`h${i}`, document.querySelector(`#h${i}`).value)
        createLineMD(`h${i}`, document.querySelector(`#h${i}`).value)
        document.querySelector(`#h${i}`).value = ''
    }
    createLine('p', textarea.value)
    createLineMD('p', textarea.value)
    createLink(document.querySelector('#input-text').value, document.querySelector('#input-url').value)
    createLinkMD(document.querySelector('#input-text').value, document.querySelector('#input-url').value)
})

