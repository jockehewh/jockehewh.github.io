function xavEncrypt(text, salt = 1) {
  let tmp = []
  let res = []
  text = btoa(text)
  for (let i = 0; i < text.length; i++) {
    tmp.push(text.charCodeAt(i))
  }
  tmp.forEach(code => {
    code = code << salt
    res.push(code)
  })
  return String.fromCharCode(...res)
}

function xavDecrypt(text, salt = 1) {
  let tmp = []
  let res = []
  for (let i = 0; i < text.length; i++) {
    tmp.push(text.charCodeAt(i))
  }
  tmp.forEach(code => {
    code = code >> salt
    res.push(code)
  })
  text = String.fromCharCode(...res)
  return atob(text)
}


document.querySelector('.encode').addEventListener('click', ()=>{
  let text = document.querySelector('#encode').value
  let encText = xavEncrypt(text, document.querySelector('input:checked').value)
  document.querySelector('#decode').value = encText
})

document.querySelector('.decode').addEventListener('click', () => {
  let text = document.querySelector('#decode').value
  let decText = xavDecrypt(text, document.querySelector('input:checked').value)
  document.querySelector('#encode').value = decText
})