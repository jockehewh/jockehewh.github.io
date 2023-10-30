export function xavEncrypt(text, salt = 1) {
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

export function xavDecrypt(text, salt = 1) {
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

