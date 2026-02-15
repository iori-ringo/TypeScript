# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

AtCoder 競技プログラミング練習用の TypeScript リポジトリ。アルゴリズム・データ構造の学習が目的。
コメントには間違った回答とその改善過程を日本語で記録する。

## 実行方法

各問題ファイルは Node.js で直接実行する（標準入力から読み取り）:

```bash
npx ts-node 438/A.ts < input.txt
# または
npx tsc 438/A.ts && node 438/A.js < input.txt
```

テストフレームワーク・Linter・Formatter は未導入。

## コードテンプレート

`templete.ts` が問題解答のテンプレート。新しい問題を解く際はこれをコピーして使う:

```typescript
const fs = require("fs")
function main(input: string) {
  // ここに解答を書く
}
const input = fs.readFileSync("/dev/stdin", "utf8").trim()
main(input)
```

**注意:** CommonJS (`require`) を使用している。グローバル設定では ES Modules 推奨だが、このリポジトリでは `package.json` の `"type": "commonjs"` に従い CommonJS を使う。

## ディレクトリ・ファイル構成

- ルート直下: 古い問題ファイル (`A02.tsx`, `A03.ts` など)
- コンテストごとのディレクトリ: `438/`, `444/`, `ABC_441/` など
  - 問題ファイル: `A.ts`, `B.ts`, `C.ts`, `D.ts`

## Git ワークフロー

- **ブランチ命名:** `ABC-{コンテスト番号}` (例: `ABC-438`)、または `Atcoder/A{番号}`
- **コミットメッセージ:** 日本語で記述（例: "444完了"）。Conventional Commits 形式は使わない
- **PR:** コンテスト単位でマージ
