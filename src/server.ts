import { App } from '@/app';
import { MealsRoute } from '@routes/meals.route';
import { OrdersRoute } from '@routes/orders.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new MealsRoute(), new OrdersRoute()]);

app.listen();
