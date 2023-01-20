var views = document.querySelectorAll('.view')

views.forEach(Element => {
    Element.addEventListener('mouseenter', () => {
        removeActiveClasses()
        Element.classList.add('active')
    })
})

function removeActiveClasses() {
    views.forEach(Element => {
        Element.classList.remove('active')
    })
}