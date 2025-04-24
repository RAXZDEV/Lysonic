// Page loader functionality
    const loader = document.querySelector('.loader-container')
    const body = document.querySelector('body')
    
    window.addEventListener('load', function(){
        loader.classList.add('hidden')
        body.style ='overflow: visible'
    })
    
        // Section 1 gsap animation
    gsap.from('.sec1 *', {
        y: 20,
        stagger: 0.05,
        opacity: 0
    })
    
        // Drop down info view functionality
    let arrow1 = document.querySelector('.arrow1')
    let arrow2 = document.querySelector('.arrow2')
    let arrow3 = document.querySelector('.arrow3')
    
    let info1 = document.querySelector('.info1')
    let info2 = document.querySelector('.info2')
    let info3 = document.querySelector('.info3')
    
    let host1 = false
    let host2 = false
    let host3 = false
    
    arrow1.onclick = function(){
        if (host1 == false) {
            arrow1.style = 'transform: rotate(180deg)'
            host1 = true
            info1.style = 'padding-top: 1rem; height: 4rem; opacity: 1'
        } else {
            arrow1.style = 'transform: rotate(0deg)'
            host1 = false
            info1.style = 'padding-top: 0rem; height: 0rem; opacity: 0'
        }
    }
    arrow2.onclick = function() {
        if (host2 == false) {
            arrow2.style = 'transform: rotate(180deg)'
            host2 = true
            info2.style = 'padding-top: 1rem; height: 4rem; opacity: 1'
        } else {
            arrow2.style = 'transform: rotate(0deg)'
            host2 = false
            info2.style = 'padding-top: 0rem; height: 0rem; opacity: 0'
        }
    }
    arrow3.onclick = function() {
        if (host3 == false) {
            arrow3.style = 'transform: rotate(180deg)'
            host3 = true
            info3.style = 'padding-top: 1rem; height: 4rem; opacity: 1'
        } else {
            arrow3.style = 'transform: rotate(0deg)'
            host3 = false
            info3.style = 'padding-top: 0rem; height: 0rem; opacity: 0'
        }
    }
    
    
        // Tab change functionality
    let tabC = document.querySelector('.tabC')
    let tab = document.querySelectorAll('.tabC button')
    let tabContend = document.querySelectorAll('.imgC .tab')
    
    let tab1 = document.querySelector('#tab1')
    let tab2 = document.querySelector('#tab2')
    let tab3 = document.querySelector('#tab3')
    
    tabC.onclick = function(e){
        tab.forEach(function(t){
            if (e.target.matches('.tabC button')) {
                t.classList.remove('active')
                e.target.classList.add('active')
                if (e.target.innerText == 'UI/UX Design') {
                    tabContend.forEach(function(b){
                        b.classList.remove('open')
                        tab1.classList.add('open')
                    })
                } else if (e.target.innerText == 'Devlopement') {
                    tabContend.forEach(function(b) {
                        b.classList.remove('open')
                        tab2.classList.add('open')
                    })
                } else if (e.target.innerText == 'Branding') {
                    tabContend.forEach(function(b) {
                        b.classList.remove('open')
                        tab3.classList.add('open')
                    })
                }
            }
        })
    }
    
        // Section 5 circle move functionality
    let circle = document.querySelector('#circle')
    let section5 = document.querySelector('.sec5')
    
    if (window.innerWidth  >= 700) {
        section5.addEventListener('mousemove', function(dets){
            console.log(dets.x)
            x = dets.x
            y = dets.y

            gsap.to("#circle", {
                x: `${x - 35}`,
                y: `${y - 25}`
            })
        })
        section5.addEventListener('mouseenter', function(){
            gsap.to("#circle", {
                scale: 1,
                opacity: 1
            })
        })
        section5.addEventListener('mouseleave', function() {
            gsap.to("#circle", {
                scale: 0,
                opacity: 0
            })
        })
    }
    
        // Las5 section gsap animation
    gsap.from('.sec6 *', {
        y: 20,
        stagger: 0.05,
        opacity: 0,
        scrollTrigger: {
            scroller: 'body',
            start: 'top 50%',
            trigger: '.sec6',
        }
    })
    
    
