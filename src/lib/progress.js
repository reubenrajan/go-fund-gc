export function financialProgress(approvedBudget, raised) {
  if (!Number.isFinite(approvedBudget) || approvedBudget <= 0 || !Number.isFinite(raised)) return null;
  return Math.min(100, Math.max(0, (raised / approvedBudget) * 100));
}

export function formatInr(value) {
  return Number.isFinite(value) ? `₹${value.toLocaleString('en-IN')}` : '—';
}
