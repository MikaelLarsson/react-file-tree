import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faFile } from '@fortawesome/free-solid-svg-icons'
import { TreeTable } from './TreeTable'

import './tree-table.css'
import './App.css';

const files = [
  {
    name: 'Foldername',
    children: [
      {
        name: 'Foldername',
        children: [
          {
            date: '2019-01-01',
            name: 'Filename'
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
    children: []
  }
]

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
        <TreeTable treeNode={FolderRow} leafNode={FileRow} nodes={files} key={0} />
      </table>
    </div>
  );
}

const FolderRow = key => (
  <tr className="level-0" key={key}>
    <td><FontAwesomeIcon icon={faFolderOpen} /> Opened folder</td>
    <td></td>
  </tr>
);

const FileRow = key => (
  <tr className="level-2" key={key}>
    <td><FontAwesomeIcon icon={faFile} /> Filename</td>
    <td>2019-01-01</td>
  </tr>
);

export default App;
