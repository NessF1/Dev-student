// Para el producto

class Product {
    constructor(name, price, year){
        this.name= name;
        this.price = price;
        this.year = year;
    } 
}
// Para la interfaz que va a pasar cuando el usiario esta introduciendo datos

class UI{
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product Name</strong> ${product.name}
                <strong>Product Price</strong> ${product.price}
                <strong>Product Year</strong> ${product.year}
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>

        </div>
        `;
        productList.appendChild(element);
    }

    resetForm(){
        document.getElementById('product-form').reset();

    }

    deleteProduct(element){
        if(element.name=== 'delete')
            console.log(element.parentElement.parentElement.parentElement.remove());

    }

    showMesagge(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));
        //Show in DOM
        const container = document.querySelector('container');
        document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('alert').remove();

        }, 3000);
    }
}

//DOM Event - eventos
document.getElementById('product-form')
.addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);

    const ui = new UI();
    ui.addProduct(product);
    ui.resetForm();
    ui.showMesagge('Product Added Succesfully', 'success')

    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI
    ui.deleteProduct(e.target);

});

