# Peritus-TS Project Template
Welcome Traveler!  
Have you ventured out on a quest to find the _cleanest_ way to work on a typescript project?  
Well turn that GPS off because you have arrived to your destination.

## What is Peritus-TS?
Peritus-TS is nothing more than a template for a typescript project workspace. Simply put: You can use this as a base for your project. Peritus-TS is equipped to handle good code practices thanks to linting and prettifying and allows you to debug your code without needing to transpile it into javascript.

## Features
What amazing things does Peritus-TS provide for you right out of the box?  

### TSLint
[TSLint](https://palantir.github.io/tslint/) makes sure your code follows a set of programming rules, so that everything is consistent. Peritus-TS comes with a TSLint adaptation of the [airbnb eslint configuration](https://github.com/airbnb/javascript) intuitively named: [TSLint Config Airbnb](https://www.npmjs.com/package/tslint-config-airbnb). This provides your code with the same formatting styles used by programmers that work for Airbnb, as well as many other people that utilize their formatting styles.  

__Note:__ If you're using VSCode, [this extension](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) will help you with TSLint.

### Prettier
[Prettier](https://prettier.io/) is an "opinionated code formatter" (and I must admit, I agree with its opinion) that further cleans up your code beyond what TSLint provides. Consider the following scenario:
```js
const msg  =     'Hello, World!'
```
Those extra spaces make you want to tear your hair out, don't they?  
~~No? Oh.~~  
With Prettier, you can easily clean up your code, transforming the above abomination into:
```js
const msg = 'Hello, World!'
```

### Husky
(Disclaimer: If you're allergic to canines this module might not be for you)  
[Husky](https://github.com/typicode/husky) allows you to define a commands to run when certain git hooks are triggered, so when you're about to commit or push something, you can have a script run to, say, make sure your code is all nice and pretty before being allowed near the repo.

### Lint-Staged
[Lint-Staged](https://github.com/okonet/lint-staged) simplifies the linting and prettifying process by running __only__ on files that have been staged, rather than all your files. This makes development quicker since you're only cleaning up the files you modified instead of all of them. You can't even process the amount of saved time this provides.

### TS-Node
[TS-Node](https://github.com/TypeStrong/ts-node) makes developing with typescript a whole lot easier. TS-Node extends NodeJS by allowing Node to read .ts files. This means that Node can use typescript directly instead of having to transpile it every time you want to test a change.

## Optimized for VSCode
Peritus-TS was built in VSCode and contains features that are part of VSCode. These features are as follows:
 - Configurations for both ts-node debugging and transpiled debugging
 - Task that transpiles typescript into javascript (used for transpiled debugging)
 - Run TSLint on a file upon save.

Feel free to utilize the available files in the `./.vscode/` directory as reference to implement these features in your IDE of choice!  
(Or just switch to VSCode; It's pretty cool)

## Bringing it all together
So how does everything combine into a typescript wonder workspace?  
While you develop typescript code, you can test it using the provded debug configs. As you save your work, TSLint will automatically format the file you saved if there are inconsistencies. Once you're done writing code for the day, you can stage the files you worked on, and when you choose to commit them, Husky will run Lint-Staged which will go over the files you staged, run TSLint and Prettier on them, stage them again, and then complete the commit.

## Available Commands
 - __lint__: runs TSLint on the entire src folder, reporting any inconsistencies found.
 - __lint:write__: runs TSLint on the entire src folder, overwriting inconsistencies to how they should be.
 - __prettier__: runs Prettier on the entire src folder.
 - __lintAndPretty__: runs both __lint:write__ and __prettier__.
 - __build__: transpiles typescript code in `src/` and writes it to `build/`

## Reference Material
[These tools will help you write clean code](https://medium.freecodecamp.org/these-tools-will-help-you-write-clean-code-da4b5401f68e)  
[Debugging TypeScript in VS Code without compiling, using ts-node](https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a)

## Conclusion
I hope I have provided you with the answers you seeked. So go forth, traveller; Make use of the knowledge I have provided you and code on!  
  
(Oh and if I didn't provide you what you seeked, then scram)