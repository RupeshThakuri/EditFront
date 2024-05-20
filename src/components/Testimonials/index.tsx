import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import Image from "next/image";
import testimonialData from "./Testimonialdata";

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Makes Us A Top IT Organization in Nepal?"
          paragraph="As a premier IT Organization in Nepal, we deliver cutting-edge technology solutions globally. With a pulse on evolving tech trends, we craft innovative solutions that power digital transformation and deliver impactful results."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonialData.map((testimonial) => (
              <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <Image
              src="/images/logo/info.png"
              alt="Your Image"
              className="absolute top-400 right-10"
              width={300}
              height={55}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
