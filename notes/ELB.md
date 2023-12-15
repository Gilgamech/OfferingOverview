# ELB

## Elastic Load Balancers - split traffic from one destination across numerous servers.

**Free Tier**:

- 750 hours per month shared between Classic and Application load balancers. ($18.75 value)
- 15 GB of data processing for Classic load balancers. ($0.12 value)
- 15 LCUs for ALBs. ($0.12 value)

**Paid Tier**:

- Service LB-hour Capacity Unit / GB data processed
- ALB $0.0225 $0.008
- Outpost ALB $0.0225 $0.00
- NLB $0.0225 $0.006
- GLB $0.0125 $0.004
- CLB $0.025 $0.008

**Capacity Units**:

- Service Unit New connections per second Active connections Data transfer
- ALB LCU 25 3k per minute 1 GB per hour to targets, except 0.4 GB per hour for Lambda functions as targets. Also 1k rule evaluations per second.
- NLB TCP NLCU 800 100k 1 GB per hour to targets.
- NLB UDP NLCU 400 50k 1 GB per hour to targets.
- NLB TLS NLCU 50 3k 1 GB per hour to targets.
- GLB GLCU 600 60k 1 GB per hour to targets.
- CLB GB data 0 0 1 GB to targets.

**Encryption**: All can hold SSL certs
**Ownership**: Amazon
**Type**: IaaS
**Notes**:

- 4 flavors: Network, Application, Classic, Gateway

**Application**:

- Has Listeners, Rules, and Target Groups
- For HTTP(S) and is good for web apps.
- Can attach WAF. (Goes in front?)
- Advanced routing rules (can route based on subdomain header, path, and other HTTP(S) info.)
- Can have sticky sessions which are remembered by cookie.

**Network**:

- Has Listeners and Target Groups but is a 'lawless place' without support for Rules.
- For TCP/UDP and is good for high throughput i.e. video games.
- Can't have sticky sessions?

**Classic**:

- Has Listeners with EC2 instances registered directly.
- For legacy and is being depreciated
- Can have sticky sessions which are remembered by cookie.
- Must have at least 2 AZs
- Cannot be cross-region.
- X-Forwarded-For header has source IP.

**Gateway**:

- Traffic is forwarded to an appliance for inspection.
- Source and Destination see traffic unchanged.
- Appliance can drop packet if it fails inspection.
- Works with network inspection appliances on the Marketplace.
- Simplifies how applications can securely exchange traffic with across VPC boundaries with Gateway Load Balancer Endpoint (GWLBE), a new type of VPC Endpoint powered by AWS PrivateLink.
