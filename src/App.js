import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faFile, faFolder } from '@fortawesome/free-solid-svg-icons'
import { TreeTable } from './TreeTable'

import './tree-table.css'
import './App.css';

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
]

class App extends React.Component {
  constructor() {
    super();
    this.state = { files };
  }
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
          <TreeTable treeNode={this.folderRow} leafNode={this.fileRow} nodes={files} />
        </table>
      </div>
    );
  }

  clickHandler = clickedNode => {
    const updatedFiles = this.expandContractNode(clickedNode, this.state.files);
    this.setState({ files: updatedFiles });
  }

  expandContractNode = (findNode, nodesList) => nodesList.map(currentNode => {
    if (currentNode === findNode && currentNode.children) {
      currentNode.expanded = !currentNode.expanded;
    } else if (currentNode.children) {
      this.expandContractNode(findNode, currentNode.children);
    }
    return currentNode;
  });
  
  folderRow = (node, key, level) => (
    <tr className={`level-${level}`} key={key}>
      <td>
        <FontAwesomeIcon 
          icon={node.expanded ? faFolderOpen : faFolder }
          onClick={this.clickHandler.bind(null, node)} 
        /> { node.name }
      </td>
      <td></td>
    </tr>
  );
  
  fileRow = (node, key, level) => (
    <tr className={`level-${level}`} key={key}>
      <td><FontAwesomeIcon icon={faFile} /> { node.name }</td>
      <td>{ node.date }</td>
    </tr>
  );
}

export default App;
