# Athena

## Query data in S3 tables as though it were a database.

**Paid Tier**:

- $5.00 per TB of data scanned. (This can be reduced up to 3x by compressing the data with GZIP.)
- Any Glue, SageMaker, Lambda, and S3 usage fees from Athena will be charged normally.

**Ownership**: Amazon
[Website](https://aws.amazon.com/athena/)
**Type**: SaaS
**Segment**: Relational DB
**Notes**:

- Depends on Glue to assemble S3 folders into tables. If a user can access ALL S3 folders in a table
- then Glue will make it available to Athena for the user to query.
