# DynamoDB

## Fully managed NOSQL key/value & document DB.

**Free Tier**:

- First 25 GB stored in the Standard table class. ($6.25 value)
- 2.5 million Streams RRUs per month. ($0.50 value)
- All data transfer into AWS, and 100GB of data transfer out to the Internet free each month, aggregated across all AWS Services.

**Paid Tier**:

- Change data capture for Amazon Kinesis Data Streams: $0.10 per million change data capture units
- Change data capture for AWS Glue Elastic Views: $0.10 per million change data capture units
- Data Export to Amazon S3: $0.10 per GB
- Accelerator (DAX): from $0.04 to $4.295 per hour.
- $0.02 per 100k Streams RRUs.
- Data transfer out to Internet, after the first 100GB, from $0.09 to $0.05 per GB 

**Table storage classes**:

- Type On-Demand Standard On-Demand Standard-IA Provisioned Standard Provisioned Standard-IA
- Million WRU/WCU $1.25 $1.56 $650 $810
- Million RRU/RCU $0.25 $0.31 $130 $160
- Storage per GB-month $0.25 after first 25GB. $0.10 $0.25 after first 25GB. $0.10
- Global Table Million rWRU or rWCU/hr $1.875 $2.344 $975 $1,218.75

**(Provisioned) Reserved table storage capacity**:

- Monthly Commitment 100 WCUs 100 RCUs
- Upfront: 1-Year $150.00 $30.00
- Hourly: 1-Year (8760h) $0.0128 ($112.128) $0.0025 ($21.90)
- Upfront: 3-Year $180.00 $36.00
- Hourly: 3-Year (26280h) $0.0081 ($212.868) $0.0016 ($42.048)

**Backup classes per GB-month**:

- Class Warm Cold
- Continuous $0.20 $0.20
- On-demand $0.10 $0.03
- Restore per GB $0.15 $0.20

**Ownership**: Amazon
**Segment**: NoSQL Document DB
**Type**: PaaS
**Notes**:

- Good for applications with large amounts of data and need predictable read & write while scaling.
- Scales to meet the specified read and write (per second) capacities.
- Data stored as 3 copies on SSDs in 3 regions.
- Standard-Infrequent Access (Standard-IA) table class
- WRU: Write Request Units (On-Demand) - 1 write up to 1 KB - larger writes consume more units.
- WCU: Write Capacity Units (Provisioned) - 1 write/second up to 1 KB - charged regardless of use. A transactional write is 2 WCUs.
- RRU: Read Request Units (On-Demand) - 1 read up to 4 KB - larger reads consume more units.
- RCU: Read Capacity Units (Provisioned) - 1 strongly-consistent read/second up to 4 KB - charged regardless of use. A transactional read is 2 RCUs, and an eventually consistent read is 0.5 RCUs.
- Provisioned Reads, one RCU is one strongly consistent read per second, two RCUs for each transactional read per second, and one-half of an RCU for each eventually consistent read per second (up to 4 KB). 
- Global Tables let you select numerous AWS regions to replicate data into.

**Two consistency modes**:

- Eventually (1 sec) Consistent Reads - can return inconsistent immediate reads too.
- Strongly Consistent Reads - will wait until data is consistent (1 sec) before returning, with higher latencies due to no immediate read option.
