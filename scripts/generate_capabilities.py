from pathlib import Path
import shutil

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public"
OUTPUT = OUTPUT_DIR / "aclaud-capabilities-statement.pdf"
PUBLIC_OUTPUT = PUBLIC_DIR / "aclaud-capabilities-statement.pdf"

PAGE_W, PAGE_H = letter
PAPER = HexColor("#F8F9FA")
INK = HexColor("#0B0F17")
CHARCOAL = HexColor("#1F2428")
MUTED = HexColor("#5E6467")
LINE = HexColor("#D8D8D0")
SAGE = HexColor("#6F7F5F")
SAGE_DARK = HexColor("#384333")
SAGE_LIGHT = HexColor("#DFE4DA")
BRASS = HexColor("#B08D57")
WHITE = HexColor("#FFFFFF")


def wrap(text, font, size, width):
    words = text.split()
    lines, current = [], ""
    for word in words:
        trial = word if not current else f"{current} {word}"
        if stringWidth(trial, font, size) <= width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def paragraph(c, text, x, y, width, font="Helvetica", size=9.2, leading=13.2, color=MUTED):
    c.setFillColor(color)
    c.setFont(font, size)
    for line in wrap(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def label(c, text, x, y, color=SAGE_DARK):
    c.setFillColor(color)
    c.setFont("Courier-Bold", 6.7)
    c.drawString(x, y, text.upper())


def title(c, text, x, y, width, size=29, leading=32, color=INK):
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", size)
    for line in wrap(text, "Helvetica-Bold", size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def footer(c, page_number):
    c.setStrokeColor(LINE)
    c.line(42, 36, PAGE_W - 42, 36)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 6.8)
    c.drawString(42, 22, "Aclaud Technologies LLC  |  admin@aclaud.com  |  571-721-1791")
    c.drawRightString(PAGE_W - 42, 22, f"CAPABILITIES  /  0{page_number}")


def top_mark(c, inverse=False):
    bg = SAGE_DARK if inverse else INK
    c.setFillColor(bg)
    c.rect(42, PAGE_H - 68, 24, 24, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 11)
    c.drawCentredString(54, PAGE_H - 60, "A")
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 13)
    c.drawString(74, PAGE_H - 62, "aclaud")


def draw_pill(c, text, x, y, width):
    c.setFillColor(SAGE_LIGHT)
    c.roundRect(x, y - 13, width, 20, 2, fill=1, stroke=0)
    c.setFillColor(SAGE_DARK)
    c.setFont("Helvetica-Bold", 7)
    c.drawCentredString(x + width / 2, y - 6, text)


def page_one(c):
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    top_mark(c)

    label(c, "Production engineering for software & AI", 42, 676)
    y = title(c, "From promising software to dependable operations.", 42, 648, 490, 31, 33.5)
    paragraph(
        c,
        "aclaud helps federal programs, prime contractors, and enterprise teams turn ambitious software and AI initiatives into secure, reliable production systems.",
        42, y - 8, 486, "Helvetica", 12.2, 17.2, CHARCOAL,
    )

    c.setStrokeColor(LINE)
    c.line(42, 504, PAGE_W - 42, 504)
    label(c, "Core capability areas", 42, 484)

    columns = [
        (
            "Stronger software foundations",
            "Applications that are easier to change, integrate, secure, and operate.",
            ["Application renewal", "API and integration design", "Distributed systems", "Production hardening"],
        ),
        (
            "Trusted data and AI foundations",
            "Enterprise information made useful while preserving boundaries and traceability.",
            ["Data platforms", "Retrieval systems", "Agent workflows", "Evaluation and observability"],
        ),
        (
            "Reliable cloud and platform operations",
            "Resilient environments with explicit controls for security, availability, cost, and response.",
            ["Cloud architecture", "Platform engineering", "Identity and authorization", "Reliability and cost controls"],
        ),
    ]
    col_w = 158
    for idx, (heading, copy, items) in enumerate(columns):
        x = 42 + idx * 176
        c.setFillColor(SAGE if idx != 1 else BRASS)
        c.rect(x, 451, 24, 3, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 11.2)
        line_y = 432
        for line in wrap(heading, "Helvetica-Bold", 11.2, col_w):
            c.drawString(x, line_y, line)
            line_y -= 14
        line_y = paragraph(c, copy, x, line_y - 4, col_w, size=8.2, leading=11.5)
        c.setStrokeColor(LINE)
        c.line(x, line_y - 5, x + col_w, line_y - 5)
        c.setFillColor(CHARCOAL)
        c.setFont("Helvetica", 7.5)
        item_y = line_y - 21
        for item in items:
            c.setFillColor(SAGE_DARK)
            c.circle(x + 2, item_y + 2, 1.3, fill=1, stroke=0)
            c.setFillColor(CHARCOAL)
            c.drawString(x + 10, item_y, item)
            item_y -= 15

    c.setFillColor(SAGE_DARK)
    c.rect(42, 165, PAGE_W - 84, 112, fill=1, stroke=0)
    label(c, "Where aclaud fits", 60, 251, BRASS)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(60, 225, "Specialized engineering, integrated with your program.")
    paragraph(
        c,
        "We work alongside agency teams, prime contractors, and existing delivery organizations through focused workstreams, prototypes, architecture support, and production-readiness assessments.",
        60, 203, 472, "Helvetica", 8.5, 12, HexColor("#DDE2DE"),
    )

    label(c, "Why aclaud", 42, 137)
    draw_pill(c, "PRODUCTION-FIRST THINKING", 42, 111, 145)
    draw_pill(c, "SYSTEMS, NOT SILOS", 198, 111, 112)
    draw_pill(c, "EVIDENCE OVER CLAIMS", 321, 111, 131)
    draw_pill(c, "BUILT TO EVOLVE", 463, 111, 107)

    footer(c, 1)
    c.showPage()


