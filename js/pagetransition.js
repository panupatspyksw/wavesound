function pageTransition(){
    var tl = gsap.timeline();

    // tl.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2 })

    tl.to('ul.transition li', { duration: 1, scaleY: 0, transformOrigin: "bottom left", stagger: .2, delay: .5 })


}

pageTransition();
function delay(n){
    n=n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
            start = true;
            console.log("end");
            document.body.style.overflow = "scroll";
            document.body.style.overflowX = "hidden";
        }, n);
    });
}