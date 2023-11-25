# Route53
## DNS provider, registrar, and domain manager.
**Free Tier**: 
- Alias queries are free when the alias target is an AWS resource outside Route53.
- Health checks on up to 50 AWS endpoints
- Public DNS query logs
- There is a limit of 20 domain name registrations per account. Contact Support to request a higher limit.
**Paid Tier**: 
- Domain name rates vary as part of the public market.
- $0.50/month per hosted zone for the first 25 hosted zones and $0.10/month foreach additional zone.
- $50.00/month per policy record
- $0.125/hour per ENI for Resolver Endpoints.
- $0.0005 per month (prorated hourly)
- $2.50 per hour for every Recovery Controller cluster configured.
- $0.045 foreach readiness check
**(table)Query rates**: 
- Health Checks AWS Endpoints Non-AWS Endpoints
- Basic Health Checks $0.50* per health check / month $0.75 per health check / month
- Optional health checks: $1.00 / month per optional feature $2.00 / month per optional feature
**Ownership**: Amazon
**Segment**: DNS
**Type**: SaaS
**Notes**: 
- Traffic Flow: Visual editor for chaining routing policies, has versioning for easy rollback.
- Alias Record - AWS' smart record - it detects changed IP addresses and updates automatically. (How - is it a type of reverse DNS?)
- R53 Resolver: Lets you regionally route DNS queries between your VPCs and your hybrid network.
- Health checks can monitor and automatically reroute between endpoints. And health checks can monitor other health checks.
- Optional health checks include HTTPS, String Matching, Fast Interval, & Latency Measurement.
**Routing types**: 
- Simple: Default, multiple addresses result in random endpoint selection.
- Weighted: Assign percentages to different routes.
- Latency-based: Directs traffic based on region to get lowest latency.
- Failover: Directs traffic to secondary site only if primary site is down.
- Geolocation: Route based on geographic location.
- Geo-proximity: Add Bias to Geolocation (requires R53 Traffic Flow)
- Multi-Value Answer: Return multiple answers (using health checks)
