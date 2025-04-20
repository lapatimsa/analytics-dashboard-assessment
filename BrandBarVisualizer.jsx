import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const BrandBarVisualizer = ({ data }) => {
  // Count EVs by Make
  const brandCounts = data.reduce((acc, curr) => {
    const brand = curr.Make;
    if (brand) {
      acc[brand] = (acc[brand] || 0) + 1;
    }
    return acc;
  }, {});

  // Convert to array and sort
  let chartData = Object.entries(brandCounts)
    .map(([make, count]) => ({ name: make, count }))
    .sort((a, b) => b.count - a.count);

  // Get top 5 brands
  let topBrands = chartData.slice(0, 5);

  // Ensure Volkswagen is included
  const vwBrand = chartData.find(b => b.name.toLowerCase() === 'volkswagen');
  const isVWAlreadyIncluded = topBrands.some(b => b.name.toLowerCase() === 'volkswagen');

  if (vwBrand && !isVWAlreadyIncluded) {
    topBrands.push(vwBrand);
  }

  const COLORS = ['#3b82f6', '#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Top EV Brands</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={topBrands} layout="vertical" margin={{ left: 30 }}>
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="count" barSize={25}>
            {topBrands.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BrandBarVisualizer;