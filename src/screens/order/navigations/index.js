import CreateOrderScreen from "../create";
import DetailOrderScreen from "../detail";
import OrderSuccessScreen from "../order-success";
import ScanOrderScreen from "../scan";

export const OrderNavigation = [
  {
    name: "CreateOrder",
    component: CreateOrderScreen,
  },
  {
    name: "OrderSuccess",
    component: OrderSuccessScreen,
  },
  {
    name: "DetailOrder",
    component: DetailOrderScreen,
  },
  {
    name: "ScanOrder",
    component: ScanOrderScreen,
  },
];
