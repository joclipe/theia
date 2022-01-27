import '@eclipse-emfcloud/theia-tree-editor/style/index.css';
import '@eclipse-emfcloud/theia-tree-editor/style/forms.css';
import './style/editor.css';

import { CommandContribution, MenuContribution } from '@theia/core';
import { LabelProviderContribution, NavigatableWidgetOptions, OpenHandler, WidgetFactory } from '@theia/core/lib/browser';
import URI from '@theia/core/lib/common/uri';
import { ContainerModule } from '@theia/core/shared/inversify';
import { TreeContribution } from './doml-contribution';
import { TreeModelService } from './doml/doml-model-service';
import { TreeNodeFactory } from './doml/doml-node-factory';
import { TreeEditorWidget } from './doml/doml-editor-widget';
import { TreeLabelProvider } from './doml/doml-label-provider';
import { TreeLabelProviderContribution } from './doml-label-provider-contribution';
import { NewDOMLFileCommandHandler } from './example-file/example-file-command';
import { NewDOMLFileCommandContribution, NewDOMLFileMenuContribution } from './example-file/example-file-contribution';
import { createBasicTreeContainer, NavigatableTreeEditorOptions } from '@eclipse-emfcloud/theia-tree-editor';

export default new ContainerModule(bind => {
    // Bind Theia IDE contributions for the example file creation menu entry.
    bind(NewDOMLFileCommandHandler).toSelf();
    bind(CommandContribution).to(NewDOMLFileCommandContribution);
    bind(MenuContribution).to(NewDOMLFileMenuContribution)

    // Bind Theia IDE contributions for the tree editor.
    bind(LabelProviderContribution).to(TreeLabelProviderContribution);
    bind(OpenHandler).to(TreeContribution);
    bind(MenuContribution).to(TreeContribution);
    bind(CommandContribution).to(TreeContribution);
    bind(LabelProviderContribution).to(TreeLabelProvider);

    // bind services to themselves because we use them outside of the editor widget, too.
    bind(TreeModelService).toSelf().inSingletonScope();
    bind(TreeLabelProvider).toSelf().inSingletonScope();

    bind<WidgetFactory>(WidgetFactory).toDynamicValue(context => ({
        id: TreeEditorWidget.WIDGET_ID,
        createWidget: (options: NavigatableWidgetOptions) => {

            const treeContainer = createBasicTreeContainer(
                context.container,
                TreeEditorWidget,
                TreeModelService,
                TreeNodeFactory
            );

            // Bind options.
            const uri = new URI(options.uri);
            treeContainer.bind(NavigatableTreeEditorOptions).toConstantValue({ uri });

            return treeContainer.get(TreeEditorWidget);
        }
    }));
});
