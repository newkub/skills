# SWE Models

## Overview

SWE (Software Engineering) models เป็น family ของ AI models ที่ Cognition พัฒนาขึ้นโดยเฉพาะสำหรับ software engineering tasks แต่ละ model มีจุดเด่นและ use cases ที่แตกต่างกัน

## Model Family

### SWE-1.6

**Latest Model** - Optimized สำหรับ software engineering agents

**Key Features:**
- Comparable SWE-Bench Pro performance กับ SWE-1.6 Preview
- Improved จาก SWE-1.5 มากกว่า 10%
- Uses parallel tool calls บ่อยกว่า
- Loops far less มากกว่า models ก่อนหน้า
- Relies more on its own tools มากกว่า terminal
- Efficient trajectories และ smoother user experience

**Use Cases:**
- General coding tasks
- Complex problem solving
- Code generation ที่ต้องการ high intelligence
- Multi-step tasks
- Architectural decisions

**Performance:**
- Intelligence: High
- Speed: Fast
- Cost: Medium

### SWE-1.6 Fast

**Speed-Optimized Version** - เร็วที่สุดใน family

**Key Features:**
- Same intelligence as SWE-1.6
- Unmatched speed
- Lower cost per token
- Available to paying users only

**Use Cases:**
- Fast code generation
- Real-time assistance
- High-volume tasks
- When speed is priority

**Performance:**
- Intelligence: High (same as SWE-1.6)
- Speed: Very Fast
- Cost: Low

### SWE-1.5

**Previous Frontier Model** - Near Claude 4.5 performance

**Key Features:**
- Near Claude 4.5-level performance
- 13x faster than Claude 4.5
- Frontier-size model (hundreds of billions of parameters)
- Served at up to 10x faster speeds (via Cerebras)

**Use Cases:**
- Legacy support
- Tasks ที่ไม่ต้องการ latest features
- Cost-sensitive projects

**Performance:**
- Intelligence: High (near Claude 4.5)
- Speed: Very Fast
- Cost: Low

### SWE-1

**First Agentic Coding Model** - Claude 3.5 performance at lower cost

**Key Features:**
- Achieved Claude 3.5-level performance
- Fraction of the cost
- First model optimized for agentic coding

**Use Cases:**
- Simple coding tasks
- Cost-sensitive projects
- Legacy systems

**Performance:**
- Intelligence: Medium (Claude 3.5 level)
- Speed: Fast
- Cost: Very Low

### SWE-1-mini

**Real-Time Autocomplete** - Optimized for latency

**Key Features:**
- Powers passive suggestions in Windsurf Tab
- Optimized for real-time latency
- Lightweight model
- Fast inference

**Use Cases:**
- Real-time autocomplete
- Inline suggestions
- Quick completions
- Low-latency requirements

**Performance:**
- Intelligence: Low
- Speed: Extremely Fast
- Cost: Very Low

### swe-grep

**Context Retrieval** - Powers Fast Context

**Key Features:**
- Powers context retrieval
- Powers Fast Context feature
- Optimized for code search
- Intelligent code understanding

**Use Cases:**
- Context retrieval
- Code search
- Finding relevant code
- Fast Context feature

**Performance:**
- Intelligence: Specialized
- Speed: Very Fast
- Cost: Low

## Model Comparison

| Model | Intelligence | Speed | Cost | Best For |
|-------|-------------|-------|------|----------|
| SWE-1.6 | High | Fast | Medium | General coding, complex tasks |
| SWE-1.6 Fast | High | Very Fast | Low | Speed-critical tasks |
| SWE-1.5 | High (near Claude 4.5) | Very Fast | Low | Legacy support, cost-sensitive |
| SWE-1 | Medium (Claude 3.5) | Fast | Very Low | Simple tasks, legacy |
| SWE-1-mini | Low | Extremely Fast | Very Low | Real-time autocomplete |
| swe-grep | Specialized | Very Fast | Low | Context retrieval, search |

## Choosing the Right Model

### Decision Tree

