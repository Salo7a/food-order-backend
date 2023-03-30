import mongoose from 'mongoose';
import request from 'supertest';
import { App } from '@/app';
import { CreateMealDto } from '@dtos/meals.dto';
import { MealsRoute } from '@routes/meals.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Meals', () => {
  describe('[GET] /meals', () => {
    it('response findAll Meals', async () => {
      return;
    });
  });
});
