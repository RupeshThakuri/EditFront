import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 relative overflow-hidden border-b-4 border-gray-200 pb-8">
      <div className="container mx-auto relative z-10">
        <SectionTitle
          title="Our Organization Process Workflow"
          paragraph="Since 2015, our organization team accelerates digital transformation for clients across industries. We employ a streamlined four-step process, ensuring swift, impactful solutions."
          center={true}
          className="custom-class" // Example of adding a custom class
          mb="8" // Adjust margin bottom
          width="600px" // Adjust width
        />
        <div className="flex justify-between items-center relative">
          {['Analyze', 'Strategize', 'Implement', 'Monitor'].map((step, index) => (
            <div className="relative flex flex-col items-center text-center p-4" key={index}>
              <div className="w-12 h-12 mb-2 rounded-full bg-primary text-white flex items-center justify-center">
                {index + 1}
              </div>
              <h3 className="font-bold text-lg">{step}</h3>
              <p className="mt-2">
                {index === 0 && 'We analyze business IT needs, key pain areas, digitalization goals, and objectives.'}
                {index === 1 && 'We identify areas for improvement and strategize to achieve desired goals.'}
                {index === 2 && 'We implement the solutions and ensure proper integration with existing IT infrastructure.'}
                {index === 3 && 'We monitor the performance of IT solutions and make changes to improve efficiency.'}
              </p>
              {index < 3 && (
                <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-1 h-full bg-primary"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;








