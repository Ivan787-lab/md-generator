(()=>{"use strict";let e=document.querySelectorAll(".actions__input");document.createElement("h1"),document.createElement("h2"),document.createElement("h3"),document.createElement("h4"),document.createElement("h5"),document.createElement("h6");function t(e,t,l){let r=document.querySelector(`${e}[class = 'result__text']`);return r.innerText=t,document.querySelector(`.${l}`).append(r)}function l(e,t){let l;return"h1"==e?(l="#",document.querySelector(`${e}[class = 'preview__text']`).innerText=`${l} ${t}`):"h2"==e?(l="##",document.querySelector(`${e}[class = 'preview__text']`).innerText=`${l} ${t}`):"h3"==e?(l="###",document.querySelector(`${e}[class = 'preview__text']`).innerText=`${l} ${t}`):"h4"==e?(l="####",document.querySelector(`${e}[class = 'preview__text']`).innerText=`${l} ${t}`):"h5"==e?(l="#####",document.querySelector(`${e}[class = 'preview__text']`).innerText=`${l} ${t}`):"h6"==e?(l="######",document.querySelector(`${e}[class = 'preview__text']`).innerText=`${l} ${t}`):void 0}e.forEach((e=>{e.oninput=()=>{"h1"==e.id?(t("h1",e.value,"fields__result"),l("h1",e.value)):"h2"==e.id?(t("h2",e.value,"fields__result"),l("h2",e.value)):"h3"==e.id?(t("h3",e.value,"fields__result"),l("h3",e.value)):"h4"==e.id?(t("h4",e.value,"fields__result"),l("h4",e.value)):"h5"==e.id?(t("h5",e.value,"fields__result"),l("h5",e.value)):"h6"==e.id&&(t("h6",e.value,"fields__result"),l("h6",e.value))}}))})();   