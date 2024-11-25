const EventEmitter = require('events');

class GroceryScheduler extends EventEmitter {
    constructor() {
        super();
        this.groceries = [];
    }

    addGrocery(itemName, delay, callback) {
        this.groceries.push(itemName);
        setTimeout(() => {
            this.emit('groceryCompleted', itemName, delay);
            if (callback) callback(itemName);
        }, delay);
    }
}


const scheduler = new GroceryScheduler();

scheduler.on('groceryCompleted', (itemName, delay) => {
    console.log(`Grocery item "${itemName}" completed after ${delay} ms.`);
});

scheduler.addGrocery("Milk", 2000, (item) => {
    console.log(`Callback triggered for ${item}`);
});
scheduler.addGrocery("Bread", 4000);
