class Cashier {
    customers = []

    newCustomer(name) {
        console.log(`Adding ${name} to queue...`);
        this.customers.push(name);
        console.log(this.customers);
        this.serveCustomer();
    }

    serveCustomer() {
        if (this.customers[0])
            console.log(`Serving customer '${this.customers[0]}'...`);
        setTimeout(() => {
            this.removeCustomer();
        }, 1000);
        return;
    }

    removeCustomer() {
        var c = this.customers.shift();
        console.log(`Customer '${c}' served successfully, Queue: `, this.customers);
    }
}

const customerNames = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];

let c = new Cashier();

for (let i = 0; i < customerNames.length; i++) {
    setTimeout(() => {
        c.newCustomer(customerNames[i]);
    }, Math.floor(Math.random() * 3000) + 1000);
}
