---
description: บล็อกคำพูดซ้อนกัน (Nested Blockquotes) ใน Markdown
title: blockquotes-nested
tags: [markdown, blockquotes, nested]
goals:
  - แสดงตัวอย่างการใช้ nested blockquotes
  - สอนวิธีสร้าง indented quotes
---

## Basic Nested Quote

````markdown
> This is the outer quote
>> This is the nested quote
>>> This is deeper nested
````

## Quote with Content Types

````markdown
> **Note:** Important information
>>
>> - Point one
>> - Point two
>>
>> > "Quote within a quote"
````

## Multi-level Nesting

````markdown
> Level 1
>> Level 2
>>> Level 3
>>>> Level 4
>>>>> Level 5
````

## Mixed Content in Nested Quotes

````markdown
> Main point
>>
>> ```javascript
>> code example
>> ```
>>
>> > Sub-point with **bold** text
````

## Conversation Style

````markdown
> **User:** How do I do this?
>
>> **Support:** Here's how...
>>
>>> **User:** Thanks! That worked.
````

## Nested with Lists

````markdown
> ### Steps:
>>
>> 1. First step
>> 2. Second step
>>    - Sub-step A
>>    - Sub-step B
````
