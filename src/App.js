import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFolderOpen, faFile } from '@fortawesome/free-solid-svg-icons'
import './tree-table.css'

function App() {
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
          <tr className="level-0">
            <td><FontAwesomeIcon icon={faFolderOpen} /> Opened folder</td>
            <td></td>
          </tr>
          <tr className="level-1">
            <td><FontAwesomeIcon icon={faFolderOpen} /> Opened folder</td>
            <td></td>
          </tr>
          <tr className="level-2">
            <td><FontAwesomeIcon icon={faFile} /> Filename</td>
            <td>2019-01-01</td>
          </tr>
          <tr className="level-0">
            <td><FontAwesomeIcon icon={faFolder} /> Foldername</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
