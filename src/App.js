import React, { useState } from "react";

function App() {
  const services = [
    {
      image: "/images/panel.jpeg", // Replace with the actual image path
      title: "Power Estimator",
      description:
        "Let users calculate solar power potential for their location.",
    },
    {
      image: "/images/turbine.jpeg", // Replace with the actual image path
      title: "Solar Insights",
      description: "Visuals explaining solar panels and energy savings.",
    },
    {
      image: "/images/chatbot.jpg", // Replace with the actual image path
      title: "Custom Chatbot",
      description: "A smart chatbot for solar-related queries and assistance.",
    },
  ];

  const teamMembers = [
    {
      name: "Snehal Baramade",
      role: "App Developer",
      image: "/path-to-image-1.jpg", // Replace with the actual image path
      socialLinks: {
        facebook: "#",
        linkedin: "#",
        youtube: "#",
        instagram: "#",
      },
    },
    {
      name: "Bhagyashri",
      role: "App Developer/Web Developer",
      image: "/path-to-image-2.jpg", // Replace with the actual image path
      socialLinks: {
        facebook: "#",
        linkedin: "#",
        youtube: "#",
        instagram: "#",
      },
    },
    {
      name: "Divya Dhobale",
      role: "Web Developer",
      image: "/path-to-image-3.jpg", // Replace with the actual image path
      socialLinks: {
        facebook: "#",
        linkedin: "#",
        youtube: "#",
        instagram: "#",
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do solar panels work?",
      answer:
        "Solar panels work by converting sunlight into electricity through photovoltaic cells.",
    },
    {
      question: "What are the benefits of installing solar panels?",
      answer:
        "Installing solar panels can reduce your energy bills, lower your carbon footprint, and increase your home's value.",
    },
    {
      question: "How much does a solar power system cost?",
      answer:
        "The cost varies depending on the size and type of system, but typically ranges between $10,000 and $30,000.",
    },
    {
      question:
        "How long will it take for my solar panels to pay for themselves?",
      answer:
        "Most solar panels pay for themselves within 5-10 years, depending on energy savings and incentives.",
    },
    {
      question: "Do solar panels work on cloudy days?",
      answer:
        "Yes, solar panels can still generate electricity on cloudy days, but their efficiency will be reduced compared to sunny days.",
    },
    {
      question: "What is the lifespan of solar panels?",
      answer:
        "The average lifespan of solar panels is 25-30 years. After that, their efficiency may decline, but they will still generate electricity.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div>
        <div className="bg-black text-white min-h-screen p-4">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            {/* Navbar */}
            <nav className="flex items-center justify-between py-6">
              {/* Logo */}
              <div className="text-2xl font-bold text-green-500">
                Aa<span className="text-white">rush</span>
              </div>
              {/* Navigation Links */}
              <ul className="hidden md:flex space-x-8">
                <li className="hover:text-green-500 cursor-pointer">Home</li>
                <li className="hover:text-green-500 cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-green-500 cursor-pointer">
                  Services
                </li>
                <li className="hover:text-green-500 cursor-pointer">ChatBot</li>
                <li className="hover:text-green-500 cursor-pointer">Team</li>
                <li className="hover:text-green-500 cursor-pointer">FAQ</li>
                <li className="hover:text-green-500 cursor-pointer">Contact</li>
                <li className="hover:text-green-500 cursor-pointer">Footer</li>
              </ul>
              {/* Button */}
              <button className="px-6 py-2 bg-green-500 text-black rounded hover:bg-green-700">
                Download App
              </button>
            </nav>

            {/* Hero Section */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-between py-28 px-20">
              {/* Left Content */}
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                  Revolutionary <br />
                  Home <span className="text-green-500">Solar System</span>
                </h1>
                <p className="text-gray-400 mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  nisi, dicta perferendis reprehenderit facilis culpa animi
                  placeat ad iste nam corporis est amet cum soluta laborom aut
                  ipsam hic eaque.
                </p>
                {/* Buttons */}
                <div className="flex space-x-4 mt-8">
                  <button className="px-6 py-2 bg-green-500 text-black font-semibold rounded hover:bg-green-700">
                    Our Services
                  </button>
                  <button className="px-6 py-2 border-2 border-green-500 text-green-500 font-semibold rounded hover:bg-green-500 hover:text-black">
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Right Content */}
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <div className="relative">
                  {/* Solar Panel Image */}
                  <img
                    src="/images/heroimg.png"
                    alt="Solar Panel"
                    className="rounded-lg w-full h-auto"
                  />
                  {/* Background Decoration */}
                  <div className="absolute inset-0 opacity-20 rounded-full blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-20">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left: Image */}
              <div className="w-full md:w-1/2">
                <img
                  src="/images/about.jpeg"
                  alt="Solar Worker"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Harnessing Solar Energy for a{" "}
                  <span className="text-green-500">Sustainable Future</span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-400 font-medium mb-6">
                  Transforming <span className="text-green-500">ideas</span>{" "}
                  into impactful energy solutions with precision and expertise.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Aarush is a comprehensive platform that helps users estimate
                  the power potential of solar panels in specific locations. It
                  features a smart chatbot for quick queries and offers valuable
                  insights into solar panels and nearby renewable energy
                  sources, making it easier to make informed decisions about
                  adopting clean energy solutions.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <div className="text-green-500 text-2xl mr-3">✔</div>
                    <p className="font-medium">Free Solar Consultation</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-green-500 text-2xl mr-3">✔</div>
                    <p className="font-medium">Renewable Energy Experts</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-green-500 text-2xl mr-3">✔</div>
                    <p className="font-medium">24/7 Query Assistance</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-green-500 text-2xl mr-3">✔</div>
                    <p className="font-medium">
                      Reliable and Efficient Solutions
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-6">
                  <button className="bg-green-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-green-700">
                    Explore
                  </button>
                  <button className="border-2 border-green-500 text-green-500 font-semibold py-3 px-6 rounded-lg hover:bg-green-500 hover:text-black">
                    Download the App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6 lg:px-16">
            <h2 className="text-center text-4xl font-bold text-green-500 mb-6">
              Our Services
            </h2>
            <p className="text-center text-gray-400 mb-12">
              We are trailblazers in the realm of renewable energy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-transparent border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black">
                        Read More
                      </button>
                      <button className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-4 py-32">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Instant Support,{" "}
              <span className="text-green-500">Powered by AI</span>.
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl w-full">
            {/* Left Section */}
            <div className="p-8 rounded-2xl shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <img
                  src="/images/chatbot3.avif"
                  alt="chatbotimg"
                  width={700}
                  height={700}
                />
                <div className="flex justify-center mt-8">
                  <button className="px-6 py-2 border-2 border-green-500 text-green-500 font-semibold rounded hover:bg-green-500 hover:text-black">
                    Chat With Bot
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-6 flex-1">
              <div className="px-6 rounded-lg shadow-md flex items-center gap-4">
                <div className="text-green-500 text-2xl">✔</div>
                <p className="text-lg">Instant Solar Queries</p>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed px-16">
                Get real-time answers to questions about solar panels, energy
                efficiency, and renewable sources.
              </p>

              <div className="px-6 rounded-lg shadow-md flex items-center gap-4">
                <div className="text-green-500 text-2xl">✔</div>
                <p className="text-lg">Power Generation Estimation</p>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed px-16">
                Get real-time answers to questions about solar panels, energy
                efficiency, and renewable sources.
              </p>

              <div className="px-6 rounded-lg shadow-md flex items-center gap-4">
                <div className="text-green-500 text-2xl">✔</div>
                <p className="text-lg">24/7 Availability</p>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed px-16">
                Access support and information anytime, anywhere with the
                chatbot available round the clock.
              </p>

              <div className="px-6 rounded-lg shadow-md flex items-center gap-4">
                <div className="text-green-500 text-2xl">✔</div>
                <p className="text-lg">User-Friendly Interface</p>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed px-16">
                A simple and interactive design that makes querying easy and
                fast for all users.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6 lg:px-16">
            <h2 className="text-center text-4xl font-bold text-green-500 mb-6">
              Our Teams
            </h2>
            <p className="text-center text-gray-400 mb-12">
              Meet our diverse team of creative minds and strategists – the
              driving force behind every project's success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-400 mb-4">{member.role}</p>
                    <div className="flex justify-center space-x-4 text-gray-400">
                      <a
                        href={member.socialLinks.facebook}
                        className="hover:text-green-500"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href={member.socialLinks.linkedin}
                        className="hover:text-green-500"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        href={member.socialLinks.youtube}
                        className="hover:text-green-500"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a
                        href={member.socialLinks.instagram}
                        className="hover:text-green-500"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-black text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              <span className="text-white">Frequently</span>{" "}
              <span className="text-green-500">Asked Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-700 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center bg-gray-800 px-4 py-3 text-left text-lg focus:outline-none hover:bg-gray-700"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-green-500">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="bg-gray-800 px-4 py-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4">
                <div className="text-green-500 text-2xl">@</div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">
                    helpdesk.aarushenergy@gmail.com
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4">
                <div className="text-green-500 text-2xl">📞</div>
                <div>
                  <h3 className="text-lg font-semibold">Phone Number</h3>
                  <p className="text-gray-400">+91 8788141403</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4">
                <div className="text-green-500 text-2xl">📍</div>
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-400">Shivajinagar, Pune, India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-green-500 mb-4">
                Keep In Touch
              </h3>
              <p className="text-gray-400 mb-6">
                Lighting up your queries – Contact us today!
              </p>
              <form
                className="space-y-4"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="1ef32542-5f10-470e-acde-dfb02b06539b"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="first name"
                    placeholder="First name"
                    className="w-full bg-gray-900 text-white rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                  />
                  <input
                    type="text"
                    name="last name"
                    placeholder="Last name"
                    className="w-full bg-gray-900 text-white rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full bg-gray-900 text-white rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                />
                <input
                  type="tel"
                  name="phone number"
                  placeholder="Phone number"
                  className="w-full bg-gray-900 text-white rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  rows="4"
                  className="w-full bg-gray-900 text-white rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-black font-semibold rounded-lg p-3 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <footer className="bg-black text-white pt-10">
          <div className="container mx-auto px-4 lg:px-16">
            <div className="flex flex-wrap justify-center md:justify-between -mx-4">
              {/* Address Section */}
              <div className="w-full sm:w-2/3 md:w-1/3 px-4 mb-8 text-center sm:text-left">
                <h5 className="text-lg font-semibold mb-4">Address</h5>
                <p className="mb-2 flex items-center justify-center sm:justify-start">
                  <i className="fa fa-map-marker-alt mr-3"></i>Pune, Maharashtra
                </p>
                <p className="mb-2 flex items-center justify-center sm:justify-start">
                  <i className="fa fa-phone-alt mr-3"></i>+91 8788141403
                </p>
                <p className="mb-2 flex items-center justify-center sm:justify-start">
                  <i className="fa fa-envelope mr-3"></i>
                  helpdesk.aarushenergy@gmail.com
                </p>
                <div className="flex justify-center sm:justify-start space-x-3 mt-4">
                  <a
                    href="/"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="/"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="/"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    href="/"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="w-full sm:w-2/3 md:w-1/3 px-4 mb-8 text-center sm:text-left">
                <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="hover:text-green-400">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-green-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-green-400">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#service" className="hover:text-green-400">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#team" className="hover:text-green-400">
                      Team
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/3 px-20 py-8 text-center">
                <h3 className="text-white text-lg font-semibold mb-4">
                  Aarush
                </h3>
                <p className="mb-4">Get weekly update</p>
                <form className="flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-grow bg-gray-900 text-white rounded-l-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                  />
                  <button
                    type="submit"
                    className="bg-green-500 text-black font-semibold rounded-r-lg px-4 py-3 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="bg-black py-4">
            <div className="container mx-auto px-4 lg:px-16 text-center">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Aarush, All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
