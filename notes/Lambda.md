# Lambda
## Serverless Functions - upload code and it runs without provisioning servers or architecture.
**Free Tier**: 
- 1 million requests per month
- 400k GB-seconds (111 GB-hours) of compute time per month
**Paid Tier**: 
- Arm Compute from $0.0000133334 to $0.0000106667 per GB-second ($0.0008 to $0.00064 per minute).
- arm64 RAM from $0.0000000017 to $0.0000001333 per millisecond. ($0.0001 to $0.007998 per minute.)
- x86 Compute from $0.0000166667 to $0.0000133334 per GB-second ($0.001 to $0.0008 per minute).
- x86 RAM from $0.0000000021 to $0.0000001667 per millisecond. ($0.000126 to $0.01 per minute.)
- Ephemeral Storage: $0.0000000309 per GB-second ($0.000001854 per minute)
**Encryption In Motion**: HTTPS - you'll need to use HTTPS endpoints in your Lambda Function's code.
**Ownership**: Amazon
**Segment**: Serverless Functions
**Type**: PaaS
**Supports 7 runtimes**: 
- Ruby
- Python
- Java
- NodeJS
- C#
- PowerShell
- Go
**Notes**: 
- Code packages are called Lambda Functions, regardless of if they contain any software functions.
- Adjustable duration timeout up to 15 min and memory size up to 3008 MB.
- Good fit for short-running tasks where you don't need to customize the OS or environment. For longer than 15 minutes, more RAM, or a custom OS environment, consider Fargate/ECS
- Can be triggered from SDK or multiple services (S3, API Gateway, DynamoDB, et cetera). Function URLs allow direct Internet access to trigger a Lambda function - an API Gateway and Route53 redirect are no longer needed.
- Use no VPC by default, but can use a VPC to interact with your other services, like RDS.
- Can scale to 1000 (default) concurrent functions. Can increase this default as an AWS Service Limit increase.
- Cold Starts - if not used recently there will be a startup delay.
