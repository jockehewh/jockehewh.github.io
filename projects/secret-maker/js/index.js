import * as my from "./script.js"
document.querySelector('.encode').addEventListener('click', ()=>{
  let text = document.querySelector('#encode').value
  let encText = my.xavEncrypt(text, document.querySelector('input:checked').value)
  document.querySelector('#decode').value = encText
})

document.querySelector('.decode').addEventListener('click', () => {
  let text = document.querySelector('#decode').value
  let decText = my.xavDecrypt(text, document.querySelector('input:checked').value)
  document.querySelector('#encode').value = decText
})