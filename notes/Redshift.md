# Redshift

## Analytics data store (shift away from Oracle) - dump multiple data sets in one place.

**Free Tier**:

- 750 hours per month for 2 months of dc2.large compute time, for first time users.
- Serverless gives a $300 credit with a 90-day expiration date, for first time users.
- Leader node in multi-node configuration.
- Concurrency scaling and Spectrum are both included with Serverless.
- Serverless point in time restore to the last 24 hours at a 30 min granularity.
- Scheduled snapshots can be retained for a maximum of 35 days.

**Paid Tier**:

- Reserved Instance: Saves about 20% to 30% over on-demand.
- ML cells from $20 to $7.
- Spectrum: $5.00 per terabyte of data scanned
- Manual snapshots you take using the console, API, or CLI.

**Managed Storage (RMS)**:

- Starts with your data on large SSDs in each RA3 node, backed up to S3. If the data in a node grows beyond the size of the SSDs, RMS offloads that data to S3. This allows scaling data warehouse capacity without adding more compute nodes.
- Data storage fees are the same regardless of storage type.
- Pricing: $0.024 per GB/month.

**Compute Types**:

- Dense Compute (DC2) uses in-cluster SSDs for best performance, and is included in compute billing.
- Independent Storage (RA3) allows choosing storage types and is recommended for datasets larger than 1 TB. Data stored is part of RMS and is billed at RMS rates.
- DC2 backups and RA3 manual cluster snapshots are stored externally in S3 and are billed at standard S3 rates.

**Compute Pricing**:

- Class Gen vCPU ECU Memory GiB Storage TB Storage Class I/O GB/s Price per hour
- dc1.large Prev 2 7 15 0.16 SSD 0.20 $0.25
- dc2.large Current 2 N/A 15 0.16 SSD 0.60 $0.25
- ds1.xlarge Prev 2 4.4 15 2 HDD 0.30 $0.85
- ds2.xlarge Prev 4 14 31 2 HDD 0.40 $0.85
- ra3.xlplus Current 4 N/A 32 32 RMS 0.65 $1.086
- ra3.4xlarge Current 12 N/A 96 128 RMS 2.00 $3.26
- dc1.8xlarge Prev 32 104 244 2.56 SSD 3.70 $4.80
- dc2.8xlarge Current 32 N/A 244 2.56 SSD 7.50 $4.80
- ds1.8xlarge Prev 16 35 120 16 HDD 2.40 $6.80
- ds2.8xlarge Prev 36 116 244 16 HDD 3.30 $6.80
- ra3.16xlarge Current 48 N/A 384 128 RMS 8.00 $13.04

**Serverless**:

- Recovery points that are less than 24 hours old are free, but beyond 24 hours incur RMS charges.
- Capacity is measured in Redshift Processing Units (RPUs): $0.36 per RPU hour.
- RPU-hours are billed per-second, with a 60-second minimum.
- Base and Max performance settings can be used to control data warehouse performance and costs.
- Base: specifies minimum requirements in RPUs, from 32 to 512 RPUs in units of 8. Increasing can improve data processing and ETL job performance, especially for bigger data.
- Max: specifies maximum requirements in RPU-hours per day/week/month. Increasing can improve overall throughput, for high concurrency.
- Primary storage capacity is billed as Redshift Managed Storage (RMS).

**Encryption**: KMS or CloudHSM
**Ownership**: Amazon
[Website](https://aws.amazon.com/redshift/)
**Type**: PaaS
**Segment**: BI(g) Data Warehouse
**Notes**:

- Columnar Store OLAP DB that takes SQL-like queries.
- Can ingest petabytes of data from S3, EMR, DynamoDB, or multiple sources on remote hosts.
- Limited to single-AZ.
- Single-node or multi-node (clustered). Each node holds 160 GB. Multi-node has up to 128 compute nodes.
- Attempts 3 backup copies: Original, Compute, S3.
- Backup retention default is 1 day, with maximum of 35 days.
- Can asynchronously backup snapshots to another region's S3 bucket.
- Samples data to create a schema for an empty table.
