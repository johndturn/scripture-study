# Scripture Study: A VS Code Extension

This is a simple extension that can be used to automatically generate files used for Scripture Study.

What do I mean by "Scripture Study"? And why is this so niche?

Basically, this extension came about because I use [Foam](https://github.com/foambubble/foam) extensively to track my notes, normal journal entries, and my daily thoughts and notes related to my study of sacred text (Scriptures). I was using `Foam`'s journal entry generator command to generate my standard journal entries as well as these daily Scripture study entries, but got really tired of having to rename / move the file to a different directory each time.

Hence, this small extension was born.

## Features / Uses

Use `Command Palette > New Scripture Study Entry` to generate a new file located at `<project-root>/scripture-study/scripture-study-YYYY-MM-DD.md` where we substitute in the year, month, and day.

## Inspiration

- [Generating Dated Notes in Foam's Source Code](https://github.com/foambubble/foam/blob/e47155424f655b4dacdae6335c57482fb51c7bd3/packages/foam-vscode/src/dated-notes.ts#L8)

## Release Notes

Forthcoming...
