import React from 'react';
import VacancyCard from './VacancyCard';
import vacanciesData from './Vacancydata';

const YourComponent = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center p-6">
      <h1 className="text-2xl font-semibold text-white mb-6">Vacancies</h1>
      <div className="space-y-6 w-full max-w-2xl">
        {vacanciesData.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
    </div>
  );
};

export default YourComponent;



