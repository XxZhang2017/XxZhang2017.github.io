# Keyword argument & posistional argument
---
We are familiar with keyword argument. What is positional argument? A positional argument is a name that is not followed by an equal sign (=) and default value.

Positional Arguments:
1, Here is the generate case using prositional argument, and keyword argument:

    def f(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):
          -----------    ----------     ----------
          |             |                  |
          |        Positional or keyword   |
          |                                - Keyword only
          -- Positional only

 
2, Positional Arguments specified by an Iterable
Positional arguments can also be passed to functions using an iterable object. Examples of iterable objects in Python include lists and tuples. The general syntax to use is:

    function(*iterable)

Iterable is the name of the iterable preceded by the asterisk * character. What is iterable in Python ?

    def demo(*nums):
	    for name in nums:
		    print(name)
    >> You will everything in the nums;

Keyword Arguments
1, A keyword argument is an argument passed to a function or method which is preceded by a keyword and an equals sign. The general form is:
    
    function(keyword=value)

2, Keyword Arguments Specified by a Dictionary
Keyword arguments can also be passed to functions using a Python dictionary. The dictionary must contain the keywords as keys and the values as values. The general form is:

    my_dict = {'kw1': v1, 'kw2': v2}
    function(**my_dict)

How can we get the value inside the keyword_dict?

    for k, v in my_dict:
        print(k, v)