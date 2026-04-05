---
title: "I Taught My Test Suite to Speak AI's Language"
tags: ["vitest", "ai", "testing", "developer-tools"]
keywords: ["vitest", "custom reporter", "ai coding assistant", "token optimization", "llm", "context window"]
pubDatetime: 2026-04-06
description: How I built a custom Vitest reporter that compresses test output for AI coding assistants — from 40+ lines to 1 line when all tests pass.
---

If you're using an AI coding assistant in 2025, tokens are your currency. Every message, every tool call, every line of terminal output injected into the context window costs you. And unlike human readers, LLMs don't skim — they read everything.

So when I realized my test suite was silently burning hundreds of tokens per run, I fixed it in an afternoon.

---

## The Setup: AI Needs Guardrails

LLMs are non-deterministic. The same prompt doesn't always produce the same code. That's why, when working with an AI pair programmer, you need constant verification:

- **TypeScript** — catches type errors the AI introduced
- **Linting** — enforces style and catches obvious mistakes
- **Tests** — confirms the behavior is actually correct

You end up running these checks constantly. Every time the AI makes a change, you verify. That verification output goes back into the LLM context — which means it costs tokens.

---

## The Problem: 400 Tests, All Passing, All Useless

Our project recently crossed 400 tests. When everything passes, the default Vitest output looks like this:

```
 ✓ src/routers/__tests__/auth.test.ts (12 tests) 523ms
 ✓ src/routers/__tests__/games.test.ts (34 tests) 1204ms
 ✓ src/routers/__tests__/clubs.test.ts (8 tests) 312ms
 ✓ src/routers/__tests__/badges.test.ts (9 tests) 287ms
 ✓ src/routers/__tests__/connections.test.ts (21 tests) 891ms
 ✓ src/routers/__tests__/notifications.test.ts (7 tests) 198ms
 ✓ src/routers/__tests__/user.test.ts (15 tests) 445ms
 ... 27 more files

 Test Files  34 passed (34)
 Tests      477 passed (477)
 Duration   18.43s
```

Every single line is noise. The AI doesn't need to know which file took 523ms. It doesn't need a ✓ for each suite. It needs one thing: **did anything break?**

When the answer is no, that's 40+ lines of output injected into context for zero informational gain.

Vitest has a [custom reporter API](https://vitest.dev/guide/advanced/reporters.html). You implement a simple interface and control exactly what gets printed. The contract I wanted:

- **All pass** → one line: `PASS (477) FAIL (0)`
- **Any fail** → summary line + only the failing tests with their error

Signal only, no noise.

---

## The Implementation

I packaged this up and published it to npm as [`vitest-ai-reporter`](https://www.npmjs.com/package/vitest-ai-reporter). Install it with:

```bash
npm install -D vitest-ai-reporter
# or
pnpm add -D vitest-ai-reporter
```

Then wire it into your `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import AIReporter from 'vitest-ai-reporter'

export default defineConfig({
  test: {
    reporters: [new AIReporter()],
  },
})
```

The whole thing is [92 lines of TypeScript](https://github.com/yjose/vitest-ai-reporter/blob/main/src/index.ts) if you want to see exactly what's happening under the hood.

---

## Before vs After

**Before** (all passing, ~40 lines):
```
 ✓ src/routers/__tests__/auth.test.ts (12 tests) 523ms
 ✓ src/routers/__tests__/games.test.ts (34 tests) 1204ms
 ... 32 more files

 Test Files  34 passed (34)
 Tests      477 passed (477)
 Duration   18.43s
```

**After** (all passing, 1 line):
```
PASS (477) FAIL (0)
```

**After** (with failures):
```
PASS (473) FAIL (4)

FAIL  src/routers/__tests__/auth.test.ts:45:19
      login > invalid credentials
      expected 400 to equal 200
      45|     expect(res.status).toBe(200)
                                 ^

FAIL  src/routers/__tests__/user.test.ts:112:23
      getFriends > returns empty list
      expected [] to deeply equal null
      112|     expect(result).toEqual(null)
                              ^
```

The AI gets exactly what it needs — no more, no less.

On a project with 34 test files and 477 tests, the default output is ~40 lines (~300 tokens). The compressed output is 1 line (~10 tokens). **That's a ~97% token reduction per test run.** Run tests 20 times in a session and you've saved ~5,800 tokens — before accounting for failures, which add back only the signal you actually need.

---

## The Bigger Principle

This is a small trick, but it points at something bigger: **every tool that feeds output into an AI session should be shaped for AI consumption.**

Default CLI tools were designed for humans who skim. AI reads everything. A passing test suite is a green light — one line is enough. A failing suite needs a precise error report — not a wall of stack traces, just the test name and what went wrong.

Tokens compound. Every `pnpm test` in a session, every CI log, every linter output. Start treating your tooling output as part of your prompt engineering.

For broader CLI output compression across `git`, `docker`, and more, **[RTK](https://www.rtk-ai.app/#install)** is worth a look.

