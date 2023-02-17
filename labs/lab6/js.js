let Trash = [];

class Button {
    constructor(placeholder, styles) {
        this.Component = document.createElement('button');
        this.Component.innerText = placeholder;
        Object.assign(this.Component.style, {cursor:'pointer'}, styles);
        this.id = 1 +  98 * Math.random();
        this.Component.className = 'button' + this.id;
    }
    create(selector) {
        this.Parent = selector;
        this.Parent.appendChild(this.Component);
    }
    delete() {
        this.Component.remove();
    }
    click(func) {
        this.Component.onclick = func;
    }
}

class Product {
    constructor(img, title, price) {
        this.Component = document.createElement('div');
        this.id = 1 +  98 * Math.random();
        this.Component.className = 'Product' + this.id;
        Object.assign(this.Component.style, {width:"120px", display:'flex', flexDirection:'column', alignItems:'center', margin:'0px'});
        this.image = document.createElement('img');
        this.image.src = img;
        Object.assign(this.image.style, {width:"100px", height: "100px"});
        this.Component.appendChild(this.image);
        this.Title = document.createElement('h3');
        this.Title.innerText = title;
        this.Component.appendChild(this.Title);
        this.Price = document.createElement('div');
        this.Price.innerText = '$' + price;
        this.Component.appendChild(this.Price);
        this.Button = new Button("В корзину", {border:'0px solid black', borderRadius:'3px', background:'#007BFF', color:'white', marginTop:'10px', height:'30px'});
        this.Button.create(this.Component);
        this.Button.click(() => {
            Trash.push(this.Component);
            this.delete()
        });
    }
    create(selector) {
        this.Parent = selector;
        selector.appendChild(this.Component); 
    }
    delete() {
        this.Component.remove();
    }
    editImage(img) {
        this.image.src = img;
    }
    editTitle(title) {
        this.Title.innerText = title;
    }
    editPrice(price) {
        this.Price.innerText = price;
    }
}


function AddProduct() {
    let product = new Product(URL.createObjectURL(document.forms[0].elements['file'].files[0]), document.forms[0].elements['title'].value, document.forms[0].elements['price'].value);
    product.create(document.querySelector('.container'));
}

function ViewTrash() {
    console.log(Trash);
}

function setGray() {
    let counter = 1;
    for (const el of document.querySelector('.container').childNodes) {
        if (counter++ % 2 != 0) el.style.background = 'gray';        
    }
}