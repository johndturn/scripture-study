import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  if (!vscode.workspace.workspaceFolders) {
    console.log("Not in a workspace; new Scripture Study entries cannot be created.");
    return;
  }

  if (!vscode.workspace.isTrusted) {
    console.log("Not in a trusted workspace; new Scripture Study entries cannot be created.");
    return;
  }

  const disposable = vscode.commands.registerCommand("scripture-study.newScriptureStudyEntry", createNewScriptureStudyEntry);
  context.subscriptions.push(disposable);
}

function createNewScriptureStudyEntry() {}

export function deactivate() {}
