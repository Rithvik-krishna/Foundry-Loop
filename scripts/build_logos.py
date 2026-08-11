import os, base64
from PIL import Image

def png_to_svg(png_path, svg_path, width=205, height=45):
    with open(png_path, "rb") as f:
        data = base64.b64encode(f.read()).decode("utf-8")
    
    svg_content = f'''<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,{data}" width="{width}" height="{height}"/>
</svg>'''
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(svg_content)

png_to_svg("public/logo-light.png", "public/logo-light.svg")
png_to_svg("public/logo-dark.png", "public/logo-dark.svg")

# Update Favicons
mark = Image.open("public/logo-mark-primary.png")
sq_size = max(mark.size)
sq_img = Image.new("RGBA", (sq_size, sq_size), (0, 0, 0, 0))
offset = ((sq_size - mark.size[0]) // 2, (sq_size - mark.size[1]) // 2)
sq_img.paste(mark, offset)

favicon = sq_img.resize((128, 128), Image.Resampling.LANCZOS)
favicon.save("public/favicon.png", "PNG")

with open("public/favicon.png", "rb") as f:
    b64 = base64.b64encode(f.read()).decode("utf-8")

svg_fav = f'''<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,{b64}" width="32" height="32"/>
</svg>'''

with open("public/favicon.svg", "w", encoding="utf-8") as f:
    f.write(svg_fav)

print("Logos and Favicons built successfully!")
