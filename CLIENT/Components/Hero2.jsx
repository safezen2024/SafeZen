import React from "react";
import OverlayCard from "./OverlayCard";
import "../Styles/Hero2.scss";
import img1 from "../public/src/hero2-1.jpg";
import img2 from "../public/src/hero2-2.jpg";
import img3 from "../public/src/about-us2.png";
import Capsule from "./Capsule";
import BenefitCard from "./BenefitCard";
import BenefitCard2 from "./BenefitCard2";
import hero2Banner1 from "../public/src/hero2-banner1.jpg";
import { FaArrowRight } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";
import testimonial1 from "../public/src/testimonial1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import faqData from "../data_files/FAQ_Data";
import FAQ from "./FAQ";

function Hero2() {

  return (
    <div className="hero2">
      <Capsule text={"What do we do"} />
      <div className="hero2-heading">
        <h2>The Importance Of Mental-Care And Setting Healthy Boundaries</h2>
      </div>
      <div className="overlay-cards">
        <OverlayCard
          img={img1}
          category={"Wellness"}
          title={"Live Counseling Scheduling"}
        />
        <OverlayCard
          img={img2}
          category={"Health"}
          title={"Mental Health Going Back Again"}
        />
        <OverlayCard
          img={img3}
          category={"Psychiatrist"}
          title={"Psychiatry People Work Agency"}
        />
      </div>

      <div className="hero2-benefits">
        <div className="benefits-left">
          <Capsule text={"Overview"} />
          <h2>The benefits of mental health counseling therapy</h2>
        </div>
        <div className="benefits-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a
            magnam suscipit incidunt sed excepturi consequatur provident cumque
            corporis modi?
          </p>
        </div>
      </div>

      <div className="hero2-benefits-cards">
        <BenefitCard
          num={"01"}
          title={"Lifestyle changes"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
        />
        <BenefitCard2
          num={"02"}
          title={"Understanding anxiety"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
        />
        <BenefitCard
          num={"03"}
          title={"Managing depression"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
        />
        <BenefitCard
          num={"04"}
          title={"Improving mental health"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
        />
      </div>

      <div className="hero2-banner">
        <img src={hero2Banner1} alt="hero2" />
        <div className="blur-gradient"></div>
        <div className="hero-text">
          <span className="hero-capsule">Don't Waste your time</span>
          <h2>Lets Get mental health and reducing stress</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button onClick={() => (window.location.href = "/pricing")}>
            Register Now <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="testimonial">
        <Capsule text={"Testimonial"} />
        <h2>What they say about us</h2>
        <Swiper pagination={true} modules={[Pagination]} className="testimonial-cards" spaceBetween={5} loop={true} breakpoints={{
            0: { slidesPerView: 1 },
            596: { slidesPerView: 3 },
          }}>
          <SwiperSlide>

          <TestimonialCard
            head={"Expertise and Compassion Combined"}
            para={
              "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way."
            }
            img={testimonial1}
            name={"Sarah D"}
            profession={"IT Professional"}
            stars={5}
            />
            </SwiperSlide>

            <SwiperSlide>

          <TestimonialCard
            head={"Life-Saving Care, Life-Changing Experience"}
            para={
              "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life."
            }
            img={testimonial1}
            name={"Michael R"}
            profession={"Business Executive"}
            stars={4}
            />
            </SwiperSlide>

            <SwiperSlide>

          <TestimonialCard
            head={"A Partner in Health and Wellness"}
            para={
              "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and"
            }
            img={testimonial1}
            name={"David S"}
            profession={"Lawyer"}
            stars={5}
            />
            </SwiperSlide>

            <SwiperSlide>

          <TestimonialCard
            head={"A Partner in Health and Wellness"}
            para={
              "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and"
            }
            img={testimonial1}
            name={"David S"}
            profession={"Lawyer"}
            stars={5}
            />
            </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <FAQ questions={faqData} />
      </div>

    </div>
  );
}

export default Hero2;
