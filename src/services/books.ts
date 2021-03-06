import { booksEndpoint } from './endpoints';

export const getAllBooks = async () => {
  try {
    let serviceResponse;

    const response = await fetch(booksEndpoint);
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }

    return serviceResponse;
  } catch (error) {
    console.log('Error featching all books: ', error);
    return {
      success: false,
      data: error,
    };
  }
};
