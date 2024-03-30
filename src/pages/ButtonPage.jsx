import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import { Button } from "../components/Button";

export const ButtonPage = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <>
      <div>
        <Button primary rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click!
        </Button>
      </div>
      <div>
        <Button secondary outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success rounded onMouseLeave={handleClick}>
          <GoDatabase />
          Sea Deal!
        </Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button danger>Cart</Button>
      </div>
    </>
  );
};

export default ButtonPage;
