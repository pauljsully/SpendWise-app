// home.jsx

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);


function Home() {
  const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: 'Income',
        data: [...incomes.map((income) => income.amount)],
        backgroundColor: 'green',
        tension: 0.2,
      },
      {
        label: 'Expenses',
        data: [...expenses.map((expense) => expense.amount)],
        backgroundColor: 'red',
        tension: 0.2,
      },
    ],
  };

  return (
    <div>
      <DashboardStyled>
        <InnerLayout>
          <h1>All Transactions</h1>
          <div className="stats-con">
            <div className="chart-con">
              <ChartStyled>
                <Line data={data} />
              </ChartStyled>
              <div className="amount-con">
                <div className="income">
                  <h2>Total Income</h2>
                  <p>
                    {dollar} {totalIncome()}
                  </p>
                </div>
                <div className="expense">
                  <h2>Total Expense</h2>
                  <p>
                    {dollar} {totalExpenses()}
                  </p>
                </div>
                <div className="balance">
                  <h2>Total Balance</h2>
                  <p>
                    {dollar} {totalBalance()}
                  </p>
                </div>
              </div>
            </div>
            <div className="history-con">
              <History />
              <h2 className="salary-title">
                Min <span>Salary</span>Max
              </h2>
              <div className="salary-item">
                <p>${Math.min(...incomes.map((item) => item.amount))}</p>
                <p>${Math.max(...incomes.map((item) => item.amount))}</p>
              </div>
              <h2 className="salary-title">
                Min <span>Expense</span>Max
              </h2>
              <div className="salary-item">
                <p>${Math.min(...expenses.map((item) => item.amount))}</p>
                <p>${Math.max(...expenses.map((item) => item.amount))}</p>
              </div>
            </div>
          </div>
        </InnerLayout>
      </DashboardStyled>
    </div>
  );
}

export default Home; // Export the combined component

