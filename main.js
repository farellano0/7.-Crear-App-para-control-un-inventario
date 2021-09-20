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
        btnErs.addEventListener('click', this.deleteProduct);
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

    deleteProduct = () => {
        let inpCode = document.querySelector('#deleteCode');
        let deleteCode = inpCode.value;

        if(deleteCode == ""){
            Swal.fire('Oops', 'Ingrese un código de producto', 'info');
            return;
        }

        if(this.registry._findProductByCode(deleteCode) === false){
            inpCode.value = "";

            Swal.fire('Error', 'El producto no existe', 'error');
            return;
        } else {
            inpCode.value = "";
            this.registry.delete(deleteCode);

            Swal.fire('Eliminado', 'Se eliminó el producto', 'success');
            return;
        }
    }

    showProduct = () => {
        let products = this.registry.getRegistry()

        if(products.length == 0){
            Swal.fire('Ninguno', 'No hay productos registrados', 'warning');
            return;
        }
        
        let myTable = "<table><tr><th>Código</th>";
        myTable += "<th>Nombre</th>";
        myTable += "<th>Cantidad</th>";
        myTable += "<th>Costo</th>";
        myTable += "<th>Costo Total</th></tr>";

        for(let i = 0; i < products.length; i++) {
            myTable += `<tr><td>${products[i].getCode()}</td>`;
            myTable += `<td>${products[i].getName()}</td>`;
            myTable += `<td>${products[i].getAmount()}</td>`;
            myTable += `<td>${products[i].getCost()}</td>`;
            myTable += `<td>${products[i].getTotalCost()}</td>`;
            myTable += '</tr>';
        }

        myTable += `</table>`;

        document.getElementById('table').innerHTML = myTable;
    }
    showLast = () => {
        let products = this.registry.getArrayInverted();

        if(products.length == 0){
            Swal.fire('Ninguno', 'No hay productos registrados', 'warning');
            return;
        }

        let myTable = "<table><tr><th>Código</th>";
        myTable += "<th>Nombre</th>";
        myTable += "<th>Cantidad</th>";
        myTable += "<th>Costo</th>";
        myTable += "<th>Costo Total</th></tr>";

        for(let i = 0; i < products.length; i++) {
            myTable += `<tr><td>${products[i].getCode()}</td>`;
            myTable += `<td>${products[i].getName()}</td>`;
            myTable += `<td>${products[i].getAmount()}</td>`;
            myTable += `<td>${products[i].getCost()}</td>`;
            myTable += `<td>${products[i].getTotalCost()}</td>`;
            myTable += '</tr>';
        }

        myTable += `</table>`;

        document.getElementById('table').innerHTML = myTable;
    }

    
}

new App();