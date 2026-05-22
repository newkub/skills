---
description: Architecture Decision Records (ADR) - การบันทึกและจัดการการตัดสินใจทางสถาปัตยกรรม

---

Architecture Decision Records (ADR) คือเอกสารที่บันทึกการตัดสินใจทางสถาปัตยกรรมที่สำคัญในระบบ พร้อมเหตุผล ผลกระทบ และทางเลือกอื่นๆ ที่พิจารณา

`	ypescript  ypescript`	ypescript  ypescript`markdown

[Accepted/Proposed/Rejected/Superseded/Deprecated]

บริบทและปัญหาที่ต้องแก้ไข

การตัดสินใจที่เลือก

ผลกระทบที่ตามมาจากการตัดสินใจ

ทางเลือกอื่นๆ ที่พิจารณาและเหตุผลที่ไม่เลือก

รายละเอียดการ implement

ADR ที่เกี่ยวข้อง
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`markdown

Accepted

ระบบปัจจุบันเป็น Monolithic Architecture ที่เติบโตขึ้นและมีปัญหาดังนี้:

- Deployment time นานขึ้น (30+ นาที)

- ทีมพัฒนาหลายทีมต้องทำงานบน codebase เดียวกัน

- การทดสอบ unit tests ใช้เวลานาน

- การ scale ส่วนที่ต้องการต้อง scale ทั้งระบบ

- Technology lock-in กับ stack เดิม

เราเลือกใช้ Microservices Architecture โดยแบ่งระบบออกเป็น services ตาม business domains:

- User Service

- Order Service  
- Product Service

- Payment Service

- Notification Service

- แต่ละ service สามารถ deploy แยกกันได้

- ทีมต่างๆ สามารถทำงานอย่างอิสระ

- สามารถ scale เฉพาะ services ที่ต้องการ

- สามารถใช้ technologies ที่เหมาะสมกับแต่ละ service

- การทดสอบเร็วขึ้นเนื่องจาก test scope เล็กลง

- ความซับซ้อนของระบบเพิ่มขึ้น

- ต้องจัดการ distributed systems

- Network latency ระหว่าง services

- การจัดการ data consistency ซับซ้อนขึ้น

- Operational overhead เพิ่มขึ้น

1. **Monolithic with Modular Design**: แยก modules แต่ยัง deploy เป็นเดียว
   - ข้อดี: ซับซ้อนน้อยกว่า
   - ข้อเสีย: ยังมีปัญหา deployment และ scaling

2. **Service-Oriented Architecture (SOA)**: ใช้ ESB pattern
   - ข้อดี: mature pattern
   - ข้อเสีย: ESB เป็น bottleneck และซับซ้อน

3. **Microservices**: แบ่งเป็น services เล็กๆ
   - ข้อดี: flexibility สูง
   - ข้อเสีย: ความซับซ้อนสูง

เราเลือก Microservices เพราะตรงกับความต้องการด้าน scalability และ team autonomy

- เริ่มด้วยการสร้าง API Gateway

- ย้าย User Service ออกมาก่อน

- ใช้ feature flags ในการค่อยๆ redirect traffic

- ย้าย Order Service และ Product Service

- Implement event-driven communication

- Setup distributed tracing

- ย้าย Payment Service และ Notification Service

- Implement service mesh

- Complete monitoring setup

- ADR-002: Database Technology Selection

- ADR-003: Inter-Service Communication

