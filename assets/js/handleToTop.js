// volta para o topo do site
function handleToTop(event) {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

export { handleToTop };
