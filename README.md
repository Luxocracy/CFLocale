CFLocale
========

Grabs translations from Curseforge and outputs them into the proper lua formated files for Ace-Locale3.0

Installation
------------

Install CFLocale by grabbing the latest build from the [latest releases](https://github.com/Luxocracy/CFLocale/releases/latest) page.

Usage
-----

CFLocale-win.exe **{AddonName}** **{ProjectID}** **{Curse-Api-Token}** **{Path}** **{PrimaryLanguage}**

- **AddonName** _(Required)_
  * The name of the addon. Used to initialize the locale file.
- **ProjectID** _(Required)_
  * The ID of your project. _Note: This is not the project slug, it is a numerical value._
- **Curse-Api-Token** _(Required)_
  * An Api-Token attached to your account. Can be generated on your [account](https://authors.curseforge.com/account/api-tokens) page.
- **Path**
  * Where the localization files will be written. Defaults to current directory.
- **PrimaryLanguage**
  * The original localization file, as we probably don't want to overwrite it. Defaults to "enUS".

_Example:_

    ".\CFLocale-win.exe" "NeatPlates" "299093" "6756cf6a-e7b3-458f-8a48-e56956375439" "./NeatPlates/locales/" 
