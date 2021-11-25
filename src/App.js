import React from "react";
import Header from "./components/Header/Header";
import Tags from "./components/Tags/Tags.js";
import Users from "./components/Users/Users";
import ListQuestions from "./components/ListQuestions/ListQuestions";
import CreateQuestion from "./components/CreateQuestion/CreateQuestion";
import ViewQuestion from "./components/ViewQuestion/ViewQuestion";
import Profile from "./components/Profile/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div class="container-fluid">
      <Header />

      <Switch>
        <Route exact path="/">
          <ListQuestions />
        </Route>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/createquestion">
          <CreateQuestion />
        </Route>
        <Route path="/question/:id">
          <ViewQuestion />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
