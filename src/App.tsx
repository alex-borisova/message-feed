import { createServer } from "miragejs";

import AppContextProvider from "./AppContextProvider";
import Home from "./components/Home/Home";
import { generateId } from "./constants/generateId";
import { testMessages, testUsers } from "./testData/testData";

//mock API
createServer({
  routes() {
    this.namespace = "api";

    this.get("/profile", () => {
      return testUsers[0];
    });
    this.get("/messages", () => {
      return testMessages;
    });
    this.post("/messages", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      attrs.id = generateId();
      return { message: attrs };
    });
  },
});

const App = () => {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
};

export default App;
