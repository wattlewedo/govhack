import "./treeprofile.css";
import { Carousel, CarouselItem, Button } from "react-bootstrap";

const TreeProfile = () => {
  const treeImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
  ];

  return (
    <div className="treeprofile">
      <div className="notification">Added to your log</div>
      <div className="container">
        <Carousel>
          {treeImages.map((url) => {
            return (
              <CarouselItem>
                <img src={url} />
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>
      <div className="details">
        <div>Type:Bribie-Island Pine</div>
        <div>You are visitor 1005</div>
        <Button href="report">Report issue</Button>
      </div>
    </div>
  );
};

export default TreeProfile;
