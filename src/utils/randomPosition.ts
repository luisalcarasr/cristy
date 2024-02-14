export const randomPosition = (index: number, length: number) => {
  const quarter = Math.floor(length / 4);
  const { clientHeight, clientWidth } = document.documentElement;

  if (index < quarter) {
    return {
      x: clientWidth  * 0.10 + 'px',
      y: clientHeight / quarter * index + 'px',
    }
  } else if (index < quarter * 2) {
    return {
      x: clientWidth * 0.25 + 'px',
      y: clientHeight / quarter * (index - quarter) + 'px',
    }
  } else if (index < quarter * 3) {
    return {
      x: clientWidth * 0.65 + 'px',
      y: clientHeight / quarter * (index - quarter * 2) + 'px',
    }
  } else {
    return {
      x: clientWidth * 0.80 + 'px',
      y: clientHeight / quarter * (index - quarter * 3) + 'px',
    }
  }

}

/**
 * top: Math.random() * (document.documentElement.clientHeight) +'px',
 * left: Math.random() * (document.documentElement.clientWidth) + 'px',
 */