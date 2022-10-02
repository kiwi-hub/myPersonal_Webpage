let tempBasket = [];

let generateFilter =(typeName)=>{

    for(let i = 0; i < shopData.length; i++){
        let a = shopData[i].type;
        if(a == typeName){
            tempBasket.push({
                id : shopData[i].id,
                name : shopData[i].name,
                price : shopData[i].price,
                desc : shopData[i].desc,
                img : shopData[i].img,
            });
        }
    
    }

    if(tempBasket.length !== 0){
        return (shop.innerHTML = tempBasket.map((y)=>{
            let {id,name,price,desc,img} = y;
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
    }
    

    
};

function filterOption(){
    let men = document.getElementById('Men');
    let women = document.getElementById('Women');
    let kids = document.getElementById('Kids');

    shop.style.display= "grid";
    view.style.display = "none";
    
    if(men.checked == true){
        generateFilter(men.name);
    }
    if(women.checked == true){
        generateFilter(women.name);
    }
    if(kids.checked == true){
        generateFilter(kids.name);
    }

    if(men.checked == false && women.checked == false && kids.checked == false ){
        generateFilter(men.name);
        generateFilter(women.name);
        generateFilter(kids.name);
    }
    tempBasket = [];
    
}