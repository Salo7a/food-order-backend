import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Meal } from '@interfaces/meals.interface';
import { MealService } from '@services/meals.service';

export class MealController {
  public meal = Container.get(MealService);

  public getMeals = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllMealsData: Meal[] = await this.meal.findAllMeal();

      res.status(200).json({ data: findAllMealsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getMealById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const mealId: string = req.params.id;
      const findOneMealData: Meal = await this.meal.findMealById(mealId);

      res.status(200).json({ data: findOneMealData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createMeal = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const mealData: Meal = req.body;
      const createMealData: Meal = await this.meal.createMeal(mealData);

      res.status(201).json({ data: createMealData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateMeal = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const mealId: string = req.params.id;
      const mealData: Meal = req.body;
      const updateMealData: Meal = await this.meal.updateMeal(mealId, mealData);

      res.status(200).json({ data: updateMealData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteMeal = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const mealId: string = req.params.id;
      const deleteMealData: Meal = await this.meal.deleteMeal(mealId);

      res.status(200).json({ data: deleteMealData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
