import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, SelectionService, MAIN_MENU_BAR } from '@theia/core/lib/common';
import { inject, injectable } from '@theia/core/shared/inversify';
import { WorkspaceRootUriAwareCommandHandler } from '@theia/workspace/lib/browser/workspace-commands';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { NewDOMLFileCommandHandler, NewDOMLFileCommand } from './example-file-command';


export const TREE_EDITOR_MAIN_MENU = [...MAIN_MENU_BAR, '9_treeeditormenu'];

@injectable()
export class NewDOMLFileCommandContribution implements CommandContribution {

    constructor(
        @inject(SelectionService)
        private readonly selectionService: SelectionService,
        @inject(WorkspaceService)
        private readonly workspaceService: WorkspaceService,
        @inject(NewDOMLFileCommandHandler)
        private readonly newExampleFileHandler: NewDOMLFileCommandHandler
    ) { }

    registerCommands(registry: CommandRegistry): void {
      registry.registerCommand(NewDOMLFileCommand,
          new WorkspaceRootUriAwareCommandHandler(
              this.workspaceService,
              this.selectionService,
              this.newExampleFileHandler
          )
      );
    }
}

@injectable()
export class NewDOMLFileMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerSubmenu(TREE_EDITOR_MAIN_MENU, 'DOML Editor');

        menus.registerMenuAction(TREE_EDITOR_MAIN_MENU, {
            commandId: NewDOMLFileCommand.id,
            label: 'New DOML Model'
        });
    }
}
