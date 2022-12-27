const markAll = document.querySelector('.mark-all');
console.log(markAll);

markAll.addEventListener('click', () => {

    const unread = document.querySelectorAll('.unread');
    unread.forEach( item => {
        item.classList.remove('unread')
        
        const notify = document.getElementById('notify');
        
        if( document.querySelector('.unread') ) {
            notify.innerText = unread.length;
        } else {
            notify.innerText = '0'
        }
    })
    

})