- ADR-004: API Gateway Implementation
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript
docs/adr/
├── 001-adopt-microservices.md
├── 002-database-technology.md
├── 003-api-gateway.md
├── 004-event-driven-communication.md
├── 005-monitoring-strategy.md
├── template.md
├── README.md
└── index.md
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`markdown

[Proposed]

[บริบทและปัญหา]

[การตัดสินใจ]

[ผลกระทบ]

[ทางเลือกอื่นๆ]

[การ implement]

[ADR ที่เกี่ยวข้อง]
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// ADR Status Management
enum ADRStatus {
  PROPOSED = 'Proposed',
  ACCEPTED = 'Accepted',
  REJECTED = 'Rejected',
  SUPERSEDED = 'Superseded',
  DEPRECATED = 'Deprecated'
}

interface ADR {
  id: string;
  title: string;
  status: ADRStatus;
  createdAt: Date;
  updatedAt: Date;
  author: string;
  reviewers: string[];
  content: ADRContent;
  relatedADRs: string[];
}

interface ADRContent {
  context: string;
  decision: string;
  consequences: string;
  options: Option[];
  implementation?: string;
}

interface Option {
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  rejected: boolean;
  reason?: string;
}

class ADRManager {
  private adrs: Map<string, ADR> = new Map();
  
  createADR(title: string, author: string): string {
    const id = this.generateId();
    const adr: ADR = {
      id,
      title,
      status: ADRStatus.PROPOSED,
      createdAt: new Date(),
      updatedAt: new Date(),
      author,
      reviewers: [],
      content: {
        context: '',
        decision: '',
        consequences: '',
        options: []
      },
      relatedADRs: []
    };
    
    this.adrs.set(id, adr);
    return id;
  }
  
  updateADR(id: string, content: Partial<ADRContent>): void {
    const adr = this.adrs.get(id);
    if (!adr) {
      throw new Error(`ADR ${id} not found`	ypescript  ypescript);
    }
    
    adr.content = { ...adr.content, ...content };
    adr.updatedAt = new Date();
  }
  
  acceptADR(id: string, reviewer: string): void {
    const adr = this.adrs.get(id);
    if (!adr) {
      throw new Error(`ADR ${id} not found`	ypescript  ypescript);
    }
    
    adr.reviewers.push(reviewer);
    
    // Check if we have enough reviewers (example: 3 reviewers)
    if (adr.reviewers.length >= 3) {
      adr.status = ADRStatus.ACCEPTED;
      adr.updatedAt = new Date();
    }
  }
  
  rejectADR(id: string, reason: string): void {
    const adr = this.adrs.get(id);
    if (!adr) {
      throw new Error(`ADR ${id} not found`	ypescript  ypescript);
    }
    
    adr.status = ADRStatus.REJECTED;
    adr.updatedAt = new Date();
    // Store rejection reason
  }
  
  supersedeADR(id: string, newADRId: string): void {
    const adr = this.adrs.get(id);
    if (!adr) {
      throw new Error(`ADR ${id} not found`	ypescript  ypescript);
    }
    
    adr.status = ADRStatus.SUPERSEDED;
    adr.updatedAt = new Date();
    adr.relatedADRs.push(newADRId);
  }
  
  findADRsByStatus(status: ADRStatus): ADR[] {
    return Array.from(this.adrs.values())
      .filter(adr => adr.status === status)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  searchADRs(query: string): ADR[] {
    const lowerQuery = query.toLowerCase();
    
    return Array.from(this.adrs.values()).filter(adr =>
      adr.title.toLowerCase().includes(lowerQuery) ||
      adr.content.context.toLowerCase().includes(lowerQuery) ||
      adr.content.decision.toLowerCase().includes(lowerQuery)
    );
  }
  
  private generateId(): string {
    const nextId = this.adrs.size + 1;
    return nextId.toString().padStart(3, '0');
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// ADR Proposal Process
class ADRProposal {
  constructor(
    private adrManager: ADRManager,
    private notificationService: NotificationService
  ) {}
  
  async proposeADR(
    title: string,
    context: string,
    options: Option[],
    author: string
  ): Promise<string> {
    // Create ADR
    const adrId = this.adrManager.createADR(title, author);
    
    // Update content
    this.adrManager.updateADR(adrId, {
      context,
      options
    });
    
    // Notify stakeholders
    await this.notificationService.notifyArchitects({
      type: 'ADR_PROPOSED',
      adrId,
      title,
      author
    });
    
    return adrId;
  }
  
  async reviewADR(adrId: string, reviewer: string, decision: 'accept' | 'reject', comment?: string): Promise<void> {
    if (decision === 'accept') {
      this.adrManager.acceptADR(adrId, reviewer);
    } else {
      this.adrManager.rejectADR(adrId, comment || 'No reason provided');
    }
    
    // Notify author
    const adr = this.adrManager.findADR(adrId);
    await this.notificationService.notifyUser(adr.author, {
      type: 'ADR_REVIEWED',
      adrId,
      decision,
      reviewer,
      comment
    });
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// ADR Review Workflow
class ADRReviewWorkflow {
  private requiredReviewers = ['architect-lead', 'tech-lead', 'product-manager'];
  
  async startReview(adrId: string): Promise<void> {
    const reviewTasks = this.requiredReviewers.map(reviewer =>
      this.createReviewTask(adrId, reviewer)
    );
    
    await Promise.all(reviewTasks);
  }
  
  private async createReviewTask(adrId: string, reviewer: string): Promise<void> {
    // Create review task in project management system
    await this.taskService.createTask({
      title: `Review ADR-${adrId}`	ypescript  ypescript,
      assignee: reviewer,
      type: 'ADR_REVIEW',
      priority: 'high',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    });
  }
  
  async checkReviewCompletion(adrId: string): Promise<boolean> {
    const reviews = await this.getReviews(adrId);
    const completedReviewers = reviews.map(r => r.reviewer);
    
    return this.requiredReviewers.every(reviewer =>
      completedReviewers.includes(reviewer)
    );
  }
  
  async finalizeADR(adrId: string): Promise<void> {
    const isComplete = await this.checkReviewCompletion(adrId);
    
    if (!isComplete) {
      throw new Error('ADR review not complete');
    }
    
    const reviews = await this.getReviews(adrId);
    const acceptCount = reviews.filter(r => r.decision === 'accept').length;
    const rejectCount = reviews.filter(r => r.decision === 'reject').length;
    
    if (acceptCount > rejectCount) {
      this.adrManager.acceptADR(adrId, 'system');
    } else {
      this.adrManager.rejectADR(adrId, 'Majority rejected');
    }
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// ADR Documentation Generator
class ADRDocumentation {
  async generateADRIndex(): Promise<string> {
    const adrs = this.adrManager.getAllADRs();
    
    let index = '# Architecture Decision Records\n\n';
    index += '| ID | Title | Status | Date | Author |\n';
    index += '|----|------|--------|------|--------|\n';
    
    adrs
      .sort((a, b) => a.id.localeCompare(b.id))
      .forEach(adr => {
        index += `	ypescript  ypescript| [${adr.id}](./${adr.id}-${this.slugify(adr.title)}.md) | ${adr.title} | ${adr.status} | ${adr.createdAt.toISOString().split('T')[0]} | ${adr.author} |\n`	ypescript  ypescript;
      });
    
    return index;
  }
  
  async generateADRMarkdown(adr: ADR): Promise<string> {
    let markdown = `	ypescript  ypescript# ADR-${adr.id}: ${adr.title}\n\n`	ypescript  ypescript;
    markdown += `	ypescript  ypescript## Status\n${adr.status}\n\n`	ypescript  ypescript;
    markdown += `	ypescript  ypescript## Date\n${adr.createdAt.toISOString().split('T')[0]}\n\n`	ypescript  ypescript;
    markdown += `	ypescript  ypescript## Author\n${adr.author}\n\n`	ypescript  ypescript;
    
    if (adr.reviewers.length > 0) {
      markdown += `	ypescript  ypescript## Reviewers\n${adr.reviewers.join(', ')}\n\n`	ypescript  ypescript;
    }
    
    markdown += `	ypescript  ypescript## Context\n${adr.content.context}\n\n`	ypescript  ypescript;
    markdown += `	ypescript  ypescript## Decision\n${adr.content.decision}\n\n`	ypescript  ypescript;
    markdown += `	ypescript  ypescript## Consequences\n${adr.content.consequences}\n\n`	ypescript  ypescript;
    
    if (adr.content.options.length > 0) {
      markdown += `	ypescript  ypescript## Options Considered\n\n`	ypescript  ypescript;
      adr.content.options.forEach((option, index) => {
        markdown += `	ypescript  ypescript### ${index + 1}. ${option.title}\n`	ypescript  ypescript;
        markdown += `	ypescript  ypescript${option.description}\n\n`	ypescript  ypescript;
        
        if (option.pros.length > 0) {
          markdown += `	ypescript  ypescript**Pros:**\n`	ypescript  ypescript;
          option.pros.forEach(pro => markdown += `	ypescript  ypescript- ${pro}\n`	ypescript  ypescript);
          markdown += `	ypescript  ypescript\n`	ypescript  ypescript;
        }
        
        if (option.cons.length > 0) {
          markdown += `	ypescript  ypescript**Cons:**\n`	ypescript  ypescript;
          option.cons.forEach(con => markdown += `	ypescript  ypescript- ${con}\n`	ypescript  ypescript);
          markdown += `	ypescript  ypescript\n`	ypescript  ypescript;
        }
        
        if (option.rejected && option.reason) {
          markdown += `	ypescript  ypescript**Rejected:** ${option.reason}\n\n`	ypescript  ypescript;
        }
      });
    }
    
    if (adr.content.implementation) {
      markdown += `	ypescript  ypescript## Implementation\n${adr.content.implementation}\n\n`	ypescript  ypescript;
    }
    
    if (adr.relatedADRs.length > 0) {
      markdown += `	ypescript  ypescript## Related ADRs\n`	ypescript  ypescript;
      adr.relatedADRs.forEach(relatedId => {
        const relatedADR = this.adrManager.findADR(relatedId);
        if (relatedADR) {
          markdown += `	ypescript  ypescript- [ADR-${relatedId}: ${relatedADR.title}](./${relatedId}-${this.slugify(relatedADR.title)}.md)\n`	ypescript  ypescript;
        }
      });
      markdown += `	ypescript  ypescript\n`	ypescript  ypescript;
    }
    
    return markdown;
  }
  
  private slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

