## Next.jsにおけるfetch
### default

### cache: "no-store"
- `next dev`で実行した際にはRequest Memoizationが行われずに複数リクエストが送られてしまうが、build後に`next start`で実行した場合には問題なくRequest Memoizationが行われる
  - `next dev`の場合も初回のリクエストは問題なくRequest Memoizationが行われているが、2回目からはdeduplicateに失敗してる
  - https://github.com/vercel/next.js/issues/55168
  - https://github.com/vercel/next.js/issues/52126
- `15.0.0-canary.88`では、`next dev`でも`next start`でも、Request Memoizationが行われている
- `v15.0.0-canary.25`でも`next dev`でいけてた
- **`v15.0.0-canary.0`の`next dev`だとRequest Memoizationがされてなかった**
- `v15.0.0-canary.10`でも`next dev`でいけてた
- **`v15.0.0-canary.5`の`next dev`だとRequest Memoizationがされてなかった**
- **`v15.0.0-canary.6`の`next dev`だとRequest Memoizationがされてなかった**
- **`v15.0.0-canary.7`の`next dev`だとRequest Memoizationがされてなかった**
- **`v15.0.0-canary.8`の`next dev`だとRequest Memoizationがされてなかった**
- **`v15.0.0-canary.9`の`next dev`だとRequest Memoizationがされてなかった**
