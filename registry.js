export default class Registry {
    constructor(){
        this._registry = new Array();
    }
    
    add(product){
        let pos = this._findProduct(product);

        if(pos >= 0){
            return false;
        }

        this._registry.push(product);
        //this._addOptionPosition(this._registry.length);
    }


    generateInitTable(){
        //Creamos los principales elementos de una tabla en html.
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        //Unimos el thead y el tbody a la tabla para que estén juntos.
        table.appendChild(thead);
        table.appendChild(tbody);

        //Unimos la tabla al cuerpo de nuestro HTML.
        document.getElementById('body').appendChild(table);

        //Creamos y añadimos datos a la primera fila de nuestra tabla
        let row_1 = document.createElement('tr');
        
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = 'Código';
        
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = 'Nombre';

        let heading_3 = document.createElement('th');
        heading_3.innerHTML = 'Cantidad';

        let heading_4 = document.createElement('th');
        heading_4.innerHTML = 'Costo Individual';

        let heading_5 = document.createElement('th');
        heading_5.innerHTML = 'Valor de mercancía';

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        row_1.appendChild(heading_4);
        row_1.appendChild(heading_5);

        thead.appendChild(row_1);

        table.setAttribute('id', 'productTable');
        table.setAttribute('class', 'table');
    }

    _show(product){
        let row = document.querySelector('#productTable').incertRow(-1);

        let colCode = row.incertCell(0);
        let colName = row.incertCell(1);
        let colAmount = row.incertCell(2);
        let colCost = row.incertCell(3);
        let colCostMerch = row.incertCell(4);

        row.setAttribute('id', `row${product.getCode()}`);
        colCode.setAttribute('id', `colCode${product.getCode()}`);
        colName.setAttribute('id', `colName${product.getCode()}`);
        colAmount.setAttribute('id', `colAmount${product.getCode()}`);
        colCost.setAttribute('id', `colCost${product.getCode()}`);
        colCostMerch.setAttribute('id', `colCostMerch${product.getCode()}`);

        colCode.innerHTML = product.getCode();
        colName.innerHTML = product.getName();
        colAmount.innerHTML = product.getAmount();
        colCost.innerHTML = product.getCost();
        colCostMerch = product.getTotalCost();
    }
    _addOptionPosition(position){
        let option = document.createElement('option');

        option.value = position;
        option.text = position;

        let select = document.querySelector('#position');

        select.appendChild(option);
    }

    _findProduct(product){
        let pos = this._registry.findIndex((p) => {
            if(p.getCode() == product.getCode()){
                return true;
            }
            return false;
        })

        return pos;
    }
}