# VS Auto Header

**Version:** v1.1.0

## Description

This extension inserts an header in a new file or an existing file.

### Supported languages

- JavaScript
- C++
- C
- C#
- CSS
- Go
- Groovy
- Java
- Less
- Objectiv C
- Objectiv C++
- Razor
- SCSS
- SQL
- Swift
- TypeScript
- Makefile
- Dockerfile
- CoffeeScript
- Yaml
- HTML
- Jade
- XML
- Python

## Table of contents

1. [Usage](#usage)
2. [Configure](#configure)
3. [Future implementations](#future-implementations)
4. [Changelog](#changelog)
5. [How to contribute?](#how-to-contribute)
6. [Contributors](#contributors)
7. [License](#license)

## Usage

When a new file is created and has code inside, VS Code will be able to detect which langage you are using and the extension will display a confirmation box (see below) to insert an header. In addition, if you open a file with code inside but which has no header, the extension will detect it and ask you if you want to insert one.

<p align="center">
  <img src="https://github.com/cesumilo/vs-auto-header/raw/master/docs/img/confirmation.png" />
</p>

## Configure

### Global scope

1. Go to `Preferences` > `Settings`

<p align="center">
  <img src="https://github.com/cesumilo/vs-auto-header/raw/master/docs/img/preferences.png" />
</p>

2. Search by extension name in search bar

<p align="center">
  <img src="https://github.com/cesumilo/vs-auto-header/raw/master/docs/img/search.png" />
</p>

3. Modify extension settings

<p align="center">
  <img src="https://github.com/cesumilo/vs-auto-header/raw/master/docs/img/settings.png" />
</p>

### Project scope

You can also override global configuration using a file `.vsconfig` at the root directory of your project. It has to respect JSON format and implement the following variables:

```json
{
  "fileheader": {
    "Author": "Guillaume Robin",
    "Email": "my-email@gmail.com",
    "Copyrights": "GPL-3.0"
  }
}
```

### Example

```javascript
/**
 * @author Guillaume Robin <my-email@gmail.com>
 * @file Description
 * @desc Created on 2019-08-28 12:18:44 pm
 * @copyright GPL-3.0
 */
```

## Getting started

### Requirements

1. Install tools for development

```bash
npm install -g yo generator-code vsce
```

2. Install dependencies

```bash
npm install
```

## Future implementations

_Feel free to propose new ideas by opening new issues ! :rocket:_

- [x] Customized settings per project (v1.0.10)

## Changelog

SEE CHANGELOG IN [CHANGELOG.md](CHANGELOG.md).

## How to contribute?

**Contributions are most welcome! :smile:**

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Added some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## Contributors

- [Nicolas Boulogne-Curriez](https://github.com/iXtazia)
- [Guillaume Robin](https://github.com/cesumilo)

## License

See [license.txt](license.txt).
