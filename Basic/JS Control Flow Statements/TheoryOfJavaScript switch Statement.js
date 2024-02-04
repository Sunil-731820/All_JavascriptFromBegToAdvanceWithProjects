/*

JavaScript switch statement is used to execute a block of code from multiple expressions.

JavaScript switch statement evaluates an expression. The expression’s value is compared with the values of each case in the structure. If a match is found, the related block of code is executed.

Usage of JavaScript switch statement
JavaScript switch statement is used with a break or default keyword (optional and both can be used together also).

break: This keyword is used to break out of the switch block. This stops the execution inside the code block.
default: This keyword is used to specify a piece of code if no case matches the given condition. There can be only one default keyword in a switch statement.
Syntax
switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    .
    .
    case valueN:
        statementN;
        break;
    default:
        statementDefault;
}
Parameters
expression: The expression which is to be evaluated.


Explanation
The expression can be of type numbers or strings.
Duplicate case values are not allowed.
The default statement is optional. If the expression passed to the switch does not match the value in any case then the statement under default will be executed.
The break statement is used inside the switch to terminate a statement sequence.
The break statement is optional. If omitted, execution will continue on into the next case.
Cases are compared strictly.



*/

