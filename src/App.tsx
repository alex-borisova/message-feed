import Feed from "./components/Feed/Feed";
import UserCard from "./components/User/UserCard";
import { testUser } from "./testData/testData";

const App = () => {
  return (
    <div className="min-h-screen bg-[#eff6ff] px-8 py-5 space-y-7">
      <UserCard user={testUser} />
      <Feed />
    </div>
  );
};

export default App;
