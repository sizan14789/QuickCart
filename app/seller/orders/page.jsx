import OrdersTable from "./components/OrdersTable";

const getOrdersData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/orders`);
  const data = await res.json();
  const ordersList = await Promise.all(
    data.map(async (curOrder) => {
      const res = await fetch(
        `${process.env.BASE_URL}/api/products/${curOrder.productId}`
      );
      const data = await res.json();
      const { image, offerPrice, name } = data;
      return {
        ...curOrder,
        productName: name,
        image: image[0],
        offerPrice: offerPrice,
      };
    })
  );
  return ordersList;
};

const Orders = async () => {
  const ordersData = await getOrdersData();

  return (
    <div className="flex w-full flex-col p-4">
      <h2 className="text-2xl mb-6 text-gray-700">Orders</h2>
      {ordersData.length === 0 ? (
        <h2 className="text-gray-800/50">No pending orders</h2>
      ) : (
        <OrdersTable ordersData={ordersData} />
      )}
    </div>
  );
};

export default Orders;
