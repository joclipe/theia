export const commons_RangedRequirementView = {
    "elements": [
        {
            "scope": "#/properties/predicatesOn->commons_DOMLElement",
            "label": "predicatesOn->commons_DOMLElement",
            "type": "Control"
        },
        {
            "scope": "#/properties/identifier",
            "label": "identifier",
            "type": "Control"
        },
        {
            "scope": "#/properties/min",
            "label": "min",
            "type": "Control"
        },
        {
            "scope": "#/properties/max",
            "label": "max",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/property",
            "label": "property",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const commons_DeploymentRequirementView = {
    "elements": [
        {
            "scope": "#/properties/predicatesOn->commons_DOMLElement",
            "label": "predicatesOn->commons_DOMLElement",
            "type": "Control"
        },
        {
            "scope": "#/properties/identifier",
            "label": "identifier",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/property",
            "label": "property",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const commons_DeploymentToSpecificNodeRequirementView = {
    "elements": [
        {
            "scope": "#/properties/predicatesOn->commons_DOMLElement",
            "label": "predicatesOn->commons_DOMLElement",
            "type": "Control"
        },
        {
            "scope": "#/properties/identifier",
            "label": "identifier",
            "type": "Control"
        },
        {
            "scope": "#/properties/validElements->infrastructure_InfrastructureElement",
            "label": "validElements->infrastructure_InfrastructureElement",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/property",
            "label": "property",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_InfrastructureElementView = {
    "elements": [
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_ComputingGroupView = {
    "elements": [
        {
            "scope": "#/properties/groupedNodes->infrastructure_ComputingNode",
            "label": "groupedNodes->infrastructure_ComputingNode",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const commons_RequirementView = {
    "elements": [
        {
            "scope": "#/properties/predicatesOn->commons_DOMLElement",
            "label": "predicatesOn->commons_DOMLElement",
            "type": "Control"
        },
        {
            "scope": "#/properties/identifier",
            "label": "identifier",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/property",
            "label": "property",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const optimization_OptimizationLayerView = {
    "elements": [
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/startingHint->commons_Configuration",
            "label": "startingHint->commons_Configuration",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_ComputingNodeGeneratorView = {
    "elements": [
        {
            "scope": "#/properties/kind",
            "label": "kind",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/uri",
            "label": "uri",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_SecurityGroupView = {
    "elements": [
        {
            "scope": "#/properties/groupedNodes->infrastructure_ComputingNode",
            "label": "groupedNodes->infrastructure_ComputingNode",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const concrete_NetworkView = {
    "elements": [
        {
            "scope": "#/properties/configurationScript",
            "label": "configurationScript",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/maps->infrastructure_Network",
            "label": "maps->infrastructure_Network",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const application_SoftwareInterfaceView = {
    "elements": [
        {
            "scope": "#/properties/endPoint",
            "label": "endPoint",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_ContainerView = {
    "elements": [
        {
            "scope": "#/properties/memory",
            "label": "memory",
            "type": "Control"
        },
        {
            "scope": "#/properties/cost",
            "label": "cost",
            "type": "Control"
        },
        {
            "scope": "#/properties/os",
            "label": "os",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/cpu",
            "label": "cpu",
            "type": "Control"
        },
        {
            "scope": "#/properties/storage",
            "label": "storage",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        },
        {
            "scope": "#/properties/generatedFrom->infrastructure_ContainerImage",
            "label": "generatedFrom->infrastructure_ContainerImage",
            "type": "Control"
        },
        {
            "scope": "#/properties/group->infrastructure_ComputingGroup",
            "label": "group->infrastructure_ComputingGroup",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/host->infrastructure_ComputingNode",
            "label": "host->infrastructure_ComputingNode",
            "type": "Control"
        },
        {
            "scope": "#/properties/architecture",
            "label": "architecture",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_LocationView = {
    "elements": [
        {
            "scope": "#/properties/zone",
            "label": "zone",
            "type": "Control"
        },
        {
            "scope": "#/properties/region",
            "label": "region",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_ContainerImageView = {
    "elements": [
        {
            "scope": "#/properties/generatedContainers->infrastructure_Container",
            "label": "generatedContainers->infrastructure_Container",
            "type": "Control"
        },
        {
            "scope": "#/properties/kind",
            "label": "kind",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/uri",
            "label": "uri",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const commons_DOMLModelView = {
    "elements": [
        {
            "scope": "#/properties/activeInfrastructure->concrete_ConcreteInfrastructure",
            "label": "activeInfrastructure->concrete_ConcreteInfrastructure",
            "type": "Control"
        },
        {
            "scope": "#/properties/modelname",
            "label": "modelname",
            "type": "Control"
        },
        {
            "scope": "#/properties/activeConfiguration->commons_Configuration",
            "label": "activeConfiguration->commons_Configuration",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/id",
            "label": "id",
            "type": "Control"
        },
        {
            "scope": "#/properties/version",
            "label": "version",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const optimization_MeasurableObjectiveView = {
    "elements": [
        {
            "scope": "#/properties/kind",
            "label": "kind",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/property",
            "label": "property",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const application_ApplicationLayerView = {
    "elements": [
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const commons_DeploymentView = {
    "elements": [
        {
            "scope": "#/properties/component->application_ApplicationComponent",
            "label": "component->application_ApplicationComponent",
            "type": "Control"
        },
        {
            "scope": "#/properties/node->infrastructure_InfrastructureElement",
            "label": "node->infrastructure_InfrastructureElement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_StorageView = {
    "elements": [
        {
            "scope": "#/properties/cost",
            "label": "cost",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/storage",
            "label": "storage",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const optimization_OptimizationObjectiveView = {
    "elements": [
        {
            "scope": "#/properties/kind",
            "label": "kind",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/property",
            "label": "property",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const concrete_FunctionAsAServiceView = {
    "elements": [
        {
            "scope": "#/properties/configurationScript",
            "label": "configurationScript",
            "type": "Control"
        },
        {
            "scope": "#/properties/maps->infrastructure_FunctionAsAService",
            "label": "maps->infrastructure_FunctionAsAService",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const concrete_StorageView = {
    "elements": [
        {
            "scope": "#/properties/configurationScript",
            "label": "configurationScript",
            "type": "Control"
        },
        {
            "scope": "#/properties/maps->infrastructure_Storage",
            "label": "maps->infrastructure_Storage",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_FunctionAsAServiceView = {
    "elements": [
        {
            "scope": "#/properties/cost",
            "label": "cost",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const commons_ConfigurationView = {
    "elements": [
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_PhysicalComputingNodeView = {
    "elements": [
        {
            "scope": "#/properties/memory",
            "label": "memory",
            "type": "Control"
        },
        {
            "scope": "#/properties/cost",
            "label": "cost",
            "type": "Control"
        },
        {
            "scope": "#/properties/group->infrastructure_ComputingGroup",
            "label": "group->infrastructure_ComputingGroup",
            "type": "Control"
        },
        {
            "scope": "#/properties/os",
            "label": "os",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/cpu",
            "label": "cpu",
            "type": "Control"
        },
        {
            "scope": "#/properties/storage",
            "label": "storage",
            "type": "Control"
        },
        {
            "scope": "#/properties/architecture",
            "label": "architecture",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const application_DBMSView = {
    "elements": [
        {
            "scope": "#/properties/isPersistent",
            "label": "isPersistent",
            "type": "Control"
        },
        {
            "scope": "#/properties/configFile",
            "label": "configFile",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/consumedInterfaces->application_SoftwareInterface",
            "label": "consumedInterfaces->application_SoftwareInterface",
            "type": "Control"
        },
        {
            "scope": "#/properties/licenseCost",
            "label": "licenseCost",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const concrete_RuntimeProviderView = {
    "elements": [
        {
            "scope": "#/properties/providedNetworks->concrete_Network",
            "label": "providedNetworks->concrete_Network",
            "type": "Control"
        },
        {
            "scope": "#/properties/faas->concrete_FunctionAsAService",
            "label": "faas->concrete_FunctionAsAService",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/storages->concrete_Storage",
            "label": "storages->concrete_Storage",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/supportedGroups->concrete_ComputingGroup",
            "label": "supportedGroups->concrete_ComputingGroup",
            "type": "Control"
        },
        {
            "scope": "#/properties/providedVMs->concrete_VirtualMachine",
            "label": "providedVMs->concrete_VirtualMachine",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const commons_DeploymentToNodeWithPropertyRequirementView = {
    "elements": [
        {
            "scope": "#/properties/predicatesOn->commons_DOMLElement",
            "label": "predicatesOn->commons_DOMLElement",
            "type": "Control"
        },
        {
            "scope": "#/properties/identifier",
            "label": "identifier",
            "type": "Control"
        },
        {
            "scope": "#/properties/min",
            "label": "min",
            "type": "Control"
        },
        {
            "scope": "#/properties/max",
            "label": "max",
            "type": "Control"
        },
        {
            "scope": "#/properties/values",
            "label": "values",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/property",
            "label": "property",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_NetworkView = {
    "elements": [
        {
            "scope": "#/properties/protocol",
            "label": "protocol",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/addressRange",
            "label": "addressRange",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/connectedIfaces->infrastructure_NetworkInterface",
            "label": "connectedIfaces->infrastructure_NetworkInterface",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const optimization_OptimizationSolutionView = {
    "elements": [
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const application_SoftwarePackageView = {
    "elements": [
        {
            "scope": "#/properties/isPersistent",
            "label": "isPersistent",
            "type": "Control"
        },
        {
            "scope": "#/properties/configFile",
            "label": "configFile",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/consumedInterfaces->application_SoftwareInterface",
            "label": "consumedInterfaces->application_SoftwareInterface",
            "type": "Control"
        },
        {
            "scope": "#/properties/licenseCost",
            "label": "licenseCost",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_AvailabilityGroupView = {
    "elements": [
        {
            "scope": "#/properties/groupedNodes->infrastructure_ComputingNode",
            "label": "groupedNodes->infrastructure_ComputingNode",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_ComputingNodeView = {
    "elements": [
        {
            "scope": "#/properties/memory",
            "label": "memory",
            "type": "Control"
        },
        {
            "scope": "#/properties/cost",
            "label": "cost",
            "type": "Control"
        },
        {
            "scope": "#/properties/group->infrastructure_ComputingGroup",
            "label": "group->infrastructure_ComputingGroup",
            "type": "Control"
        },
        {
            "scope": "#/properties/os",
            "label": "os",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/cpu",
            "label": "cpu",
            "type": "Control"
        },
        {
            "scope": "#/properties/storage",
            "label": "storage",
            "type": "Control"
        },
        {
            "scope": "#/properties/architecture",
            "label": "architecture",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const commons_DeploymentToNodeTypeRequirementView = {
    "elements": [
        {
            "scope": "#/properties/predicatesOn->commons_DOMLElement",
            "label": "predicatesOn->commons_DOMLElement",
            "type": "Control"
        },
        {
            "scope": "#/properties/identifier",
            "label": "identifier",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/property",
            "label": "property",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/validTypes",
            "label": "validTypes",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_VMImageView = {
    "elements": [
        {
            "scope": "#/properties/kind",
            "label": "kind",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/generatedVMs->infrastructure_VirtualMachine",
            "label": "generatedVMs->infrastructure_VirtualMachine",
            "type": "Control"
        },
        {
            "scope": "#/properties/uri",
            "label": "uri",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const optimization_CountObjectiveView = {
    "elements": [
        {
            "scope": "#/properties/kind",
            "label": "kind",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/property",
            "label": "property",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_InfrastructureLayerView = {
    "elements": [
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_NetworkInterfaceView = {
    "elements": [
        {
            "scope": "#/properties/endPoint",
            "label": "endPoint",
            "type": "Control"
        },
        {
            "scope": "#/properties/belongsTo->infrastructure_Network",
            "label": "belongsTo->infrastructure_Network",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/speed",
            "label": "speed",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const commons_DOMLElementView = {
    "elements": [
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const application_ApplicationComponentView = {
    "elements": [
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_SubnetView = {
    "elements": [
        {
            "scope": "#/properties/protocol",
            "label": "protocol",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/addressRange",
            "label": "addressRange",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/connectedIfaces->infrastructure_NetworkInterface",
            "label": "connectedIfaces->infrastructure_NetworkInterface",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const concrete_ComputingGroupView = {
    "elements": [
        {
            "scope": "#/properties/configurationScript",
            "label": "configurationScript",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/maps->infrastructure_ComputingGroup",
            "label": "maps->infrastructure_ComputingGroup",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_VirtualMachineView = {
    "elements": [
        {
            "scope": "#/properties/memory",
            "label": "memory",
            "type": "Control"
        },
        {
            "scope": "#/properties/cost",
            "label": "cost",
            "type": "Control"
        },
        {
            "scope": "#/properties/os",
            "label": "os",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/cpu",
            "label": "cpu",
            "type": "Control"
        },
        {
            "scope": "#/properties/storage",
            "label": "storage",
            "type": "Control"
        },
        {
            "scope": "#/properties/generatedFrom->infrastructure_VMImage",
            "label": "generatedFrom->infrastructure_VMImage",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        },
        {
            "scope": "#/properties/group->infrastructure_ComputingGroup",
            "label": "group->infrastructure_ComputingGroup",
            "type": "Control"
        },
        {
            "scope": "#/properties/sizeDescription",
            "label": "sizeDescription",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/architecture",
            "label": "architecture",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const concrete_VirtualMachineView = {
    "elements": [
        {
            "scope": "#/properties/configurationScript",
            "label": "configurationScript",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        },
        {
            "scope": "#/properties/maps->infrastructure_VirtualMachine",
            "label": "maps->infrastructure_VirtualMachine",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const infrastructure_AutoScalingGroupView = {
    "elements": [
        {
            "scope": "#/properties/groupedNodes->infrastructure_ComputingNode",
            "label": "groupedNodes->infrastructure_ComputingNode",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const application_SaaSDBMSView = {
    "elements": [
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/licenseCost",
            "label": "licenseCost",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const concrete_ConcreteInfrastructureView = {
    "elements": [
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const commons_EnumeratedRequirementView = {
    "elements": [
        {
            "scope": "#/properties/predicatesOn->commons_DOMLElement",
            "label": "predicatesOn->commons_DOMLElement",
            "type": "Control"
        },
        {
            "scope": "#/properties/identifier",
            "label": "identifier",
            "type": "Control"
        },
        {
            "scope": "#/properties/values",
            "label": "values",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/property",
            "label": "property",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const application_SaaSView = {
    "elements": [
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/licenseCost",
            "label": "licenseCost",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const commons_PropertyView = {
    "elements": [
        {
            "scope": "#/properties/reference->commons_DOMLElement",
            "label": "reference->commons_DOMLElement",
            "type": "Control"
        },
        {
            "scope": "#/properties/value",
            "label": "value",
            "type": "Control"
        },
        {
            "scope": "#/properties/key",
            "label": "key",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}


export const concrete_ConcreteElementView = {
    "elements": [
        {
            "scope": "#/properties/configurationScript",
            "label": "configurationScript",
            "type": "Control"
        },
        {
            "scope": "#/properties/name",
            "label": "name",
            "type": "Control"
        },
        {
            "scope": "#/properties/description",
            "label": "description",
            "type": "Control"
        },
        {
            "scope": "#/properties/contributesTo->commons_Requirement",
            "label": "contributesTo->commons_Requirement",
            "type": "Control"
        }
    ],
    "type": "VerticalLayout"
}