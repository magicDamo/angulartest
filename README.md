# angulartest

## RUNNING THE PROJECT:

#DEAD EASY:
A) grab 'dist' directory and put it on an active webserver route.
OR
B) if you have node / grunt installed, in CLI, run `grunt serve:dist` from the root of the project.
#AMBITIOUS:
If you have node etc installed, run npm install, bower install and then 'grunt serve', which will run from the app directory
Run `grunt` for building and `grunt serve` for preview.

## Testing

I did not include any unit tests...


#GENERAL NOTES:

For this exercise I tried to add as much UX love as possible to exhibit some nice UI features and user work flow to give this a nice modern feel.

I am opting to use 'HelveticaNeue-Light' for the body font, falling back to sans-serif ( helvetica, arial, etc ), and the merriweather font is being used via google fonts.

Had I more time, I would have elected to use Material Design components and tweaked the look and feek to fit within that paradigm.

As it stands, i honored the core design provided in the psd, which i think is part of the exercise.
Generally speaking i itook a 'mobile first' approach. Because no comp was provided, i simply followed the obvious fules any good rectangle stacker would follow.

Examples of Angular idealogies are in place: Controllers, Services, Directives.

I used the 'classic' $scope binding approach for this test, but also like to work with the 'controllerAs' approach for tight couplings to namespaced objects.

I've also tried to put as many different KINDS of approaches and coding styles where possible, again for illustrative purposs. For example, i tried to show different ways of iterating, running through conditionals or using turnary operators. The range runs from plain old vanilla js, 
right up to angular , or using api's from third party modules.


Given that it's a tight timeline, i chose to paint in broadstrokes. ;)

The actual build (dist) has concantenated and minified versions of scripts and template files with names revisioned ot git commit.  

#FEATURE NOTES:
- ADD ITEM button is disabled until a column is chosen.
- The selected column is apparent via the header and drop down list item being in a highlighted state.
- local storage is used to maintain state.

