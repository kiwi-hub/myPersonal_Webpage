let shop = document.getElementById('shop');
let view = document.getElementById('view');
let itemAdded = document.getElementById('item-added');
let itemAddedimg = document.getElementById('ia-img');

let basket = JSON.parse(localStorage.getItem("ShoeData")) || [];

let generateShop =()=>{
    return (shop.innerHTML = shopData.map((x)=>{
        let {id,name,price,desc,img} = x;
        return `

            <div class="item" id="product-${id}" onclick="viewItem('${id}')">
                <img width="300px" src=${img} alt="img">
                <div class="item-details">
                    <h2>${name}</h2>
                    <p>${desc}</p>
                    <br>
                    <div class="price">
                        <h3>RM <span>${price}</span></h3>
                    </div>
                </div>
            </div>

        `;
    }).join(""));
};
generateShop();

let viewItem = (id_object) => {
    let searchItem = shopData.find((x) => x.id === id_object);
    let searchItem2 = basket.find((x) => x.id === id_object);
    let{id,name,desc,price,img} = searchItem;
    
    shop.style.display= "none";
    view.style.display = "block";

    view.innerHTML = `

        <button onclick="returnPage()" class="backbtn">Back</button>
        <div class="clearfix"></div>
        <div class="details">
            <img src=${img} alt="img">
            <div class="item-details-view">
                <div class="name-desc">
                    <h2>${name}</h2>
                    <p>${desc}</p>
                </div>
                <br>
                <div class="price-view">
                    <h3>Price (per unit) : <span>RM ${price}</span></h3>
                </div>
                <div class="quantity-container">
                    <h4>Quantity : </h4>
                    <i onclick="decrement('${id}')" class="bi bi-dash"></i>
                    <div id="${id}" class="quantity">
                    ${searchItem2 === undefined? 0: searchItem2.item}
                    </div>
                    <i onclick="increment('${id}')" class="bi bi-plus"></i>
                </div>
                <div class="btn-container">
                    <button class="buyNow">Buy Now</button>
                    <button class="addToCart" onclick="addToCart('${id}')">Add to Cart</button>
                </div>
            </div>
        </div>
    
    `;
};

let returnPage = () => {
    shop.style.display= "grid";
    view.style.display = "none";
    location.reload();
};

let searchDisplay= () => {
    let searchBar = document.querySelector('.second-search-container');
    searchBar.classList.toggle('displaySearchBar');
};

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

let addToCart = (id_object) => {

    let trace = basket.find((x) => x.id === id_object);
    
    if(trace === undefined){
        localStorage.setItem("ShoeData",JSON.stringify(basket));
        calculation();
    }
    else{
        //animation
        
        let search = shopData.find((y) => y.id === id_object);

        itemAddedimg.src=search.img;
        itemAdded.style.display="block";

        let animation = setTimeout(animationHide,1000);
        animation;
        

        Swal.fire({
            position: 'center',
            background:'#14213d',
            color: '#e5e5e5',
            icon: 'success',
            title: 'Item has been added to cart',
            showConfirmButton: false,
            timer: 1500
        })

        localStorage.setItem("ShoeData",JSON.stringify(basket));
        calculation();
    }
    
};

//hide add to cart animation
let animationHide = () => {
    itemAdded.style.display="none";
};

let calculation = () => {
    let carQuantity = document.getElementById('cartQuantity');
    carQuantity.innerHTML=basket.map((x) => x.item).reduce((x,y) => x+y,0);
};

calculation();