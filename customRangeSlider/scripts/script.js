const range = document.querySelector('#range')

range.addEventListener('input', (e) => {
  const rangeVal = +e.target.value
  const label = e.target.nextElementSibling

  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
  const labelWidth = getComputedStyle(label).getPropertyValue('width')

  const rangeWidthNum = +rangeWidth.substring(0, rangeWidth.length - 2)
  const labelWidthNum = +labelWidth.substring(0, labelWidth.length - 2)

  const max = +e.target.max
  const min = +e.target.min

  const leftBoundary = rangeVal * (rangeWidthNum / max) - labelWidthNum / 2 + scale(rangeVal, min, max, 10, -10)

  label.innerText = rangeVal
  //   label.style.left = `${rangeWidthNum * (rangeVal / max) - (labelWidthNum / 2)}px`
  label.style.left = `${leftBoundary}px`
})

/*
 *   https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
