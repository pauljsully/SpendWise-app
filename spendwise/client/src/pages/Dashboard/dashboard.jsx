import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { Chart, ArcElement } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import "./dashboard.css";
import { formatAmount } from "../../utils/helpers";



export default function Dashboard({ transactions, setTransactions }) {


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
  