# ECS

## Elastic Container Service

[Website](https://aws.amazon.com/ecs/)
**Free Tier**: Full Service (pay only for the EC2 resources.)
**Encryption**: Doesn't handle SSL certificates, so use ELB (or CloudFront) to front. Or have your container handle the SSL in some way.
**Ownership**: Amazon
**Type**: SaaS
**Segment**: Container orchestration
**Notes**:

- Build a Cluster, then define a Task within it.
- Has 3 cluster templates: Networking only (Fargate), EC2 Linux + Networking, EC2 Windows + Networking
- Tasks have 3 launch types: Fargate, EC2, External (On-premises)
