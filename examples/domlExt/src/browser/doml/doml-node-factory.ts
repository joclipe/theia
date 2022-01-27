import { v4 } from 'uuid';
import { ILogger } from '@theia/core';
import { inject, injectable } from '@theia/core/shared/inversify';
import { DOMLModel } from './doml-model';
import { TreeEditorWidget } from './doml-editor-widget';
import { TreeLabelProvider } from './doml-label-provider';
import { TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';

@injectable()
export class TreeNodeFactory implements TreeEditor.NodeFactory {

    constructor(
        @inject(TreeLabelProvider) private readonly labelProvider: TreeLabelProvider,
        @inject(ILogger) private readonly logger: ILogger) {
    }

    mapDataToNodes(treeData: TreeEditor.TreeData): TreeEditor.Node[] {
        const node = this.mapData(treeData.data);
        if (node) {
            return [node];
        }
        return [];
    }

    mapData(data: any, parent?: TreeEditor.Node, property?: string, indexOrKey?: number | string): TreeEditor.Node {
        if (!data) {
            this.logger.warn('mapData called without data');
        }

        const node: TreeEditor.Node = {
            ...this.defaultNode(),
            editorId: TreeEditorWidget.WIDGET_ID,
            name: this.labelProvider.getName(data)!,
            parent: parent,
            jsonforms: {
                type: this.getTypeId(data),
                data: data,
                property: property!,
                index: typeof indexOrKey === 'number' ? indexOrKey.toFixed(0) : indexOrKey
            }
        };

        // containments
        if (parent) {
            parent.children.push(node);
            parent.expanded = true;
        }
        if (data.children) {
            const children = data.children as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'children', idx);
            });
        }
        if (data.application) {
            const children = data.application as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'application', idx);
            });
        }
        if (data.concretizations) {
            const children = data.concretizations as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'concretizations', idx);
            });
        }
        if (data.infrastructure) {
            const children = data.infrastructure as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'infrastructure', idx);
            });
        }
        if (data.optimization) {
            const children = data.optimization as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'optimization', idx);
            });
        }
        if (data.configurations) {
            const children = data.configurations as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'configurations', idx);
            });
        }
        if (data.requirements) {
            const children = data.requirements as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'requirements', idx);
            });
        }
        if (data.exposedInterfaces) {
            const children = data.exposedInterfaces as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'exposedInterfaces', idx);
            });
        }
        if (data.storages) {
            const children = data.storages as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'storages', idx);
            });
        }
        if (data.vms) {
            const children = data.vms as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'vms', idx);
            });
        }
        if (data.faas) {
            const children = data.faas as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'faas', idx);
            });
        }
        if (data.networks) {
            const children = data.networks as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'networks', idx);
            });
        }
        if (data.groups) {
            const children = data.groups as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'groups', idx);
            });
        }
        if (data.providers) {
            const children = data.providers as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'providers', idx);
            });
        }
        if (data.nodes) {
            const children = data.nodes as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'nodes', idx);
            });
        }
        if (data.locations) {
            const children = data.locations as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'locations', idx);
            });
        }
        if (data.ifaces) {
            const children = data.ifaces as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'ifaces', idx);
            });
        }
        if (data.subnets) {
            const children = data.subnets as Array<any>;
            // component types
            children.forEach((element, idx) => {
                this.mapData(element, node, 'subnets', idx);
            });
        }

        return node;
    }

    hasCreatableChildren(node: TreeEditor.Node): boolean {
        return node ? DOMLModel.childrenMapping.get(node.jsonforms.type) !== undefined : false;
    }

    protected defaultNode(): Omit<TreeEditor.Node, 'editorId'> {
        return {
            id: v4(),
            expanded: false,
            selected: false,
            parent: undefined,
            children: [],
            decorationData: {},
            name: '',
            jsonforms: {
                type: '',
                property: '',
                data: undefined
            }
        };
    }

    /** Derives the type id from the given data. */
    protected getTypeId(data: any): string {
        return data && data.typeId || '';
    }

}
