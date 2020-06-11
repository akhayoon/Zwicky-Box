import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import "./CurrentCombo.scss";

// Only displayed if a user has clicked the shuffle button
// Renders a table which shows the current combination as generated by the user clicking the shuffle button
// Allows user to save the combination
const CurrentCombo = ({ keys, table, saveCombo }) => {
  // generate arrays of the items and categories associated with the current combination
  const items = [];
  const categories = [];
  keys.map((category, _) => {
    const index = table[category].selected;
    categories.push(table[category].category);
    items.push(table[category].items[index]);
    return null;
  });

  return (
    <div className="current-combo-table">
      {keys.map((category, _) => {
        const index = table[category].selected;
        let item = table[category].items[index];
        return (
          <div key={uuidv4()}>
            <h3>{table[category].category}</h3>
            <h2>{item}</h2>
          </div>
        );
      })}
      <button
        className="save-combo"
        onClick={() => saveCombo(categories, items)}
      >
        Save
      </button>
    </div>
  );
};

CurrentCombo.propTypes = {
  keys: PropTypes.array,
  table: PropTypes.object,
  saveCombo: PropTypes.func,
};

export default CurrentCombo;
