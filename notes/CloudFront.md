# CloudFront
## Distributes cached copies to Edge Locations for faster worldwide retrieval.
**Free Tier**: 
- 1 TB of data transfer out
- 10M HTTP/S Requests
- 2M CloudFront Function Invocations.
**Paid Tier**: First 10TB $0.085
**Encryption**: SSL from ACM certificates.
**Ownership**: Amazon
[Website](https://aws.amazon.com/cloudfront/)
**Segment**: CDN
**Type**: IaaS
**Notes**: 
- Origin is storage location of data. (S3, Private S3 through Origin Access Identity (OAI), EC2, ELB, R53, et cetera)
- Distribution defines a collection of Edge Locations and behavior on how it should handle your cached content.
- 2 types: Web (static content) and RTMP (streaming media) 
- Security through Signed URLs or Signed Cookies, using Original Access Identity (OAI) and additional configuration.
- Write to Edge Locations with verbs like PUT objects. (How does this work and what are the use cases? Invalidate cache for a specific location, or A/B test stuff in a specific region?)
- TTL defines cache expiry in seconds.
- Invalidating cache immediately expires the cached items, so they refresh immediately.
- Refreshing a cached item has a bandwidth cost of moving the item from origin to edge.
- Allows redirecting to HTTPS, restricting methods, viewer access, and setting TTL.
- Has Geo Restrictions to blocklist or clearlist specific countries.
- Lambda@Edge allows passing requests through a Lambda to transform or override.
Lambda@Edge function types: 
- Viewer Request - On any request to the cache, including those reaching the origin.
- Origin Request - On any uncached request to the origin.
- Origin Response - On any uncached response from the origin.
- Viewer Response - On any response from the cache, including those reaching the origin.
