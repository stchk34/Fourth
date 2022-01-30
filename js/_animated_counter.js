function animated(){
    const counters = document.querySelectorAll('.value');
    const speed = 3000;
    counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('number');
        const data = +counter.innerText;
        
        const time = value / speed;
        if(data < value) {
            console.log(value);
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 10);
            }else{
            counter.innerText = value;
            }
        
    }

    animate();
    });
}


