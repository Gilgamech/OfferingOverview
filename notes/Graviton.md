# Graviton
## Container-optimized arm64 processor.
**Free Tier Year**: 750 hrs/month of EC2 t4g.small instance time.
**Notes**: 
- Graviton is not a distinct service, but is the CPU type denoted by the 'g' in 'xxg.size' instance class naming format. Such as EC2 t4g.small instance class.
**Ownership**: Amazon
[Website](https://aws.amazon.com/ec2/graviton/)
**Type**: IaaS
**Segment**: CPU
**Broad ecosystem support**: 
- Codebuild
- CircleCI
- Cirrus CI
- Travis CI
- GitHub
- GitLab
- Buildkite
- Jenkins
**(table)Ease of Adoption**: 
- Difficulty OS Languages Path
- Easy Linux Interpreted / JIT (Java, PHP, Node, et cetera) Use arm64 or Multi-Arch image.
- Medium Linux Compiled (C/C++, Python, Go) Cross-compile or other fixes during build.
- Hard Windows .NET Migrate to .NET Core on Linux.
- Uncompleted Windows Windows Server Applications can't yet compile to arm64.
**video**: <iframe width='560' height='315' src='https://www.youtube.com/embed/iwSQRLzDwHA' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>
