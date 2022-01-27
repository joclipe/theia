import { injectable, inject } from '@theia/core/shared/inversify';
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { TREE_EDITOR_MAIN_MENU } from 'piacere/domlExt/lib/browser/example-file/example-file-contribution';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { FileService } from '@theia/filesystem/lib/browser/file-service';
import { FileDialogService, OpenFileDialogProps } from '@theia/filesystem/lib/browser';
import { FileSystem } from '@theia/filesystem/lib/common';
import { EncodingService } from '@theia/core/lib/common/encoding-service'


export const DOMLValidatorCommand: Command = {
	id: 'DOMLValidator.command',
	label: 'Validate DOML'
};



@injectable()
export class DOMLValidatorCommandContribution implements CommandContribution {

	constructor(
		@inject(MessageService) private readonly messageService: MessageService,
		@inject(WorkspaceService) protected readonly workspaceService: WorkspaceService,
		@inject(FileService) protected readonly fileService: FileService,
		@inject(FileSystem) private readonly fileSystem: FileSystem,
		@inject(FileDialogService) private readonly fileDialogService: FileDialogService,
		@inject(EncodingService) protected readonly encodingService: EncodingService,
	) { }

	registerCommands(registry: CommandRegistry): void {
		registry.registerCommand(DOMLValidatorCommand, {
			execute: () => this.runCommand()
		});
	}

	async runCommand(): Promise<void> {
		const props: OpenFileDialogProps = {
			title: 'Select File To Validate',
			canSelectFolders: false,
			canSelectFiles: true,
		};

		const root = this.workspaceService.tryGetRoots()[0];

		const fileUri = await this.fileDialogService.showOpenDialog(props, root);
		if (fileUri) {
			const file = await this.fileSystem.resolveContent("" + fileUri)
			if (file) {
				//console.log(file.content.length)
				//return file.content
				//this.validate(JSON.stringify({title: 'foo',body: 'bar',userId: 1}))
				this.validate("" + fileUri, file.content)

			}
		}



	}

	async validate(fileURI: String, data: String): Promise<void> {
		try {
			var http = require('http');

			const options = {
				hostname: '127.0.0.1',
				port: 8080,
				path: '/doml/validate',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': data.length
				}
			}

			const req = http.request(options, res => {
				console.log('STATUS CODE: ' + res.statusCode);
				console.log('HEADERS: ' + JSON.stringify(res.headers));

				var body: Uint8Array[] = [];
				res.on('data', chunk => {
					body.push(chunk)
				});
				res.on('end', () => {
					const resString = Buffer.concat(body).toString();
					console.log(resString);
					var result = JSON.parse(resString)
					if (result.res == "OK") {
						this.messageService.info("YOUR MODEL IS VALID");
					}
					else {
						this.messageService.error("YOUR MODEL IS INVALID");
					}
					this.writeFile(fileURI + "_res", resString);
				})
			})

			req.on('error', error => {
				console.error(error)
			})

			req.write(data)
			req.end()

		}
		catch (ex) {
			console.log(ex)

		}

	}

	async writeFile(fileURI: string, dataToWrite: string): Promise<void> {

		try {
			/*var URI = require("uri-js");
			var theFileURI = URI.serialize(URI.parse(fileURI))
			var buff = await this.encodingService.encode(dataToWrite)

	  	
	  	
			//const buffer = Buffer.from(buff.toString('base64'), 'base64');
			console.log(theFileURI)
			this.fileService.writeFile(theFileURI, buff)*/
			this.fileSystem.createFile(fileURI, { content: dataToWrite, encoding: "UTF-8" });
			//this.fileSystem.setContent(newFile,dataToWrite);
		}
		catch (ex) {
			console.log(ex)

		}

	}
}

@injectable()
export class DOMLValidatorMenuContribution implements MenuContribution {

	registerMenus(menus: MenuModelRegistry): void {
		/*menus.registerMenuAction(CommonMenus.EDIT_FIND, {
			commandId: DOMLValidatorCommand.id,
			label: DOMLValidatorCommand.label
		});*/
		menus.registerMenuAction(TREE_EDITOR_MAIN_MENU, {
			commandId: DOMLValidatorCommand.id,
			label: DOMLValidatorCommand.label
		});
	}
}
