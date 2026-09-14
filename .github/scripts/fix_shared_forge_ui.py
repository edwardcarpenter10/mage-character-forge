from pathlib import Path

paths = [Path("app.js"), Path("w20/app.js"), Path("wr20/app.js"), Path("c20/app.js")]

for path in paths:
    text = path.read_text(encoding="utf-8")
    old = '''  function commit({ step = activeStep, focus = "" } = {}) {
    activeStep = Math.max(0, Math.min(STEPS.length - 1, step));
    save();
    render();
    if (focus) document.querySelector(focus)?.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
'''
    new = '''  function commit({ step = activeStep, focus = "", scroll = false } = {}) {
    activeStep = Math.max(0, Math.min(STEPS.length - 1, step));
    save();
    render();
    if (focus) document.querySelector(focus)?.focus();
    if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
  }
'''
    if old in text:
        text = text.replace(old, new, 1)
    text = text.replace('if (action === "step") return commit({ step: Number(button.dataset.step) });', 'if (action === "step") return commit({ step: Number(button.dataset.step), scroll: true });', 1)
    text = text.replace('return commit({ step: 0 });\n    }\n    if (action === "rating")', 'return commit({ step: 0, scroll: true });\n    }\n    if (action === "rating")', 1)
    text = text.replace('return commit({ step: 0 });\n    }\n  });\n\n  function exportCharacter()', 'return commit({ step: 0, scroll: true });\n    }\n  });\n\n  function exportCharacter()', 1)
    text = text.replace('commit({ step: 6 });\n      } catch', 'commit({ step: 6, scroll: true });\n      } catch', 1)
    text = text.replace(
        '    } else if (el.dataset.bind || el.dataset.ui || el.dataset.itemField || el.dataset.special) commit();',
        '    } else if (el.dataset.bind || el.dataset.ui || el.dataset.itemField || el.dataset.special || el.dataset.meritsField || el.dataset.flawsField) commit();',
        1,
    )
    path.write_text(text, encoding="utf-8")
