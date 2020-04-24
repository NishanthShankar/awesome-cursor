(function () {
  const transitionProperties =
    'boxShadow, background, border-radius, height, width'
  const buttonTransitionProperties =
    'boxShadow, background, border-radius, height, width, top, left'
  const releaseBtnTransProps =
    'boxShadow, background, border-radius, height, width, top, left'
  // Create awesome cursor with base styles
  const awesomeCusor = document.createElement('div')
  awesomeCusor.style.height = '20px'
  awesomeCusor.style.width = '20px'
  awesomeCusor.style.background = '#0008'
  awesomeCusor.style.borderRadius = '50%'
  awesomeCusor.style.boxShadow = '0 0 0 2px #fff5'
  awesomeCusor.style.position = 'fixed'
  awesomeCusor.style.top = '-100px'
  awesomeCusor.style.left = '-100px'
  awesomeCusor.style.zIndex = 1000
  awesomeCusor.style.pointerEvents = 'none'
  awesomeCusor.style.transform = 'translate(-50%, -50%)'
  awesomeCusor.style.transition = 'all 0.2s 0.1s ease-out'
  awesomeCusor.style.transitionProperty = transitionProperties
  document.body.appendChild(awesomeCusor)
  document.body.style.cursor = 'none'
  let lockX = false
  let lockY = false
  let lastX, lastY
  let yMin = 0
  let yMax = 0
  
  window.addEventListener('mousemove', function (e) {
    if (!lockX) awesomeCusor.style.left = e.clientX + 'px'
    if (!lockY) awesomeCusor.style.top = e.clientY + 'px'
    if (yMax && yMin) {
      if (e.clientY < yMax || e.clientY > yMin) awesomeCusor.style.top = e.clientY + 'px'
    }
    lastX = e.clientX + 'px'
    lastY = e.clientY + 'px'
  })
  
  


  // On moveover of ap-button span to the item
  const onMouseLeave = function () {
    lockX = false
    lockY = false
    yMin = 0
    yMax = 0
    awesomeCusor.style.borderBottomLeftRadius = '50%'
    awesomeCusor.style.borderBottomRightRadius = '50%'
    awesomeCusor.style.borderTopRightRadius = '50%'
    awesomeCusor.style.borderTopLeftRadius = '50%'
    awesomeCusor.style.height = '20px'
    awesomeCusor.style.width = '20px'
    awesomeCusor.style.top = lastY
    awesomeCusor.style.left = lastX
    awesomeCusor.style.transition = 'all 0.2s -0.1s ease-out'
    awesomeCusor.style.transitionProperty = releaseBtnTransProps
    awesomeCusor.style.background = '#0008'
    awesomeCusor.style.boxShadow = '0 0 0 2px #fff5'
    setTimeout(() => {
      awesomeCusor.style.transition = 'all 0.2s 0.1s ease-out'
      awesomeCusor.style.transitionProperty = transitionProperties
    }, 200)
  }

  window.addEventListener('scroll', onMouseLeave)
  window.addEventListener('click', onMouseLeave)

  const onButtonEnter = function (e) {
    lockX = true
    lockY = true
    // console.log('MENTER2')
    const computedStyle = window.getComputedStyle(e.target, null)
    const rect = e.target.getBoundingClientRect()
    const left = rect.left + rect.width / 2
    const top = rect.top + rect.height / 2
    awesomeCusor.style.transitionProperty = buttonTransitionProperties
    awesomeCusor.style.borderBottomLeftRadius =
      computedStyle['border-bottom-left-radius']
    awesomeCusor.style.borderBottomRightRadius =
      computedStyle['border-bottom-left-radius']
    awesomeCusor.style.borderTopRightRadius =
      computedStyle['border-bottom-left-radius']
    awesomeCusor.style.borderTopLeftRadius =
      computedStyle['border-bottom-left-radius']
    awesomeCusor.style.height = computedStyle.height
    awesomeCusor.style.width = computedStyle.width
    awesomeCusor.style.boxShadow = '0px 0px 10px 3px #30303050'
    awesomeCusor.style.top = top + 'px'
    awesomeCusor.style.left = left + 'px'
    awesomeCusor.style.background = '#0000'
  }

  const onTextEnter = function (e) {

    const rect = e.target.getBoundingClientRect()
    const top = rect.top + rect.height / 2
    const st = window.getComputedStyle(e.target, null)
    lockY = true

    awesomeCusor.style.height = st.getPropertyValue('font-size')
    const cursorHeight = parseInt(st.getPropertyValue('font-size').replace('px', ''))

    awesomeCusor.style.width = '2px'
    awesomeCusor.style.borderRadius = '0px'
    awesomeCusor.style.background = 'dodgerblue'
    awesomeCusor.style.top = top + 'px'
    if (rect.height / cursorHeight >= 2) {
      yMin = top
      yMax = top + rect.height - cursorHeight
    }

  }

  const setButtonListeners = function () {
    const apItems = document.querySelectorAll('.ac-button')
    apItems.forEach(function (item) {
      item.removeEventListener('mouseleave', onMouseLeave)
      item.removeEventListener('mouseenter', onButtonEnter)
      item.addEventListener('mouseleave', onMouseLeave)
      item.addEventListener('mouseenter', onButtonEnter)
    })
  }

  const setTextListeners = function () {
    const spanItems = document.querySelectorAll(".ac-text")
    spanItems.forEach(function (item) {
      item.removeEventListener('mouseleave', onMouseLeave)
      item.removeEventListener('mouseenter', onTextEnter)
      item.addEventListener('mouseleave', onMouseLeave)
      item.addEventListener('mouseenter', onTextEnter)
    })
  }

  const onDOMChanges = function () {
    setButtonListeners()
    setTextListeners()
  }


  // Select the node that will be observed for mutations
  const targetNode = document.getElementById('root')
  const config = { attributes: true, childList: true, subtree: true }
  // Callback function to execute when mutations are observed
  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(onDOMChanges)

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config)
})()
