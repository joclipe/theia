import { ILogger } from '@theia/core';
import { inject, injectable } from '@theia/core/shared/inversify';
import { DOMLModel } from './doml-model';
import { TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';
import {domlSchema} from './doml-schema';
import {
    commons_RangedRequirementView,
    commons_DeploymentRequirementView,
    commons_DeploymentToSpecificNodeRequirementView,
    infrastructure_InfrastructureElementView,
    infrastructure_ComputingGroupView,
    commons_RequirementView,
    optimization_OptimizationLayerView,
    infrastructure_ComputingNodeGeneratorView,
    infrastructure_SecurityGroupView,
    concrete_NetworkView,
    application_SoftwareInterfaceView,
    infrastructure_ContainerView,
    infrastructure_LocationView,
    infrastructure_ContainerImageView,
    commons_DOMLModelView,
    optimization_MeasurableObjectiveView,
    application_ApplicationLayerView,
    commons_DeploymentView,
    infrastructure_StorageView,
    optimization_OptimizationObjectiveView,
    concrete_FunctionAsAServiceView,
    concrete_StorageView,
    infrastructure_FunctionAsAServiceView,
    commons_ConfigurationView,
    infrastructure_PhysicalComputingNodeView,
    application_DBMSView,
    concrete_RuntimeProviderView,
    commons_DeploymentToNodeWithPropertyRequirementView,
    infrastructure_NetworkView,
    optimization_OptimizationSolutionView,
    application_SoftwarePackageView,
    infrastructure_AvailabilityGroupView,
    infrastructure_ComputingNodeView,
    commons_DeploymentToNodeTypeRequirementView,
    infrastructure_VMImageView,
    optimization_CountObjectiveView,
    infrastructure_InfrastructureLayerView,
    infrastructure_NetworkInterfaceView,
    commons_DOMLElementView,
    application_ApplicationComponentView,
    infrastructure_SubnetView,
    concrete_ComputingGroupView,
    infrastructure_VirtualMachineView,
    concrete_VirtualMachineView,
    infrastructure_AutoScalingGroupView,
    application_SaaSDBMSView,
    concrete_ConcreteInfrastructureView,
    commons_EnumeratedRequirementView,
    application_SaaSView,
    commons_PropertyView,
    concrete_ConcreteElementView
} from './doml-views';

@injectable()
export class TreeModelService implements TreeEditor.ModelService {

    constructor(@inject(ILogger) private readonly logger: ILogger) { }

    getDataForNode(node: TreeEditor.Node) {
        return node.jsonforms.data;
    }

    getSchemaForNode(node: TreeEditor.Node) {
        return {
            definitions: domlSchema.definitions,
            ...this.getSubSchemaForNode(node),
        };
    }



    private getSubSchemaForNode(node: TreeEditor.Node): any {
        const schema = this.getSchemaForType(node.jsonforms.type);
        if (schema) {
            return schema;
        }
        /*// there is no type, try to guess
        if (node.jsonforms.data.nodes) {
            return coffeeSchema.definitions.workflow;
        }*/
        return undefined;
    }


    private getSchemaForType(type: string) {
        if (!type) {
            return undefined;
        }
        const schema = Object.entries(domlSchema.definitions)
            .map(entry => entry[1])
            .find(
                definition =>
                    definition.properties && definition.properties.typeId.const === type
            );
        if (schema === undefined) {
            this.logger.warn("Can't find definition schema for type " + type);
        }
        return schema;
    }

    getUiSchemaForNode(node: TreeEditor.Node) {
        const type = node.jsonforms.type;
        switch (type) {
            case DOMLModel.Type.commons_RangedRequirement:
                return commons_RangedRequirementView;
            case DOMLModel.Type.commons_DeploymentRequirement:
                return commons_DeploymentRequirementView;
            case DOMLModel.Type.commons_DeploymentToSpecificNodeRequirement:
                return commons_DeploymentToSpecificNodeRequirementView;
            case DOMLModel.Type.infrastructure_InfrastructureElement:
                return infrastructure_InfrastructureElementView;
            case DOMLModel.Type.infrastructure_ComputingGroup:
                return infrastructure_ComputingGroupView;
            case DOMLModel.Type.commons_Requirement:
                return commons_RequirementView;
            case DOMLModel.Type.optimization_OptimizationLayer:
                return optimization_OptimizationLayerView;
            case DOMLModel.Type.infrastructure_ComputingNodeGenerator:
                return infrastructure_ComputingNodeGeneratorView;
            case DOMLModel.Type.infrastructure_SecurityGroup:
                return infrastructure_SecurityGroupView;
            case DOMLModel.Type.concrete_Network:
                return concrete_NetworkView;
            case DOMLModel.Type.application_SoftwareInterface:
                return application_SoftwareInterfaceView;
            case DOMLModel.Type.infrastructure_Container:
                return infrastructure_ContainerView;
            case DOMLModel.Type.infrastructure_Location:
                return infrastructure_LocationView;
            case DOMLModel.Type.infrastructure_ContainerImage:
                return infrastructure_ContainerImageView;
            case DOMLModel.Type.commons_DOMLModel:
                return commons_DOMLModelView;
            case DOMLModel.Type.optimization_MeasurableObjective:
                return optimization_MeasurableObjectiveView;
            case DOMLModel.Type.application_ApplicationLayer:
                return application_ApplicationLayerView;
            case DOMLModel.Type.commons_Deployment:
                return commons_DeploymentView;
            case DOMLModel.Type.infrastructure_Storage:
                return infrastructure_StorageView;
            case DOMLModel.Type.optimization_OptimizationObjective:
                return optimization_OptimizationObjectiveView;
            case DOMLModel.Type.concrete_FunctionAsAService:
                return concrete_FunctionAsAServiceView;
            case DOMLModel.Type.concrete_Storage:
                return concrete_StorageView;
            case DOMLModel.Type.infrastructure_FunctionAsAService:
                return infrastructure_FunctionAsAServiceView;
            case DOMLModel.Type.commons_Configuration:
                return commons_ConfigurationView;
            case DOMLModel.Type.infrastructure_PhysicalComputingNode:
                return infrastructure_PhysicalComputingNodeView;
            case DOMLModel.Type.application_DBMS:
                return application_DBMSView;
            case DOMLModel.Type.concrete_RuntimeProvider:
                return concrete_RuntimeProviderView;
            case DOMLModel.Type.commons_DeploymentToNodeWithPropertyRequirement:
                return commons_DeploymentToNodeWithPropertyRequirementView;
            case DOMLModel.Type.infrastructure_Network:
                return infrastructure_NetworkView;
            case DOMLModel.Type.optimization_OptimizationSolution:
                return optimization_OptimizationSolutionView;
            case DOMLModel.Type.application_SoftwarePackage:
                return application_SoftwarePackageView;
            case DOMLModel.Type.infrastructure_AvailabilityGroup:
                return infrastructure_AvailabilityGroupView;
            case DOMLModel.Type.infrastructure_ComputingNode:
                return infrastructure_ComputingNodeView;
            case DOMLModel.Type.commons_DeploymentToNodeTypeRequirement:
                return commons_DeploymentToNodeTypeRequirementView;
            case DOMLModel.Type.infrastructure_VMImage:
                return infrastructure_VMImageView;
            case DOMLModel.Type.optimization_CountObjective:
                return optimization_CountObjectiveView;
            case DOMLModel.Type.infrastructure_InfrastructureLayer:
                return infrastructure_InfrastructureLayerView;
            case DOMLModel.Type.infrastructure_NetworkInterface:
                return infrastructure_NetworkInterfaceView;
            case DOMLModel.Type.commons_DOMLElement:
                return commons_DOMLElementView;
            case DOMLModel.Type.application_ApplicationComponent:
                return application_ApplicationComponentView;
            case DOMLModel.Type.infrastructure_Subnet:
                return infrastructure_SubnetView;
            case DOMLModel.Type.concrete_ComputingGroup:
                return concrete_ComputingGroupView;
            case DOMLModel.Type.infrastructure_VirtualMachine:
                return infrastructure_VirtualMachineView;
            case DOMLModel.Type.concrete_VirtualMachine:
                return concrete_VirtualMachineView;
            case DOMLModel.Type.infrastructure_AutoScalingGroup:
                return infrastructure_AutoScalingGroupView;
            case DOMLModel.Type.application_SaaSDBMS:
                return application_SaaSDBMSView;
            case DOMLModel.Type.concrete_ConcreteInfrastructure:
                return concrete_ConcreteInfrastructureView;
            case DOMLModel.Type.commons_EnumeratedRequirement:
                return commons_EnumeratedRequirementView;
            case DOMLModel.Type.application_SaaS:
                return application_SaaSView;
            case DOMLModel.Type.commons_Property:
                return commons_PropertyView;
            case DOMLModel.Type.concrete_ConcreteElement:
                return concrete_ConcreteElementView;
            default:
                this.logger.warn("Can't find registered ui schema for type " + type);
                return undefined;
        }
    }

    getChildrenMapping(): Map<string, TreeEditor.ChildrenDescriptor[]> {
        return DOMLModel.childrenMapping;
    }

    getNameForType(type: string): string {
        return DOMLModel.Type.name(type).split("_")[1];
    }
}
