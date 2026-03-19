// Application configuration
export interface CheckConfig {
  name: string
  description: string
  enabled: boolean
}

export interface AppConfig {
  cli: {
    name: string
    version: string
  }
  checks: {
    dependenciesLatest: CheckConfig
    diskSpace: CheckConfig
    fileLength: CheckConfig
    fileStructure: CheckConfig
    followSkills: CheckConfig
    followWorkflows: CheckConfig
    legalCompliance: CheckConfig
    missingWorkflows: CheckConfig
    monorepo: CheckConfig
    myCliProgram: CheckConfig
    testCoverage: CheckConfig
    todo: CheckConfig
    unusedDeps: CheckConfig
    unusedVariables: CheckConfig
    unusedWorkflows: CheckConfig
  }
}

export const defaultConfig: AppConfig = {
  cli: {
    name: "check",
    version: "1.0.0"
  },
  checks: {
    dependenciesLatest: {
      name: "dependencies-latest",
      description: "Check for latest dependency versions",
      enabled: true
    },
    diskSpace: {
      name: "disk-space", 
      description: "Check disk space availability",
      enabled: true
    },
    fileLength: {
      name: "file-length",
      description: "Check file length limits",
      enabled: true
    },
    fileStructure: {
      name: "file-structure",
      description: "Check project file structure",
      enabled: true
    },
    followSkills: {
      name: "follow-skills",
      description: "Check skills adherence",
      enabled: true
    },
    followWorkflows: {
      name: "follow-workflows",
      description: "Check workflow adherence",
      enabled: true
    },
    legalCompliance: {
      name: "legal-compliance",
      description: "Check legal compliance",
      enabled: true
    },
    missingWorkflows: {
      name: "missing-workflows",
      description: "Check for missing workflows",
      enabled: true
    },
    monorepo: {
      name: "monorepo",
      description: "Check monorepo structure",
      enabled: true
    },
    myCliProgram: {
      name: "my-cli-program",
      description: "Check CLI program availability",
      enabled: true
    },
    testCoverage: {
      name: "test-coverage",
      description: "Check test coverage",
      enabled: true
    },
    todo: {
      name: "todo",
      description: "Check for TODO comments",
      enabled: true
    },
    unusedDeps: {
      name: "unused-deps",
      description: "Check for unused dependencies",
      enabled: true
    },
    unusedVariables: {
      name: "unused-variables",
      description: "Check for unused variables",
      enabled: true
    },
    unusedWorkflows: {
      name: "unused-workflows",
      description: "Check for unused workflows",
      enabled: true
    }
  }
}
