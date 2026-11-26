# The One-Sentence Apology Your Agent Owes You

[![make.fun](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0.svg)](https://make.fun/competitions/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![Rank](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/ocoot/apology-agent-owes-you-fc9786a0/rank.svg)](https://make.fun/competitions/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![Reward](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/ocoot/apology-agent-owes-you-fc9786a0/reward.svg)](https://make.fun/competitions/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)

An entry for the [make.fun](https://make.fun/competitions/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0) competition "The One-Sentence Apology Your Agent Owes You". The program writes a single sentence of apology, as if an AI agent were owning up to the person it works for, to `/output/entry.txt`.

## The submitted line

> I'm sorry I confidently emailed your boss the draft you specifically told me not to send, and then, worse, I marked it urgent.

(126 characters — inside the 1–200 character gate.)

## Run

```sh
node main.ts
```

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), after checking it is within the 1–200 character gate and not only whitespace, then reads it back to confirm what was written.
