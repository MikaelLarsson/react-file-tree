import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faFile, faFolder } from '@fortawesome/free-solid-svg-icons'
import { TreeTable } from './TreeTable'

import './tree-table.css'
import './App.css';

const files = [
  {
    name: 'Top folder',
    expanded: true,
    children: [
      {
        name: 'Foldername',
        expanded: true,
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
        <TreeTable treeNode={folderRow} leafNode={fileRow} nodes={files} />
      </table>
    </div>
  );
}

const folderRow = (node, key, level) => (
  <tr className={`level-${level}`} key={key}>
    <td><FontAwesomeIcon icon={node.expanded ? faFolderOpen : faFolder } /> { node.name }</td>
    <td></td>
  </tr>
);

const fileRow = (node, key, level) => (
  <tr className={`level-${level}`} key={key}>
    <td><FontAwesomeIcon icon={faFile} /> { node.name }</td>
    <td>{ node.date }</td>
  </tr>
);

export default App;
