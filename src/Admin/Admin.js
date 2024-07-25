import React from 'react';
import SidebarI from '../Components/SidebarI'; // Adjust the path as necessary
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, Tooltip, CartesianGrid, Legend,
  ResponsiveContainer
} from 'recharts';// graph importss

// Function to fetch random data
const fetchRandomData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Example API
  const data = await response.json();
  return data.slice(0, 10).map((item, index) => ({
    name: `Item ${index + 1}`,
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
  }));
};

const MainContent = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const randomData = await fetchRandomData();
      setData(randomData);
    };
    getData();
  }, []);

  return (
    <div className="flex h-screen">
      <SidebarI setActiveItem={() => {}} setShowForm={() => {}} status="available" />

      <div className="flex flex-col flex-grow">
        <div className="flex-grow p-4">
          <h1 className="text-2xl font-bold mb-4">Main Content</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-md">
              <h2 className="text-lg font-semibold mb-4">Line Chart</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value1" stroke="#8884d8" />
                  <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-4 shadow-md">
              <h2 className="text-lg font-semibold mb-4">Bar Chart</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value1" fill="#8884d8" />
                  <Bar dataKey="value2" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-4 shadow-md">
              <h2 className="text-lg font-semibold mb-4">Area Chart</h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="value1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="value2" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-4 shadow-md">
              <h2 className="text-lg font-semibold mb-4">Radar Chart</h2>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={data}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Radar name="Value 1" dataKey="value1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Radar name="Value 2" dataKey="value2" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
