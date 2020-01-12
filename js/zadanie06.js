
document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.getElementById('buttons');
    const [button1, button2, button3] = Array.from(
        buttons.getElementsByTagName('button')
    );
    const list = document.getElementById('shopping-list');
    
    const dodajChleb = (container) => {
        const newListEl = document.createElement('li');
        newListEl.innerText = 'Chleb';
        container.appendChild(newListEl);
    }
    
    const usunOstatni = (container) => {
        const children = container.getElementsByTagName('li');
        const lastChild = children[children.length - 1];
        if (!lastChild) return;
        container.removeChild(lastChild);
    }
    
    const dodajKlonDrugiego = (container) => {
        const second = container.getElementsByTagName('li')[1];
        if (!second) return;
        const clone = second.cloneNode(true);
        container.appendChild(clone);
    }
    
    button1.addEventListener('click', () => dodajChleb(list));
    button2.addEventListener('click', () => usunOstatni(list));
    button3.addEventListener('click', () => dodajKlonDrugiego(list));
    
})
