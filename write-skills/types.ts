/**
 * TypeScript types for Write Windsurf Skills
 * 
 * ใช้สำหรับกำหนด types สำหรับ skill structure, configuration และ validation
 */

/**
 * Skill types ที่รองรับ
 */
export type SkillType =
  | 'guide'
  | 'lang'
  | 'lib'
  | 'framework'
  | 'runtime'
  | 'cloud'
  | 'create'
  | 'tool';

/**
 * Skill prefix สำหรับแต่ละ type
 */
export const SKILL_PREFIXES: Record<SkillType, string> = {
  guide: 'guide-',
  lang: 'lang-',
  lib: 'lib-',
  framework: 'framework-',
  runtime: 'runtime-',
  cloud: 'cloud-',
  create: 'create-',
  tool: 'tool-',
} as const;

/**
 * Folder structure ของ skill
 */
export interface SkillFolderStructure {
  /** ไฟล์ index หลัก (REQUIRED) */
  SKILL_MD: string;
  /** เนื้อหาแนะนำและ best practices (REQUIRED) */
  guide: string;
  /** แนวคิดสำคัญ (OPTIONAL) */
  keyConcepts: string;
  /** หลักการ (OPTIONAL) */
  principles: string;
  /** เอกสารอ้างอิง (REQUIRED) */
  references: string;
  /** Workflows สำหรับ automation (REQUIRED) */
  workflows: string;
  /** Templates สำหรับเริ่มต้น (OPTIONAL) */
  templates: string;
  /** Scripts สำหรับ automation (OPTIONAL) */
  scripts: string;
  /** Rules และ configurations (REQUIRED) */
  devin: string;
}

/**
 * .devin folder structure
 */
export interface DevinFolderStructure {
  /** เป้าหมายของ skill */
  goal: string;
  /** Scope และ execute steps */
  scope: string;
  /** Execute steps ทั้งหมด */
  execute: string;
  /** Expected outcome */
  expected: string;
  /** Rules folder */
  rules: {
    /** Structure files ที่ต้องมีเสมอ */
    alwaysOn: string;
    /** Template files ที่ model ตัดสินใช้ */
    modelDecision: string;
    /** Files ที่ใช้ glob patterns */
    glob: string;
  };
  /** Workflow files สำหรับ task automation */
  workflows: string;
}

/**
 * Skill configuration
 */
export interface SkillConfig {
  /** ชื่อ skill */
  name: string;
  /** ประเภทของ skill */
  type: SkillType;
  /** คำอธิบาย */
  description: string;
  /** Auto execution mode */
  autoExecutionMode?: number;
  /** Related skills */
  relatedSkills?: string[];
  /** Required folders */
  requiredFolders?: (keyof SkillFolderStructure)[];
  /** Optional folders */
  optionalFolders?: (keyof SkillFolderStructure)[];
}

/**
 * File pattern configuration
 */
export interface FilePattern {
  /** Trigger type */
  trigger: 'glob';
  /** Glob pattern */
  glob: string;
  /** Description */
  description?: string;
}

/**
 * Reference entry
 */
export interface ReferenceEntry {
  /** หมายเลข */
  no: number;
  /** ชื่อไฟล์ */
  file: string;
  /** คำอธิบาย */
  description: string;
}

/**
 * SKILL.md structure
 */
export interface SkillMarkdown {
  /** Title */
  title: string;
  /** Description */
  description: string;
  /** Auto execution mode */
  auto_execution_mode?: number;
  /** When to use section */
  whenToUse: string[];
  /** Skills related */
  skillsRelated: string[];
  /** References table */
  references: {
    keyConcepts?: ReferenceEntry[];
    principles?: ReferenceEntry[];
    guide?: ReferenceEntry[];
    references?: ReferenceEntry[];
    workflows?: ReferenceEntry[];
    devin?: ReferenceEntry[];
  };
}

/**
 * Workflow file frontmatter
 */
export interface WorkflowFrontmatter {
  /** Description */
  description: string;
}

/**
 * Structure file frontmatter
 */
export interface StructureFrontmatter {
  /** Trigger type */
  trigger: 'always_on';
}

/**
 * Content quality standards
 */
export interface ContentQualityStandards {
  /** Spacing และ indentation สม่ำเสมอ */
  consistentSpacing: boolean;
  /** Headings เป็น Title Case (EN) */
  titleCaseHeadings: boolean;
  /** รายการเป็น TH */
  thaiListings: boolean;
  /** คำศัพท์สม่ำเสมอ */
  consistentTerminology: boolean;
  /** ข้อมูลถูกต้องตาม principle + references */
  accurateInformation: boolean;
  /** Grouping + hierarchy ชัดเจน */
  clearHierarchy: boolean;
  /** Single source of truth */
  singleSourceOfTruth: boolean;
}

/**
 * Validation result
 */
export interface ValidationResult {
  /** ผ่านหรือไม่ */
  valid: boolean;
  /** Errors */
  errors: string[];
  /** Warnings */
  warnings: string[];
}

/**
 * Skill validation options
 */
export interface SkillValidationOptions {
  /** ตรวจสอบ folder structure */
  checkFolderStructure?: boolean;
  /** ตรวจสอบ SKILL.md structure */
  checkSkillMd?: boolean;
  /** ตรวจสอบ references */
  checkReferences?: boolean;
  /** ตรวจสอบ conflicts */
  checkConflicts?: boolean;
  /** ตรวจสอบ content quality */
  checkContentQuality?: boolean;
}

/**
 * File category ใน references/
 */
export type ReferenceCategory = 'api' | 'cli' | 'sitemap' | 'website' | 'configuration';

/**
 * File category ใน guide/
 */
export type GuideCategory =
  | 'best-practices'
  | 'architecture'
  | 'configuration'
  | 'features'
  | 'installation'
  | 'patterns'
  | 'tooling'
  | 'usage';

/**
 * Workflow type
 */
export type WorkflowType = 'write' | 'update' | 'improve' | 'setup' | 'configure' | 'use';
