import { injectable } from '@theia/core/shared/inversify';
import { LabelProviderContribution } from '@theia/core/lib/browser';
import { DOMLModel } from './doml-model';
import { TreeEditorWidget } from './doml-editor-widget';
import { TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';

const DEFAULT_COLOR = 'black';

const ICON_CLASSES: Map<string, string> = new Map([
   /* [DOMLModel.Type.BrewingUnit, 'fa fa-fire ' + DEFAULT_COLOR],
    [DOMLModel.Type.ControlUnit, 'fa fa-server ' + DEFAULT_COLOR],
    [DOMLModel.Type.Dimension, 'fa fa-arrows-alt ' + DEFAULT_COLOR],
    [DOMLModel.Type.DripTray, 'fa fa-inbox ' + DEFAULT_COLOR],
    [DOMLModel.Type.Display, 'fa fa-tv ' + DEFAULT_COLOR],
    [DOMLModel.Type.Machine, 'fa fa-cogs ' + DEFAULT_COLOR],
    [DOMLModel.Type.MultiComponent, 'fa fa-cubes ' + DEFAULT_COLOR],
    [DOMLModel.Type.Processor, 'fa fa-microchip ' + DEFAULT_COLOR],
    [DOMLModel.Type.RAM, 'fa fa-memory ' + DEFAULT_COLOR],
    [DOMLModel.Type.WaterTank, 'fa fa-tint ' + DEFAULT_COLOR],
    [DOMLModel.Type.Application, 'fa-sitemap ' + DEFAULT_COLOR],
    [DOMLModel.Type.Network, 'fa-globe ' + DEFAULT_COLOR],
    [DOMLModel.Type.Firewall, 'fa-fire ' + DEFAULT_COLOR],
    [DOMLModel.Type.SecurityGroup, 'fa-shield ' + DEFAULT_COLOR],
    [DOMLModel.Type.SecurityRule, 'fa-lock ' + DEFAULT_COLOR],*/
    [DOMLModel.Type.infrastructure_NetworkInterface, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.concrete_VirtualMachine, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.commons_DeploymentToNodeWithPropertyRequirement, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_VirtualMachine, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.optimization_OptimizationLayer, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_ComputingGroup, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.commons_Requirement, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_Storage, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.application_DBMS, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_AvailabilityGroup, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.concrete_Network, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.concrete_Storage, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.application_SoftwareInterface, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_Location, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.application_SaaSDBMS, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.concrete_ConcreteInfrastructure, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.commons_Configuration, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_VMImage, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_Subnet, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_FunctionAsAService, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.optimization_CountObjective, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.commons_Deployment, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_SecurityGroup, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.concrete_FunctionAsAService, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.application_SoftwarePackage, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_ComputingNodeGenerator, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_AutoScalingGroup, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_ComputingNode, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.application_ApplicationComponent, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.commons_DOMLElement, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.commons_DeploymentToNodeTypeRequirement, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.optimization_OptimizationObjective, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.commons_DeploymentToSpecificNodeRequirement, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.concrete_RuntimeProvider, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.commons_Property, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.commons_DOMLModel, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.commons_RangedRequirement, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_PhysicalComputingNode, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.concrete_ConcreteElement, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.commons_DeploymentRequirement, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.application_ApplicationLayer, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_InfrastructureLayer, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.optimization_MeasurableObjective, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_InfrastructureElement, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.concrete_ComputingGroup, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_Network, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.optimization_OptimizationSolution, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.commons_EnumeratedRequirement, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.application_SaaS, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_Container, 'fa-cogs ' + DEFAULT_COLOR],
[DOMLModel.Type.infrastructure_ContainerImage, 'fa-cogs ' + DEFAULT_COLOR]
]);

/* Icon for unknown types */
const UNKNOWN_ICON = 'fa-question-circle ' + DEFAULT_COLOR;

@injectable()
export class TreeLabelProvider implements LabelProviderContribution {

    public canHandle(element: object): number {
        if ((TreeEditor.Node.is(element) || TreeEditor.CommandIconInfo.is(element))
            && element.editorId === TreeEditorWidget.WIDGET_ID) {
            return 1000;
        }
        return 0;
    }

    public getIcon(element: object): string | undefined {
        let iconClass: string | undefined;
        if (TreeEditor.CommandIconInfo.is(element)) {
            iconClass = ICON_CLASSES.get(element.type);
        } else if (TreeEditor.Node.is(element)) {
            iconClass = ICON_CLASSES.get(element.jsonforms.type);
        }

        return iconClass ? 'fa ' + iconClass : 'fa ' + UNKNOWN_ICON;
    }

    public getName(element: object): string | undefined {
        const data = TreeEditor.Node.is(element) ? element.jsonforms.data : element;
        if (data.name) {
            return DOMLModel.Type.name(data.typeId).split("_")[1]+" "+data.name;
        } else if (data.typeId) {
            return this.getTypeName(data.typeId);
        }

        return undefined;
    }

    private getTypeName(typeId: string): string {
        return DOMLModel.Type.name(typeId).split("_")[1];
    }
}
