import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import EVInsightCards from './components/EVInsightCards';
import BrandBarVisualizer from './components/BrandBarVisualizer';
import TypePieDistribution from './components/TypePieDistribution';
 import EVDataGrid from './components/EVDataGrid';
import Sidebar from './components/Sidebar';

const App = () => {
  const [Electric_Vehicle_Population_Data, setEvData] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    fetch('/Electric_Vehicle_Population_Data.csv')
      .then(res => res.text())
      .then(csvText => {
        const result = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });
        setEvData(result.data);
      });
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex bg-white-100 dark:bg-black-900 min-h-screen text-gray-900 dark:text-gray-100">
      <Sidebar toggleTheme={toggleTheme} currentTheme={theme} />

      <div className="flex-1 p-6 overflow-auto">
        {/* Animated Header Section */}
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8 animate-fade-in">
          <div className="transition-opacity duration-1000 ease-out opacity-0 animate-slide-in-left">
            <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">
              Powering Forward: Washington’s EV Landscape
            </h1>
            <p className="mt-2 text-sm text-black-600 dark:text-gray-300">
              Real-time insights into electric vehicle trends across Washington.
            </p>
          </div>
          <img
            src="public/images/ev_car.jpg"
            alt="EV Car"
            className="h-20 w-auto object-contain transform transition-transform duration-1000 scale-75 hover:scale-100 animate-fade-in"
          />
        </div>

        {/* Main Dashboard Sections */}
        {Electric_Vehicle_Population_Data.length > 0 ? (
          <>
            <section id="overview">
              <EVInsightCards data={Electric_Vehicle_Population_Data} />
            </section>
            <section id="brands">
              <BrandBarVisualizer data={Electric_Vehicle_Population_Data} />
            </section>
            <section id="distribution">
              <TypePieDistribution data={Electric_Vehicle_Population_Data} />
            </section>
            <section id="data">
               <EVDataGrid data={Electric_Vehicle_Population_Data} />
            </section>
          </>
        ) : (
          <p className="text-center mt-10 text-lg font-medium">Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default App;