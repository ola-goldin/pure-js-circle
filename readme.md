# CodeSparks' FED task

8) How would you improve the code of this project?   
Meaning, how would you implement the same application differently (if at all) - did you have parts of the code that you didn't like? would you add anything? Use a different architecture?
Give some suggestions!

# CodeSparks' FED task suggestions
1) I would divide the code to modules that separate functionality levels, as it is common to Angular or other structured project architectures. Movement functionality should be seperated from styling, http request should be a separate service. 
2) Following the existing pattern, implementationn is mostly pure JS, apart from Fetch, which wraps up jQuery, etc. Using jQuery would improve readability and would significantly shrink the amount of code. 
3) Some third parrties would provide nicer animation, depending on chosen framework or library. 
4) Using Angular directives would elimenate repetitive positioning and css 
