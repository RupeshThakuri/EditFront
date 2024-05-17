import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary to-transparent opacity-80 z-0 transform -skew-y-6"></div>
      </div>
      <div className="container relative z-10 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 md:p-12">
        <SectionTitle
          title="Main Features"
          paragraph="Get a robust and user-friendly software that solves your business problems"
          center
          mb="16"
          className="dark:text-white"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;







