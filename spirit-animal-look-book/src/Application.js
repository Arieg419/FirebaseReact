import React, { Component } from "react";
import { auth, database } from "./firebase";
import CurrentUser from "./CurrentUser";
import SignIn from "./SignIn";
import ProfileCard from "./ProfileCard";
import pick from "lodash/pick";
import map from "lodash/map";
import "./Application.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.usersRef = null;
    this.userRef = null;
    this.state = {
      user: null,
      users: {}
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log("USER: ", user);
        this.setState({ user });
        this.usersRef = database.ref("/users"); // have to be logged in to see the users (no free reads)
        this.userRef = this.usersRef.child(user.uid); // shorthand to this specific user
        this.userRef.once("value").then(snapshot => {
          if (snapshot.val()) return; // user already in db

          const userData = pick(user, ["displayName", "photoURO", "email"]);
          console.log("userData: ", userData);
          this.userRef.set(userData);
        });
        this.usersRef.on("value", snapshot => {
          this.setState({ users: snapshot.val() });
        });
      }
    });
  }

  render() {
    const { user, users } = this.state;

    return (
      <div className="App">
        <header className="App--header">
          <h1>Social Animals</h1>
        </header>
        {user ? (
          <div>
            <section className="ProfileCards">
              {map(users, (user, uid) => {
                return <ProfileCard key={uid} uid={uid} user={user} />;
              })}
            </section>
            <CurrentUser user={user} />
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    );
  }
}

export default App;
