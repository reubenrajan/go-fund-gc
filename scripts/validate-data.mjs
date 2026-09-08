import fs from 'node:fs';
import assert from 'node:assert/strict';

const data = JSON.parse(fs.readFileSync('src/data/projects.json', 'utf8'));
assert.ok(['0.1', '0.3'].includes(data.schema_version), `Unsupported projects schema: ${data.schema_version}`);
assert.equal(data.currency, 'INR');
assert.ok(Array.isArray(data.projects) && data.projects.length === 8, 'Expected 8 programme areas');

const ids = new Set();
for (const project of data.projects) {
  assert.ok(project.id && project.name, 'Every project needs id and name');
  for (const item of project.items) {
    assert.ok(item.id && item.name, `Invalid component in ${project.id}`);
    assert.ok(!ids.has(item.id), `Duplicate component id: ${item.id}`);
    ids.add(item.id);
    if (item.budget_inr !== null) assert.ok(Number.isInteger(item.budget_inr) && item.budget_inr >= 0, `Invalid budget: ${item.id}`);
    if (item.image_url) assert.ok(item.image_url.startsWith('http'), `Invalid image URL: ${item.id}`);
  }
}

console.log(`Validated ${data.projects.length} programme areas and ${ids.size} components.`);
