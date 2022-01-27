import { TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';

export namespace DOMLModel {
    export namespace Type {
       /* export const BrewingUnit = 'BrewingUnit';
        export const ControlUnit = 'ControlUnit';
        export const Dimension = 'Dimension';
        export const DripTray = 'DripTray';
        export const Display = 'Display';
        export const Machine = 'Machine';
        export const MultiComponent = 'MultiComponent';
        export const Processor = 'Processor';
        export const RAM = 'RAM';
        export const WaterTank = 'WaterTank';

        export function name(type: string): string {
            return type;
        }*/
        
        export const commons_RangedRequirement = 'commons_RangedRequirement';
        export const commons_DeploymentRequirement = 'commons_DeploymentRequirement';
        export const commons_DeploymentToSpecificNodeRequirement = 'commons_DeploymentToSpecificNodeRequirement';
        export const infrastructure_InfrastructureElement = 'infrastructure_InfrastructureElement';
        export const infrastructure_ComputingGroup = 'infrastructure_ComputingGroup';
        export const commons_Requirement = 'commons_Requirement';
        export const optimization_OptimizationLayer = 'optimization_OptimizationLayer';
        export const infrastructure_ComputingNodeGenerator = 'infrastructure_ComputingNodeGenerator';
        export const infrastructure_SecurityGroup = 'infrastructure_SecurityGroup';
        export const concrete_Network = 'concrete_Network';
        export const application_SoftwareInterface = 'application_SoftwareInterface';
        export const infrastructure_Container = 'infrastructure_Container';
        export const infrastructure_Location = 'infrastructure_Location';
        export const infrastructure_ContainerImage = 'infrastructure_ContainerImage';
        export const commons_DOMLModel = 'commons_DOMLModel';
        export const optimization_MeasurableObjective = 'optimization_MeasurableObjective';
        export const application_ApplicationLayer = 'application_ApplicationLayer';
        export const commons_Deployment = 'commons_Deployment';
        export const infrastructure_Storage = 'infrastructure_Storage';
        export const optimization_OptimizationObjective = 'optimization_OptimizationObjective';
        export const concrete_FunctionAsAService = 'concrete_FunctionAsAService';
        export const concrete_Storage = 'concrete_Storage';
        export const infrastructure_FunctionAsAService = 'infrastructure_FunctionAsAService';
        export const commons_Configuration = 'commons_Configuration';
        export const infrastructure_PhysicalComputingNode = 'infrastructure_PhysicalComputingNode';
        export const application_DBMS = 'application_DBMS';
        export const concrete_RuntimeProvider = 'concrete_RuntimeProvider';
        export const commons_DeploymentToNodeWithPropertyRequirement = 'commons_DeploymentToNodeWithPropertyRequirement';
        export const infrastructure_Network = 'infrastructure_Network';
        export const optimization_OptimizationSolution = 'optimization_OptimizationSolution';
        export const application_SoftwarePackage = 'application_SoftwarePackage';
        export const infrastructure_AvailabilityGroup = 'infrastructure_AvailabilityGroup';
        export const infrastructure_ComputingNode = 'infrastructure_ComputingNode';
        export const commons_DeploymentToNodeTypeRequirement = 'commons_DeploymentToNodeTypeRequirement';
        export const infrastructure_VMImage = 'infrastructure_VMImage';
        export const optimization_CountObjective = 'optimization_CountObjective';
        export const infrastructure_InfrastructureLayer = 'infrastructure_InfrastructureLayer';
        export const infrastructure_NetworkInterface = 'infrastructure_NetworkInterface';
        export const commons_DOMLElement = 'commons_DOMLElement';
        export const application_ApplicationComponent = 'application_ApplicationComponent';
        export const infrastructure_Subnet = 'infrastructure_Subnet';
        export const concrete_ComputingGroup = 'concrete_ComputingGroup';
        export const infrastructure_VirtualMachine = 'infrastructure_VirtualMachine';
        export const concrete_VirtualMachine = 'concrete_VirtualMachine';
        export const infrastructure_AutoScalingGroup = 'infrastructure_AutoScalingGroup';
        export const application_SaaSDBMS = 'application_SaaSDBMS';
        export const concrete_ConcreteInfrastructure = 'concrete_ConcreteInfrastructure';
        export const commons_EnumeratedRequirement = 'commons_EnumeratedRequirement';
        export const application_SaaS = 'application_SaaS';
        export const commons_Property = 'commons_Property';
        export const concrete_ConcreteElement = 'concrete_ConcreteElement';

        export function name(type: string): string {
            return type;
        }
    }

    /*const components = [
        Type.MultiComponent,
        Type.BrewingUnit,
        Type.ControlUnit,
        Type.DripTray,
        Type.WaterTank
    ];*/

    /** Maps types to their creatable children */
    export const childrenMapping: Map<string, TreeEditor.ChildrenDescriptor[]> = new Map([
        [
            Type.commons_DOMLModel, [
                {
                    property: 'application',
                    children: [Type.application_ApplicationLayer]
                },
                {
                    property: 'concretizations',
                    children: [Type.concrete_ConcreteInfrastructure]
                },
                {
                    property: 'infrastructure',
                    children: [Type.infrastructure_InfrastructureLayer]
                },
                {
                    property: 'optimization',
                    children: [Type.optimization_OptimizationLayer]
                },
                {
                    property: 'configurations',
                    children: [Type.commons_Configuration]
                },
                {
                    property: 'requirements',
                    children: [Type.commons_Requirement]
                }

            ]
        ],
        [
            Type.application_ApplicationLayer, [
                {
                    property: 'children',
                    children: [Type.application_SoftwarePackage, Type.application_DBMS, Type.application_SaaS, Type.application_SaaSDBMS]
                }
            ]
        ],
        [
            Type.application_SaaS, [
                {
                    property: 'exposedInterfaces',
                    children: [Type.application_SoftwareInterface]
                }
            ]
        ],
        [
            Type.application_SaaSDBMS, [
                {
                    property: 'exposedInterfaces',
                    children: [Type.application_SoftwareInterface]
                }
            ]
        ],
        [
            Type.application_SoftwarePackage, [
                {
                    property: 'exposedInterfaces',
                    children: [Type.application_SoftwareInterface]
                }
            ]
        ],
        [
            Type.application_DBMS, [
                {
                    property: 'exposedInterfaces',
                    children: [Type.application_SoftwareInterface]
                }
            ]
        ],
        [
            Type.concrete_ConcreteInfrastructure, [
                {
                    property: 'storages',
                    children: [Type.concrete_Storage]
                },
                {
                    property: 'vms',
                    children: [Type.concrete_VirtualMachine]
                },
                {
                    property: 'networks',
                    children: [Type.concrete_Network]
                },
                {
                    property: 'faas',
                    children: [Type.concrete_FunctionAsAService]
                },
                {
                    property: 'groups',
                    children: [Type.concrete_ComputingGroup]
                },
                {
                    property: 'providers',
                    children: [Type.concrete_RuntimeProvider]
                }
            ]
        ],
        [
            Type.infrastructure_InfrastructureLayer, [
                {
                    property: 'storages',
                    children: [Type.infrastructure_Storage]
                },
                {
                    property: 'networks',
                    children: [Type.infrastructure_Network]
                },
                {
                    property: 'faas',
                    children: [Type.infrastructure_FunctionAsAService]
                },
                {
                    property: 'groups',
                    children: [Type.infrastructure_AvailabilityGroup, Type.infrastructure_SecurityGroup, Type.infrastructure_AutoScalingGroup]
                },
                {
                    property: 'nodes',
                    children: [Type.infrastructure_Container, Type.infrastructure_PhysicalComputingNode, Type.infrastructure_VirtualMachine]
                }
            ]

        ],
        [Type.infrastructure_VirtualMachine,[
            {
                    property: 'locations',
                    children: [Type.infrastructure_Location]
                },
                {
                    property: 'ifaces',
                    children: [Type.infrastructure_NetworkInterface]
                }
            ]
        ],
        [Type.infrastructure_Network,[
            {
                    property: 'subnets',
                    children: [Type.infrastructure_Subnet]
                }
            ]
        ],
        [Type.infrastructure_Subnet,[
            {
                    property: 'subnets',
                    children: [Type.infrastructure_Subnet]
                }
            ]
        ],
        [Type.infrastructure_FunctionAsAService,[
            {
                    property: 'ifaces',
                    children: [Type.infrastructure_NetworkInterface]
                }
            ]
        ],
        [Type.infrastructure_Storage,[
            {
                    property: 'ifaces',
                    children: [Type.infrastructure_NetworkInterface]
                }
            ]
        ],
        [Type.infrastructure_Container,[
            {
                    property: 'ifaces',
                    children: [Type.infrastructure_NetworkInterface]
                }
            ]
        ],
        [Type.infrastructure_PhysicalComputingNode,[
            {
                    property: 'ifaces',
                    children: [Type.infrastructure_NetworkInterface]
                }
            ]
        ]
    ]);

}
