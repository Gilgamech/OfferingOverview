# Storage Gateway
## Data transfer agent deployed on a VM or hardware device in your network, or as EC2 or VMWare Cloud VM.
**Free Tier**: 
- Data Transfer from your gateway appliance to the AWS Storage Gateway service.
- Data Transfer from the AWS Storage Gateway service to an Amazon EC2-based gateway appliance in the same region.
- Transfer Cost: The first 100 GB/month into each AWS account.
**Transfer Cost**: 
- $0.01 per GB up to a maximum of $125.00 per gateway per month (12.5 TB) - after the first 100 GB/month into the AWS account. Billed as Amazon S3 requests for S3 Gateways.
- Data Transfer from the AWS Storage Gateway service to your on-premises gateway appliance 
- TB/Month - per GB - $/1kGB/Month
- 9.999 - $0.09 - $899.91
- 40 - $0.085  - $3,400
- 100 - $0.07  - $7k
- 150+ - $0.05  - $7,500
- Data Transfer from the AWS Storage Gateway service to your gateway appliance in other regions is $0.02 per GB currently.
**S3 Gateway**: 
- Storage Cost: S3 rate
**FSx Gateway**: 
- Gateway Cost: $0.69
- Storage Cost: FSx for Windows rate
**Tape Gateway**: 
- (per GB-month): Storage - Retrieval - Early Deletion
- Standard: $0.023 - $0.01 - (free)
- Glacier Flexible Retrieval: $0.0036 - $0.02 - $0.0108 (Prorated across 90 days.)
- Glacier Deep Archive: $0.00099 - $0.0032 - $0.00099 (Prorated across 180 days.)
- Archival: Free (what does this entail?)
**Volume Gateway**: 
- Storage Cost: $0.023 per GB-month of data stored.
- EBS Snapshot storage - Stored and billed as Amazon EBS snapshots).
**Ownership**: Amazon
**Type**: IaaS
**Notes**: 
- The AWS Hardware Appliance is available exclusively through resellers, including CDW.
