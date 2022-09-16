//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ GSAP ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// loading page

const logo = document.querySelector('.logo')
const loadingSection = document.querySelectorAll('.loading')
const allImagesLoading = document.querySelectorAll('.loading img')
const loadingVideo = document.querySelectorAll('.loading-video')

const newAllImagesLoading = Array.from(allImagesLoading) // Transform my nodeList into an array
newAllImagesLoading.reverse() // Reverse my array

window.addEventListener ('load', e => {

    const TL = gsap.timeline ({paused : true})

    TL
    .to(logo, 1.5, {
        height: 80,
        top: 20,
        left: 20,
        ease: "power2.inOut",
        delay: .8
    })
    .to(loadingSection, .1, {
        opacity:1,
        ease: "power2.inOut"
    })
    .staggerTo(newAllImagesLoading, .3, {opacity: 0, ease:"power4.out"},.3)
    .to(loadingSection, .7, {
        y: '-100vh',
        ease: "power2.inOut"
    })
    .to(loadingVideo, .7, {
        y: '-100vh',
        ease: "power2.inOut"
    })

    TL.play()
})