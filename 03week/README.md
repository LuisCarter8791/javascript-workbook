-get the user input (startStack, endStack) and then check the rules of the game based on the current stack object

-dont' check for win on column 'a' at all (good test case?)

-whenever we want to move a number We need to check the numbers value and make sure that it is less than the number you are trying to place it on

-to determine that the game has been won, check that either 'b' or 'c' has all the numbers in descending order (greatest to least) 

-should only be able to remove a number from the end of one array and place it on the end of another array

-we can always move numbers into an empty array

-if you choose from an empty stack or one that doesn't exist, the stacks will not be updated and a message will console logged out sayin 'choose a valid stack'

-to move a number, we need to update the stacks object using our user input that we get (starterStack, endStack)