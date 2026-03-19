# Feature Toggles vs Maintenance Mode

## เปรียบเทียบ

| หัวข้อ | Feature Toggles | Maintenance Mode |
|--------|-----------------|------------------|
| **Purpose** | Hide incomplete features | Deactivate for maintenance |
| **User Impact** | Invisible | Visible downtime |
| **Timing** | Development phase | Production issues |
| **Granularity** | Feature-level | System-level |
| **Rollback** | Toggle off | Full shutdown |
| **Database** | Production data | Frozen or read-only |
| **Complexity** | Code complexity | Operational procedure |
| **Communication** | None needed | User notification |
| **Best For** | Continuous deployment | Emergency fixes |
| **Cost** | Development overhead | Lost availability |

## เมื่อไหร่ใช้อะไร

- **Feature Toggles**: Trunk-based dev, gradual rollout, experiment
- **Maintenance Mode**: Critical fixes, data migrations, upgrades
