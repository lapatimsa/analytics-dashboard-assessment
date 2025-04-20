import React from 'react';

const EVDataGrid = ({ data }) => {
  console.log("Data received in EVDataGrid:",data);
  const headers = ['VIN (1-5)', 'County', 'City', 'State', 'Postal Code', 'Model Year', 'Make', 'Model', 'Electric Vehicle Type','Clean Alternative Fuel Vehicle (CAFV) Eligibility','Electric Range','Base MSRP','Legislative District','DOL Vehicle ID','Vehicle Location','Electric Utility','2020 Census Tract'];
  return (
    <div className="overflow-x-auto bg-gray rounded shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Sample for Example</h2>
      <table className="min-w-full text-sm text-left border">
        <thead className="bg-green-200">
          <tr>
            {headers.map((head, i) => (
              <th key={i} className="p-2 border">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(0,5).map((row, idx) => (
            <tr key={idx} className="border-t">
              {headers.map((key, i) => (
                <td key={i} className="p-2 border">{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EVDataGrid;