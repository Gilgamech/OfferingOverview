# Cognito
## Decentralized managed authentication.
**Free Tier Year**: Sync: 10 GB of cloud sync store and 1 million sync operations per month. ($16.50 value)
**Free Tier**: 50k MAUs (monthly active users) for direct Cognito logins ($275 value) and 50 MAUs for SAML 2.0 federated logins.
**Paid Tier**: 
- From $0.0055 to $0.0025 per MAU. Advanced security from $0.05 to $0.01 per MAU.
- Sync: $0.15 per GB of sync store and $0.15 for each 10k sync operations per month.
**Encryption**: Are user pools and identity pools encrypted? Where are they stored?
**Ownership**: Amazon
**Segment**: IdP
**Type**: SaaS
**Cognito Sync**: Sync user data and preferences across devices with one line of code (powered by SNS)
**Notes**: 
- User Pools directory allows users to authorization using OAuth to IdP (Meta, AZ, Netflix?, Google, AAD, itself, et cetera) 
- Uses JWTs to persist authorization
- Identity Pools can provide temp AWS credentials for service access (S3, DynamoDB, et cetera)
- Web Identity Federation exchanges identity and security info between IdP and apps.
- IdP is a trusted login source for other services.
- OIDC is an Oauth type of IdP.
- SAML is an SSO type of IdP.
