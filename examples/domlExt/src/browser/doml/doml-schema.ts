export const domlSchema = {
    "definitions": {
        "commons_RangedRequirement": {
            "title": "commons_RangedRequirement",
            "type": "object",
            "properties": {
                "predicatesOn->commons_DOMLElement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "DOMLELEMENT_1",
                            "DOMLELEMENT_2",
                            "DOMLELEMENT_3",
                            "DOMLELEMENT_4"
                        ]
                    }
                },
                "identifier": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "min": {
                    "type": "number"
                },
                "max": {
                    "type": "number"
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "property": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "commons_RangedRequirement"
                }
            },
            "$id": "#commons_rangedRequirement"
        },
        "commons_DeploymentRequirement": {
            "title": "commons_DeploymentRequirement",
            "type": "object",
            "properties": {
                "predicatesOn->commons_DOMLElement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "DOMLELEMENT_1",
                            "DOMLELEMENT_2",
                            "DOMLELEMENT_3",
                            "DOMLELEMENT_4"
                        ]
                    }
                },
                "identifier": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "property": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "commons_DeploymentRequirement"
                }
            },
            "$id": "#commons_deploymentRequirement"
        },
        "commons_DeploymentToSpecificNodeRequirement": {
            "title": "commons_DeploymentToSpecificNodeRequirement",
            "type": "object",
            "properties": {
                "predicatesOn->commons_DOMLElement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "DOMLELEMENT_1",
                            "DOMLELEMENT_2"
                        ]
                    }
                },
                "identifier": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "validElements->infrastructure_InfrastructureElement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "INFRASTRUCTUREELEMENT_1",
                            "INFRASTRUCTUREELEMENT_2",
                            "INFRASTRUCTUREELEMENT_3",
                            "INFRASTRUCTUREELEMENT_4"
                        ]
                    }
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "property": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "commons_DeploymentToSpecificNodeRequirement"
                }
            },
            "$id": "#commons_deploymentToSpecificNodeRequirement"
        },
        "infrastructure_InfrastructureElement": {
            "title": "infrastructure_InfrastructureElement",
            "type": "object",
            "properties": {
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_InfrastructureElement"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_infrastructureElement"
        },
        "infrastructure_ComputingGroup": {
            "title": "infrastructure_ComputingGroup",
            "type": "object",
            "properties": {
                "groupedNodes->infrastructure_ComputingNode": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "COMPUTINGNODE_1",
                            "COMPUTINGNODE_2"
                        ]
                    }
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_ComputingGroup"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3",
                            "REQUIREMENT_4"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_computingGroup"
        },
        "commons_Requirement": {
            "title": "commons_Requirement",
            "type": "object",
            "properties": {
                "predicatesOn->commons_DOMLElement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "DOMLELEMENT_1",
                            "DOMLELEMENT_2",
                            "DOMLELEMENT_3"
                        ]
                    }
                },
                "identifier": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "property": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "commons_Requirement"
                }
            },
            "$id": "#commons_requirement"
        },
        "optimization_OptimizationLayer": {
            "title": "optimization_OptimizationLayer",
            "type": "object",
            "properties": {
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "optimization_OptimizationLayer"
                },
                "startingHint->commons_Configuration": {
                    "type": "string",
                    "enum": [
                        "CONFIGURATION_1",
                        "CONFIGURATION_2",
                        "CONFIGURATION_3",
                        "CONFIGURATION_4"
                    ]
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#optimization_optimizationLayer"
        },
        "infrastructure_ComputingNodeGenerator": {
            "title": "infrastructure_ComputingNodeGenerator",
            "type": "object",
            "properties": {
                "kind": {
                    "default": "SCRIPT",
                    "type": "string",
                        "enum": [
                            "SCRIPT",
                            "IMAGE"
                        ]
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_ComputingNodeGenerator"
                },
                "uri": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_computingNodeGenerator"
        },
        "infrastructure_SecurityGroup": {
            "title": "infrastructure_SecurityGroup",
            "type": "object",
            "properties": {
                "groupedNodes->infrastructure_ComputingNode": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "COMPUTINGNODE_1",
                            "COMPUTINGNODE_2"
                        ]
                    }
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_SecurityGroup"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_securityGroup"
        },
        "concrete_Network": {
            "title": "concrete_Network",
            "type": "object",
            "properties": {
                "configurationScript": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "maps->infrastructure_Network": {
                    "type": "string",
                    "enum": [
                        "NETWORK_1",
                        "NETWORK_2",
                        "NETWORK_3",
                        "NETWORK_4",
                        "NETWORK_5"
                    ]
                },
                "typeId": {
                    "const": "concrete_Network"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#concrete_network"
        },
        "application_SoftwareInterface": {
            "title": "application_SoftwareInterface",
            "type": "object",
            "properties": {
                "endPoint": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "application_SoftwareInterface"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#application_softwareInterface"
        },
        "infrastructure_Container": {
            "title": "infrastructure_Container",
            "type": "object",
            "properties": {
                "memory": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "cost": {
                    "type": "number"
                },
                "os": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "cpu": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "storage": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2"
                        ]
                    }
                },
                "generatedFrom->infrastructure_ContainerImage": {
                    "type": "string",
                    "enum": [
                        "CONTAINERIMAGE_1",
                        "CONTAINERIMAGE_2",
                        "CONTAINERIMAGE_3"
                    ]
                },
                "group->infrastructure_ComputingGroup": {
                    "type": "string",
                    "enum": [
                        "COMPUTINGGROUP_1",
                        "COMPUTINGGROUP_2"
                    ]
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_Container"
                },
                "host->infrastructure_ComputingNode": {
                    "type": "string",
                    "enum": [
                        "COMPUTINGNODE_1",
                        "COMPUTINGNODE_2"
                    ]
                },
                "architecture": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                }
            },
            "$id": "#infrastructure_container"
        },
        "infrastructure_Location": {
            "title": "infrastructure_Location",
            "type": "object",
            "required": ["region"],
            "properties": {
                "zone": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_Location"
                },
                "region": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                }
            },
            "$id": "#infrastructure_location"
        },
        "infrastructure_ContainerImage": {
            "title": "infrastructure_ContainerImage",
            "type": "object",
            "properties": {
                "generatedContainers->infrastructure_Container": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "CONTAINER_1",
                            "CONTAINER_2",
                            "CONTAINER_3",
                            "CONTAINER_4",
                            "CONTAINER_5"
                        ]
                    }
                },
                "kind": {
                    "default": "SCRIPT",
                    "type": "string",
                        "enum": [
                            "SCRIPT",
                            "IMAGE"
                        ]
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_ContainerImage"
                },
                "uri": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3",
                            "REQUIREMENT_4"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_containerImage"
        },
        "commons_DOMLModel": {
            "title": "commons_DOMLModel",
            "type": "object",
            "required": [
                "modelname",
                "id",
                "version"
            ],
            "properties": {
                "activeInfrastructure->concrete_ConcreteInfrastructure": {
                    "type": "string",
                    "enum": [
                        "CONCRETEINFRASTRUCTURE_1",
                        "CONCRETEINFRASTRUCTURE_2"
                    ]
                },
                "modelname": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "activeConfiguration->commons_Configuration": {
                    "type": "string",
                    "enum": [
                        "CONFIGURATION_1",
                        "CONFIGURATION_2",
                        "CONFIGURATION_3",
                        "CONFIGURATION_4"
                    ]
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "commons_DOMLModel"
                },
                "id": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "version": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#commons_dOMLModel"
        },
        "optimization_MeasurableObjective": {
            "title": "optimization_MeasurableObjective",
            "type": "object",
            "required": ["kind"],
            "properties": {
                "kind": {
                    "default": "Max",
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "property": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "optimization_MeasurableObjective"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2"
                        ]
                    }
                }
            },
            "$id": "#optimization_measurableObjective"
        },
        "application_ApplicationLayer": {
            "title": "application_ApplicationLayer",
            "type": "object",
            "properties": {
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "application_ApplicationLayer"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2"
                        ]
                    }
                }
            },
            "$id": "#application_applicationLayer"
        },
        "commons_Deployment": {
            "title": "commons_Deployment",
            "type": "object",
            "properties": {
                "component->application_ApplicationComponent": {
                    "type": "string",
                    "enum": [
                        "APPLICATIONCOMPONENT_1",
                        "APPLICATIONCOMPONENT_2",
                        "APPLICATIONCOMPONENT_3",
                        "APPLICATIONCOMPONENT_4"
                    ]
                },
                "typeId": {
                    "const": "commons_Deployment"
                },
                "node->infrastructure_InfrastructureElement": {
                    "type": "string",
                    "enum": [
                        "INFRASTRUCTUREELEMENT_1",
                        "INFRASTRUCTUREELEMENT_2",
                        "INFRASTRUCTUREELEMENT_3",
                        "INFRASTRUCTUREELEMENT_4"
                    ]
                }
            },
            "$id": "#commons_deployment"
        },
        "infrastructure_Storage": {
            "title": "infrastructure_Storage",
            "type": "object",
            "properties": {
                "cost": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_Storage"
                },
                "storage": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_storage"
        },
        "optimization_OptimizationObjective": {
            "title": "optimization_OptimizationObjective",
            "type": "object",
            "required": ["kind"],
            "properties": {
                "kind": {
                    "default": "Max",
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "property": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "optimization_OptimizationObjective"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3",
                            "REQUIREMENT_4"
                        ]
                    }
                }
            },
            "$id": "#optimization_optimizationObjective"
        },
        "concrete_FunctionAsAService": {
            "title": "concrete_FunctionAsAService",
            "type": "object",
            "properties": {
                "configurationScript": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "maps->infrastructure_FunctionAsAService": {
                    "type": "string",
                    "enum": [
                        "FUNCTIONASASERVICE_1",
                        "FUNCTIONASASERVICE_2",
                        "FUNCTIONASASERVICE_3"
                    ]
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "concrete_FunctionAsAService"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#concrete_functionAsAService"
        },
        "concrete_Storage": {
            "title": "concrete_Storage",
            "type": "object",
            "properties": {
                "configurationScript": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "maps->infrastructure_Storage": {
                    "type": "string",
                    "enum": [
                        "STORAGE_1",
                        "STORAGE_2"
                    ]
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "concrete_Storage"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#concrete_storage"
        },
        "infrastructure_FunctionAsAService": {
            "title": "infrastructure_FunctionAsAService",
            "type": "object",
            "properties": {
                "cost": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_FunctionAsAService"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3",
                            "REQUIREMENT_4"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_functionAsAService"
        },
        "commons_Configuration": {
            "title": "commons_Configuration",
            "type": "object",
            "properties": {
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "commons_Configuration"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2"
                        ]
                    }
                }
            },
            "$id": "#commons_configuration"
        },
        "infrastructure_PhysicalComputingNode": {
            "title": "infrastructure_PhysicalComputingNode",
            "type": "object",
            "properties": {
                "memory": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "cost": {
                    "type": "number"
                },
                "group->infrastructure_ComputingGroup": {
                    "type": "string",
                    "enum": [
                        "COMPUTINGGROUP_1",
                        "COMPUTINGGROUP_2",
                        "COMPUTINGGROUP_3",
                        "COMPUTINGGROUP_4"
                    ]
                },
                "os": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "cpu": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_PhysicalComputingNode"
                },
                "storage": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "architecture": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_physicalComputingNode"
        },
        "application_DBMS": {
            "title": "application_DBMS",
            "type": "object",
            "properties": {
                "isPersistent": {
                    "default": false,
                    "type": "boolean"
                },
                "configFile": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "consumedInterfaces->application_SoftwareInterface": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "SOFTWAREINTERFACE_1",
                            "SOFTWAREINTERFACE_2",
                            "SOFTWAREINTERFACE_3",
                            "SOFTWAREINTERFACE_4",
                            "SOFTWAREINTERFACE_5"
                        ]
                    }
                },
                "typeId": {
                    "const": "application_DBMS"
                },
                "licenseCost": {
                    "type": "number"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#application_dBMS"
        },
        "concrete_RuntimeProvider": {
            "title": "concrete_RuntimeProvider",
            "type": "object",
            "properties": {
                "providedNetworks->concrete_Network": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "NETWORK_1",
                            "NETWORK_2",
                            "NETWORK_3"
                        ]
                    }
                },
                "faas->concrete_FunctionAsAService": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "FUNCTIONASASERVICE_1",
                            "FUNCTIONASASERVICE_2",
                            "FUNCTIONASASERVICE_3",
                            "FUNCTIONASASERVICE_4",
                            "FUNCTIONASASERVICE_5"
                        ]
                    }
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "storages->concrete_Storage": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "STORAGE_1",
                            "STORAGE_2",
                            "STORAGE_3",
                            "STORAGE_4"
                        ]
                    }
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "concrete_RuntimeProvider"
                },
                "supportedGroups->concrete_ComputingGroup": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "COMPUTINGGROUP_1",
                            "COMPUTINGGROUP_2",
                            "COMPUTINGGROUP_3"
                        ]
                    }
                },
                "providedVMs->concrete_VirtualMachine": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "VIRTUALMACHINE_1",
                            "VIRTUALMACHINE_2",
                            "VIRTUALMACHINE_3",
                            "VIRTUALMACHINE_4"
                        ]
                    }
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3",
                            "REQUIREMENT_4"
                        ]
                    }
                }
            },
            "$id": "#concrete_runtimeProvider"
        },
        "commons_DeploymentToNodeWithPropertyRequirement": {
            "title": "commons_DeploymentToNodeWithPropertyRequirement",
            "type": "object",
            "properties": {
                "predicatesOn->commons_DOMLElement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "DOMLELEMENT_1",
                            "DOMLELEMENT_2"
                        ]
                    }
                },
                "identifier": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "min": {
                    "type": "number"
                },
                "max": {
                    "type": "number"
                },
                "values": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "property": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "commons_DeploymentToNodeWithPropertyRequirement"
                }
            },
            "$id": "#commons_deploymentToNodeWithPropertyRequirement"
        },
        "infrastructure_Network": {
            "title": "infrastructure_Network",
            "type": "object",
            "properties": {
                "protocol": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "addressRange": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_Network"
                },
                "connectedIfaces->infrastructure_NetworkInterface": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "NETWORKINTERFACE_1",
                            "NETWORKINTERFACE_2"
                        ]
                    }
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_network"
        },
        "optimization_OptimizationSolution": {
            "title": "optimization_OptimizationSolution",
            "type": "object",
            "properties": {
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "optimization_OptimizationSolution"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#optimization_optimizationSolution"
        },
        "application_SoftwarePackage": {
            "title": "application_SoftwarePackage",
            "type": "object",
            "properties": {
                "isPersistent": {
                    "default": false,
                    "type": "boolean"
                },
                "configFile": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "consumedInterfaces->application_SoftwareInterface": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "SOFTWAREINTERFACE_1",
                            "SOFTWAREINTERFACE_2",
                            "SOFTWAREINTERFACE_3",
                            "SOFTWAREINTERFACE_4",
                            "SOFTWAREINTERFACE_5"
                        ]
                    }
                },
                "typeId": {
                    "const": "application_SoftwarePackage"
                },
                "licenseCost": {
                    "type": "number"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3",
                            "REQUIREMENT_4"
                        ]
                    }
                }
            },
            "$id": "#application_softwarePackage"
        },
        "infrastructure_AvailabilityGroup": {
            "title": "infrastructure_AvailabilityGroup",
            "type": "object",
            "properties": {
                "groupedNodes->infrastructure_ComputingNode": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "COMPUTINGNODE_1",
                            "COMPUTINGNODE_2",
                            "COMPUTINGNODE_3",
                            "COMPUTINGNODE_4"
                        ]
                    }
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_AvailabilityGroup"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_availabilityGroup"
        },
        "infrastructure_ComputingNode": {
            "title": "infrastructure_ComputingNode",
            "type": "object",
            "properties": {
                "memory": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "cost": {
                    "type": "number"
                },
                "group->infrastructure_ComputingGroup": {
                    "type": "string",
                    "enum": [
                        "COMPUTINGGROUP_1",
                        "COMPUTINGGROUP_2",
                        "COMPUTINGGROUP_3",
                        "COMPUTINGGROUP_4",
                        "COMPUTINGGROUP_5"
                    ]
                },
                "os": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "cpu": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_ComputingNode"
                },
                "storage": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "architecture": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_computingNode"
        },
        "commons_DeploymentToNodeTypeRequirement": {
            "title": "commons_DeploymentToNodeTypeRequirement",
            "type": "object",
            "properties": {
                "predicatesOn->commons_DOMLElement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "DOMLELEMENT_1",
                            "DOMLELEMENT_2",
                            "DOMLELEMENT_3"
                        ]
                    }
                },
                "identifier": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "property": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "commons_DeploymentToNodeTypeRequirement"
                },
                "validTypes": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                }
            },
            "$id": "#commons_deploymentToNodeTypeRequirement"
        },
        "infrastructure_VMImage": {
            "title": "infrastructure_VMImage",
            "type": "object",
            "properties": {
                "kind": {
                    "default": "SCRIPT",
                    "type": "string",
                        "enum": [
                            "SCRIPT",
                            "IMAGE"
                        ]
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_VMImage"
                },
                "generatedVMs->infrastructure_VirtualMachine": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "VIRTUALMACHINE_1",
                            "VIRTUALMACHINE_2",
                            "VIRTUALMACHINE_3",
                            "VIRTUALMACHINE_4",
                            "VIRTUALMACHINE_5"
                        ]
                    }
                },
                "uri": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3",
                            "REQUIREMENT_4"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_vMImage"
        },
        "optimization_CountObjective": {
            "title": "optimization_CountObjective",
            "type": "object",
            "required": ["kind"],
            "properties": {
                "kind": {
                    "default": "Max",
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "property": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "optimization_CountObjective"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3",
                            "REQUIREMENT_4"
                        ]
                    }
                }
            },
            "$id": "#optimization_countObjective"
        },
        "infrastructure_InfrastructureLayer": {
            "title": "infrastructure_InfrastructureLayer",
            "type": "object",
            "properties": {
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_InfrastructureLayer"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_infrastructureLayer"
        },
        "infrastructure_NetworkInterface": {
            "title": "infrastructure_NetworkInterface",
            "type": "object",
            "properties": {
                "endPoint": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "belongsTo->infrastructure_Network": {
                    "type": "string",
                    "enum": [
                        "NETWORK_1",
                        "NETWORK_2",
                        "NETWORK_3",
                        "NETWORK_4"
                    ]
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_NetworkInterface"
                },
                "speed": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_networkInterface"
        },
        "commons_DOMLElement": {
            "title": "commons_DOMLElement",
            "type": "object",
            "properties": {
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "commons_DOMLElement"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3",
                            "REQUIREMENT_4"
                        ]
                    }
                }
            },
            "$id": "#commons_dOMLElement"
        },
        "application_ApplicationComponent": {
            "title": "application_ApplicationComponent",
            "type": "object",
            "properties": {
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "application_ApplicationComponent"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3",
                            "REQUIREMENT_4",
                            "REQUIREMENT_5"
                        ]
                    }
                }
            },
            "$id": "#application_applicationComponent"
        },
        "infrastructure_Subnet": {
            "title": "infrastructure_Subnet",
            "type": "object",
            "properties": {
                "protocol": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "addressRange": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_Subnet"
                },
                "connectedIfaces->infrastructure_NetworkInterface": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "NETWORKINTERFACE_1",
                            "NETWORKINTERFACE_2"
                        ]
                    }
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_subnet"
        },
        "concrete_ComputingGroup": {
            "title": "concrete_ComputingGroup",
            "type": "object",
            "properties": {
                "configurationScript": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "concrete_ComputingGroup"
                },
                "maps->infrastructure_ComputingGroup": {
                    "type": "string",
                    "enum": [
                        "COMPUTINGGROUP_1",
                        "COMPUTINGGROUP_2"
                    ]
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2"
                        ]
                    }
                }
            },
            "$id": "#concrete_computingGroup"
        },
        "infrastructure_VirtualMachine": {
            "title": "infrastructure_VirtualMachine",
            "type": "object",
            "properties": {
                "memory": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "cost": {
                    "type": "number"
                },
                "os": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "cpu": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "storage": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "generatedFrom->infrastructure_VMImage": {
                    "type": "string",
                    "enum": [
                        "VMIMAGE_1",
                        "VMIMAGE_2",
                        "VMIMAGE_3",
                        "VMIMAGE_4",
                        "VMIMAGE_5"
                    ]
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2"
                        ]
                    }
                },
                "group->infrastructure_ComputingGroup": {
                    "type": "string",
                    "enum": [
                        "COMPUTINGGROUP_1",
                        "COMPUTINGGROUP_2"
                    ]
                },
                "sizeDescription": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_VirtualMachine"
                },
                "architecture": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                }
            },
            "$id": "#infrastructure_virtualMachine"
        },
        "concrete_VirtualMachine": {
            "title": "concrete_VirtualMachine",
            "type": "object",
            "properties": {
                "configurationScript": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "concrete_VirtualMachine"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3",
                            "REQUIREMENT_4"
                        ]
                    }
                },
                "maps->infrastructure_VirtualMachine": {
                    "type": "string",
                    "enum": [
                        "VIRTUALMACHINE_1",
                        "VIRTUALMACHINE_2"
                    ]
                }
            },
            "$id": "#concrete_virtualMachine"
        },
        "infrastructure_AutoScalingGroup": {
            "title": "infrastructure_AutoScalingGroup",
            "type": "object",
            "properties": {
                "groupedNodes->infrastructure_ComputingNode": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "COMPUTINGNODE_1",
                            "COMPUTINGNODE_2"
                        ]
                    }
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "infrastructure_AutoScalingGroup"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2"
                        ]
                    }
                }
            },
            "$id": "#infrastructure_autoScalingGroup"
        },
        "application_SaaSDBMS": {
            "title": "application_SaaSDBMS",
            "type": "object",
            "properties": {
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "application_SaaSDBMS"
                },
                "licenseCost": {
                    "type": "number"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#application_saaSDBMS"
        },
        "concrete_ConcreteInfrastructure": {
            "title": "concrete_ConcreteInfrastructure",
            "type": "object",
            "properties": {
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "concrete_ConcreteInfrastructure"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#concrete_concreteInfrastructure"
        },
        "commons_EnumeratedRequirement": {
            "title": "commons_EnumeratedRequirement",
            "type": "object",
            "properties": {
                "predicatesOn->commons_DOMLElement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "DOMLELEMENT_1",
                            "DOMLELEMENT_2",
                            "DOMLELEMENT_3"
                        ]
                    }
                },
                "identifier": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "values": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "property": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "commons_EnumeratedRequirement"
                }
            },
            "$id": "#commons_enumeratedRequirement"
        },
        "application_SaaS": {
            "title": "application_SaaS",
            "type": "object",
            "properties": {
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "application_SaaS"
                },
                "licenseCost": {
                    "type": "number"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3",
                            "REQUIREMENT_4",
                            "REQUIREMENT_5"
                        ]
                    }
                }
            },
            "$id": "#application_saaS"
        },
        "commons_Property": {
            "title": "commons_Property",
            "type": "object",
            "properties": {
                "typeId": {
                    "const": "commons_Property"
                },
                "reference->commons_DOMLElement": {
                    "type": "string",
                    "enum": [
                        "DOMLELEMENT_1",
                        "DOMLELEMENT_2",
                        "DOMLELEMENT_3",
                        "DOMLELEMENT_4"
                    ]
                },
                "value": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "key": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                }
            },
            "$id": "#commons_property"
        },
        "concrete_ConcreteElement": {
            "title": "concrete_ConcreteElement",
            "type": "object",
            "properties": {
                "configurationScript": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "name": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "description": {
                    "minLength": 1,
                    "type": "string",
                    "maxLength": 100
                },
                "typeId": {
                    "const": "concrete_ConcreteElement"
                },
                "contributesTo->commons_Requirement": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "REQUIREMENT_1",
                            "REQUIREMENT_2",
                            "REQUIREMENT_3"
                        ]
                    }
                }
            },
            "$id": "#concrete_concreteElement"
        }
    }
}