import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./Home.module.css";
import video from "../assets/Goodguyswashshack Commercial.webm";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Home = () => {
  return (
    <>
      <main>
        <div className={classes.divSection1}>
          <div className={classes.dots} />
          <video width="auto" height="auto" autoPlay loop muted>
            <source src={video} type="video/webm" />
          </video>
        </div>
        <div className={classes.divSection2}>
          <div className={classes.cardContainer}></div>
        </div>
        {/* <Carousel
                    swipeable={false}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet","mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                    <div>Item 5</div>
                </Carousel> */}
      </main>
    </>
  );
};

export default Home;
