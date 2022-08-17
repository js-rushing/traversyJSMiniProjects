const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = ''
      let nextIdx = idx + 1
      setTimeout(() => {
        nextIdx < codes.length && codes[nextIdx].focus()
      }, 10)
    } else if (e.key === 'Backspace') {
      setTimeout(() => {
        let prevIdx = idx - 1
        prevIdx >= 0 && codes[prevIdx].focus()
      }, 10)
    }
  })
})
