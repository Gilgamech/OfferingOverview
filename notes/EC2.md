# EC2
## Servers as a service
**Free Tier**: 
- 750 hours of Linux and Windows t2.micro instances each month for one year. (t3.micro for the regions in which t2.micro is unavailable.) (~$230 value total)
- Data transfer into an EC2 instance from the Internet
- Data transfer from an EC2 instance out to CloudFront.
- First Elastic IP attached to an EC2 instance, and the first 100 remaps. ($10 value)
- Placement Groups
- Community AMIs
**Paid Tier**: 
- On-demand server time ranges from $0.0255 to $0.3328 per hour.
- Data transfer from an EC2 instance out to the Internet starts at $0.09/GB for the first 10 TB/month.
- Data transfer between regions is generally $0.02 per GB.
- Additional Elastic IPs attached to an EC2 instance are prorated at $0.005/hour ($3.60/month) while powered on.
- Elastic IPs not attached to any EC2 instance are prorated at $0.005/hour ($3.60/month) while detached.
- Elastic IP remaps beyond the first 100/month are $0.10 each.
**Ownership**: Amazon
[Website](https://aws.amazon.com/ec2/)
**Type**: IaaS
**Instance Types**: 
- General Purpose
- Compute Optimized
- Memory Optimized
- Accelerated Optimized (FPGA, ASIC, et cetera)
- Storage Optimized
**Notes**: 
- Instance sizes generally double in cost and RAM, maybe network and any attached storage. The majority of server classes have 2 CPUs.
- Placement Groups let you choose the logical placement of instances, to optimize communication, performance, or durability.
- UserData field lets you add a script that will run on EC2 instance launch.
- MetaData holds info about the current instance, and can be reached at http://169.254.169.254/latest/meta-data/.
- Instance Profiles are a list of EC2 instances which can use the same IAM role for AWS access.
- T2, T3, and T4 instance classes have a CPU Credit system.
- Service occasionally uses paravirtualization (using non-virtualized physical assets in a virtual system) for performance reasons - when this occurs and the underlying VM or asset host requires maintenance, the virtual machine (or asset) can't be hot-migrated to another host, and AWS will send you an email notification that the VM requires a reboot by a deadline within a few days or weeks. This is necessary to separate the VM from the physical asset, to move either the VM or asset (or its data) to another physical host, or replace the physical device with a virtualized replacement. Any full OS reboot from the AWS console will satisfy this requirement, and there is a notification in the Personal Health Dashboard that will clear once the requirement is satisfied. This type of notification is seen less frequently than in prior years, as virtual asset performance now often meets and sometimes exceeds physical asset performance.
**AMI (Amazon Machine Image)**: 
- Referenced by their AMI ID.
- Can be created from an EC2 instance that's running or stopped.
- AMI Marketplace has free, and paid subscriptions to, AMIs maintained by third-party vendors.
- Community AMIs has free AMIs maintained by community members.
**AMIs hold the info needed to launch an instance**: 
- Template for the root volume
- Launch permissions controlling which AWS accounts can launch instances from the AMI.
- Mapping to a block device, specifying volumes to attach on launch.
**AMIs are region specific**: 
- Use the Copy AMI feature to copy AMIs to another region.
- The same AMI will have a different AMI (and options like Architecture) in different regions.
**ASG (Auto-scaling groups)**: 
- A collection of EC2 instances, grouped for scaling and management.
- Sized based on Min, Max, and Desired capacities.
**ASG Health Checks**: 
- Determine the current state of an EC2 instance.
- Can be run against either the EC2 instance, or an ELB.
**ASG Launch Configurations**: 
- Holds the configuration values used by Auto Scaling to launch new instances, such as AMI ID, Instance Type, Role.
- Read-only after creation. Can be cloned (which can be edited?)
- Must be manually edited by updating the Auto Scaling settings.
**ASG scaling types**: 
- Out: horizontal scaling
- Up: vertical scaling
- In: horizontal downscaling
- Down: vertical downscaling (unofficial)
**ASG scaling policies**: 
- Simple Scaling: scales when an alarm is breached.
- Target Scaling: scales when a metric is breached. (i.e. Average CPU Utilization > 75%)
- Scaling Policy with Steps: lets you establish incremental levels of action for alarm breaches.
**NAT Instances**: 
- Requires disabling source and destination checks on the instance. (Is this because it won't respond as it's NATted?)
- Must be in a public subnet, or must have a route out of a private subnet. (Public subnets can route to the Internet.)
- Instance size determines traffic capacity. (Is this tautological?)
- HA possible through a mix of ASG, multiple subnets in different AZs, and scripted failover.
**NAT Gateway**: 
- Does not requires disabling source and destination checks on the instance.
- Redundant inside an AZ and can survive the failure of an EC2 instance. (Needs clarification)
- Can only have 1 in each AZ, and they can't cross AZs
- Scales from 5GB/s to 45 GB/s.
- Recommended for enterprise systems.
- Automatically assigned a public IP address.
- SaaS-ish - no need to patch.
- Must update Route Tables.
- Resources sharing a gateway will lose Internet access if the gateway goes down, so multiple gateways in multiple AZs are recommended, with Route Tables configured appropriately.
**On-demand pricing model**: 
- Least commitment
- Uninterruptible. (Any necessary reboots for host maintenance will notify you days or weeks in advance.)
- Flexible
- Pay per hour
- Good for short-term projects or new apps.
**Reserved Instances (RI) pricing model**: 
- Highest commitment (up to 3 years).
- Pay upfront for 1 or 3 years use of a specific server class.
- Payment options: All Upfront, Partial Upfront, and No Upfront.
- Not tied to a specific server - if you RI a t2.xlarge for a year and delete the server, then build another t2.xlarge for a different project, the new one will inherit the RI.
- Can resell unused prepayment on the RI Marketplace
- Uninterruptible. (Any necessary reboots for host maintenance will notify you days or weeks in advance.)
- Good for predictable projects or long-term apps.
- Standard Class: Up to 75% off compared to on-demand. Can't change RI attributes.
- Convertible Class: Up to 54% off compared to on-demand. Allows increasing RI attributes.
- Scheduled Class: Reserve specific time periods like weekly for a few hours. Savings vary.
**Spot pricing model**: 
- Up to 90% off compared to on-demand.
- Interruptible - AWS might terminate the server at any time. They'll refund any partial hours of use when they terminate a server.
- Good for non-critical asynchronous background jobs.
**Dedicated pricing model**: 
- Dedicated host servers.
- Most expensive.
- Can be on-demand or reserved (up to 70% off).
- Good for meeting corporate hardware isolation requirements.
