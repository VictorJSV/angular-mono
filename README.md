# AngularMono

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Generate Library

1. Generate library
```
ng generate library [library-name] --skip-install
```

2. Modify `ng-package.json`
```
{
  ...
  // From
  "dest": "../../dist/wui-second",

  // To
  "dest": "dist",
  ...
}
```

3. Building the libraries require to use the ng build command passing the name of the library that we want to build. Add `npm-scripts`
```
{
  ...
  "scripts": {
    "build": "ng build [package-name]",
    "postpublish": "rm -rf dist/"
  },
  ...
}
```
4. Run `lerna bootstrap && npx lerna run build`

5. Run `git add .` and `npx git-cz` to confirm the commit


# Linked libraries
Working with multiple libraries in a monorepository will eventually require to use and import a library inside another one.
Add in `tsconfig.json` for each path
```
{
  compilerOptions: {
    "paths": {
      "[name-project]": ["projects/[name-project]/dist"],
      "[name-project]/*": ["projects/[name-project]/dist/*"],
      ...
    },
  }
}
```