# Kinesis
## Captures realtime data streams.
**Free Tier**: Retrieving data stream records within the the 24-hour default (or up to 7 days for extended data retention).
**Paid Tier - Stream**: 
- Per stream: $0.04/hour
- Data retrievals: $0.04/GB
- Enhanced fan-out data retrievals: $0.05/GB
- Data ingested & stored (first 24h): $0.08/GB
- Data stored (24h to 7 days): $0.10/GB-month
- Data stored (beyond 7 days): $0.023/GB-month
**Paid Tier - Data Firehose**: 
- Ingestion from $0.029 to $0.02/GB
- Format Conversion: $0.018/GB
- JQ processing (optional): $0.07/hour
- Processed to VPC : $0.01/GB plus $0.01/hour/VPC
- S3 delivery: $0.02/GB plus $0.005/1k objects
**Ownership**: Amazon
**Type**: PaaS
**Notes**: 
- Data Firehose loads data into other datastores, like Glue.
- Glue is recommended for complex ETL, including joining streams, and partitioning the output in S3 based on the data content.
- Kinesis Data Firehose is recommended when your use cases focus on data delivery and preparing data to be processed after it is delivered.
