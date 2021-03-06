import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MeetupLayout from "../components/MeetupLayout";
import MeetDetails from "./components/MeetDetails";
import MeetForm from "./components/MeetForm";
import Panel from "./components/Panel";
import MeetupContext from "./MeetupContext";
import WeatherTimeContext from "./WeatherTimeContext";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {
  return (
    <Router>
      <MeetupContext>
        <WeatherTimeContext>
          <MeetupLayout panel={<Panel />}>
            <Switch>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route path="/meet/new">
                <MeetForm />
              </Route>
              <Route path="/meet/:id">
                <MeetDetails />
              </Route>
            </Switch>
          </MeetupLayout>
        </WeatherTimeContext>
      </MeetupContext>
    </Router>
  );
}

export default App;
