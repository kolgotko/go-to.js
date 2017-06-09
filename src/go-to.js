const goTo = node => {

    let body = document.body;
    let docElement = document.documentElement;
    let state = window.pageYOffset;
    let nodeBcr = node.getBoundingClientRect();

    let scrollHeight = Math.max(
        body.scrollHeight, docElement.scrollHeight,
        body.offsetHeight, docElement.offsetHeight,
        body.clientHeight, docElement.clientHeight
    );

    let relative = state + nodeBcr.top;
    let raz = relative - state;

    Animate.linear({
        duration: 500,
        draw: progress => {

            let rPercent = raz / 100;
            let newState = state + rPercent * progress;

            window.scrollTo(0, newState);

        }
    });

}
