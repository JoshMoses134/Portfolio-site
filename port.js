let menu = document.getElementById('h-menu');
let m_closed = document.getElementById('h-close');
let list = document.getElementById('l-me')

menu.addEventListener('click', ()=>{
    list.style.left= '0';
    menu.style.display = 'none';
    m_closed.style.display = 'flex'
})

m_closed.addEventListener('click', ()=>{
    list.style.left='-60vw'
    m_closed.style.display = 'none';
    menu.style.display ='flex'
})
