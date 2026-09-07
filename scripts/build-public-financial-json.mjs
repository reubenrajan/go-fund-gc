import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const input = path.join(root, 'src/data/financial.json');
const output = path.join(root, 'src/data/public-financial.json');

const source = JSON.parse(fs.readFileSync(input, 'utf8'));
const components = {};

for (const [componentId, value] of Object.entries(source.components ?? {})) {
  const budget = Number(value.approved_budget_inr ?? 0);
  const funding = Number(value.confirmed_funding_inr ?? 0);
  const expenditure = Number(value.approved_expenditure_inr ?? 0);
  components[componentId] = {
    approved_budget_inr: budget,
    confirmed_funding_inr: funding,
    remaining_inr: Math.max(0, budget - funding),
    financial_completion: budget > 0 ? Math.min(1, funding / budget) : 0,
    approved_expenditure_inr: expenditure,
    physical_status: value.physical_status ?? 'NOT_STARTED'
  };
}

const publicData = {
  schema_version: '0.1',
  currency: 'INR',
  status: source.status ?? 'NOT_CONNECTED',
  last_updated: source.last_updated ?? null,
  components
};

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(publicData, null, 2) + '\n');
console.log(`Generated ${output}`);
