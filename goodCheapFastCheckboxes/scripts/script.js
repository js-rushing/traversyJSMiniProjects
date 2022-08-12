const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTheTrick(e.target))
)

function doTheTrick(checkedInput) {
  if (good.checked && cheap.checked && fast.checked) {
    good === checkedInput && (fast.checked = false)
    cheap === checkedInput && (good.checked = false)
    fast === checkedInput && (cheap.checked = false)
  }
}
