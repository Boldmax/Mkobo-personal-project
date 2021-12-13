
import vector from '../image/Vector2.png';
/* import './cardsAndBank.css' */
import { BankEmpty, BankDesc, Button, SmallCard, OtherCards, Cross, CrossDecsrip, Bank, Accounttag, AccountNumber } from "../cardsAndBank.style";

const accountDetails = {
    detail: [
        {
            Account_Number: "2235125037",
        },
        {
            Account_Number: "2245105037",
        }
    ]
}


export default function Accounts() {

    if (accountDetails.detail.length === 0) {
        return <div className="cardContainer">
            <img id="CardImg2" src={vector} />
            <BankEmpty>No Bank</BankEmpty>
            <BankDesc>You have not added any bank. You need to add a bank to
            withdraw your investment to. Click add bank below to get started.
            </BankDesc>
            <Button>Add bank</Button>
        </div>
    }
    return (
        <div className="accountCardDisplay">
            <SmallCard >
                <Cross>
                    +
               </Cross>
                <CrossDecsrip copy>
                    Add new account
               </CrossDecsrip>
            </SmallCard>
            {accountDetails.detail.map((state, key) => {
                return <OtherCards key={key}>
                    <Accounttag>
                        Account Number
                    </Accounttag>
                    <AccountNumber>
                        {state.Account_Number}
                    </AccountNumber>
                    <Bank>
                        Zenith Bank Plc
                    </Bank>
                    <hr id="cardLine" />
                    <CrossDecsrip>
                        Copy to clipboard
                    </CrossDecsrip>
                </OtherCards>
            })}

        </div>
    )
}
