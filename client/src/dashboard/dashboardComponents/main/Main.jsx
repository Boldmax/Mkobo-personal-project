import "./Main.css";
import { BiLineChart } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";
import dataSet from "./orders";

const Main = () => {
    return (
        <main>
            <h1>Investments</h1>
            {/* 
            <div className="date">
                <input type="date" />
            </div> */}

            <div className="insights">
                <div className="sales">
                    <span className="icon"><BiLineChart /></span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Investment Portfolio in Naira</h3>
                            <h1>&#8358;25,024</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>
                {/* ------------ END OF SALES -------------- */}
                <div className="expenses">
                    <span className="icon" ><FiBarChart2 /></span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Expenses</h3>
                            <h1>&#8358;14,160</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>62%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>
                {/*    END OF EXPENSES  */}
                {/*                 <div className="income">
                    <span className="icon"><AiOutlineRise /></span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Income</h3>
                            <h1>$10,864</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>44%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div> */}
                {/* ------------ END OF INCOME -------------- */}
            </div>
            {/* ------------ END OF INSIGHTS -------------- */}

            <div className="recent-orders">
                <h2>Recent Entry</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Rate</th>
                            {/* <th>Status</th> */}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {dataSet.map((data, index) => {

                            return <tr key={index}>
                                <td className="primary">{data.productName}</td>
                                <td className="warning">{data.productNumber}</td>
                                <td>{data.shipping}</td>
                                {/* <td className="warning">{data.shipping}</td>
                                <td className="primary">Details</td> */}
                            </tr>
                        })}
                    </tbody>

                </table>

                {/* <a href="#">Show All</a> */}
            </div>
        </main>
    )
}

export default Main;
