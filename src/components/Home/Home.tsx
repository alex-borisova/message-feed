import Feed from "../../components/Feed/Feed";
import UserCard from "../../components/User/UserCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#eff6ff] px-8 py-5 space-y-7">
      <UserCard />
      <Feed />
    </div>
  );
};

export default Home;
