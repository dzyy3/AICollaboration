function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomCollage(containerId, numberOfImages) {
    const container = document.getElementById(containerId);

  for (let i = 1; i <= numberOfImages; i++) {
    const img = document.createElement('img');
    img.src = `assets/images/jpg/Photo (${i}).JPG`;
    img.classList.add('collage-image');

    // Start hidden for fade-in
    img.style.opacity = 0;

    // Random position
    const top = getRandomInt(0, window.innerHeight - 200);
    const left = getRandomInt(0, window.innerWidth - 200);
    img.style.position = 'absolute';
    img.style.top = `${top}px`;
    img.style.left = `${left}px`;

    // Random size
    const size = getRandomInt(100, 300);
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;

    // Random rotation
    const rotation = getRandomInt(-30, 30);
    img.style.transform = `rotate(${rotation}deg)`;

    // Random stacking order
    img.style.zIndex = getRandomInt(1, 100);

    container.appendChild(img);

    // Fade in with staggered delay
    setTimeout(() => {
      img.style.opacity = .4;
    }, i * 1000); // stagger 
  }
}

createRandomCollage('collage-container', 104);
