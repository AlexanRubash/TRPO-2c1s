let products = {
    shoes:{
        boots:[new product(1, 32, 'yellow', 400, 0.1), new product(2, 42, 'red', 500)],
        sneakers:[new product(3, 42, 'yellow', 200)],
        sandals:[new product(4, 52, 'yellow', 268)],
    },

    [Symbol.iterator]() {
        const keys = Object.keys(this);
        const limit = keys.length;
        const obj = this; 
        let counterCategory = 0;
        let counterKinds = 0;
        let counterElement = 0;
    
        return{
            next(){
                let kinds = Object.keys(obj[keys[counterCategory]]);
                if (counterKinds < kinds.length-1 ) {
                    if (counterElement >= obj[keys[counterCategory]][kinds[counterKinds]].length) {
                        counterKinds++;
                        counterElement = 0;                        
                    }
                }
                else{
                    counterCategory++;
                    if (counterCategory == limit) return {done:true}
                    counterElement = 0;
                    counterKinds = 0;
                }
                return {
                    done: false,
                    value: obj[keys[counterCategory]][kinds[counterKinds]][counterElement++]
                }
            }
        }
      }
      
};

console.log(products.shoes.boots[0])

function Task1() {
    for (const el of products) {
        console.log(el);
    }
}

function Task2() {
    let color = prompt(`Color?`).toLowerCase();
    console.log(`Color: ${color}`);
    for (const el of products) {
        if (el.color === color) console.log(el);
    }  
    
    let size = +prompt(`Size?`);
    console.log(`Size: ${size}`);
    for (const el of products) {
        if (el.size === size) console.log(el);
    }

    let priceFrom = +prompt(`Price from?`);
    let priceTo = +prompt(`Price to?`);
    console.log(`Price: ${priceFrom}-${priceTo}`);
    for (const el of products) {
        if (el.price >= priceFrom && el.price <= priceTo) console.log(el);
    }
}


function Task3() {
    console.log(products.shoes.boots[0].finalPrice);
}

function product(id, size, color, price, discount) {
    this.id = id,
    this.size = size,
    this.color = color,
    this.price = price,
    this.discount = discount, 
    Object.defineProperty(this, "finalPrice", {
        get(){
            return this.price * (1 - this.discount);
        },
        set(value){
            this.price = value/(1 - this.discount);
        }
    })
    Object.defineProperty(this, "id", {
        writable: false,
        configurable: false
    });
    Object.defineProperty(this, "size", {
        writable: false
    });
    Object.defineProperty(this, "color", {
        writable: false
    });
}

