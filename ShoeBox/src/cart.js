let label = document.getElementById('label');
let shoppingCart = document.getElementById('shoppingCart');
let emptyPage = document.getElementById('emptyPage');

let basket = JSON.parse(localStorage.getItem("ShoeData")) || [];

let generateCart = () => {
    
    if(basket.length !== 0){

        shoppingCart.style.display = "flex";
        label.style.display = "block";
        emptyPage.style.display = "none";

        return (shoppingCart.innerHTML = basket.map((x) => {
            let {id,item} = x;
            let search = shopData.find((y) => y.id === id) || [];
            let quantity = basket.find((z) => z.id === id);
            let{name,desc,price,img} = search;
            return `
                <div class="details-cart">
                    <img src=${img} alt="img">
                    <div class="item-details">

                        <div class="top-content">
                        <h2>${name}</h2>
                        <i class="bi bi-x-lg" onclick="remove(${id})"></i>
                        </div>
                        
                        <p>${desc}</p>
                        <br>
                        <div class="price">
                            <h3>RM <span>${price}</span></h3>
                        </div>
                        <div class="quantity-container-cart">
                            <i onclick="decrement('${id}')" class="bi bi-dash"></i>
                            <div id="${id}" class="quantity">
                                ${quantity === undefined? 0: quantity.item}
                            </div>
                            <i onclick="increment('${id}')" class="bi bi-plus"></i>
                        </div>
                        <div class="btn-container-cart">
                            <button class="buyNow">Buy Now</button>
                            <button class="addToCart" onclick="addToCart()">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;
        }).join(""));
    }
    else{

        emptyPage.style.display = "none";

        emptyPage.innerHTML = `
        <div class="label-container">
                <h2>Cart is Empty</h2>
                <a href="index.html" class="homeBtn">Back to Home</a>
            </div>
        `;
        emptyPage.style.display = "flex";
        emptyPage.style.height = "300px";

        shoppingCart.style.display = "none";
        label.style.display = "none";
    }
};
generateCart();

let decrement = (id_object) => {
    let search = basket.find((x) => x.id === id_object);
    if(search === undefined) return;
    else if(search.item === 0) return;
    else{
        search.item -= 1;
    }
    update(id_object);
    basket = basket.filter((x) => x.item !== 0);
};

let increment = (id_object) => {
    let search = basket.find((x) => x.id === id_object);
    if(search === undefined){
        basket.push(
            {
                id: id_object,
                item: 1,
            }
        );
    }
    else{
        search.item += 1;
    }
    update(id_object);
};

let update = (id_object) => {
    let search = basket.find((x) => x.id === id_object);
    document.getElementById(id_object).innerHTML = search.item;
};

let addToCart = () => {
    //animation
    localStorage.setItem("ShoeData",JSON.stringify(basket));
    generateCart();
    calculation();
    totalAmount();
};

let calculation = () => {
    let carQuantity = document.getElementById('cartQuantity');
    carQuantity.innerHTML=basket.map((x) => x.item).reduce((x,y) => x+y,0);
};

calculation();

let remove = (id_object) => {
    basket = basket.filter((x) => x.id !== id_object.id);
    calculation();
    generateCart();
    totalAmount();
    localStorage.setItem("ShoeData",JSON.stringify(basket));
};

let totalAmount = () => {
    if(basket.length !== 0){
        let amount = basket.map((x) => {
            let {id,item} = x;
            let search = shopData.find((y) => y.id === id) || [];
            return item*search.price;
        }).reduce((x,y) => x+y,0);
        label.innerHTML = `
        
        <h2>Total Amount : <span>RM ${amount}</span></h2>
        <button class="checkout">Checkout</button>
        <button onclick="clearAll()" class="clearAll">Clear All</button>

        `;
    }
    else return;
};
totalAmount();

let clearAll = () => {
    //aleart yes or cancel

    Swal.fire({
        title: 'Are you sure?',
        color:'#fca311',
        background:'#14213d',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, clear cart!'
        }).then((result) => {
        if (result.isConfirmed) {
            basket = [];
            localStorage.setItem("ShoeData",JSON.stringify(basket));
            calculation();
            generateCart();
        }
    })
};

