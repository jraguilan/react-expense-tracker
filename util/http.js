import axios from 'axios';

const API_URL = 'https://react-native-course-f6b91-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
  const response = await axios.post(API_URL + '/expenses.json', expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(API_URL + '/expenses.json');

  const expenses = [];

  for (const key in response.data) {
    const exponseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(exponseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(API_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(API_URL + `/expenses/${id}.json`);
}
