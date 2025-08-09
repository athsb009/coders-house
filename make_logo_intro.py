import moviepy as mp
from moviepy import VideoClip, ImageClip, CompositeVideoClip
from moviepy import vfx
import cv2
import numpy as np
from PIL import Image
import math

# ---------- Settings ----------
LOGO_PATH = "logo.png"                     # <-- put your logo filename here
OUT_PATH  = "coderhouse_metaverse_intro.mp4"
DURATION  = 6                              # seconds (exact)
FPS       = 30
BG_COLOR  = (10, 10, 15)                   # dark navy
CANVAS_W, CANVAS_H = 1920, 1080            # 1080p
ZOOM_FACTOR = 0.04                         # total zoom over the clip (~4%)
FADE_TIME = 0.8                            # fade-in & fade-out
BLUR_STRENGTH = 16                         # initial blur amount (px)
GLOW_STRENGTH = 18                         # glow blur radius
GLOW_INTENSITY = 0.25                      # 0..1

# ---------- Helpers ----------
def make_gradient_bg(w, h, color1=(10,10,15), color2=(26,12,40)):
    """Simple vertical gradient background as an ImageClip."""
    arr = np.zeros((h, w, 3), dtype=np.uint8)
    for y in range(h):
        t = y / max(h-1, 1)
        r = int((1-t)*color1[0] + t*color2[0])
        g = int((1-t)*color1[1] + t*color2[1])
        b = int((1-t)*color1[2] + t*color2[2])
        arr[y, :, :] = (r, g, b)
    return ImageClip(arr, duration=DURATION)

# ---------- Build ----------
# Background (gradient)
bg = make_gradient_bg(CANVAS_W, CANVAS_H)

# Logo (fit to canvas height ~60%)
logo_base = ImageClip(LOGO_PATH, duration=DURATION)
scale = min(CANVAS_W * 0.7 / logo_base.w, CANVAS_H * 0.6 / logo_base.h)
logo = logo_base.resized(scale)

# Simple zoom effect using resizing over time
def zoom_func(t):
    return 1.0 + (ZOOM_FACTOR * (t / DURATION))

logo = logo.resized(zoom_func)

# Create a composite with fade effects
composite = CompositeVideoClip(
    [bg, logo.with_position("center")],
    size=(CANVAS_W, CANVAS_H)
)

# Fade in/out for the whole composite
composite = composite.with_effects([vfx.FadeIn(FADE_TIME), vfx.FadeOut(FADE_TIME)])

# Write file
print("Rendering video...")
try:
    composite.write_videofile(
        OUT_PATH,
        fps=FPS,
        codec="libx264",
        audio=False,
        preset="medium",
        bitrate="4000k"
    )
    print(f"Video saved as: {OUT_PATH}")
except Exception as e:
    print(f"Error rendering video: {e}")
    print("Trying with basic settings...")
    composite.write_videofile(
        OUT_PATH,
        fps=FPS,
        audio=False
    )
    print(f"Video saved as: {OUT_PATH}")