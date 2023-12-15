# CloudWatch

## Monitoring, dashboards, event engine, alarms, logging, metrics.

**Free Tier**:

- Alarms: 10 Alarm metrics ($1 value)
- Canaries: 100 canary runs per month ($0.12 value)
- Contributor Insights: 1 Contributor Insights rule, and the first one million matching log events each month. ($0.52 value)
- Dashboard: 3 Dashboards with up to 50 total metrics. ($9 value)
- Evidently: 3 million Evidently events and 10 million Evidently analysis units ($90 value)
- Events: No custom events
- Logs: 5GB data ingested and scanned ($2.525 value), plus all inbound data transfer.
- Metrics: Basic Monitoring Metrics, 10 Detailed Monitoring Metrics, 1 Million API requests.
- RUM: 1 million RUM events. ($10 value)"

**Paid Tier**:

- Alarms: From $0.10 to $0.50 per alarm metric, after the first 10.
- Canaries: $0.0012 per canary run.
- Contributor Insights: $0.50 per rule and $0.02 per 1 million matching log events.
- Dashboard: $3/dashboard/month after the first 3.
- Evidently: $5 per 1 million events, and $7.50 per 1 million analysis units (event rule matches).
- Events: $1 per 1 million events.
- Logs: $0.50/GB to ingest, $0.03/GB to store, and $0.005/GB to analyze. Vended logs from $0.05/GB to $0.50/GB.
- Metrics: From $0.30 to $0.02.
- Metrics Insights: $0.01 per 1000 metrics analyzed.
- RUM: $1 per 100k events."

**Ownership**: Amazon
**Segment**: Monitoring
**Type**: SaaS
**Notes**:

- Collection of monitoring services: Dashboards, Events, Alarms, Logs, Metrics
- Most services default to 1 minute reporting intervals, with options for 1, 3, and 5.
- EC2 starts with 5 and calls the 1 min option 'detailed monitoring' (does it cost more?) - Agent required.
- Can track the amount of billable data written to your AWS accounts.
- Can stream custom logs too."

**Alarms**:

- Notifications based on metrics"

**Dashboards**:

- Visualize metrics"

**Events**:

- Trigger AWS events based on condition (use case hourly snapshots)"

**Logs**:

- Data point logging
- Must belong to log group"

**Metrics**:

- Capture one data point across time.
- Custom Metrics allow much higher resolution, down to 1 second."
