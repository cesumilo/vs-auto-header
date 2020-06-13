/**
 * @author Guillaume Robin <robinguillaume.pro@gmail.com>
 * @file Entrypoint for vs-auto-header.
 * @desc Created on 2020-06-13 7:35:28 pm
 * @copyright GNU General Public License v3.0
 */
const vscode = require('vscode');
const dictionary = require('./headerFunctions').extCategory;
const fs = require('fs');

/**
 * Check if workspace config is valid.
 * @param {object} config vscode workspace loaded configuration
 */
function checkConfig(config) {
  if (typeof config.fileheader !== 'object') {
    console.error("config.fileheader should be of type 'object'");
    return false;
  }
  if (typeof config.fileheader.Author !== 'string') {
    console.error("config.fileheader.Author should be of type 'string'");
    return false;
  }
  if (typeof config.fileheader.Email !== 'string') {
    console.error("config.fileheader.Email should be of type 'string'");
    return false;
  }
  if (typeof config.fileheader.Copyrights !== 'string') {
    console.error("config.fileheader.Copyrights should be of type 'string'");
    return false;
  }
  return true;
}

/**
 * Main module function
 */
function activate() {
  console.log('"vs-auto-header" is now active!');

  const folderPath = vscode.workspace.rootPath;
  const configPath = `${folderPath}/.vsconfig`;
  const configExists = fs.existsSync(configPath);

  let config = null;
  if (configExists) {
    const configStr = fs.readFileSync(configPath, 'utf8');
    try {
      const parsedConfig = JSON.parse(configStr);
      const configIsValid = checkConfig(parsedConfig);
      if (configIsValid) {
        config = parsedConfig.fileheader;
      } else {
        config = vscode.workspace.getConfiguration('fileheader');
      }
    } catch (err) {
      console.error(`Invalid format of file ${configPath}`);
      config = vscode.workspace.getConfiguration('fileheader');
    }
  } else {
    config = vscode.workspace.getConfiguration('fileheader');
  }

  // Event in VSCode when a tab is open
  vscode.window.onDidChangeActiveTextEditor(function(event) {
    if (typeof event === 'undefined') {
      return;
    }

    const editor = vscode.editor || vscode.window.activeTextEditor;
    if (editor) {
      const document = editor.document;
      const language = document.languageId;
      console.log(`Language used: ${language}`);
      dictionary[language](config, document.fileName);
    }
  });
}

exports.activate = activate;

/**
 * Function for perform and cleanup tasks when VS Code shutdown
 */
function deactivate() {}

exports.deactivate = deactivate;
