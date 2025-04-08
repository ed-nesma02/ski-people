import { API_URL } from './const';

export const getProducts = async (type) => {
  try {
    const response = await fetch(`${API_URL}/goods${type ? `?type=${type}` : ''}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/goods/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return null;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/types`);
    const data = await response.json();

    return data;
  } catch (error) {
    return null;
  }
};