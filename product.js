export default class Product {
    constructor(code, name, amount, cost){
       this._code  = code;
       this._name = name;
       this._amount = amount;
       this._cost = cost;
    }

    //Lectura

    getCode(){
        return this._code;
    }

    getName(){
        return this._name;
    }

    getAmount(){
        return this._amount;
    }

    getCost(){
        return this._cost;
    }

    getTotalCost(){
        return this._amount * this._cost;
    }

    //Escritura

    setCode(code){
        this._code = code;
        return this._code;
    }

    setName(name){
        this._name = name;
        return this._name;
    }

    setAmount(amount){
        this._amount = amount;
        return this._amount;
    }

    setCost(cost){
        this._cost = cost;
        return this._cost;
    }

    static readForm(){
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
}