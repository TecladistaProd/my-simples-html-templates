(function(){
    const [current, imgs, opacity] = [document.querySelector('#current'), document.querySelectorAll('.imgs img'), 0.6]
    imgs[0].style.opacity = opacity
    imgs.forEach(img=>{
        img.addEventListener('click', imgClick)
    })
    function imgClick(e) {
        // Reset the opacity
        imgs.forEach(img => img.style.opacity = 1)

        // Change image
        current.src = e.target.src

        current.classList.add('fade-in')
        setTimeout(()=> {
            current.classList.remove('fade-in')
            current.scrollIntoView(true)
        }, 400)
        // change opacity
        e.target.style.opacity = opacity
    }
})()