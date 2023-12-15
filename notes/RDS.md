# RDS

## Relational Database Service

**6 database flavors**:

- Aurora
- MariaDB
- MSSQL
- MySQL
- Oracle
- PostgreSQL

**Free Tier Year**:

- DB Engine AZ Instance Class Hours/month
- MariaDB Single db.t2.micro; db.t3.micro; db.t4g.micro; 750
- MySQL Single db.t2.micro; db.t3.micro; db.t4g.micro; 750
- MSSQL Express Single db.t2.micro;  750
- Oracle BYOL Single db.t2.micro; db.t3.micro; 750
- PostgreSQL Single db.t2.micro; db.t3.micro; db.t4g.micro; 750

**Free Tier**:

- 20 GB of General Purpose (SSD) DB Storage
- 20 GB of backup storage for your automated database backups and any user-initiated DB Snapshots

**Paid Tier**:

- On-Demand Instances: From $0.016 to $28.416 per hour.
- Reserved Instances: From $0.008 to $17.741 per amortized hour.
- General Purpose (SSD) Storage: $0.115 per GB-month
- Provisioned IOPS (SSD) Storage Rate: $0.125 per GB-month
- Provisioned IOPS Rate: $0.10 per IOPS-month
- Magnetic Storage Rate: $0.10 per GB-month
- Magnetic Storage I/O Rate: $0.10 per 1 million requests
- Backup Storage: $0.095 per GB-month (past 100% of your storage in the region.)
- Snapshots: $0.010 per GB

**Aurora Paid Tier**:

- Serverless v2 Aurora Capacity Unit: $0.12 per ACU Hour
- Serverless v1 Aurora Capacity Unit: $0.06 per ACU Hour
- MySQL On-Demand from $0.041 to $13.92.
- MySQL Reserved from $0.028 to $7.837.
- PostgreSQL On-Demand from $0.073 to $13.92.
- PostgreSQL Reserved from $0.049 to $9.060.
- Storage Rate: $0.10 per GB-month
- I/O Rate: $0.20 per 1 million requests
- Backup Storage: $0.021 per GB-month
- Backtrack: $0.012 per 1 million Change Records per hour back.

**MSSQL Classes**:

- Class # AZ On-Demand/hr RI / Amorted Hour
- Express Single From $0.044 to $0.35 From $0.026 to $0.221
- Web Single From $0.139 to $3.274 From $0.082 to $3.231
- Standard Single From $1.044 to $79.094 From $0.715 to $74.744
- Enterprise Single From $2.262 to $104.749 From $2.242 to $97.521
- Standard Multi From $2.088 to $158.189 From $1.564 to $149.488
- Enterprise Multi From $2.98 to $187.859 From $3.099 to $174.897

**Oracle Classes**:

- Class # AZ OD+License OD+BYOL RI+License RI+BYOL
- S1 Single From $0.035 to $3.584 From $0.017 to $44.8358 N/A N/A
- S2 Single From $0.038 to $3.856 From $0.017 to $44.8358 From $0.022 to $2.428 From $0.024 to $4.532
- S1 Multi From $0.07 to $7.168 From $0.034 to $89.6717 N/A N/A
- S2 Multi From $0.075 to $7.712 From $0.034 to $89.6717 From $0.044 to $4.532 From $0.022 to $2.428

**Encryption At Rest**: KMS
**Encryption In Motion**: HTTPS
**Ownership**: Amazon
**Type**: PaaS
**Automatic Backups**:

- You can set a schedule.
- No additional cost.
- Retention window between 1 and 35 days.

**Manual Snapshots**:

- Can restore database from snapshot.

**Aurora Notes**:

- Fully-managed PostgreSQL or MySQL with scaling, HA, and fault tolerance.
- 5x faster than MySQL and 3x faster than PostgreSQL, on same flavor. (How much faster than MySQL is the PostgreSQL one? How do MySQL and PG compare?)
- Pricing is about 1/10 other flavors.
- Data stored as 6 copies in 3 regions.
- Can span regions with Global Database.
- Aurora Serverless allows starting, stopping, and scaling - for new projects or those with infrequent DB use - to keep costs low.

**PostgreSQL Notes**:

- Multi-AZ replicates a standby copy of your DB to another AZ, and keeps it up to date.
- Automatic Failover will automatically promote to master the standby copy if the main DB's AZ goes down.
- Read-Replicas 

**Read-Replicas**:

- Allow you to run multiple read-only copies of your DB, to improve performance
- Uses asynchronous replication. (What's the significance of this?) 
- Requires automatic backups be setup.
- Limit of 5, except Aurora can have 15.
- Can be multi-AZ and use Read-Replicas.
- Can be in another region (Cross-Region Read-Replicas)
- Can be promoted to their own database, but this breaks replication.
- You can have replicas of Read-Replicas. (Can you have Read-Replicas of Read-Replicas?)

**Notes**:

- Instances are managed and cannot be accessed.
