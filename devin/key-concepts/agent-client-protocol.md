# Agent Client Protocol (ACP)

## Overview

Agent Client Protocol (ACP) เป็น protocol มาตรฐานสำหรับ communication ระหว่าง agents ใน Devin ecosystem ช่วยให้ agents ทำงานร่วมกันได้อย่างมีประสิทธิภาพ

## What is ACP?

ACP เป็น protocol ที่:
- Define standard interface สำหรับ agent communication
- Enable agents แลกเปลี่ยน context และ state
- Support handoff ระหว่าง local และ cloud agents
- Provide consistent API สำหรับ tool calling
- Enable fleet management ของ agents

## Key Components

### 1. Message Format

ACP ใช้ standardized message format:

```json
{
  "version": "1.0",
  "type": "request|response|notification",
  "agent_id": "agent-uuid",
  "timestamp": "ISO-8601",
  "content": {
    "action": "tool_call|context_update|status",
    "data": {}
  }
}
```

### 2. Tool Calling

ACP standardizes tool calling across agents:

**Request:**
```json
{
  "type": "request",
  "content": {
    "action": "tool_call",
    "data": {
      "tool": "file_read",
      "parameters": {
        "path": "/path/to/file"
      }
    }
  }
}
```

**Response:**
```json
{
  "type": "response",
  "content": {
    "action": "tool_call",
    "data": {
      "result": "file content",
      "status": "success"
    }
  }
}
```

### 3. Context Sharing

ACP enables context sharing between agents:

```json
{
  "type": "notification",
  "content": {
    "action": "context_update",
    "data": {
      "context_type": "file|directory|git_state",
      "context_data": {}
    }
  }
}
```

### 4. Status Updates

Agents can broadcast status updates:

```json
{
  "type": "notification",
  "content": {
    "action": "status",
    "data": {
      "state": "idle|working|waiting|error",
      "progress": 0.75,
      "message": "Processing request"
    }
  }
}
```

## Agent Types

### Local Agents

Run on your machine:
- Full access to local files
- Can execute terminal commands
- Lower latency
- Limited by local resources

### Cloud Agents

Run on Cognition's infrastructure:
- More computational power
- Access to cloud resources
- Higher latency
- Scalable resources

### Hybrid Workflows

ACP enables seamless handoff:
1. Local agent starts task
2. Offloads to cloud agent for heavy computation
3. Cloud agent returns results
4. Local agent continues with results

## Use Cases

### 1. Parallel Processing

Multiple agents work on different parts:

```
Agent A: Process files 1-10
Agent B: Process files 11-20
Agent C: Process files 21-30
```

### 2. Specialized Agents

Different agents for different tasks:

```
Code Review Agent: Review code
Test Agent: Write tests
Docs Agent: Write documentation
```

### 3. Handoff Scenarios

Local → Cloud handoff:

```
1. Local agent: Analyze codebase
2. Handoff to cloud: Run complex analysis
3. Cloud returns: Analysis results
4. Local continues: Apply fixes
```

### 4. Fleet Management

Manage multiple agents:

```
Manager Agent: Coordinate tasks
Worker Agents: Execute tasks
Monitor Agent: Track progress
```

## ACP in Devin Desktop

### Spaces

Spaces use ACP for:
- Sharing context between agents
- Coordinating agent workflows
- Managing agent lifecycles
- Tracking agent states

### Agent Sessions

Each agent session:
- Has unique agent_id
- Maintains state via ACP
- Communicates with other agents
- Persists context across sessions

### Git Worktrees

ACP enables:
- Shared Git worktrees
- Coordinated branch management
- Conflict resolution
- Merge coordination

## Best Practices

### 1. Design for Handoff

Design agents to support handoff:
- Save state before handoff
- Load state after handoff
- Provide clear handoff points
- Document handoff requirements

### 2. Use Standard Tools

Use ACP-standard tools:
- file_read, file_write
- terminal_execute
- git_operations
- context_management

### 3. Handle Errors Gracefully

Implement error handling:
- Catch and report errors
- Provide recovery mechanisms
- Log errors for debugging
- Notify relevant agents

### 4. Optimize Communication

Minimize ACP overhead:
- Batch related operations
- Use efficient data formats
- Cache frequently used context
- Avoid unnecessary messages

### 5. Monitor Performance

Track agent performance:
- Response times
- Resource usage
- Error rates
- Throughput

## Implementation Example

### Simple Agent

```python
class MyAgent:
    def __init__(self, agent_id):
        self.agent_id = agent_id
        self.acp_client = ACPClient()
    
    def process_file(self, file_path):
        # Read file via ACP
        response = self.acp_client.send_request({
            "tool": "file_read",
            "parameters": {"path": file_path}
        })
        
        # Process content
        result = self.analyze(response["result"])
        
        # Write result via ACP
        self.acp_client.send_request({
            "tool": "file_write",
            "parameters": {
                "path": file_path + ".analyzed",
                "content": result
            }
        })
    
    def update_status(self, state, message):
        self.acp_client.send_notification({
            "action": "status",
            "data": {
                "state": state,
                "message": message
            }
        })
```

### Handoff Example

```python
# Local agent
local_agent = LocalAgent("local-1")
result = local_agent.analyze_codebase()

# Handoff to cloud
handoff_message = {
    "action": "handoff",
    "data": {
        "target_agent": "cloud-1",
        "context": result,
        "next_task": "run_complex_analysis"
    }
}
local_agent.acp_client.send_notification(handoff_message)

# Cloud agent receives and continues
cloud_agent = CloudAgent("cloud-1")
cloud_agent.receive_handoff(handoff_message)
analysis = cloud_agent.run_complex_analysis(handoff_message["context"])

# Return results
cloud_agent.send_results(local_agent.agent_id, analysis)
```

## ACP vs Other Protocols

| Feature | ACP | gRPC | REST |
|---------|-----|------|------|
| Agent-specific | ✅ | ❌ | ❌ |
| Context sharing | ✅ | ❌ | ❌ |
| Handoff support | ✅ | ❌ | ❌ |
| Tool standardization | ✅ | ❌ | ❌ |
| Fleet management | ✅ | ❌ | ❌ |
| Performance | High | Very High | Medium |
| Complexity | Medium | High | Low |

## Security Considerations

### 1. Authentication

Agents authenticate via:
- Agent tokens
- Session keys
- Certificate-based auth

### 2. Authorization

Access control:
- Agent permissions
- Resource ACLs
- Role-based access

### 3. Encryption

All ACP messages:
- Encrypted in transit
- Optional encryption at rest
- Secure key exchange

### 4. Auditing

Track all ACP activity:
- Message logs
- Agent actions
- Access attempts
- Security events

## Troubleshooting

### Common Issues

**Handoff Fails**
- Check agent availability
- Verify context format
- Review handoff requirements
- Check network connectivity

**Context Not Shared**
- Verify agent in same space
- Check context permissions
- Review ACP message format
- Check agent state

**Performance Issues**
- Monitor message frequency
- Check for message batching
- Review data sizes
- Optimize tool usage

### Debugging ACP

Enable ACP debugging:
```python
acp_client = ACPClient(debug=True)
acp_client.set_log_level("DEBUG")
```

View ACP logs:
- Devin Desktop logs
- Agent session logs
- ACP message logs
- Performance metrics

## Future Enhancements

Planned ACP improvements:
- Better streaming support
- Enhanced error handling
- Improved security
- Performance optimizations
- More tool types

## Related Concepts

- [SWE Models](swe-models.md)
- [Spaces](spaces.md)
- [Context Awareness](context-awareness.md)
- [Supercomplete](supercomplete.md)
