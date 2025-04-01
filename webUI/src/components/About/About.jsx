import React from "react";
import { FaCar, FaChartLine, FaUsers, FaShieldAlt, FaHandshake, FaMoneyBillWave } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-page bg-white py-16 px-6">
      <div className="about-container max-w-6xl mx-auto">
        
        {/* Section 1: Who Are We? */}
        <Section 
          question="Who Are We?" 
          answer="We are a revolutionary car auction and sales platform committed to making car buying and selling seamless, transparent, and secure." 
          cards={[
            { icon: <FaUsers />, title: "Trusted Community", description: "A growing network of buyers & sellers." },
            { icon: <FaChartLine />, title: "Innovation-Driven", description: "Leveraging technology to enhance the experience." },
            { icon: <FaShieldAlt />, title: "Security First", description: "Ensuring safe transactions at all times." }
          ]}
        />

        {/* Section 2: What Do We Do? */}
        <Section 
          question="What Do We Do?" 
          answer="We provide an advanced platform where users can buy, sell, and auction cars effortlessly, ensuring fair pricing and smooth transactions." 
          reverse
          cards={[
            { icon: <FaCar />, title: "Wide Selection", description: "Extensive inventory of vehicles." },
            { icon: <FaMoneyBillWave />, title: "Best Deals", description: "Competitive prices & great offers." },
            { icon: <FaHandshake />, title: "Seamless Process", description: "Easy and hassle-free transactions." }
          ]}
        />

        {/* Section 3: Why Choose Us? */}
        <Section 
          question="Why Choose Us?" 
          answer="Our platform is designed to offer security, transparency, and the best deals, making car trading a breeze." 
          cards={[
            { icon: <FaShieldAlt />, title: "Verified Listings", description: "Every car is inspected and verified." },
            { icon: <FaChartLine />, title: "Market Insights", description: "Stay ahead with real-time data." },
            { icon: <FaUsers />, title: "Support & Trust", description: "We prioritize user experience & safety." }
          ]}
        />

        {/* Section 4: Our Mission */}
        <Section 
          question="Our Mission" 
          answer="To simplify and revolutionize car transactions by providing a seamless, trustworthy, and user-centric platform." 
          reverse
          cards={[
            { icon: <FaCar />, title: "Transparency", description: "Clear, open, and fair processes." },
            { icon: <FaUsers />, title: "User-Centric", description: "Built for the buyers and sellers." },
            { icon: <FaChartLine />, title: "Continuous Growth", description: "Always evolving to serve you better." }
          ]}
        />

        {/* Section 5: Our Vision */}
        <Section 
          question="Our Vision" 
          answer="To be the world's leading digital marketplace for car sales and auctions, fostering trust and efficiency." 
          cards={[
            { icon: <FaHandshake />, title: "Global Reach", description: "Expanding to serve worldwide markets." },
            { icon: <FaShieldAlt />, title: "Reliability", description: "Consistently high standards." },
            { icon: <FaMoneyBillWave />, title: "Value Creation", description: "Delivering outstanding user experiences." }
          ]}
        />

      </div>
    </div>
  );
};

// Section Component
const Section = ({ question, answer, cards, reverse }) => {
  return (
    <div className={`about-section flex flex-col lg:flex-row items-center mb-16 ${reverse ? "lg:flex-row-reverse" : ""}`}>
      <div className="about-text lg:w-1/2 lg:mr-8">
        <h2 className="about-title text-4xl font-bold text-gray-800 mb-4">{question}</h2>
        <p className="about-description text-lg text-gray-600">{answer}</p>
      </div>
      <div className="about-cards lg:w-1/2">
        <AnimatedFlexCards cards={cards} />
      </div>
    </div>
  );
};

// Animated Flex Cards Component
const AnimatedFlexCards = ({ cards }) => {
  return (
    <div className="about-cards-wrapper">
      <div className="about-cards-container">
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <input type="radio" name="slide" id={`c${index + 1}`} defaultChecked={index === 0} />
            <label htmlFor={`c${index + 1}`} className="about-card">
              <div className="about-card-row">
                <div className="about-card-icon">{card.icon}</div>
                <div className="about-card-description">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default About;