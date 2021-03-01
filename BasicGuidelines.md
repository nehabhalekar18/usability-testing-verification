# Basic Guidelines

## File Naming Convention

Any JS, Component or CSS file name should start with a capital letter. File name with multiple words should be in sentence format.
e.g AppComponent.js, AppComponent.css

The component and its styleshhet should have same file name and the name should be relevant to the component.

## StyleSheet Naming Convention

Component Classname - should start with small letter. In case of multiple words the name should be combined in camel case format.
e.g. appComponent

Element Classname - The element classnames should be prefixed with the component className.
e.g. Email input field in login component will have a classname like
login\_\_email_lable

Wherever possible target child elements with component classname. Not all elements should have a classname.
e.g. .login > h1{}

For UI components and icons use MaterialUI. Already included in package.json.
https://material-ui.com/components/container/
https://material-ui.com/components/material-icons/

## Github

Each developer will create individual feature branch form the development branch.
Development branch will have the stable megered code of all contributors.
Make sure to take a pull of develop branch and resolve any conflicts if required.
No commits will be done to master branch. Do not commit node_modules to git.

### Branch structure

                                    master
                                      |
                                 development
                            __________|__________
                            |                   |
                    feature/explore       feature/login
