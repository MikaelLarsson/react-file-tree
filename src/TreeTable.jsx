import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFolderOpen, faFile } from '@fortawesome/free-solid-svg-icons'

export const TreeTable = () => (
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
);
