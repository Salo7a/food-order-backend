import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { Meal } from '@interfaces/meals.interface';
import { MealModel } from '@models/meals.model';

@Service()
export class MealService {
  public async findAllMeal(): Promise<Meal[]> {
    const meals: Meal[] = await MealModel.find();
    return meals;
  }

  public async findMealById(mealId: string): Promise<Meal> {
    const findMeal: Meal = await MealModel.findOne({ _id: mealId });
    if (!findMeal) throw new HttpException(409, "Meal doesn't exist");

    return findMeal;
  }

  public async createMeal(mealData: Meal): Promise<Meal> {
    const createMealData: Meal = await MealModel.create({ ...mealData });

    return createMealData;
  }

  public async updateMeal(mealId: string, mealData: Meal): Promise<Meal> {
    const updateMealById: Meal = await MealModel.findByIdAndUpdate(mealId, { mealData });
    if (!updateMealById) throw new HttpException(409, "Meal doesn't exist");

    return updateMealById;
  }

  public async deleteMeal(mealId: string): Promise<Meal> {
    const deleteMealById: Meal = await MealModel.findByIdAndDelete(mealId);
    if (!deleteMealById) throw new HttpException(409, "Meal doesn't exist");

    return deleteMealById;
  }
}
