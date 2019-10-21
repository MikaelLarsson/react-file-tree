import React from 'react';

export class TreeTable extends React.Component {
    static defaultProps = { level: 0 };
    getTableRows = nodes => nodes.map((node, i) => {
        const level = this.props.level;
        const key = i + level +1;
        if (node.children) {
            return [
                this.props.treeNode(i, level),
                <TreeTable
                    nodes={node.children}
                    treeNode={this.props.treeNode}
                    leafNode={this.props.leafNode}
                    key={ key }
                    level={ level +1 }
                />
            ];
        }
        return this.props.leafNode(i, level);
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
