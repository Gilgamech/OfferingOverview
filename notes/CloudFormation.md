# CloudFormation
## Automate the provisioning of resources and Infrastructure As Code.
**Free Tier**: 
- All operations for AWS:, Alexa:, and Custom: namespaces. Just pay for the resources.
- 1k 3rd party handler operations per month per account, including hook and 3rd party operations. ($0.90 value)
**Paid Tier**: 
- 3rd party handler operation: $0.0009 each
- 3rd party handler operation duration: $0.00008 per second.
Encryption: are templates encrypted?
**Ownership**: Amazon
**Segment**: IaC
**Type**: IaaS
**Notes**: 
- JSON or YAML
- Errors rollback with message 'ROLLBACK_IN_PROGRESS'
CloudFormation Templates: 
- Must define at least one resource.
- Larger than 51,200 bytes (0.05 MB) must be imported from S3 bucket
- Can be nested into NestedLayers.
**Fields**: 
- MetaData: extra info
- Description: of the template
- Parameters: user inputs
- Transforms: Macros to modify data.
- Outputs: Become inputs into other stacks.
- Mappings: key value lookup table
- Resources: define what to provision (minimum 1)
- Conditions: control if resources get created and/or properties assigned.
