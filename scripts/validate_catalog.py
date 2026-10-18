import json
import sys

def main():
    try:
        # Use utf-8-sig to cleanly handle any BOM if present
        with open('data/catalog.json', 'r', encoding='utf-8-sig') as f:
            data = json.load(f)

        brands = data.get('brands')
        phones = data.get('phones')

        if not isinstance(brands, list):
            raise ValueError("'brands' must be a JSON array")
        if not isinstance(phones, list):
            raise ValueError("'phones' must be a JSON array")

        # Basic item verification
        if len(phones) == 0:
            raise ValueError("No phones found in catalog")

        print(f"[SUCCESS] catalog.json is valid: {len(brands)} brands, {len(phones)} phones verified.")
        return 0

    except Exception as exc:
        print(f"[ERROR] Catalog validation failed: {exc}", file=sys.stderr)
        return 1

if __name__ == '__main__':
    sys.exit(main())
