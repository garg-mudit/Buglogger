import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import LogItem from './LogItem';

const App = () => {
  const [logs, setLogs] = useState([
    {
      _id: 1,
      text: 'Task 1',
      priority: 'low',
      user: 'Mudit',
      created: new Date().toString(),
    },
    {
      _id: 2,
      text: 'Task 2',
      priority: 'moderate',
      user: 'John',
      created: new Date().toString(),
    },
    {
      _id: 3,
      text: 'Task 3',
      priority: 'high',
      user: 'Jane',
      created: new Date().toString(),
    },
  ]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Log Text</th>
            <th>User</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <LogItem log={log} key={log._id} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
