export const enableMainScroll = () => {
  document.querySelector('main')?.classList.remove('disabled-scrolling')
}

export const disableMainScroll = () => {
  document.querySelector('main')?.classList.add('disabled-scrolling')
}

export const disableScroll = () => {
  document.body.classList.add('disabled-scrolling')
}

export const enableScroll = () => {
  document.body.classList.remove('disabled-scrolling')
}
