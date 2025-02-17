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
          Mental health counseling offers transformative benefits by addressing underlying challenges, promoting self-awareness, and equipping individuals with tools to thrive in their personal and professional lives.
          </p>
        </div>
      </div>

      <div className="hero2-benefits-cards">
        <BenefitCard
          num={"01"}
          title={"Lifestyle changes"}
          text={
            "Learn how small adjustments to daily habits can lead to significant improvements in mental and physical well-being."
          }
        />
        <BenefitCard2
          num={"02"}
          title={"Understanding anxiety"}
          text={
            "Explore effective strategies to recognize, manage, and overcome feelings of anxiety for a calmer and more balanced life."
          }
        />
        <BenefitCard
          num={"03"}
          title={"Managing depression"}
          text={
            "Gain insights into addressing depression through practical tools, therapy, and self-care techniques tailored to your needs."
          }
        />
        <BenefitCard
          num={"04"}
          title={"Improving mental health"}
          text={
            "Discover ways to nurture mental health by building resilience, fostering positive relationships, and practicing mindfulness."
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
          Discover practical tools and expert guidance to reduce stress and improve your overall mental well-being.
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
            head={"Enhancing Emotional Awareness"}
            para={
              "I often found it difficult to identify and express my emotions, leading to misunderstandings and frustration. Safezen's counseling sessions helped me enhance my emotional awareness and understand my feelings better. I feel more connected to myself and others!"
            }
            //img={testimonial1}
            name={"~ Ms. Neha"}
            profession={"Student"}
            stars={5}
            />
            </SwiperSlide>

            <SwiperSlide>

          <TestimonialCard
            head={"Coping With Grief"}
            para={
              "After losing a loved one, I felt lost and unsure of how to cope with my grief. My counselor at SafeZen created a safe space for me to express my emotions and navigate my feelings. I'm slowly finding peace and learning to cherish the memories!"
            }
            //img={testimonial1}
            name={"~ Mrs. Sangeeta"}
            profession={"Teacher"}
            stars={4}
            />
            </SwiperSlide>

            <SwiperSlide>

          <TestimonialCard
            head={"Overcoming Isolation"}
            para={
              "After moving to a new city, I felt incredibly isolated and struggled to connect with others. SafeZen helped me work through my feelings of loneliness and provided strategies to build meaningful relationships. I'm now more confident in reaching out and forming connections!"
            }
            //img={testimonial1}
            name={"~ Saurabh"}
            profession={"Manager"}
            stars={5}
            />
            </SwiperSlide>

            <SwiperSlide>

          <TestimonialCard
            head={"Building Self-Esteem"}
            para={
              "I struggled with low self-esteem for years, which affected my relationships and career. SafeZen helped me recognize my worth and provided exercise to build my confidence. I now approach challenges with a positive mindset and believe in myself more than ever!"
            }
            //img={testimonial1}
            name={"~ Pratik"}
            profession={"Student"}
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
