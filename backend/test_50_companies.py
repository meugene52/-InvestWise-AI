
import ast
import json
import time
import urllib.request
import urllib.error
from pathlib import Path

app_file = Path(__file__).with_name("app.py")
tree = ast.parse(app_file.read_text(encoding="utf-8-sig"))

symbols = None

for node in tree.body:
    if isinstance(node, ast.Assign):
        if any(
            isinstance(target, ast.Name)
            and target.id == "NIFTY_SYMBOLS"
            for target in node.targets
        ):
            symbols = ast.literal_eval(node.value)
            break

if symbols is None:
    raise RuntimeError("NIFTY_SYMBOLS not found")

passed = []
failed = []

print(f"Testing {len(symbols)} companies...\n", flush=True)

for number, symbol in enumerate(symbols, start=1):
    url = f"http://127.0.0.1:5000/api/company/{symbol}"

    try:
        with urllib.request.urlopen(url, timeout=30) as response:
            data = json.load(response)

        if (
            data.get("company")
            and data.get("symbol") == symbols[symbol]
            and isinstance(data.get("price"), (int, float))
            and data["price"] > 0
        ):
            print(f"{number:02d}. PASS - {symbol}", flush=True)
            passed.append(symbol)
        else:
            print(f"{number:02d}. CHECK - {symbol}: Missing or invalid data", flush=True)
            failed.append(symbol)

    except Exception as error:
        print(f"{number:02d}. FAIL - {symbol}: {error}", flush=True)
        failed.append(symbol)

    time.sleep(1)

print("\n========== TEST SUMMARY ==========")
print("Total companies:", len(symbols))
print("Passed:", len(passed))
print("Needs investigation:", len(failed))
print("Companies to investigate:", ", ".join(failed) if failed else "None")
