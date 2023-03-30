import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { Order } from '@interfaces/orders.interface';
import { OrderModel } from '@models/orders.model';

@Service()
export class OrderService {
  public async findAllOrders(): Promise<Order[]> {
    const orders: Order[] = await OrderModel.find();
    return orders;
  }

  public async findOrderById(orderId: string): Promise<Order> {
    const findOrder: Order = await OrderModel.findOne({ _id: orderId });
    if (!findOrder) throw new HttpException(409, "Order doesn't exist");

    return findOrder;
  }

  public async createOrder(orderData: Order): Promise<Order> {
    const createOrderData: Order = await OrderModel.create({ ...orderData });

    return createOrderData;
  }

  public async updateOrder(orderId: string, orderData: Order): Promise<Order> {
    const updateOrderById: Order = await OrderModel.findByIdAndUpdate(orderId, { orderData });
    if (!updateOrderById) throw new HttpException(409, "Order doesn't exist");

    return updateOrderById;
  }

  public async deleteOrder(orderId: string): Promise<Order> {
    const deleteOrderById: Order = await OrderModel.findByIdAndDelete(orderId);
    if (!deleteOrderById) throw new HttpException(409, "Order doesn't exist");

    return deleteOrderById;
  }
}
