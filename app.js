const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((elem) => {
        elem.classList.remove('active');
        this.classList.add('active');
    })
}

list.forEach((elem) => 
elem.addEventListener('click', activeLink));