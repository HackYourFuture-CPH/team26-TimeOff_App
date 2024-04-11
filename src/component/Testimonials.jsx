import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProfileCard from "./ProfileCard"; // Assuming ProfileCard is in a separate file
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
        <ProfileCard
          imageSrc="/pics/Nico.jpeg"
          name="Nicolas Quiroga"
          role="Web developer"
          testimonial="TimeOff has been a game-changer for our team. It streamlines the process of requesting and tracking time off, making it easy for both managers and team members. The user-friendly interface and intuitive features have made managing vacations a breeze."
        />

        <ProfileCard
          imageSrc="/pics/Srushti.png"
          name="Srushti Salke"
          role="Web developer"
          testimonial="As a team leader, TimeOff has made my job so much easier. I can quickly see who is available and who is on vacation, allowing me to plan projects more effectively. The app's simplicity and efficiency have saved me valuable time and reduced administrative burden."
        />

        <ProfileCard
          imageSrc="/pics/Shahnawaz.jpeg"
          name="Shahnawaz"
          role="Designer"
          testimonial="Since implementing TimeOff, our team has experienced a significant improvement in communication and coordination. We can easily stay organized and ensure that everyone's time off requests are managed smoothly. It's a must-have tool for any company looking to streamline their time off management process."
        />
      </Carousel>
    );
  }
}
