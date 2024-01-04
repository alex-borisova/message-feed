import { createServer } from "miragejs";
import { testMessages, testUsers } from "./testData";
import { generateId, sortByDate } from "../operations";
import { $messagesStore } from "../store";

//mock API
createServer({
  routes() {
    this.namespace = "api";

    this.get("/profile", () => {
      return testUsers[0];
    });
    this.get("/profile/:id", (schema, request) => {
      const id = +request.params.id;
      const user = testUsers.find((user) => user.id === id);
      return user || {};
    });
    this.get("/messages", () => {
      //Let's imagine that sorting is on the server side
      return sortByDate(testMessages);
    });
    this.get("/messages/:userId", (schema, request) => {
      const userId = +request.params.userId;
      //if we are in User page and refresh the page,
      //then we need to get messages again, but new messages won't appear
      const messages =
        $messagesStore.get().length > 0 ? $messagesStore.get() : testMessages;
      const filteredMessages = messages.filter(
        (item) => item.author.id === userId
      );

      //Let's imagine that sorting is on the server side
      return sortByDate(filteredMessages);
    });
    this.post("/messages", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      attrs.id = generateId();
      return { message: attrs };
    });
  },
});
