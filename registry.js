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

    search(codeProduct){
        let pos = this._findProductByCode(codeProduct);

        return this._registry[pos];
    }

    delete(codeProduct){
        let nVector = new Array();
        let pos = this._findProductByCode(codeProduct);

        if(pos < 0){
            return false;
        } else {
            for(let i = 0; i <= this._registry.length; i++){
                if(codeProduct !== this._registry[i].getCode()){
                    nVector.push(this._registry[i]);
                }
            }

            this._registry = nVector;
            return true;
        }
    }

    //Métodos Privados

    _findProduct(product){
        let pos = this._registry.findIndex((p) => {
            if(p.getCode() == product.getCode()){
                return true;
            }
            return false;
        })

        return pos;
    }

    _findProductByCode(codeProduct){
        let pos = this._registry.findIndex((p) => {
            if(p.getCode() == codeProduct){
                return true;
            }
            return false;
        })

        return pos;
    }
}