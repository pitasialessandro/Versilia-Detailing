const prenota_link = document.getElementById('scroll-link')

prenota_link.addEventListener ('click', () => {
    event.preventDefault;
    scrolldown();
})

function go_to_main() {
    window.location.href = '../index.html#form'
}

function scrolldown() {
    window.scrollTo({
        top:window.innerHeight,
        behavior:"smooth"
    })
}

window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash === '#form') {
        scrolldown()
    }
});