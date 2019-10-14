import React from 'react';

export class TreeTable extends React.Component {
    getTableRows = nodes => nodes.map((node, i) => {
        if (node.children) {
            const level = this.props.level +1;
            const key = i * level;
            return [
                this.props.treeNode(this.props.key),
                <TreeTable
                    nodes={node.children}
                    treeNode={this.props.treeNode}
                    leafNode={this.props.leafNode}
                    key={ key }
                    level={ level }
                />
            ];
        }
        return this.props.leafNode(i);
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
