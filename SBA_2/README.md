# SBA 2

## Main Concept
As we iterate through submitted assignments, an array keeps track of student objects— if an object does not exist for a student already, a new object is created. When a new object is created for a student, the student's total score and max possible score is set to the current score and max score based on the current assignment; otherwise, the students total score and max possible score is incremented on their current object.  There is a try/catch loop used if for some reason we fail to push to the array of student objects for new students, but this is mostly arbitrary unless the initial array is not declared.

Once all assignments have been iterated through, the totalScore and maxScore keys are deleted after using them to calculate the student's average score. 
Implemented two helper functions:'getMaxScoreAndDeadline' and 'checkIfDeadlinePassed'

- getMaxScoreAndDeadline accepts the assignment and assignment group array, and retrieves the max score for a particular assigment via for loop.
- checkIfDeadLinePassed accepts the submitted_at property from the student's assignment details, and the deadline from getMaxScoreAndDeadline, and determines whether or not the deadline has passed.
- The score is decreased by 10% by multiplying the score from the assignment by 0.10% if checkIfDeadlinePassed helper function returns True.