def page_two(c):
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    top_mark(c)
    label(c, "Technical capability", 42, 676)
    title(c, "Engineering depth connected to operating outcomes.", 42, 648, 510, 27, 30)

    capabilities = [
        ("Enterprise application engineering", "Evolvable applications and interfaces"),
        ("Distributed systems", "Predictable behavior across service boundaries"),
        ("Data-platform engineering", "Usable data with traceable access"),
        ("Cloud and platform engineering", "Repeatable, resilient operating environments"),
        ("Agent workflow engineering", "Bounded actions with visible controls"),
        ("Identity and authorization", "Clear authority at every boundary"),
        ("Evaluation and observability", "Evidence of system behavior"),
        ("Reliability engineering", "Recovery designed before failure"),
        ("Cost-aware architecture", "Performance aligned with economics"),
        ("DevSecOps and delivery automation", "Safer, repeatable change"),
    ]
    y = 555
    c.setStrokeColor(LINE)
    c.line(42, y + 10, PAGE_W - 42, y + 10)
    for name, outcome in capabilities:
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 8.2)
        c.drawString(42, y - 8, name)
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 8)
        c.drawString(310, y - 8, outcome)
        c.setStrokeColor(LINE)
        c.line(42, y - 17, PAGE_W - 42, y - 17)
        y -= 30

    label(c, "Representative problem areas", 42, 267)
    problem_areas = [
        "Prototype-to-production transition",
        "Enterprise integration and API design",
        "Secure data access and retrieval",
        "Tool-using workflow authorization",
        "Cloud reliability and recovery",
        "Operational visibility and cost control",
    ]
    for idx, problem in enumerate(problem_areas):
        x = 42 + (idx % 2) * 269
        py = 242 - (idx // 2) * 27
        c.setFillColor(SAGE_DARK)
        c.rect(x, py - 4, 4, 4, fill=1, stroke=0)
        c.setFillColor(CHARCOAL)
        c.setFont("Helvetica", 8.5)
        c.drawString(x + 12, py - 7, problem)

    c.setFillColor(INK)
    c.rect(42, 85, PAGE_W - 84, 84, fill=1, stroke=0)
    label(c, "Contracting information", 58, 146, BRASS)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(58, 125, "Aclaud Technologies LLC  /  Small Business")
    c.setFont("Courier", 7.4)
    c.drawString(58, 107, "UEID XUG8KR7ADNL3")
    c.drawString(248, 107, "PRIMARY NAICS 541512")
    c.drawString(408, 107, "541511  |  541519  |  541690")

    c.setFillColor(SAGE_DARK)
    c.rect(42, 48, PAGE_W - 84, 25, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(55, 57, "Discuss a program")
    c.setFont("Helvetica", 7.8)
    c.drawRightString(PAGE_W - 55, 57, "admin@aclaud.com  |  571-721-1791  |  aclaud.com")

    footer(c, 2)
    c.save()


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=letter)
    c.setTitle("aclaud capabilities statement")
    c.setAuthor("Aclaud Technologies LLC")
    c.setSubject("Production engineering capabilities, engagement models, and contracting information")
    page_one(c)
    page_two(c)
    shutil.copy2(OUTPUT, PUBLIC_OUTPUT)
    print(OUTPUT)
    print(PUBLIC_OUTPUT)


if __name__ == "__main__":
    main()
