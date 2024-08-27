const prenota_link = document.getElementById('scroll-link')
prenota_link.addEventListener ('click', () => {
    event.preventDefault;
    scrolldown();
})
function scrolldown() {
    window.scrollTo({
        top:window.innerHeight,
        behavior:"smooth"
    })
}

window.addEventListener('load', function() {
    const hash = window.location.hash;
    console.log(hash)
    if (hash === '#form') {
        scrolldown()
    }
});