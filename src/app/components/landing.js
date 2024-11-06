"use client";
import Navbar from "./navbar";

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* Start Hero */}
      <section className="hero bg-cover bg-center  py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-slate-50	 font-bold mb-4">
            Find Your Perfect Fitness Coach
          </h1>
          <p className="text-xl text-slate-200	 mb-6">
            Achieve your fitness goals with expert guidance
          </p>
          <button className="bg-accent text-white	 text-primary py-3 px-6 rounded">
            Get Started
          </button>
        </div>
      </section>
      {/* end Hero */}

      {/* start coach Pro */}
      <section className="coaches py-16 ">
        <div className="container coach-cards mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Meet Our Coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="coach-card coach-card1  p-6 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-2">John Doe</h3>
              <p className="text-lg mb-4">Strength Training</p>
              <a href="/coach-info" className="text-primary  font-semibold">
                View Profile
              </a>
            </div>

            <div className="coach-card coach-card2  p-6 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-2">John Doe</h3>
              <p className="text-lg mb-4">Strength Training</p>
              <a href="/coach-info" className="text-primary  font-semibold">
                View Profile
              </a>
            </div>

            <div className="coach-card coach-card3  p-6 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-2">John Doe</h3>
              <p className="text-lg mb-4">Leafting Weights Training</p>
              <a href="/coach-info" className="text-primary  font-semibold">
                View Profile
              </a>
            </div>
           
            {/* Repeat for other coaches */}
          </div>

          <div className="more-coachs">
            <a class="fancy" href="/coachs">
              <span class="top-key"></span>
              <span class="text">See All Coachs</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
            </a>
            </div>
        </div>
      </section>
      {/* end coach pro */}

      {/* start services */}
      <section className="services py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-slate-100 font-bold mb-10">Our Services</h2>
          <div className="services-cards grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Personal Training</h3>
              <p className="text-lg mb-4">
                One-on-one coaching tailored to your needs.
              </p>
              <a href="#" className="text-primary font-semibold">
                Learn More
              </a>
            </div>

            <div className="service-card bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Food Planes</h3>
              <p className="text-lg mb-4">
                One-on-one tailored to your needs.
              </p>
              <a href="#" className="text-primary font-semibold">
                Learn More
              </a>
            </div>

            <div className="service-card bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Leafting Weights</h3>
              <p className="text-lg mb-4">
                One-on-one tailored to your needs.
              </p>
              <a href="#" className="text-primary font-semibold">
                Learn More
              </a>
            </div>
            {/* Repeat for other services */}
          </div>
        </div>
      </section>
      {/* end services */}

      {/* start Testimonials */}
      <section className="testimonials py-16 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial bg-white p-6 rounded shadow-lg">
              <p className="text-lg mb-4">
                "FlexPro has helped me achieve my fitness goals beyond
                expectations!"
              </p>
              <h3 className="text-2xl font-bold">Jane Smith</h3>
            </div>
            {/* Repeat for other testimonials */}
          </div>
        </div>
      </section>
      {/* end Testmonials */}

      {/* start Contact */}
      <section className="contact py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              className="w-full p-3 mb-4 rounded"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full p-3 mb-4 rounded"
              placeholder="Your Email"
            />
            <textarea
              className="w-full p-3 mb-4 rounded"
              placeholder="Your Message"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-primary  py-3 px-6 rounde"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      {/* end Contact */}
    </>
  );
}
