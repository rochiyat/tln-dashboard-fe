import api from '@/helpers/axios'
import { AxiosError } from 'axios'

export const userCvsList = async (query: {limit: number; page: number, key: string}) => {
  try {
    const response = await api.get('/v1/user-cvs', {params: query});
    return { success: true, data: response.data };
  } catch (error: unknown) {
    const err = error as AxiosError;
    return { success: false, error: err?.message || "Failed to fetch user cvs" };
  }
}