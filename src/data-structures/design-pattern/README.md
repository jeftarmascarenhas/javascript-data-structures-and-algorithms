# This directory has some design patterns


* Singleton
* Factory
* Middleware

## Singleton Pattern

This pattern guarantees the existence of only a instance of a class.
Keeping a only global point of access on the object.

***Pos***:

It help save memory and resources of server avoinding to many requests, like database connection
and utility classes.


***Cons***:

Makes modularization difficult and increases coupling. Many people think that singleton is a anti pattern,
Because modularization difficult and part of codes don't ease pluggable and unpluggable.
