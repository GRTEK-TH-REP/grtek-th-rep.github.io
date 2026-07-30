// ============================================================
//  YOUR TRADE LOG  —  edit this file to update the page
// ============================================================
//
//  To add a trade: copy one { ... } block inside the list below,
//  fill in your numbers, and save. The table + totals update on
//  their own when you push to GitHub.
//
//  Fields:
//    date       -> the day you took the trade (text is fine)
//    instrument -> e.g. NQ, ES, CL
//    side       -> "Long" or "Short"
//    result     -> profit/loss in dollars (use negatives for losses)
//    note       -> optional short comment
//
//  Newest first is usually nicest to read.
// ============================================================

window.TRADES = [
  // EXAMPLE ROWS — delete or edit these:
  {
    date: "2026-07-29",
    instrument: "NQ",
    side: "Long",
    result: 350,
    note: "evening mean-reversion"
  },
  {
    date: "2026-07-28",
    instrument: "ES",
    side: "Short",
    result: -125,
    note: "stopped out"
  }
];
