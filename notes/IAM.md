# IAM
## Used to manage AWS access.
**Free Tier**: Full Service
**Encryption**: Are your policies encrypted at rest?
**Type**: PaaS
**Ownership**: Amazon
**Segment**: Access
**Notes**: 
- Foundational
- Universal system, applies to all regions at once.
- Account creation normally starts with root user account setup.
- Always setup MFA for root accounts.
- New accounts have no permissions until assigned.
- New users get an access key and secret key when created with the programmatic access option set.
- Access keys are only for CLI / SDK access and not for console access.
- Access secret keys are only shown on creation - if lost they must be made again.
- Users must setup MFA for themselves, and this can't be done by an admin. (is this true?)
- Allows setting password policies like minimum length or rotation time.
**Identities are users, groups, and roles**: 
- User accounts allow users to use the Console, or CLI or SDK.
- Groups allow grouping users with the same permissions.
- Roles associate permissions with a resource. Roles are used for Console instead of user accounts when the account is directly connected to a SAML IdP, such as AzureAD.
- Policies are JSON documents listing specific permissions.
- Inline Policies are directly attached to a user, group, or role. (These don't show up in lists of policies and so can be hard to manage. The author considers their use to be a security antipattern.)
- List Policies can be listed in the AWS Console and are not directly attached. List policies can be Customer or Managed.
- Customer Policies are ones you make and maintain.
- Managed Policies are read-only from AWS
- Groups, Users, and Roles can each have 10 policies directly attached.
- A User can be a member of 10 Groups, allowing a total of 100 Group-attached Policies, plus the 10 directly attached Policies for 110 total Policies. Groups can hold nearly limitless Users.
- Policy Analyzer allows testing and simulating access from any identity to any resource, and is a great way to test your own policies to ensure they allow only the intended access.
