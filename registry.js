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
        let pos = this._registry.findIndex((p) =>{
            if(p.getCode() == codeProduct){
                return true;
            }
            return false;
        })

        return this._registry[pos];
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