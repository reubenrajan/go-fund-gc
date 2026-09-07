# Financial Pipeline

## Source workbook

Use `Grace-Chapel-Plans-Projects-Financial-Model.xlsx` as the Google Drive / Google Sheets input template.

The workbook contains:

- `Instructions`
- `Projects`
- `Components`
- `Donations`
- `Expenditure`
- `Summary`

## Workflow

```text
XLSX
  ↓
Google Drive
  ↓
Google Sheets
  ↓
Financial administrator enters transactions
  ↓
ENTERED
  ↓
RECONCILED
  ↓
APPROVED
  ↓
Sanitized aggregate export
  ↓
src/data/financial.json
  ↓
Validation + public aggregate builder
  ↓
src/data/public-financial.json
  ↓
Astro build
  ↓
GitHub Pages
```

## Public-data rule

The website must never consume raw donor transactions. The public dataset contains component-level aggregates only.

### Published component fields

- approved budget
- confirmed funding
- remaining
- financial completion
- approved expenditure
- physical status

### Never publish

- donor name
- donor email
- donor phone
- bank details
- payment reference
- private notes
- individual transaction amounts

## Status rules

Donations and expenditure enter as `ENTERED`.

They become eligible for public aggregation only at `APPROVED`.

`RECONCILED` means the transaction has been checked against the corresponding financial record. `APPROVED` means it is authorised for public aggregation.

## Financial completion

```text
financial_completion = min(1, confirmed_funding / approved_budget)
remaining = max(0, approved_budget - confirmed_funding)
```

A component with no approved budget has a completion value of zero until a budget exists.

## Alternatives

Alternative products must not be double-counted. The financial administrator must establish the selected component/budget before it becomes a public funding target.

## Current state

The repository starts with `NOT_CONNECTED` financial data. This is intentional. The pipeline is ready for the Google Sheets source, but no live funding figures are asserted until the source is connected and approved.
