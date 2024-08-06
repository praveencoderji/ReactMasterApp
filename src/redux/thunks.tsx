import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppError } from './root-state';

export const fetchUser = createAsyncThunk<any, string, { rejectValue: AppError }>(
    'user/fetchUser',
    async (userId, thunkAPI) => {
        try {
            const response = await fetch(`/api/user/${userId}`);
            if (!response.ok) {
                return thunkAPI.rejectWithValue({
                    message: 'Failed to fetch user',
                    code: response.status,
                  });
            }
            return await response.json();
        } catch (error: any) {
            return thunkAPI.rejectWithValue({
                message: 'Failed to fetch user',
                code: error.message || 'An unexpected error occurred',
              });
        }
    }
);