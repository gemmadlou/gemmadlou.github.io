import axios from 'axios';

export const getArticle = () => axios.get('/content/articles/001.md')