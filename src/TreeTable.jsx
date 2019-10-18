import React from 'react';

export class TreeTable extends React.Component {
    static defaultProps = { level: 0 };
    getTableRows = nodes => nodes.map((node, i) => {
        if (node.children) {
            const level = this.props.level +1;
            const key = i + level;
            return [
                this.props.treeNode(i),
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
        const { nodes, level } = this.props;
        const rows = this.getTableRows(nodes);
        if (nodes && nodes.length) {
            return level === 0 ? <tbody>{ rows }</tbody> : rows;
        }
        return null;
    }
}
