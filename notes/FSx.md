# FSx
## Feature-rich and highly-performant file systems.
**Ownership**: Amazon
**Segment**: Persistent Data Storage
**Type**: PaaS
**Paid Tier Notes**: 
- Has 4 flavors: Windows File System, OpenZFS, Lustre, and Netapp Ontap.
- Data Deduplication at rest gives 30-80% space savings.
- Ontap provides compression alongside deduplication.
**(table)Storage per GB-month**: 
- FileSystem Type Multi-AZ Multi-AZ 50% Dedup Single-AZ Single-AZ 50% Dedup
- Ontap Standard pool $0.0077 $0.0219 $0.0438 $0.0153
- WinFS HDD $0.025 $0.0125 $0.013 $0.0065
- Ontap SSD $0.0438 $0.125 $0.25 $0.0875
- OpenZFS SSD $0.09 $0.045 N/A N/A
- WinFS SSD $0.23 $0.115 $0.13 $0.065
**(table)Throughput per MBps-month**: 
- FileSystem Multi-AZ Multi-AZ 50% Dedup Single-AZ Single-AZ 50% Dedup
- OpenZFS $0.26 $0.26 N/A N/A
- Ontap $0.72 $0.72 $1.20 $1.20
- WinFS $4.50 $4.50 $2.25 $2.25
**(table)Backup per GB-month**: 
- FileSystem Multi-AZ Multi-AZ 50% Dedup Single-AZ Single-AZ 50% Dedup
- Ontap $0.05 $0.0175 $0.05 $0.0175
- WinFS $0.05 $0.025 $0.05 $0.025
- OpenZFS N/A N/A $0.05 $0.025
- Lustre N/A N/A $0.05 $0.025
- Lustre HDD Backup Storage $0.050 $0.025
**(table)SSD IOPS per IOPS-month**: 
- FileSystem Multi-AZ Multi-AZ 50% Dedup Single-AZ Single-AZ 50% Dedup
- OpenZFS $0.006 $0.006 N/A N/A
- Ontap $0.017 $0.017 $0.034 $0.034
**(table)Capacity pool 1000 requests**: 
- FileSystem Type Multi-AZ Multi-AZ 50% Dedup Single-AZ Single-AZ 50% Dedup
- Ontap read $0.0004 $0.0004 $0.0004 $0.0004
- Ontap write $0.005 $0.005 $0.005 $0.005
**(table)Lustre throughput rate per TiB**: 
- Type Rate Per TiB/month 50% Deduplication
- HDD 12 MB/s $25 $13
- HDD w SSD Cache 12 MB/s $41 $21
- HDD 40 MB/s $83 $42
- HDD w SSD Cache 40 MB/s $99 $50
- Prev 50 MB/s, 1.3 GB/s burst $140 $70
- Prev 100 MB/s, 1.3 GB/s burst $190 $95
- SSD 125 MB/s $145 $73
- SSD 200/MB/s - scratch file $140 $70
- Prev 200 MB/s, 1.3 GB/s burst $290 $145
- SSD 250 MB/s $210 $105
- SSD 500 MB/s $340 $170
- SSD 1k MB/s $600 $300
