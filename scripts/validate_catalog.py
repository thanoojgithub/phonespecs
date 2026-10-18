import json
import sys

try:
    with open('data/catalog.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    assert isinstance(data.get('brands'), list), "brands must be a list"
    assert isinstance(data.get('phones'), list), "phones must be a list"
    print(f"✓ Valid catalog.json: {len(data['brands'])} brands, {len(data['phones'])} phones loaded.")
except Exception as e:
    print(f"✗ Validation failed: {e}", file=sys.stderr)
    sys.exit(1)
