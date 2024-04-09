 var tl = gsap.timeline()


tl.from("#nav i",{
    y:"-100%",
    opacity:"0",
    duration:0.5, 
    stagger:0.5,
     
})


tl.from("#leftnav-in h4",{
    y:"-100%",
    opacity:"0",
    duration:0.5, 
    stagger:0.5
})
 
tl.from("#left-container h1 ",{


    x:"-100%",
opacity:"0",
duration:0.5
})

tl.from("#left-container p",{
    
    x:"-100%",
opacity:"0",
duration:0.5,

stagger:0.5
})
tl.from("#left-container a",{
    
    x:"-100%",
opacity:"0",
duration:0.5,

stagger:0.5
})
// 
tl.from("#right-top-left img",{
    
    opacity:0,
    y:"-100%",
    duration:0.5,
    
    stagger:0.5
    })
    tl.from("#right-top-right img",{
        x:"200%",
   opacity:0,
        scale:0.5,
            duration:0.5,
         
            stagger:0.5
            })


            // 
            tl.from("#right-bottom img",{
                x:"200%",
        //    opacity:0,
                scale:0.5,
                    duration:1,
                    
                    stagger:0.5
                    })
                    tl.from(" #left-container h2",{
                        x:"-200%",
                        opacity:"0",
                        duration:0.5, 
                        stagger:0.5
                    })