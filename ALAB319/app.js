import express from 'express'
import db from './db.js';

let app = express();
let port = 3000;


// // Within this route, create an aggregation pipeline that returns the following information:
// // The number of learners with a weighted average higher than 70%.
// // The total number of learners.
// // The percentage of learners with an average above 70% (a ratio of the above two outputs).
// No one has a target weighted average over 70
app.get('/grades/stats', async (req, res) => {

    let numberOfStudentsOverTargetAverageObj = await db.collection('grades').aggregate(
        [
            { $unwind: { path: '$scores' } },
            {
                $group: {
                    _id: '$student_id',
                    scores: { $avg: '$scores.score' }
                }
            },
            { $match: { scores: { $gt: 65 } } },
            { $count: 'score' }
        ],
        { maxTimeMS: 60000, allowDiskUse: true }
    ).toArray();

    let numberOfStudentsOverTargetAverage = numberOfStudentsOverTargetAverageObj[0].score
    let uniqueStudentIds = await db.collection('grades').distinct('student_id')
    let numberOfUniqueStudentIds = uniqueStudentIds.length

    let averageNumberOfStudentsOverTargetAverage = numberOfStudentsOverTargetAverage / numberOfUniqueStudentIds
    res.send(averageNumberOfStudentsOverTargetAverage);

})

/*
Create a GET route at /grades/stats/:id
Within this route, mimic the above aggregation pipeline, but only for learners within a class that has a class_id equal to the specified :id.
*/
app.get('/grades/stats/:id', async (req, res) => {

    let requestedId = Number(req.params.id)

    let numberOfStudentsOverTargetAverageObj = await db.collection('grades').aggregate(
        [
            { $unwind: { path: '$scores' } },
            { $match: { class_id: requestedId } },
            {
                
                $group: {
                    _id: '$student_id',
                    scores: { $avg: '$scores.score' }
                }
            },
            { $match: { scores: { $gt: 65 } } },
            { $count: 'score' }
        ],
        { maxTimeMS: 60000, allowDiskUse: true }
    ).toArray();

    let numberOfStudentsOverTargetAverage = numberOfStudentsOverTargetAverageObj[0].score
    let uniqueStudentIds = await db.collection('grades').distinct('student_id')
    let numberOfUniqueStudentIds = uniqueStudentIds.length

    let averageNumberOfStudentsOverTargetAverage = numberOfStudentsOverTargetAverage / numberOfUniqueStudentIds
    res.send(averageNumberOfStudentsOverTargetAverage);
})


app.listen(port, () => {
    console.log(`Express app running on http://localhost:${port}`)
})


