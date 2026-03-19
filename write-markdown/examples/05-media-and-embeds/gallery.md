---
description: Gallery และ image grid ใน Markdown
title: gallery
tags: [markdown, gallery, images, layout]
goals:
  - แสดงตัวอย่างการสร้าง image gallery
  - สอนวิธีจัดวางรูปภาพแบบ grid
---

## Image Gallery

````markdown
# Gallery

## Image Grid

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
<img src="image1.jpg" alt="Image 1" style="width: 100%; height: auto; border-radius: 8px;">
<img src="image2.jpg" alt="Image 2" style="width: 100%; height: auto; border-radius: 8px;">
<img src="image3.jpg" alt="Image 3" style="width: 100%; height: auto; border-radius: 8px;">
<img src="image4.jpg" alt="Image 4" style="width: 100%; height: auto; border-radius: 8px;">
<img src="image5.jpg" alt="Image 5" style="width: 100%; height: auto; border-radius: 8px;">
<img src="image6.jpg" alt="Image 6" style="width: 100%; height: auto; border-radius: 8px;">
</div>
````

## Gallery with Captions

````markdown
## Photo Gallery

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">

<figure style="margin: 0;">
<img src="photo1.jpg" alt="Photo 1" style="width: 100%; border-radius: 8px;">
<figcaption style="text-align: center; color: #666; margin-top: 8px;">Caption for photo 1</figcaption>
</figure>

<figure style="margin: 0;">
<img src="photo2.jpg" alt="Photo 2" style="width: 100%; border-radius: 8px;">
<figcaption style="text-align: center; color: #666; margin-top: 8px;">Caption for photo 2</figcaption>
</figure>

</div>
````

## Lightbox Gallery

````markdown
## Lightbox Gallery

Click images to enlarge:

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
<a href="image1-large.jpg" target="_blank"><img src="image1-thumb.jpg" alt="Thumb 1" style="width: 150px; border-radius: 4px;"></a>
<a href="image2-large.jpg" target="_blank"><img src="image2-thumb.jpg" alt="Thumb 2" style="width: 150px; border-radius: 4px;"></a>
<a href="image3-large.jpg" target="_blank"><img src="image3-thumb.jpg" alt="Thumb 3" style="width: 150px; border-radius: 4px;"></a>
</div>
````

## Screenshot Gallery

````markdown
## Screenshots

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; border: 1px solid #eee; padding: 16px;">

**Dashboard View**  
<img src="screenshot-dashboard.png" alt="Dashboard" style="width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

**Settings Panel**  
<img src="screenshot-settings.png" alt="Settings" style="width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

**Mobile View**  
<img src="screenshot-mobile.png" alt="Mobile" style="width: 100%; max-width: 300px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

</div>
````

## Before/After Gallery

````markdown
## Before & After

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
<div>
<h4>Before</h4>
<img src="before.jpg" alt="Before" style="width: 100%; border-radius: 8px;">
</div>
<div>
<h4>After</h4>
<img src="after.jpg" alt="After" style="width: 100%; border-radius: 8px;">
</div>
</div>
````
