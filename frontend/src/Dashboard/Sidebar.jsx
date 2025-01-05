import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-base-200 p-5">
      <div className="text-3xl font-bold mb-6">Dashboard</div>
      <ul className="menu space-y-2">
        <li>
          <Link to="/" className="btn btn-ghost">Dashboard</Link>
        </li>
        <li>
          <Link to="/users" className="btn btn-ghost">Users</Link>
        </li>
        <li>
          <Link to="/settings" className="btn btn-ghost">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
