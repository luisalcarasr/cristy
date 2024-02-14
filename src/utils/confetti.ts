export const throwConfetti = () => {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };
  
  // @ts-expect-error as confetti is a global function
  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });
  
  // @ts-expect-error as confetti is a global function
  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });
  
  // @ts-expect-error as confetti is a global function
  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });
}