- **Problem Statement**: ปัญหาที่ชัดเจน

- **Current State**: สถานการณ์ปัจจุบัน

- **Stakeholders**: ผู้มีส่วนได้ส่วนเสีย

- **Constraints**: ข้อจำกัดที่ต้องพิจารณา

- **Timeline**: ช่วงเวลาที่ต้องตัดสินใจ

- **Clear Statement**: การตัดสินใจที่ชัดเจน

- **Rationale**: เหตุผลที่เลือก

- **Scope**: ขอบเขตของการตัดสินใจ

- **Assumptions**: สมมติฐานที่ใช้

- **Technical Impact**: ผลกระทบทางเทคนิค

- **Business Impact**: ผลกระทบทางธุรกิจ

- **Team Impact**: ผลกระทบต่อทีม

- **Cost Impact**: ผลกระทบด้านต้นทุน

- **Risk Assessment**: การประเมินความเสี่ยง

- **Multiple Reviewers**: อย่างน้อย 3 คนจาก roles ต่างกัน

- **Timeboxed Reviews**: จำกัดเวลาการ review (7-14 วัน)

- **Document Feedback**: บันทึก feedback ทั้งหมด

- **Escalation Path**: มีวิธี escalate เมื่อไม่สามารถตัดสินใจได้

- **Regular Review**: ทบทวน ADR ทุก 6-12 เดือน

