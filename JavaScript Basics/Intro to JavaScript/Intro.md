What are Programs?
Programs are text files that humans write. They tell computers what to do! Very often the text that we write in programs is referred to as code. People who write programs are referred to as programmers or coders.

Programs are written in a programming language designed to be human-readable. In this way many programmers can work on the same code with a common understanding of what it's trying to accomplish!

When a program is ready to be executed by a machine, it is read line-by-line by a compiler or an interpreter. Both of these tools will translate the code into instructions a machine can run.

Parsing
Each line in a program is parsed to determine its meaning to the machine. This is done by breaking up each statement into tokens. For instance, we might have a statement:
`const a = 4`
This statement is broken up into the individual tokens: const, a, = and 4.

These tokens have a particular meaning to the machine depending on the syntax. Programming languages define syntax. One such programming language is JavaScript. Using JavaScript syntax, the compiler assigns a set of rules to determine the meaning of the above tokens.

It will see the keyword const and know it to be declaring a variable called a. It will recognize = as an assignment operator. Finally, it will determine that 4 is the value to be stored inside of the variable a.

A compiler will read each statement in your program, parsing it. Eventually it forms a tree-like data structure to represent your program. From this data structure it will create a series of machine instructions that can be executed directly.
In some languages, compilation creates machine code that is deployed to servers. For JavaScript, compilation happens microseconds before execution. This is referred to Just-in-Time Compilation.

Phew!

Don't worry if some of that was confusing! It's enough to introduce these concepts for now. We'll dive into further detail in future lessons. We will explore JavaScript syntax one step at a time by writing programs in the coming lessons.