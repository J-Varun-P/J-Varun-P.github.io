function createRainDrop() {
    const rainDrop = document.createElement('div');
    rainDrop.classList.add('rain');
  
    const x = Math.random() * window.innerWidth;
    const speed = Math.random() * 3 + 2; 
    const length = Math.random() * 10 + 10; 
  
    rainDrop.style.left = x + 'px';
    rainDrop.style.height = length + 'px';
    rainDrop.style.animationDuration = speed + 's';
  
    document.body.appendChild(rainDrop);
  
    setTimeout(() => {
      rainDrop.remove();
    }, speed * 1000);
  }
  
  setInterval(createRainDrop, 100);
