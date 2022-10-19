import React from 'react';
import Table from './components/Table';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Create a Table builder!</h1>
      <p>
        Table should be build from the JSON provided in the file
        <b> src/dummy.json</b>
      </p>
      User should be able to <b>delete</b> a row and<b> hide/view</b> a column.
      The table should be dynamic and column Name should be 'key' in the json.
      eg: this table will contain the columns:
      <b> name, job, eid, age, place, country.</b>
      <p>
        <b>
          Note: Json can have any key value pairs, we don't hardcode the keys{' '}
        </b>
      </p>
      <ul>
        <li>
          {' '}
          The UI should contain a list of the columns and user should be able to
          toggle it to either show/hide.
        </li>
        <li>
          A table which is populated as per the result of the show/hide
          configuration.
        </li>
      </ul>

      <Table />
    </div>
  );
}
