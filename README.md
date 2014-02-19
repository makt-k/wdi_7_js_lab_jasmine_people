# Jasmine Lab: TDD People

You'll need to set up Jasmine on your own for this lab. Download the latest "[standalone distribution](https://github.com/pivotal/jasmine/tree/master/dist)" from GitHub ([here's a direct link to v2.0.0](https://github.com/pivotal/jasmine/raw/master/dist/jasmine-standalone-2.0.0.zip)) and unzip it into this repository. This package contains some examples that we don't want: Delete the contents of the `spec` and `src` directories, and remove the references to the deleted files in `SpecRunner.html`.

## Assignment

Use test-driven development to create a `Person` "class" (remember, technically [there are no classes in JavaScript](http://stackoverflow.com/questions/2752868/does-javascript-have-classes)). A `Person` must be initialized with a `firstName` and a `lastName`, plus any of the following optional properties:

* `age` (in years, default to a random value between 25 and 45)
* `weight` (in kg, default to a random value between 60 and 100)
* `height` (in cm, default to a random value between 150 and 200)
* `friends` (an array of other `Person` objects, default to empty)

I should also be able to call these functions on a `Person`:

* `fullName` should return the person's first name plus their last name
* `weightInStone` should return the person's weight in [stone](http://en.wikipedia.org/wiki/Stone_%28unit%29)
* `addFriend` should take a `Person` object and add it to the person's friends
* `removeFriend` should take a name string and remove the person with that name from the person's friends, if there is such a friend
* `greetPeople` should return a string that greets an optional array of `Person` objects (default to the person's friends) by their full names, with an optional greeting (default to `"Hi"`). If there is no one to greet (e.g. the person has no friends), the function should throw an error.
