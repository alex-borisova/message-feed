import UserInfo from "./components/UserInfo";

const testUser = {
  name: "John",
  surname: "Smith",
  email: "test@test.com",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  avatar:
    "https://cdn.pixabay.com/photo/2023/12/19/21/20/ai-generated-8458412_1280.jpg",
};
// bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]

const App = () => {
  return (
    <div className="min-h-screen bg-[#eff6ff] px-8 py-5">
      <UserInfo user={testUser} />
    </div>
  );
};

export default App;
