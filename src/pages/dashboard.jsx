import { useUser } from '../UserContext';

const Dashboard = () => {
  const { isLoggedIn } = useUser();

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome to the Dashboard!</h1>
      ) : (
        <h1>Please log in to access the Dashboard.</h1>
      )}
    </div>
  );
};

export default Dashboard;
