# Audio Format

## รูปแบบ Audio มาตรฐาน

### Basic Audio (HTML)

```markdown
<audio src="audio.mp3" controls></audio>
```

### Audio with Fallback

```markdown
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support audio.
</audio>
```

### When to Use

- แสดง podcasts
- แสดง music
- แสดง sound effects
- แสดง voice recordings

### Best Practices

- ใช้ optimized audio files
- ให้ multiple formats
- พิจารณา file size
- ให้ controls เสมอ
