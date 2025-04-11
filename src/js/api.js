import { API_URL } from './const';

export const getProducts = async ({type, list, page}) => {
  try {
    const url = new URL(`${API_URL}/api/goods`);
    if (type) {
      url.searchParams.append('type', type);
    }

    if (list) {
      url.searchParams.append('list', list.join(','));
    }

    if (page) {
      url.searchParams.append('page', page);
    }

    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/goods/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return null;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/api/types`);
    const data = await response.json();

    return data;
  } catch (error) {
    return null;
  }
};
