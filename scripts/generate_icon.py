from pathlib import Path

from PIL import Image, ImageDraw


root = Path(__file__).resolve().parents[1]
canvas = Image.new("RGB", (180, 180), "#0B0F17")
draw = ImageDraw.Draw(canvas)

# Geometric A mark, drawn directly so the icon has no platform font dependency.
draw.polygon([(46, 137), (79, 42), (101, 42), (136, 137), (112, 137), (104, 113), (76, 113), (69, 137)], fill="#F8F9FA")
draw.polygon([(83, 92), (97, 92), (90, 69)], fill="#0B0F17")

canvas.save(root / "public" / "apple-touch-icon.png", "PNG", optimize=True)
