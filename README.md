# OfferingOverview
Site with my AWS .txt notes in an ExpressJS template, read from a local CSV/JSON.
Pages
- Product page
- Company page?
- Main page?
- Index?
- 

## Service types
IaaS - lets you host your applications (servers)
PaaS - lets you build your applications (functions)
SaaS - lets you use your applications (cloud hosted)
DBaaS - DB are software, so DBaaS are SaaS by definition.

## Misc 
- Code should have minimal dependencies and then be as atomic as possible. This leads to smaller and simpler microservices, leading to smaller clusters, and more flexible compute supply. Reducing dependencies reduces package bloat, and reducing obfuscation makes understanding the code less complex. Smaller and simpler containers make smaller and simpler pods. Smaller and simpler containers and pods are easier to stack in RAM and schedule across CPUs. 
- Heavy library reuse is not good, as including multiple dependencies bloats a software package while obfuscating its full functionality from even its own programmer. 
- Why buy what you can make?
- What makes this proprietary standard more valuable than the industry standard? 
- Do the short term benefits of (doing X) exceed the long term support costs?
- How do game studios go cloud native? What's a better way to commit to a repo than shoving hundreds of gigabytes of textures and meshes and game levels across an Internet backbone?
- Red-green-refactor TDD process is the "buy the cheapest one and use it as a learning experience to know what you really need" strategy.
- Antipatterns? 
	- Software testing ice cream cone

## Cloud native migration questions
- Do you need to customize the OS or environment?
- How long does it run, and how often? 
- Does it need to stay in memory?
- Does the vendor offer a hosted version of the solution?  
- Can it be rewritten or reenvisioned to be stateless?
- Can it write to S3 instead of a local filesystem?
- Does the vendor offer a hosted version of the software?
- Failing that, does the vendor offer a container?
- Is your use case really so specific that it needs custom software, or will FOSS COTS do th e job? 
- Is FOSS COTS needed, or will SaaS do the job?
- What would it take to stay on the free tier?
- 


## AWS Services Bibliography:
- FreeCodeCamp.org
	- AWS Certified Solutions Architect - Associate 2020 (PASS THE EXAM!)
	- https://www.youtube.com/watch?v=Ia-UEYYR44s
- Fireship
	- Top 50+ AWS Services Explained in 10 Minutes
	- https://www.youtube.com/watch?v=JIbIYCM48to 

