# CloudTrail

## Logs calls between AWS services.

**Free Tier**:

- Lake: 30 days or first 5GB data ingested and scanned, whichever comes first.
- Logs: Management events across all AWS services for the past 90 days.
- Trails: one copy of management events delivered to S3."

**Paid Tier**:

- Insights: $0.35 per 100k events analyzed.
- Lake: Ingest and store data for 7 years. First 5 TB: $2.50 per GB. ($0.029762/GB/hour). Analyze for $0.005/GB.
- Trails: $2 per 100k management events delivered to S3, after the first free one. Data events are $0.10 per 100k delivered and $0.35 per 100k analyzed."

**Encryption**:

- Trails sent to S3 can use S3-KMS.
- Are trails not in S3 encrypted?"

**Ownership**: Amazon
**Segment**: Monitoring
**Type**: SaaS
**Notes**:

- Involves governance, compliance, operational auditing, and risk auditing.
- Can be configured to gather all logs in all regions in all accounts across an AWS Organization.
- Default is 90 days via Event History, and beyond 90 days requires creating a Trail."

**Insights**:

- Logs unusual API Write activity."

**Lake**:

- Managed audit and security Lake"

**Logs**:

- Log Validation prevents tampering. (How?)
- Can be streamed to Logs
- 2 event kinds: management (operations like IAM) and data (resources like EC2 or Lambda)."

**Trail**:

- Basic unit of logging stream.
- Don't include data events by default.
- Requires an S3 bucket.
- Can be analyzed with Athena from an S3 bucket."
