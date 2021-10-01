# Project Design and Structure

The project architecture is designed to be (if not exclusively) Domain Driven and very close to the business model. In this section, we explore the project structure as a whole. Later we will study each concept piece by piece.

The source code lives in the `src` directory. Each file or folder is to be perused in the following:

## Components

The structure must be flat and no nesting should happen. The common components across the application are located here. They may or may not be registered globally, but in most cases local registration is preferred.

The components should be prefixed with the `App` to imply application level and wild usage. Components with only some html markups and customizations, must be prefixed with `Base` (this is also the same for modules' `components`).

There are few components like modal, for example, used and registered globally, they should be prefixed with `The` keyword.

The component naming follows **PascalCase** naming convention.

Example:

```
- components/
    - AppFooter.vue
    - AppHeader.vue
    - BaseButton.vue
    - TheModal.vue
```

## Assets

General assets like images, fonts, global styling, etc. live here.

## Layouts

This directory keeps our common layouts and theming for most of the code base.

## Store

Here lives the global store. There should only exist codes common across the modules. Make a second thought before you pile some codes up.

## Repositories

This is the business layer of the application. All client logic pertaining to API calls are kept here. Every module in `src` directory has a corresponding directory in here. When adding a repository, you have to deal with three different files:

`endpoint.ts`: The request url from the server with the correct version.

`types.ts`: It holds types for both function payloads going through and responses coming from the backend.

`index.ts`: This a factory function that holds the client service calls.

There is a file `index.ts` at the root of directory. After adding a repository, it must be imported and registered as a readonly getter property accessor in the service pool.

In the `src` there is a file named `repository.ts` in which we defined a repository provider context mechanism used as a dependency injection to inject repositories pulled by components lazily. The only thing that needs to be done after writing a service in the `repositories` directory is to add the repository type to the `service` interface for type augmentation.

### Modules

Having mentioned all the above, the same rules and conventions apply for each module. However, there are some minor nuances to be considered; That is rules for naming and type definitions.

Every component or types or interfaces defined in the modules must be prefixed with the module name, that is, of the folder's name.

#### Pages

We define our routes only in the pages with a flat structure.

```
- pages/
    Profile.vue
    UserId.vue
```

# Commit Message Conventions

These rules are adopted from [the AngularJS commit conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/).

- [Goals](#goals)
- [Generating CHANGELOG.md](#generating-changelogmd)
  - [Recognizing unimportant commits](#recognizing-unimportant-commits)
  - [Provide more information when browsing the history](#provide-more-information-when-browsing-the-history)
- [Format of the commit message](#format-of-the-commit-message)
  - [Subject line](#subject-line)
    - [Allowed `<type>`](#allowed-type)
    - [Allowed `<scope>`](#allowed-scope)
    - [`<subject>` text](#subject-text)
  - [Message body](#message-body)
  - [Message footer](#message-footer)
    - [Breaking changes](#breaking-changes)
    - [Referencing issues](#referencing-issues)
  - [Examples](#examples)

## Goals

- allow generating CHANGELOG.md by script
- allow ignoring commits by git bisect (not important commits like formatting)
- provide better information when browsing the history

## Format of the commit message

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on github as well as in various git tools.

### Subject line

Subject line contains succinct description of the change.

#### Allowed `<type>`

- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)

#### Allowed `<scope>`

Scope could be anything specifying place of the commit change. For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc...

#### `<subject>` text

- use imperative, present tense: “change” not “changed” nor “changes”
- don't capitalize first letter
- no dot (.) at the end

### Message body

- just as in <subject> use imperative, present tense: “change” not “changed” nor “changes”
- includes motivation for the change and contrasts with previous behavior

http://365git.tumblr.com/post/3308646748/writing-git-commit-messages
http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

### Message footer

#### Breaking changes

All breaking changes have to be mentioned in footer with the description of the change, justification and migration notes

```
BREAKING CHANGE: isolate scope bindings definition has changed and
    the inject option for the directive controller injection was removed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
      myBind: 'bind',
      myExpression: 'expression',
      myEval: 'evaluate',
      myAccessor: 'accessor'
    }

    After:

    scope: {
      myAttr: '@',
      myBind: '@',
      myExpression: '&',
      // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
      myAccessor: '=' // in directive's template change myAccessor() to myAccessor
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```

#### Referencing issues

Closed bugs should be listed on a separate line in the footer prefixed with "Closes" keyword like this:

```
Closes #234
```

or in case of multiple issues:

```
Closes #123, #245, #992
```

## Examples

```
feat($browser): onUrlChange event (popstate/hashchange/polling)

Added new event to $browser:
- forward popstate event if available
- forward hashchange event if popstate not available
- do polling when neither popstate nor hashchange available

Breaks $browser.onHashChange, which was removed (use onUrlChange instead)
```

```
fix($compile): couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
Breaks foo.bar api, foo.baz should be used instead
```

```
feat(directive): ng:disabled, ng:checked, ng:multiple, ng:readonly, ng:selected

New directives for proper binding these attributes in older browsers (IE).
Added coresponding description, live examples and e2e tests.

Closes #351
```

```
style($location): add couple of missing semi colons
```

```
docs(guide): updated fixed docs from Google Docs

Couple of typos fixed:
- indentation
- batchLogbatchLog -> batchLog
- start periodic checking
- missing brace
```

```
feat($compile): simplify isolate scope bindings

Changed the isolate scope binding options to:
  - @attr - attribute binding (including interpolation)
  - =model - by-directional model binding
  - &expr - expression execution binding

This change simplifies the terminology as well as
number of choices available to the developer. It
also supports local name aliasing from the parent.

BREAKING CHANGE: isolate scope bindings definition has changed and
the inject option for the directive controller injection was removed.

To migrate the code follow the example below:

Before:

scope: {
  myAttr: 'attribute',
  myBind: 'bind',
  myExpression: 'expression',
  myEval: 'evaluate',
  myAccessor: 'accessor'
}

After:

scope: {
  myAttr: '@',
  myBind: '@',
  myExpression: '&',
  // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
  myAccessor: '=' // in directive's template change myAccessor() to myAccessor
}

The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```
