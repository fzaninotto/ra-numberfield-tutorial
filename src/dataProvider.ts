import fakeRestProvider from "ra-data-fakerest";
import generateData from "data-generator-retail";

import type { Order } from "./types";

const { commands, ...data } = generateData();

const convertOrders = (orders: Order[]) =>
  orders.map((order) => ({
    ...order,
    total_ex_taxes: Math.round(order.total_ex_taxes * 100),
    delivery_fees: Math.round(order.delivery_fees * 100),
    taxes: Math.round(order.taxes * 100),
    total: Math.round(order.total * 100),
  }));

const fixedData = {
  orders: convertOrders(commands as Order[]),
  ...data,
};

export const dataProvider = fakeRestProvider(fixedData, true);