```
Need real-time autocomplete?
├─ Yes → SWE-1-mini
└─ No
    Need context retrieval/search?
    ├─ Yes → swe-grep
    └─ No
        Speed is critical priority?
        ├─ Yes → SWE-1.6 Fast
        └─ No
            Complex task requiring high intelligence?
            ├─ Yes → SWE-1.6
            └─ No
                Cost-sensitive?
                ├─ Yes → SWE-1.5 or SWE-1
                └─ No → SWE-1.6
```

### Use Case Examples

#### Web Development
- **SWE-1.6**: Building complex features, architectural decisions
- **SWE-1.6 Fast**: Rapid prototyping, quick iterations
- **SWE-1-mini**: Inline completions, autocomplete

#### Data Science
- **SWE-1.6**: Complex algorithms, data processing pipelines
- **SWE-1.5**: Data analysis, visualization
- **swe-grep**: Finding relevant code in large codebases

#### DevOps
- **SWE-1.6**: Infrastructure as code, complex deployments
- **SWE-1.6 Fast**: Quick script generation
- **SWE-1**: Simple automation tasks

#### Mobile Development
- **SWE-1.6**: Complex UI flows, state management
- **SWE-1.6 Fast**: Component generation
- **SWE-1-mini**: Code completion

## Model Architecture

### Key Innovations

1. **Parallel Tool Calling**
   - SWE-1.6 uses parallel tool calls more often
   - Reduces sequential dependencies
   - Improves efficiency

2. **Reduced Looping**
   - SWE-1.6 loops far less than previous models
   - Avoids reasoning loops
   - More efficient trajectories

3. **Tool Preference**
   - Relies more on its own tools than terminal
   - Better tool selection
   - Smoother user experience

4. **Optimized for Agents**
   - Designed specifically for agentic workflows
   - Better at multi-step tasks
   - Improved planning and execution

### Performance Metrics

#### SWE-Bench Pro
- SWE-1.6: Comparable to SWE-1.6 Preview
- SWE-1.5: Baseline
- Improvement: >10% from SWE-1.5 to SWE-1.6

#### Speed
- SWE-1.5: 13x faster than Claude 4.5
- SWE-1.6 Fast: Unmatched speed
- SWE-1-mini: Optimized for real-time latency

#### Cost
- SWE-1: Fraction of Claude 3.5 cost
- SWE-1.5: Low cost
- SWE-1.6 Fast: Lower cost per token

## Model Selection in Cascade

### How to Select

1. **Open Cascade Panel** in Windsurf
2. **Click Model Selector**
3. **Choose Model** from dropdown:
   - SWE-1.6 (default)
   - SWE-1.6 Fast (paid users)
   - SWE-1.5
   - SWE-1
   - SWE-1-mini (for autocomplete)

### Automatic Selection

Cascade may automatically select models based on:
- Task complexity
- Speed requirements
- User preferences
- Available quota

### Quota Management

- View quota in model selector
- Extra usage billed based on token cost
- Model usage converted to ACUs (Adaptive Compute Units)

## Best Practices

### 1. Start with SWE-1.6

For most tasks, SWE-1.6 provides the best balance of intelligence and speed.

### 2. Use SWE-1.6 Fast for Speed-Critical Tasks

When speed is priority, use SWE-1.6 Fast for same intelligence at lower cost.

### 3. Use SWE-1-mini for Autocomplete

Let SWE-1-mini handle inline suggestions for real-time assistance.

### 4. Use swe-grep for Context

When searching code or retrieving context, swe-grep is optimized for this.

### 5. Consider Cost for Large Projects

For cost-sensitive projects, consider SWE-1.5 or SWE-1.

## Future Developments

Cognition continues to improve SWE models:
- Regular performance improvements
- New specialized models
- Better tool integration
- Enhanced context understanding

Stay updated with:
- [Cognition Blog](https://cognition.ai/blog)
- [Devin Docs](https://docs.devin.ai)
- [Research Announcements](https://cognition.ai/blog/swe-1-6)

## Related Concepts

- [Agent Client Protocol (ACP)](agent-client-protocol.md)
- [Spaces](spaces.md)
- [Context Awareness](context-awareness.md)
- [Supercomplete](supercomplete.md)
