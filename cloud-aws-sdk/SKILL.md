---
name: aws-sdk
description: AWS SDK for JavaScript. Use for interacting with AWS services like S3, Lambda, DynamoDB, and more from Node.js and browser applications.
goal: Use AWS SDK following best practices
outcome: Reliable integration with AWS cloud services
---

# AWS SDK Library

## When to use

Use this library when:

- Interacting with AWS services programmatically
- Uploading files to S3
- Using DynamoDB, Lambda, or other AWS services
- Building serverless applications on AWS
- Need to manage AWS resources via code
- Building cloud-native applications


## Skills Related


## Quick Start

1. Install SDK v3: `npm install @aws-sdk/client-s3`
2. Configure credentials (IAM role or env vars)
3. Create client and make API calls
4. Handle responses and errors

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | AWS SDK fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | Security and patterns | Using AWS services |
| **Rules** | Setup | Credentials and config | New project setup |
| **Rules** | S3 | File storage operations | Object storage |
| **Rules** | DynamoDB | NoSQL database operations | Database access |
| **Rules** | Lambda | Serverless functions | Compute services |
| **Rules** | SQS/SNS | Queue and messaging | Async communication |
| **Rules** | IAM | Permissions and roles | Security |
| **Rules** | Error Handling | AWS SDK errors | Resilience |

## Core Features

- **Modular**: Install only the clients you need (v3)
- **TypeScript**: Full TypeScript support
- **Streaming**: Support for streaming operations
- **Pagination**: Automatic pagination helpers
- **Middleware**: Custom request/response handling
- **Retries**: Built-in retry logic with backoff

## Quick Reference

```bash
# Install specific client
npm install @aws-sdk/client-s3
npm install @aws-sdk/client-dynamodb

# S3 example
const client = new S3Client({ region: 'us-east-1' })
const command = new PutObjectCommand({
  Bucket: 'my-bucket',
  Key: 'file.txt',
  Body: content
})
const response = await client.send(command)
```

## Verification

1. Check AWS SDK installation
2. Verify credential configuration
3. Test service connection
4. Validate API calls
5. Check error handling
6. Ensure proper cleanup

## References

- [AWS SDK v3 Documentation](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/)
- [AWS SDK on NPM](https://www.npmjs.com/package/@aws-sdk)
- [AWS Documentation](https://docs.aws.amazon.com/)
