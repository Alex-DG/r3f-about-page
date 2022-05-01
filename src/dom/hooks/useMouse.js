const useMouse = () => {
  const handleMouseOut = () => {
    const dot = document.querySelector('.cursor-dot')
    const dotOutline = document.querySelector('.cursor-dot-outline')

    if (dot) {
      dot.style.transform = 'translate(-50%, -50%) scale(0.75)'
    }
    if (dotOutline) {
      dotOutline.style.transform = 'translate(-50%, -50%) scale(1)'
    }
  }

  const handleMouseOver = () => {
    const dot = document.querySelector('.cursor-dot')
    const dotOutline = document.querySelector('.cursor-dot-outline')

    if (dot) {
      dot.style.transform = 'translate(-50%, -50%) scale(1)'
    }
    if (dotOutline) {
      dotOutline.style.transform = 'translate(-50%, -50%) scale(2)'
    }
  }

  return { handleMouseOver, handleMouseOut }
}

export default useMouse
