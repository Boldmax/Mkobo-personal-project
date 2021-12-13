
import { Cards, Title, Head1, Head2, Head3, Head4 } from "../AccountNav.styled";
import './ActiveInvestments.css';

const states = {
    options: [
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25% returns in 270 days",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "16,250.00",
            Key: 0
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25% returns in 270 days",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "16,250.00",
            Key: 1
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25% returns in 270 days",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "16,250.00",
            Key: 2
        },
        {
            Name: "HYPA Deposit",
            InterestRate: "16.25% returns in 270 days",
            MaturityDate: "12-Nov-2021",
            InvestedCapital: "1000000",
            Interest: "16,250.00",
            Key: 3
        },
    ]
}

export default function ActiveInvestments() {
    return (
        <div className="displayControl">
            <div className="cardHolder">
                <h2>View Active Investment</h2>
                <p>Here’s a list of all the investment you’ve made with us recently.</p>
            </div>
            <div className="cardContent">
                {states.options.map((state, key) => {
                    return <Cards key={key}>
                        <Title>{state.Name}</Title>
                        <Head1>{state.InterestRate}</Head1>
                        <label id='label1'>Matures on</label>
                        <Head2>{state.MaturityDate}</Head2>
                        <label id='label2'>Invested Capital</label>
                        <Head3>{state.InvestedCapital}</Head3>
                        <label id='label3'>Interest</label>
                        <Head4>{state.Interest}</Head4>
                    </Cards>
                }
                )}
            </div>

        </div>
    )
}
