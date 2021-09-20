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
        btnSrch.addEventListener('click', this.searchProduct);
        btnErs.addEventListener('click', this.eraseProduct);
        btnShow.addEventListener('click', this.showProduct);
        btnShLa.addEventListener('click', this.showLast);
    }
    
    readForm(){
        let inpCode = document.querySelector('#code');
        let inpName = document.querySelector('#name');
        let inpAmount = document.querySelector('#amount');
        let inpCost = document.querySelector('#cost');

        let code = inpCode.value;
        let name = inpName.value;
        let amount = inpAmount.value;
        let cost = inpCost.value;

        if(code && name && amount && cost){
            inpCode.value = '';
            inpName.value = '';
            inpAmount.value = '';
            inpCost.value = '';

            return new Product(code, name, amount, cost);
        }

        return false;
    }

    addProduct = () => {
        let product = this.readForm();

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

    searchProduct = () => {
        let inpCode = document.querySelector('#searchCode');
        let codeSearch = inpCode.value;
        let details = document.querySelector('#details');

        if(codeSearch == ""){
            Swal.fire('Oops', 'Ingrese un código de producto', 'info');
            return;
        }

        let product = this.registry.search(codeSearch);
        console.log(product);

        if(product){
            inpCode.value = "";
            details.innerHTML = `<div class="info">
                <h4>Producto ${product.getCode()}</h4>
                ${product.infoHtml()}
             </div>`
        } else {
            inpCode.value = "";
            
            Swal.fire('Lo siento', 'No se encuentra el producto solicitado', 'error');
            return;

        }
    }

    
}

new App();