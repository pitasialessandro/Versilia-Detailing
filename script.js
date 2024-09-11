const contact_panel = document.getElementById('contact_panel')
const observer = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})
const hidden_elements = document.querySelectorAll('.hidden')
// tell the observer to observe all hidden elements
hidden_elements.forEach( (el) => observer.observe(el))

function go_to_main() {
    window.location.href = '../index.html#form'
}

function scrolldown() {
    top_pos = contact_panel.offsetTop;
    window.scrollTo({
        top:top_pos - 60,
        behavior:"smooth"
    })
}

window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash === '#form') {
        scrolldown()
    }
});
