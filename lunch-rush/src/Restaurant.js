import React, { Component, PropTypes } from "react";
import map from "lodash/map";
import "./Restaurant.css";

class Restaurant extends Component {
  render() {
    const { name, user, votes, handleDeselect, handleSelect } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);

    return (
      <article className="Restaurant">
        <h3>{name}</h3>
        <ul>
          {votes &&
            map(votes, (vote, key) => {
              return <li key={key}>{vote}</li>;
            })}
        </ul>
        {userHasSelected ? (
          <button onClick={handleDeselect} className="destructive">
            Nah, nevermnd
          </button>
        ) : (
          <button onClick={handleSelect}>Yea, I'd go there</button>
        )}
      </article>
    );
  }
}
Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};
export default Restaurant;
