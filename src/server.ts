import { App } from '@/app';
import { MealsRoute } from '@routes/meals.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new MealsRoute()]);

app.listen();
