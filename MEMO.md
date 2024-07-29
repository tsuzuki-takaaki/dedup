## Next.jsにおけるfetch
### default

### cache: "no-store"
- `next dev`で実行した際にはRequest Memoizationが行われずに複数リクエストが送られてしまうが、build後に`next start`で実行した場合には問題なくRequest Memoizationが行われる
  - https://github.com/vercel/next.js/issues/55168
  - https://github.com/vercel/next.js/issues/52126
