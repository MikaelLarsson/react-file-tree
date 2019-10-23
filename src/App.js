import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import './tree-table.css'
import './App.css';

// eslint-disable-next-line
const files = [
  {
    name: 'Top folder',
    expanded: false,
    children: [
      {
        name: 'Foldername',
        expanded: false,
        children: [
          {
            date: '2019-01-01',
            name: 'Filename.file'
          }
        ]
      }
    ]
  },
  {
    name: 'Filename',
    date: '2019-01-01'
  },
  {
    name: 'Empty folder',
    expanded: false,
    children: []
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <table className="file-tree">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className={`level-0`}>
              <td>
                <FontAwesomeIcon icon={ faFolderOpen } /> Foldername
              </td>
              <td></td>
            </tr>
            <tr className={`level-1`}>
              <td>
                <FontAwesomeIcon icon={ faFolderOpen } /> Foldername
              </td>
              <td></td>
            </tr>
            <tr className={`level-2`}>
              <td><FontAwesomeIcon icon={faFile} /> Filename.fil</td>
              <td>2019-01-01</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
