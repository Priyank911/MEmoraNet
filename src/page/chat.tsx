import ChatCredential from '../components/chatcredential';

const Dashboard = () => {
  return (
    <div className="chatcredential-container">
      <ChatCredential />
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
      </div>
      <div className="chatcredential-content">
        <p>This is your dashboard. Add your widgets, stats, or other content here.</p>
      </div>
    </div>
  );
};

export default Dashboard;