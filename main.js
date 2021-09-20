import Product from "./product.js";
import Registry from "./registry.js";

class App {
    constructor(){
        this.registry = new Registry();
        let btnAdd = document.querySelector('#bttnAdd');
        let btnSrch = document.querySelector('#bttnSearch');
        let btnErs = document.querySelector('#bttnErase');
        let btnShow = document.querySelector('#bttnShow');
        let btnShLa = document.querySelector('#bttnShowLast');

        btnAdd.addEventListener('click', this.addProduct);
        btnSrch.addEventListener('click', this.showProductOne);
        btnErs.addEventListener('click', this.eraseProduct);
        btnShow.addEventListener('click', this.showProduct);
        btnShLa.addEventListener('click', this.showLast);
    }

    addProduct = () => {
        let product = Product.readForm();

        if(!product){
            Swal.fire('Error', 'Todos los campos son requeridos', 'error');
            return;
        }

        let added = this.registry.add(product);

        if(added == false) {
            Swal.fire('Error', 'Producto ya registrado', 'error');
            return;
        }
        Swal.fire('Correcto', 'Se agrego nuevo producto', 'success');
        return;
    }

    showProduct = () =>{
        
        
    }
}

new App();