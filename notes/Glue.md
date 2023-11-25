# Glue
## Serverless ETL that can connect to other data sets, and has a no-code studio.
**Free Tier**: 
- Studio Job Notebooks are a built-in interface for Interactive Sessions
- First million objects stored
- First million requests per month
**Paid Tier**: 
- $0.44/DPU-Hour for ETL, billed per second with a 1, 10, or 30 minute minimum depending on service.
- $1.00/month per 100k objects stored after the first 1 million.
- $1.00/month per million requests after the first 1 million.
- $1.00/ DataBrew interactive session.
- $0.48/ DataBrew node hour.
- $0.16/VPU-Hour for Elastic View processing.
- $0.023/GB-month for Elastic View Table storage.
- Around $50/day and $1k/month for Glue Dev Endpoints.
**Ownership**: Amazon
[Website](https://aws.amazon.com/glue/)
**Type**: SaaS
**Notes**: 
- Glue has Crawlers, Connections, Tables, Schema, Data Catalog, Jobs
- Glue assembles tables for Athena from S3 buckets. If a user can access ALL S3 buckets in a table, then it will be available in Athena to be queried.
- Use data partitions to focus queries and exclude irrelevant data, saving the cost of querying it.
- Can add tables manually, by schema, or by crawler. (Can 'manually' be automated by CLI/API?)
- Connections can load data into other databases which are defined in the Data Catalog.
- Jobs are ETL agents that run from either a schedule or external triggers.
- Glue Dev Endpoints are an abstracted cluster to test and develop scripts against.
- Data Firehose loads data into other datastores, like Glue.
- Glue is recommended for complex ETL, including joining streams, and partitioning the output in S3 based on the data content.
- Kinesis Data Firehose is recommended when your use cases focus on data delivery and preparing data to be processed after it is delivered.