- **Version Control**: เก็บ ADR ใน version control

- **Accessibility**: ทำให้ทุกคนเข้าถึงได้

- **Searchability**: สามารถค้นหาได้ง่าย

- Technology stack selection

- Architecture patterns

- Organizational structure

- Long-term vision

- Specific implementations

- Tool selections

- Process changes

- Short-term decisions

- Guidelines

- Standards

- Best practices

- Lessons learned

`	ypescript  ypescript`	ypescript  ypescript`markdown

Accepted

ระบบต้องการ database ที่สามารถรองรับ:

- ACID transactions สำหรับ financial operations

- Complex queries สำหรับ reporting

- High availability และ failover

- JSON support สำหรับ flexible schemas

- Strong consistency

เลือก PostgreSQL เป็น primary database ด้วยเหตุผล:

- Full ACID compliance

- Rich data types (JSON, arrays, etc.)

- Strong ecosystem และ tooling

- Proven scalability

- Open source และ active community

- Data integrity สูง

- Rich query capabilities

- Good tooling support

- Active community

- Cost-effective

- Learning curve สำหรับทีมที่คุ้นเคยกับ NoSQL

- Performance tuning ซับซ้อน

- Scaling ต้องอาศัย external tools

1. **MongoDB**: Document database
   - ข้อดี: Flexible schema, horizontal scaling
   - ข้อเสีย: Limited ACID, consistency concerns

2. **MySQL**: Popular relational database
   - ข้อดี: Mature, good performance
   - ข้อเสีย: Limited JSON support, less flexible

3. **PostgreSQL**: Advanced relational database
   - ข้อดี: Full ACID, rich features, JSON support
   - ข้อเสีย: More complex, steeper learning curve

- Use PostgreSQL 14+

- Implement connection pooling

- Setup read replicas for reporting

- Use pgBouncer for connection management

- Implement backup strategy with WAL-E

- ADR-001: Adopt Microservices Architecture

- ADR-003: Caching Strategy
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`markdown

