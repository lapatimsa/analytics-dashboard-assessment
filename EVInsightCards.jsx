import React from 'react';

const EVInsightCards = ({ data }) => {
  console.log("Data received in EVInsightCards:",data);
  const total = data.length;
  const byType = {};
  data.forEach(item => {
    if (item['Electric Vehicle Type']) {
      byType[item['Electric Vehicle Type']] = (byType[item['Electric Vehicle Type']] || 0) + 1;
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-100 p-4 rounded shadow">
        <h2 className="font-semibold">Total no Electric Vehicle</h2>
        <p className="text-2xl">{total}</p>
      </div>
      {Object.entries(byType).map(([type, count], i) => (
        <div key={i} className="bg-green-100 p-4 rounded shadow">
          <h2 className="font-semibold">{type}</h2>
          <p className="text-2xl">{count}</p>
        </div>
      ))}
    </div>
  );
};

export default EVInsightCards;