class Fund {
    id;
    from;
    senderName;
    to;
    receiverName;
    amount;
    constructor(id, from, senderName, to, receiverName, amount) {
        this.id = id;
        this.from = from;
        this.senderName = senderName
        this.to = to;
        this.receiverName = receiverName
        this.amount = amount;
    }
}