Accepted

Microservices architecture ต้องการ:

- Single entry point สำหรับ clients

- Authentication และ authorization

- Rate limiting

- Request routing

- Monitoring และ logging

เลือก Kong เป็น API Gateway เพราะ:

- High performance

- Rich plugin ecosystem

- Good documentation

- Active community

- Cloud-native design

- Centralized API management

- Good performance

- Extensive plugin support

- Easy to configure

- Additional infrastructure component

- Learning curve for Kong configuration

- Potential single point of failure

1. **NGINX**: Web server และ reverse proxy
   - ข้อดี: Fast, reliable, well-known
   - ข้อเสีย: Limited API gateway features

2. **AWS API Gateway**: Managed service
   - ข้อดี: Fully managed, integrates with AWS
   - ข้อเสีย: Vendor lock-in, costly

3. **Kong**: API gateway platform
   - ข้อดี: Rich features, good performance
   - ข้อเสีย: Additional complexity

- Deploy Kong in Kubernetes

- Configure plugins for authentication

- Setup rate limiting per service

- Implement monitoring with Prometheus

- Use Kong Enterprise for advanced features

- ADR-001: Adopt Microservices Architecture

- ADR-004: Authentication Strategy
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`bash

npm install -g adr-tools

adr new Use PostgreSQL for primary database

adr list

adr graph

adr validate
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`yaml

name: ADR Review

on:
  pull_request:
    paths:
      - 'docs/adr/*.md'

jobs:
  adr-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Validate ADR format
        run: |
          npm install -g adr-tools
          adr validate
          
      - name: Check for required sections
        run: |
          # Custom validation script
          node scripts/validate-adr.js
          
      - name: Notify architects
        if: github.event.action == 'opened'
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '🏗️ ADR review requested. Please review this architecture decision.'
            })
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// ADR Integration with Documentation Site
class ADRSiteGenerator {
  async generateSite(): Promise<void> {
    const adrs = this.adrManager.getAllADRs();
    
    // Generate index page
    const indexContent = await this.generateIndexPage(adrs);
    await this.writeFile('docs/adr/index.html', indexContent);
    
    // Generate individual ADR pages
    for (const adr of adrs) {
      const adrContent = await this.generateADRPage(adr);
      await this.writeFile(`docs/adr/${adr.id}.html`	ypescript  ypescript, adrContent);
    }
    
    // Generate RSS feed
    const rssContent = await this.generateRSSFeed(adrs);
    await this.writeFile('docs/adr/rss.xml', rssContent);
  }
  
  private async generateIndexPage(adrs: ADR[]): Promise<string> {
    // Generate HTML index page with ADR listing
  }
  
  private async generateADRPage(adr: ADR): Promise<string> {
    // Generate HTML page for individual ADR
  }
  
  private async generateRSSFeed(adrs: ADR[]): Promise<string> {
    // Generate RSS feed for ADR updates
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

ADR เป็นเครื่องมือสำคัญในการจัดการ architecture decisions ที่ช่วย:

1. **Documentation**: บันทึกการตัดสินใจอย่างเป็นระบบ
2. **Communication**: สื่อสาร decisions ให้ทีมเข้าใจ
3. **Consistency**: รักษาความสม่ำเสมอในการตัดสินใจ
4. **Learning**: เรียนรู้จาก decisions ในอดีต
5. **Accountability**: ทำให้ decisions มีความรับผิดชอบ

การใช้ ADR อย่างมีประสิทธิภาพจะช่วยให้ทีมสามารถตัดสินใจทางสถาปัตยกรรมได้ดีขึ้น และสร้างระบบที่ maintainable และ scalable มากขึ้น



