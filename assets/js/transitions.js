let scrollX = 0;
let scrollY = 0;
var cur_state = 0;

history.scrollRestoration = 'auto';
barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {data.current.container.remove()
        return gsap.from(data.next.container, {
          opacity: 0,
          delay: 0.80
        });
      }
    }]
  });

  barba.hooks.enter((data) => {
    console.log(cur_state)
    console.log(history.state.index)
    if (cur_state > history.state.index) {
        window.scrollTo(scrollX, scrollY);
    } else {
        window.scrollTo(0, 0);
    }
    cur_state = history.state.index;
});

barba.hooks.leave(() => {
    if (cur_state <= history.state.index) {
        scrollX = barba.history.current.scroll.x;
        scrollY = barba.history.current.scroll.y;
    };
});
