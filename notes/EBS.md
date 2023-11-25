# EBS
## Virtual block-level storage drive that you can attach to a single EC2 instance.
**Free Tier**: 
- 30 GB of storage. ($2.40 value)
- 3k IOPS. ($15 value)
- 125 MB/s data transfer. ($5 value)
- 1 GB of snapshot storage. ($0.05 value)
**Paid Tier**: 
- Fast Snapshot Restore: $0.75 per 1 DSU hour on each snapshot and in each AZ it is enabled.
- ListChangedBlocks, ListSnapshotBlocks: $0.0006 per thousand requests
- PutSnapshotBlock: $0.006 per thousand SnapshotAPIUnits
- GetSnapshotBlock: $0.003 per thousand SnapshotAPIUnits
**(table)Snapshots**: 
- Storage (GB-month) Restore (per GB)
- Standard $0.05 Free
- Archive $0.01 $0.03
**(table)Storage Tiers**: 
- Volume Type per GB-month provisioned IOPS-month provisioned MB/s-month
- General Purpose SSD (gp3) $0.08 $0.005 over 3k $0.04 over 125
- General Purpose SSD (gp2) $0.10 (provisioned)  
- Provisioned IOPS SSD (io2) $0.13 From $0.065 to $0.032 
- Provisioned IOPS SSD (io1) $0.125 (provisioned) $0.07 
- Throughput Optimized HDD (st1) $0.045 (provisioned)  
- Cold HDD (sc1) $0.015 (provisioned)  
**Ownership**: Amazon
**Segment**: Persistent Storage
**Type**: IaaS
**Notes**: 
- Volume dimensions (size, storage type) can be changed at any time.
- Instance Store Volumes are physical storage attached to a host, and cannot be stopped  - if the host fails, the data is lost. Useful for temporary backup, caches, unimportant logs, et cetera.
- EBS backed instances can be stopped without data loss.
- Root volumes delete on termination by default.
- Volumes can have termination protection.
**Snapshots**: 
- Snapshots are incremental point-in-time copies, and only changes made since the last snapshot are moved to S3.
- Initial snapshots will take longer than subsequent snapshots.
- EC2 instance should be stopped before snapshotting root volume. But other disks can be taken while the server is running.
- Restoring a snapshots of an encrypted volume will give you a snapshot that is still encrypted, and you can't share encrypted snapshots.
- Unencrypted snapshots can be shared with other AWS accounts or made public. (Why would you want to make a snapshot public?)
- AMIs can be created from snapshots, or volumes.
**Data Logistics - Copy volumes to another AZ/Region**: 
- Take snapshot of volume.
- Create AMI from snapshot
- Copy AMI to other region, if applicable.
- Launch new EC2 in desired AZ.
