import os
import json
from PIL import Image
from collections import Counter

frames_dir = r"C:\Users\eore9\Downloads\Non Financial\Projects\Prototype-Video-Game\references\frames"

results = []

for i in range(101, 203):
    filename = f"prototype_{i:04d}.jpg"
    filepath = os.path.join(frames_dir, filename)
    
    if not os.path.exists(filepath):
        continue
    
    try:
        img = Image.open(filepath)
        img_small = img.resize((100, 100))
        
        # Get dominant colors using quantization
        quantized = img_small.quantize(colors=8, method=2)
        palette = quantized.getpalette()
        color_counts = quantized.getdata()
        most_common = Counter(color_counts).most_common(8)
        
        dominant_colors = []
        for idx, count in most_common:
            r = palette[idx * 3]
            g = palette[idx * 3 + 1]
            b = palette[idx * 3 + 2]
            dominant_colors.append({
                "rgb": [r, g, b],
                "hex": f"#{r:02x}{g:02x}{b:02x}",
                "count": count,
                "pct": round(count / (100 * 100) * 100, 1)
            })
        
        # Average brightness
        pixels = list(img_small.getdata())
        brightness_values = []
        for p in pixels:
            if isinstance(p, int):
                brightness_values.append(p)
            else:
                r, g, b = p[:3]
                brightness_values.append((r + g + b) / 3)
        
        avg_brightness = sum(brightness_values) / len(brightness_values)
        
        # Color temperature hint (warm vs cool)
        total_r = sum(p[0] if isinstance(p, tuple) else p for p in pixels) / len(pixels)
        total_b = sum(p[2] if isinstance(p, tuple) and len(p) > 2 else 0 for p in pixels) / len(pixels)
        temp_ratio = total_r / (total_b + 1)
        
        # Saturation estimate
        saturation_values = []
        for p in pixels:
            if isinstance(p, tuple) and len(p) >= 3:
                r, g, b = p[:3]
                mx = max(r, g, b)
                mn = min(r, g, b)
                if mx > 0:
                    saturation_values.append((mx - mn) / mx)
        
        avg_saturation = sum(saturation_values) / len(saturation_values) if saturation_values else 0
        
        # File size as complexity proxy
        file_size = os.path.getsize(filepath)
        
        results.append({
            "frame": i,
            "filename": filename,
            "dimensions": img.size,
            "avg_brightness": round(avg_brightness, 1),
            "temp_ratio": round(temp_ratio, 2),
            "avg_saturation": round(avg_saturation, 3),
            "file_size_kb": round(file_size / 1024, 1),
            "dominant_colors": dominant_colors[:5]
        })
        
    except Exception as e:
        results.append({
            "frame": i,
            "filename": filename,
            "error": str(e)
        })

# Save results
output_path = os.path.join(frames_dir, "..", "analysis_frames_101-202.json")
with open(output_path, 'w') as f:
    json.dump(results, f, indent=2)

print(f"Analyzed {len(results)} frames")
print(f"Results saved to: {output_path}")

# Print summary statistics
valid = [r for r in results if "error" not in r]
brightness_vals = [r["avg_brightness"] for r in valid]
sat_vals = [r["avg_saturation"] for r in valid]
size_vals = [r["file_size_kb"] for r in valid]

print(f"\nBrightness: min={min(brightness_vals):.1f}, max={max(brightness_vals):.1f}, avg={sum(brightness_vals)/len(brightness_vals):.1f}")
print(f"Saturation: min={min(sat_vals):.3f}, max={max(sat_vals):.3f}, avg={sum(sat_vals)/len(sat_vals):.3f}")
print(f"File size: min={min(size_vals):.1f}KB, max={max(size_vals):.1f}KB, avg={sum(size_vals)/len(size_vals):.1f}KB")

# Group by brightness ranges
dark = sum(1 for v in brightness_vals if v < 80)
mid = sum(1 for v in brightness_vals if 80 <= v < 160)
bright = sum(1 for v in brightness_vals if v >= 160)
print(f"\nLighting distribution: Dark={dark}, Mid={mid}, Bright={bright}")

# Show frame ranges with highest/lowest brightness
valid_sorted = sorted(valid, key=lambda x: x["avg_brightness"])
print("\nDarkest 5 frames:")
for r in valid_sorted[:5]:
    print(f"  Frame {r['frame']}: brightness={r['avg_brightness']}, saturation={r['avg_saturation']}, size={r['file_size_kb']}KB")

print("\nBrightest 5 frames:")
for r in valid_sorted[-5:]:
    print(f"  Frame {r['frame']}: brightness={r['avg_brightness']}, saturation={r['avg_saturation']}, size={r['file_size_kb']}KB")
