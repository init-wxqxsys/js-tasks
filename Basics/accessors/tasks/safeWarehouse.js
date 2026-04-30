const warehouse = {
    _quantity: 0,
    get stock() {
        return this._quantity !== 0
         ? `На складе осталось ${this._quantity} шт.`
         : "Склад пуст";
    },
    set stock(value) {
        if (value < 0)
            console.error("Склад не может уйти в минус!");
        else
            this._quantity = value;
    }
}

console.log(warehouse.stock);

warehouse.stock = -123;
warehouse.stock = 123;

console.log(warehouse.stock);
