import "./Portfolio.css";
import { BiLineChart } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";
/* import { AiOutlineRise } from "react-icons/ai"; */
import dataSet from "../Order/orders";

const Main = () => {
    return (
        <main>
            <h1>Portfolio</h1>

            {/*      <div className="date">
                <input type="date" />
            </div> */}

            <div className="recent-orders">
                <h2>Transaction history</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {dataSet.map((data, index) => {

                            return <tr key={index}>
                                <td>{data.productName}</td>
                                <td>{data.productNumber}</td>
                                <td>{data.shipping}</td>
                                <td className="warning">{data.shipping}</td>
                                <td className="primary">Details</td>
                            </tr>
                        })}
                    </tbody>

                </table>

                {/* <a href="#">Show All</a> */}
            </div>

            <div className="analytics">
                <div className="sales">
                    <span className="icon"><BiLineChart /></span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Sales</h3>
                            <h1>$25,024</h1>
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
                            <h1>$14,160</h1>
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
            </div>


            <div className="recent-orders">
                <h2>Transaction history</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {dataSet.map((data, index) => {

                            return <tr key={index}>
                                <td>{data.productName}</td>
                                <td>{data.productNumber}</td>
                                <td>{data.shipping}</td>
                                <td className="warning">{data.shipping}</td>
                                <td className="primary">Details</td>
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
