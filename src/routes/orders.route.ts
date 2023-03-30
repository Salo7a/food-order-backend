import { Router } from 'express';
import { MealController } from '@controllers/meals.controller';
import { CreateMealDto } from '@dtos/meals.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class MealsRoute implements Routes {
  public path = '/meals';
  public router = Router();
  public meal = new MealController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.meal.getMeals);
    this.router.get(`${this.path}/:id`, this.meal.getMealById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateMealDto), this.meal.createMeal);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(CreateMealDto, true), this.meal.updateMeal);
    this.router.delete(`${this.path}/:id`, this.meal.deleteMeal);
  }
}
