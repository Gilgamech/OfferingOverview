# SQS
## Simple Queue Service
**Free Tier**: 
- First 1 million requests per month, for either queue type.
**Paid Tier**: 
- FIFO queues from $0.50 to $0.35 per million requests.
- Standard queues from $0.40 to $0.24 per million requests.
- Messages are split into 64 kb chunks, so a 256 kb message incurs the cost of 4 messages.
- Any KMS fees for encrypting and decrypting queue messages.
**Ownership**: Amazon
**Encryption**: KMS
[Website](https://aws.amazon.com/sqs/)
**Type**: SaaS
**Notes**: 
- Provides asynchronous communication between sender and receiver, decoupling messages from processes or events.
- Deletes messages on completion. Not realtime or reactive, have to pull. Like Sidekiq or RabbitMQ.
- Two queue types: Standard and FIFO.
- Standard queues allow nearly unlimited transactions per second, guaranteeing delivery at least once, and with best effort to keep them in order. But an extra out of order message could still sneak through.
- FIFO queues are limited to 300 transactions per second, but guarantee single in-order delivery.
- Default retention is 4 days, but can be adjusted from 60 seconds to 2 weeks.
- One request can have up to 10 messages and be up to 256 kb.
- The SQS Extended Library for Java extends this from 256 kb up to 2 gb by storing the message in S3 and referencing it in queue.
- Visibility Timeouts allow 'locking' a message in queue, so other bots can't read it. If the first bot doesn't complete the message before the timeout ends, the message becomes visible to other bots again. Might deliver twice.
**Workflow**: 
- Sender publishes message to queue.
- Receiver pulls queue and receives message.
- Receiver completes task and marks message complete.
- Sender pulls queue and finds no message.
