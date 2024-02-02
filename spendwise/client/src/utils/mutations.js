import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_INCOME = gql`
  mutation addIncome($profileId: ID!, $title: String!, $amount: String!, $date: String!, $category: String!, $description: String!) {
    addIncome(profileId: $profileID, title: $title, amount: $amount, date: $date, category: $category, description: $description)) {
      _id
      income {
        title
        amount
        date
        category
        description
      }
      
    }
  }
`;


export const REMOVE_INCOME = gql`
  mutation removeIncome($income: String!) {
    removeIncome(income: $income) {
      _id
      income
    }
  }
`;

export const ADD_EXPENSE = gql`
mutation addExpense($profileId: ID!, $title: String!, $amount: String!, $date: String!, $category: String!, $description: String!) {
  addExpense(profileId: $profileID, title: $title, amount: $amount, date: $date, category: $category, description: $description)) {
      _id
      name
      income {
        title
        amount
        date
        category
        description
      }
      
    }
  }
`;

// mohammed also said that we do need profileId: $profileID

export const REMOVE_EXPENSE = gql`
  mutation removeExpense($income: String!) {
    removeExpense(Expense: $income) {
      _id
      income
    }
  }
`;

// Im still not sure if the remove expense/income is totally right