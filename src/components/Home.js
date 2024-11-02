import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import '../css/Home.css';

const Home = () => {
  const initialData = [
    { name: 'Jan', users: 4000, activity: 2400, revenue: 1200 },
    { name: 'Feb', users: 3000, activity: 1398, revenue: 1500 },
    { name: 'Mar', users: 2000, activity: 9800, revenue: 2200 },
    { name: 'Apr', users: 2780, activity: 3908, revenue: 2600 },
    { name: 'May', users: 1890, activity: 4800, revenue: 2100 },
    { name: 'Jun', users: 2390, activity: 3800, revenue: 3100 },
  ];

  const [chartData, setChartData] = useState(initialData);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData =>
        prevData.map(item => ({
          ...item,
          users: Math.floor(Math.random() * 5000) + 1000,
          activity: Math.floor(Math.random() * 10000),
          revenue: Math.floor(Math.random() * 5000),
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <h2>Dashboard</h2>
        <div className="navbar-links">
          <button onClick={() => scrollToSection('stats')}>Statistics</button>
          <button onClick={() => scrollToSection('activity')}>Activity Overview</button>
          <button onClick={() => scrollToSection('analytics')}>Analytics</button>
          <button onClick={() => scrollToSection('recent')}>Recent Activity</button>
          <button className="navbar-logout">Logout</button>
        </div>
      </nav>

      <section id="stats" className="section">
        <h3>Statistics</h3>
        <div className="statistics-grid">
          <div className="stat-card">
            <h3 className="stat-title">Total Users</h3>
            <p className="stat-value">12,345</p>
            <p className="stat-change positive">+15% from last month</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-title">Active Users</h3>
            <p className="stat-value">8,901</p>
            <p className="stat-change positive">+8% from last month</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-title">New Registrations</h3>
            <p className="stat-value">1,234</p>
            <p className="stat-change positive">+12% from last month</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-title">Revenue</h3>
            <p className="stat-value">$45,678</p>
            <p className="stat-change negative">-3% from last month</p>
          </div>
        </div>
      </section>

      <section id="activity" className="section">
        <h3>Activity Overview</h3>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
              <Line type="monotone" dataKey="activity" stroke="#82ca9d" />
              <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section id="analytics" className="section">
        <h3>Detailed Analytics</h3>
        <div className="analytics-charts">
          <div className="bar-chart">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="pie-chart">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={chartData} dataKey="revenue" outerRadius={100} fill="#8884d8">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section id="recent" className="section">
        <h3>Recent Activity</h3>
        <div className="recent-list">
          <div className="recent-item">
            <div className="indicator success">✓</div>
            <div>
              <h4 className="recent-subtitle">New user registration</h4>
              <p className="recent-description">Jane Doe joined the platform</p>
              <span className="recent-time">2 minutes ago</span>
            </div>
          </div>
          <div className="recent-item">
            <div className="indicator warning">!</div>
            <div>
              <h4 className="recent-subtitle">System Update</h4>
              <p className="recent-description">Server maintenance completed</p>
              <span className="recent-time">1 hour ago</span>
            </div>
          </div>
          <div className="recent-item">
            <div className="indicator info">i</div>
            <div>
              <h4 className="recent-subtitle">Monthly Report</h4>
              <p className="recent-description">Report sent to admin</p>
              <span className="recent-time">1 day ago</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
