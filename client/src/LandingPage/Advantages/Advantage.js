
import image from "../Images/AdvantageImage.png";
import "./Advantages.css";
import {
  Cards,
  Header,
  Content,
  Image,
  CardBody,
  ImageBody,
} from "./Advantages.styled";

export default function Advantage() {
  return (
    <div id="main">
      <h1>Why Choose us</h1>
      <div className="sub-main">
        <ImageBody>
          <Image src={image} />
        </ImageBody>
        
        <CardBody>
          <Cards>
            <Header>Get started with low entry of just ₦100,000</Header>
            <Content>
              With as low as ₦100,000, you can take advantage of our investemnt
              opprtunities and make your money work for you.
            </Content>
          </Cards>
          <Cards>
            <Header>Earn as much as 15% per annum</Header>
            <Content>
              Enjoy our mouth watering ROI. Our rates rante from 5% to 15% per
              annum depending on the amount and the tenor.
            </Content>
          </Cards>
          <Cards>
            <Header>Monitor your investment day and night</Header>
            <Content>
              You can track and manage your investment at your convenience on
              our portal day and night. Receive monthly notifications on your
              investment performance.
            </Content>
          </Cards>
        </CardBody>
      </div>
    </div>
  );
}
