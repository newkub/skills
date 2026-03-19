---
description: Footnotes และ references ใน Markdown
title: footnotes
tags: [markdown, footnotes, references]
goals:
  - แสดงตัวอย่างการใช้ footnotes
  - สอนวิธีสร้าง document references
---

## Basic Footnotes

````markdown
Here is some text with a footnote[^1].

Another sentence with a different note[^2].

[^1]: This is the first footnote.
[^2]: This is the second footnote with more details.
````

## Inline Footnotes

````markdown
Text with inline note^[This is an inline footnote].

Multiple notes[^a][^b][^c] in one sentence.
````

## Long Footnotes

````markdown
Complex topic[^long].

[^long]: This is a longer footnote that spans multiple lines.

    It can contain multiple paragraphs when indented.

    - Even lists
    - And other formatting
````
