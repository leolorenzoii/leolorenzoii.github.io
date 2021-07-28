const topTrigger = "top 70%"
const topTriggerHigher = "top 60%"
const tl = gsap.timeline({
    defaults: { ease: "power1.out" }
});

window.scrollTo(0, 0);
tl.to("body", { overflow: "hidden" })
tl.to(".intro-text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".welcome-spiel", { y: "-100%", duration: 0.50, delay: 1 });
tl.from("img.author", { x: "-10%", opacity: 0, duration: 1 })
tl.from("div.right-items", { y: "-10%", opacity: 0, duration: 1 }, "-=0.70")
tl.to("body", { overflow: "" })

// Project label title
gsap.set("span.project-label-text", {y: "-10%", opacity: 0});
ScrollTrigger.create({
    trigger: "span.project-label-text",
    start: topTrigger,
    onEnter: () => gsap.to("span.project-label-text", {
        y: "0%", opacity: 1, duration: 1
    }).play()
});
ScrollTrigger.create({
    trigger: "span.project-label-text",
    start: "top 90%",
    onLeaveBack: () => gsap.to("span.project-label-text", {
        y: "-10%", opacity: 0, duration: 0.5
    }).play()
});

// Project label description animation
gsap.set("span.project-label-desc", {x: "-5%", opacity: 0})
ScrollTrigger.create({
    trigger: "span.project-label-desc",
    start: topTrigger,
    onEnter: () => gsap.to("span.project-label-desc", {
        x: "0%", opacity: 1, duration: 0.5
    }).play()
});
ScrollTrigger.create({
    trigger: "span.project-label-desc",
    start: "top 90%",
    onLeaveBack: () => gsap.to("span.project-label-desc", {
        x: "-5%", opacity: 0, duration: 0.5
    }).play()
});

// Project image containers animation
const imgContainers = gsap.utils.toArray(".project-img-containers");
imgContainers.forEach(imgContainer => {
    gsap.set(imgContainer, {opacity: 0, y: "-5%"});
    ScrollTrigger.create({
        trigger: imgContainer,
        start: topTrigger,
        onEnter: () => gsap.to(imgContainer, {
            y: "0%", opacity: 1, duration: 1
        }).play()
    });
    ScrollTrigger.create({
        trigger: imgContainer,
        start: "top 90%",
        onLeaveBack: () => gsap.to(imgContainer, {
            y: "-5%", opacity: 0, duration: 0.5
        }).play()
    });
});

// Blog post title
gsap.set("span.blog-text-title", {y: "-10%", opacity: 0});
ScrollTrigger.create({
    trigger: "span.blog-text-title",
    start: topTrigger,
    onEnter: () => gsap.to("span.blog-text-title", {
        y: "0%", opacity: 1, duration: 1
    }).play()
});
ScrollTrigger.create({
    trigger: "span.blog-text-title",
    start: "top 90%",
    onLeaveBack: () => gsap.to("span.blog-text-title", {
        y: "-10%", opacity: 0, duration: 0.5
    }).play()
});

// Blog post description animation
gsap.set("span.blog-text-desc", {x: "-5%", opacity: 0})
ScrollTrigger.create({
    trigger: "span.blog-text-desc",
    start: topTrigger,
    onEnter: () => gsap.to("span.blog-text-desc", {
        x: "0%", opacity: 1, duration: 0.5
    }).play()
});
ScrollTrigger.create({
    trigger: "span.blog-text-desc",
    start: "top 90%",
    onLeaveBack: () => gsap.to("span.blog-text-desc", {
        x: "-5%", opacity: 0, duration: 0.5
    }).play()
});

// Blog post container
gsap.set(".post-container", { opacity: 0, y: "-5%" });
ScrollTrigger.batch(".post-container", {
    start: topTriggerHigher,
    onEnter: (elements, triggers) => {
        gsap.to(elements, { y: "0%", opacity: 1, duration: 1.50, stagger: 0 });
    },
    onLeaveBack: (elements, triggers) => {
        gsap.to(elements, {y: "-5%", opacity: 0, duration: 1.50, stagger: 0})
    },
});

// Remove # location when refreshed
window.location.replace("#");  
if (typeof window.history.replaceState == 'function') {
    history.replaceState({}, '', window.location.href.slice(0, -1));
};
