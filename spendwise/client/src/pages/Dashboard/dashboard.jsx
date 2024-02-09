import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { Chart, ArcElement } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import "./dashboard.css";
import { formatAmount } from "../../utils/helpers";

const Dropdown = ({ onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState('CurrentMTD');

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    onOptionChange(selectedOption);
  }

  return (
    <div className="dropdown_container">
      <label className="dropdown_label" htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">--Select--</option>
        <option value="CurrentMTD">Current MTD</option>
        <option value="CurrentYTD">Current YTD</option>
        <option value="PriorMTD">Prior MTD</option>
        <option value="PriorYTD">Prior YTD</option>
      </select>
    </div>
  );
};

export default function Dashboard({ transactions, setTransactions }) {

  const [selectedOption, setSelectedOption] = useState('CurrentMTD');

  Chart.register(ArcElement);
  const { data, loading } = useQuery(QUERY_ME);

  useEffect(() => {
    if (data?.me?.transactions) {
      setTransactions(data?.me?.transactions);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  }
  let selectedTransactions = [];
  let selectedTimePeriod = "";
  let selectedTotal;

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const priorMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const priorYear = currentYear - 1;
  console.log("**********PRIOR YEAR: ", priorYear);
  
  // Filter transactions for current month and year
  const currentMonthTransactions = transactions.filter(transaction => {
    const transactionDate = new Date(parseInt(transaction.date));
    return transactionDate.getMonth() === currentMonth && transactionDate.getFullYear() === currentYear;
  });
  
  // Sum transaction amounts for current month to date
  const currentMonthToDateSum = currentMonthTransactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);
  
  // Filter transactions for current year
  const currentYearTransactions = transactions.filter(transaction => {
    const transactionDate = new Date(parseInt(transaction.date));
    return transactionDate.getFullYear() === currentYear;
  });
  
  // Sum transaction amounts for current year to date
  const currentYearToDateSum = currentYearTransactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);
  
  // Filter transactions for prior month and year
  const priorMonthTransactions = transactions.filter(transaction => {
    const transactionDate = new Date(parseInt(transaction.date));
    return transactionDate.getMonth() === priorMonth && transactionDate.getFullYear() === currentYear;
  });
  
  // Sum transaction amounts for prior month to date
  const priorMonthToDateSum = priorMonthTransactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);
  
  // Filter transactions for prior year
  const priorYearTransactions = transactions.filter(transaction => {
    const transactionDate = new Date(parseInt(transaction.date));
    return transactionDate.getFullYear() === priorYear;
  });
  
  // Sum transaction amounts for prior year to date
  const priorYearToDateSum = priorYearTransactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);
  
  console.log("CURRENT MTD SUM: ", currentMonth, ": ", currentMonthToDateSum);
  console.log("CURRENT YTD SUM: ", currentYear, ": ", currentYearToDateSum);
  console.log("PRIOR MTD SUM: ", priorMonth, ": ", priorMonthToDateSum);
  console.log("PRIOR YTD SUM: ", priorYear, ": ", priorYearToDateSum);
  
  switch(selectedOption) {
    case "CurrentMTD":
      selectedTransactions = currentMonthTransactions;
      selectedTimePeriod = "Current Month to Date Spending";
      selectedTotal = currentMonthToDateSum;
      break
    case "CurrentYTD":
      selectedTransactions = currentYearTransactions;
      selectedTimePeriod = "Current Year to Date Spending";
      selectedTotal = currentYearToDateSum;
      break;
    case "PriorMTD":
      selectedTransactions = priorMonthTransactions;
      selectedTimePeriod = "Prior Month to Date Spending";
      selectedTotal = priorMonthToDateSum;
      break;
    case "PriorYTD":
      selectedTransactions = priorYearTransactions;
      selectedTimePeriod = "Prior Year to Date Spending";
      selectedTotal = priorYearToDateSum;
      break;
    default:
      selectedTransactions = currentMonthTransactions;
      selectedTimePeriod = "Current Month to Date Spending";
      selectedTotal = currentMonthToDateSum;
  }
 

    return (
      <div>
        <h1 id="charts-title">Your Spending Charts</h1>
        <Dropdown onOptionChange={handleOptionChange} />
        <div className="row d-flex justify-content-around">
          <div className="col col-sm-12 col-lg-6" id="pie-chart-1">
          <div className="row">
            </div>
            <div className="row">
              <div className="card card-chart ml-5">
                <div className="card-header card-chart-header">
                  <h3 className="chart-title text-center text-light">{selectedTimePeriod}</h3>
                  <h4>Total: ${formatAmount(selectedTotal)}</h4>
                  <h4 className="chart-title text-centermb-2 text-light">
                    by Category
                  </h4>
                </div>
                <div className="card-body card-chart-body m-5">
                  <Pie
                    className="chart chartjs-render-monitor chart-legend"
                    data={categoryData}
                    options={{
                      plugins: {
                        legend: {
                          position: "bottom",
                          labels: { color: "black", wordWrap: true, maxWidth: 150, fontSize: 10 },
                        },
                      },
                    }}
                  ></Pie>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  