import { SingleTextInputDialog } from '@theia/core/lib/browser/dialogs';
import { ILogger } from '@theia/core/lib/common';
import { BinaryBuffer } from '@theia/core/lib/common/buffer';
import { Command } from '@theia/core/lib/common/command';
import URI from '@theia/core/lib/common/uri';
import { SingleUriCommandHandler } from '@theia/core/lib/common/uri-command-handler';
import { FileService } from '@theia/filesystem/lib/browser/file-service';
import { FileSystemUtils } from '@theia/filesystem/lib/common';
import { inject, injectable } from '@theia/core/shared/inversify';
import { OpenerService } from '@theia/core/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser';

export const NewDOMLFileCommand: Command = {
    id: 'domlExt-tree.newDOMLFile',
    label: 'New DOML Model'
};

@injectable()
export class NewDOMLFileCommandHandler implements SingleUriCommandHandler {
    constructor(
        @inject(OpenerService)
        protected readonly openerService: OpenerService,
        @inject(FileService)
        protected readonly fileService: FileService,
        @inject(ILogger)
        protected readonly logger: ILogger,
        @inject(WorkspaceService)
        protected readonly workspaceService: WorkspaceService
    ) { }
    
    isEnabled() {
        return this.workspaceService.opened;
    }

    async execute(uri: URI) {
        const stat = await this.fileService.resolve(uri);
        if (!stat) {
            this.logger.error(`[NewDOMLFileCommandHandler] Could not create file stat for uri`, uri);
            return;
        }

        const dir = stat.isDirectory ? stat : await this.fileService.resolve(uri.parent);
        if (!dir) {
            this.logger.error(`[NewDOMLileCommandHandler] Could not create file stat for uri`, uri.parent);
            return;
        }

        const dirUri = dir.resource;
        const preliminaryFileUri = FileSystemUtils.generateUniqueResourceURI(dirUri, dir, 'newDOML', '.doml');
        const dialog = new SingleTextInputDialog({
            title: 'New DOML Model',
            initialValue: preliminaryFileUri.path.base
        });

        const fileName = await dialog.open();
        if (fileName) {
            const fileUri = dirUri.resolve(fileName);
            const contentBuffer = BinaryBuffer.fromString(JSON.stringify(defaultData2, null, 2));
            this.fileService.createFile(fileUri, contentBuffer)
                .then(_ => this.openerService.getOpener(fileUri))
                .then(openHandler => openHandler.open(fileUri));
        }
    }
}

const defaultData2={
    "typeId": "commons_DOMLModel",
    "modelname": "Example DOML","version":"0.1", "id":"myDOML",
    "application":[{"typeId":"application_ApplicationLayer"}],
    "infrastructure":[{"typeId":"infrastructure_InfrastructureLayer"}],
    "optimization":[{"typeId":"optimization_OptimizationLayer"}],
    "concretizations":[{"typeId":"concrete_ConcreteInfrastructure"}],
    }

/*
const defaultData = {
    "typeId": "Machine",
    "name": "Super Coffee 4000",
    "children": [
        {
            "typeId": "ControlUnit",
            "processor": {
                "socketconnectorType": "A1T",
                "manufactoringProcess": "18nm",
                "thermalDesignPower": 10,
                "numberOfCores": 2,
                "clockSpeed": 800,
                "vendor": "CMD",
                "advancedConfiguration": true
            },
            "display": {
                "width": 70,
                "height": 40
            },
            "dimension": {
                "width": 100,
                "height": 80,
                "length": 50
            },
            "userDescription": "Small processing unit for user input"
        },
        {
            "typeId": "MultiComponent",
            "width": 100,
            "height": 100,
            "length": 60,
            "children": [
                {
                    "typeId":"WaterTank",
                    "capacity":400
                },
                {
                    "typeId":"DripTray",
                    "material":"aluminium"
                }
            ]
        }
    ]
}
*/
