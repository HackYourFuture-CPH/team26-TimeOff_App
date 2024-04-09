import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/testimonials.css";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/pics/Nico.jpeg" />
          <div className="myCarousel">
            <h3>Nicolas Quiroga</h3>
            <h4>Web developer</h4>
            <p>
              <strong>TimeOff</strong> has been a game-changer for our team. It
              streamlines the process of requesting and tracking time off,
              making it easy for both managers and team members. The
              user-friendly interface and intuitive features have made managing
              vacations a breeze.
            </p>
          </div>
        </div>

        <div>
          <img src="/pics/Srushti.png" />
          <div className="myCarousel">
            <h3>Srushti Salke</h3>
            <h4>Web developer</h4>
            <p>
              As a team leader, <strong>TimeOff</strong> has made my job so much
              easier. I can quickly see who is available and who is on vacation,
              allowing me to plan projects more effectively. The app's
              simplicity and efficiency have saved me valuable time and reduced
              administrative burden.
            </p>
          </div>
        </div>

        <div>
          <img src="/pics/Shahnawaz.jpeg" />
          <div className="myCarousel">
            <h3>Shahnawaz</h3>
            <h4>Designer</h4>
            <p>
              Since implementing <strong>TimeOff</strong>, our team has
              experienced a significant improvement in communication and
              coordination. We can easily stay organized and ensure that
              everyone's time off requests are managed smoothly. It's a
              must-have tool for any company looking to streamline their time
              off management process.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
