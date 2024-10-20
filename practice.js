
document.addEventListener(`DOMContentLoaded`,() => {
    const sizeSelector =document.getElementById(`size-selector`);
    const productPrice = document.getElementById(`product-price`);
    const purchaseButton =document.getElementById(`purchase-button`);
    const addProductForm = document.getElementById('add-product-form');
    const productList = document.getElementById('product-list');

    sizeSelector.addEventListener(`change`, () => {
        const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
        const newPrice = selectedOption.getAttribute(`data-price`);
        const stockStatus = selectedOption.getAttribute(`data-stock`);

        productPrice.textContent= newPrice;
        if(stockStatus === `out-of-stock`){
            purchaseButton.disabled = true;
        }else{
            purchaseButton.disabled =false;
        }
    
});

purchaseButton.addEventListener(`click`, () => {
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
    const stockStatus = selectedOption.getAttribute(`data-stock`);
    if (stockStatus === `in-stock`) {
        alert(`Thank you for shopping with us!!!`);
    } else {
        alert(`Sorry for the inconvinece this is out of stock :(`);
    }
    
});

addProductForm.addEventListener(`submit`,(event) => {
    event.preventDefault();

    const name = document.getElementById(`new-product-name`).value;
    const price = document.getElementById(`new-product-price`).value;
    const size = document.getElementById(`new-product-size`).value;
    const stock = document.getElementById(`new-product-stock`).value;

    const newProductHTML =`
    <div class= "product">
        <h3>${name}</h3>
        <p>Price: $${price}</p>
        <label for= "${size}">Select Size: </label>
        <select id="${size}">
           <option value="${size}" data-price="${price}" data-stock="${stock.toLowerCase()}">${size}: ${stock}</option>
        </select>
    </div>   `;

 productList.insertAdjacentHTML(`beforeend`, newProductHTML);
 addProductForm.reset();
});
});

