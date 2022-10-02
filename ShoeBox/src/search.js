let searchItem = () => {
    let search = document.getElementById('searchId'); // search bar
    let value = search.value; // search value
    let filter = value.toUpperCase(); // make it to uppercase

    let shop = document.getElementById('shop'); // container
    let searchNotFound = document.getElementById('searchNotFound'); // container for search not in list

    let showBasket = [];
    
    for(let i = 0; i < shopData.length; i++){
        let a = shopData[i].name.toUpperCase().indexOf(filter);
        
        
        if(a > -1){

            shop.innerHTML = shopData[i].name.toUpperCase();
            showBasket.push({
                id : shopData[i].id,
                name : shopData[i].name,
                price : shopData[i].price,
                desc : shopData[i].desc,
                img : shopData[i].img,
            });
        }
    }

    if(showBasket.length !== 0){
        shop.style.display = 'grid';
        searchNotFound.style.display = 'none';
        let generateShop =()=>{
            return (shop.innerHTML = showBasket.map((x)=>{
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
    }
    else{
        shop.style.display = 'none';
        searchNotFound.style.display = "block";
        searchNotFound.innerHTML = `Sorry, No results found for <span><b>`+ value + `</b></span>`;
    }

    
}
    

//second Search
let searchItem2 = () => {
    let search = document.getElementById('searchId2'); // search bar
    let value = search.value; // search value
    let filter = value.toUpperCase(); // make it to uppercase

    let shop = document.getElementById('shop'); // container
    let searchNotFound = document.getElementById('searchNotFound'); // container for search not in list

    let showBasket = [];
    
    for(let i = 0; i < shopData.length; i++){
        let a = shopData[i].name.toUpperCase().indexOf(filter);
        
        
        if(a > -1){

            shop.innerHTML = shopData[i].name.toUpperCase();
            showBasket.push({
                id : shopData[i].id,
                name : shopData[i].name,
                price : shopData[i].price,
                desc : shopData[i].desc,
                img : shopData[i].img,
            });
        }
    }

    if(showBasket.length !== 0){
        shop.style.display = 'grid';
        searchNotFound.style.display = 'none';
        let generateShop =()=>{
            return (shop.innerHTML = showBasket.map((x)=>{
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
    }
    else{
        shop.style.display = 'none';
        searchNotFound.style.display = "block";
        searchNotFound.innerHTML = 'Sorry, No results found for <span>'+ value + '</span>';
    }

    
}
    