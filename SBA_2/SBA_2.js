// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
//   if submission date is earlier than due date 
// 
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
function getLearnerData(course, ag, submissions) {

    function getMaxScoreAndDeadline(submission, ag) {
        for (a of ag.assignments) {
            if (a.id === submission.assignment_id) {
                console.log('log', a.points_possible, a.due_at)
                return [a.points_possible, a.due_at]
            }
        }
    }

    function checkIfDeadlinePassed(deadLine, submissionTime) {
        deadLine = deadLine.split('-');
        submissionTime = submissionTime.split('-');

        if (deadLine[0] > submissionTime[0]) {
            return false;
        } else if (deadLine[0] == submissionTime[0]) {
            if (deadLine[1] > submissionTime[1]) {
                return false;
            } else {
                if (deadLine[1] == submissionTime[1]) {
                    if (deadLine[2] >= submissionTime[2]) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return true;
                } 
            }
        } else {
            return true;
        }
    }

    let learnersFound = []
    let result = []

    let assignmentId = 0;
    let deduction = 0;
    let score;


    for (i of submissions) {
        if (learnersFound.includes(i.learner_id)) {
            for (data of result) {
                if (data.id === i.learner_id) {
                    assignmentId = i.assignment_id
                    const [maxScore, deadline] = getMaxScoreAndDeadline(i, ag)
                    deduction = checkIfDeadlinePassed(deadline, i.submission.submitted_at)
                    
                    if (deduction) {
                        score = i.submission.score - (i.submission.score * .10)
                    } else {
                        score = i.submission.score
                    }
                    data.totalScore += score
                    data.maxScore += maxScore
                    data[assignmentId] = score / maxScore 
                }
            }
            
        } else {
            const [maxScore, deadline] = getMaxScoreAndDeadline(i, ag)
            assignmentId = i.assignment_id
            learnersFound.push(i.learner_id)
            deduction = checkIfDeadlinePassed(deadline, i.submission.submitted_at)
            if (deduction) {
                score = i.submission.score - (i.submission.score * .10)
            } else {
                score = i.submission.score
            }
            let learnerObject = {
                id: i.learner_id,
                totalScore: score,
                maxScore: maxScore,
            }
            learnerObject[assignmentId] = (score / maxScore).toPrecision(2)
            try {
                result.push(learnerObject)
                continue

            } catch {
                throw Error("Failed to push")
            }
        };
        
    } 

    for (obj of result) {
        obj.avg = +(obj.totalScore / obj.maxScore).toPrecision(2)
        delete obj.totalScore
        delete obj.maxScore
    }

    return result
    
}
// +"5" //> 5

    
    // const result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0 // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833 // late: (140 - 15) / 150
    //   }
    // ];
  
  
  
result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result)