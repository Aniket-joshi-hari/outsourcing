import axios from 'axios';

const baseURI = 'https://test-zypher.herokuapp.com/';

export const getAuthorDetails = async () => {
  try {
    const res = await axios.post(`${baseURI}author/viewDetails/`, {
      authorId: '5cb19ba36daba5576cbab1d4',
    });
    return {
      success: true,
      data: res.data,
    };
  } catch (err) {
    return {
      success: false,
      data: err,
    };
  }
};

export const getBookDetails = async () => {
  try {
    const res = await axios.post(`${baseURI}books/getbooksBytags`, {
      booksPerpage: 50,
      tags: 'business',
      pageNumber: 0,
      showAll: true,
    });
    return {
      success: true,
      data: res.data.books,
    };
  } catch (err) {
    return {
      success: false,
      data: err,
    };
  }
};
