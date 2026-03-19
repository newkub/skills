---
description: การสร้าง links ใน Markdown
title: links
tags: [markdown, links, navigation]
goals:
  - แสดงตัวอย่างการสร้าง internal links
  - แสดงตัวอย่างการสร้าง external links
---

## Internal Links

````markdown
[Link to Heading](#heading-id)
[Link to File](./path/to/file.md)
[Link to Section](./file.md#section-id)
````

## External Links

````markdown
[External Link](https://example.com)
[Link with Title](https://example.com "Title")
[Email Link](mailto:email@example.com)
````

## Reference Links

````markdown
[Link Text][ref-id]

[ref-id]: https://example.com "Title"
````

## Auto Links

````markdown
<https://example.com>
<email@example.com>
````
