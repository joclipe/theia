import URI from '@theia/core/lib/common/uri';
import { CommandRegistry, MenuModelRegistry } from '@theia/core';
import { ApplicationShell, NavigatableWidgetOptions, OpenerService, WidgetOpenerOptions } from '@theia/core/lib/browser';
import { inject, injectable } from '@theia/core/shared/inversify';
import { TreeModelService } from './doml/doml-model-service';
import { TreeEditorWidget } from './doml/doml-editor-widget';
import { TreeLabelProvider } from './doml/doml-label-provider';
import {   BaseTreeEditorContribution,  MasterTreeWidget,  TreeEditor,} from '@eclipse-emfcloud/theia-tree-editor';

@injectable()
export class TreeContribution extends BaseTreeEditorContribution {
    @inject(ApplicationShell) protected shell: ApplicationShell;
    @inject(OpenerService) protected opener: OpenerService;

    constructor(
        @inject(TreeModelService) modelService: TreeEditor.ModelService,
        @inject(TreeLabelProvider) labelProvider: TreeLabelProvider
    ) {
        super(TreeEditorWidget.WIDGET_ID, modelService, labelProvider);
    }

    readonly id = TreeEditorWidget.WIDGET_ID;
    readonly label = MasterTreeWidget.WIDGET_LABEL;

    canHandle(uri: URI): number {
        if (uri.path.ext === '.doml') {
            return 1000;
        }
        return 0;
    }

    getIcon() {
        return 'fa fa-sitemap green';
    }

    configureTitle(title:any) {
        title.iconClass = 'fa fa-sitemap green';
    }

    registerCommands(commands: CommandRegistry): void {
        // register your custom commands here

        super.registerCommands(commands);
    }

    registerMenus(menus: MenuModelRegistry): void {
        // register your custom menu actions here

        super.registerMenus(menus);
    }

    protected createWidgetOptions(uri: URI, options?: WidgetOpenerOptions): NavigatableWidgetOptions {
        return {
            kind: 'navigatable',
            uri: this.serializeUri(uri)
        };
    }

    protected serializeUri(uri: URI): string {
        return uri.withoutFragment().toString();
    }

}
