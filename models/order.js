class Order {
  constructor(orderId, orderItems, orderTotalAmount, orderDate) {
    this.orderId = orderId;
    this.orderItems = orderItems;
    this.orderTotalAmount = orderTotalAmount;
    this.orderDate = orderDate;
  }
  get ReadableDate() {
    // convert into readble date
    return this.orderDate.toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}

export default Order;
