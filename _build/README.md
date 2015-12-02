What you need
--------------------------------------

In order to build redactor-js-font-awesome front end assets, you need to have Node.js/npm latest and git 1.7 or later.
(Earlier versions might work OK, but are not tested.)

For Windows you have to download and install [git](http://git-scm.com/downloads) and [Node.js](http://nodejs.org/download/).

Mac OS users should install [Homebrew](http://mxcl.github.com/homebrew/). Once Homebrew is installed, run `brew install git` to install git,
and `brew install node` to install Node.js.

Linux/BSD users should use their appropriate package managers to install git and Node.js, or build from source
if you swing that way. Easy-peasy.


Installing Grunt & Grunt Packages
----------------------------

First, clone a copy of this git repo by running:

```bash
git clone -b grunt git@github.com:karen2k/redactor-js-font-awesome.git
```

Install the [grunt-cli](http://gruntjs.com/getting-started#installing-the-cli) package if you haven't before. These should be done as global installs:

```bash
npm install -g grunt-cli
```

Make sure you have `grunt` installed by testing:

```bash
grunt --version
```

Enter the _build directory and install the Node and Bower dependencies, this time *without* specifying a global(-g) install:

```bash
cd redactor-js-font-awesome/_build/
npm install
```
_Note: `npm update` updates dependencies and should be run whenever you pull from git._

Optionally enable Growl notifications install [terminal-notifier](https://github.com/alextucker/grunt-growl#getting-started) with RubyGems:
```bash
gem install terminal-notifier
```
_Note: Depending on your Ruby setup you may need to use `sudo gem install terminal-notifier`._

Grunt Commands
----------------------------

__List__  
Checks out the latest font-awesome using bower and writes a temporary file containing a JavaScript array of icon classes.

```bash
grunt list
```

__FA__  
Updates `redactor-awesome.js` with the latest font-awesome icons and cleans up temporary files.

```bash
grunt fa
```

Always run `grunt list` before `grunt fa` like so:

```bash
grunt list && grunt fa
````