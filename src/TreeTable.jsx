import React from 'react';

export class TreeTable extends React.Component {
    static defaultProps = { level: 0, expanded: true };
    getTableRows = nodes => nodes.map((node, i) => {
        const level = this.props.level;
        const key = i + level +1;
        if (node.children) {
            return [
                this.props.treeNode(node, i, level),
                <TreeTable
                    nodes={node.children}
                    treeNode={this.props.treeNode}
                    leafNode={this.props.leafNode}
                    level={ level +1 }
                    expanded={ node.expanded }
                    key={ key }
                />
            ];
        }
        return this.props.leafNode(node, i, level);
    });
    render() {
        const { nodes, level, expanded } = this.props;
        const rows = this.getTableRows(nodes);
        if (nodes && nodes.length && expanded) {
            return level === 0 ? <tbody>{ rows }</tbody> : rows;
        }
        return null;
    }
}
