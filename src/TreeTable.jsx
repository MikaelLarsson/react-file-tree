import React from 'react';

export class TreeTable extends React.Component {
    getTableRows = nodes => nodes.map((node, i) => {
        if (node.children) {
            return [
                this.props.treeNode(this.props.key),
                <TreeTable nodes={node.children} treeNode={this.props.treeNode} leafNode={this.props.leafNode} key={ i +1 } />
            ];
        }
        return this.props.leafNode(this.props.key);
    });
    render() {
        const { nodes } = this.props;
        if (nodes && nodes.length) {
            return (
                <tbody>
                    { this.getTableRows(nodes) }
                </tbody>
            );
        }
        return null;
    }
}
