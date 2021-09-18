
let students = ['Yadin','Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas'];
let attendees = [['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas', 'Ortal', 'Yadin'],
['Berry', 'Nitzan', 'Yoni', 'Eden', 'Hadas', 'Ortal', 'Yadin'],
['Maxim', 'Ortal', 'Yoni', 'Refael', 'Nitzan', 'Alex', 'Yadin'],
['Eden', 'Andrew', 'Yoni', 'Nitzan', 'Ortal', 'Nitzan','Yadin']];
let N = 3;

const topNStudentsAttendees = (students, attendees, N) => {

let topNAttendees = [];

if(N >= 0) {
    for (i = 0; i< attendees.length; i++) {
        let currentClassSet = new Set(attendees[i])
        for(let key of currentClassSet.keys()) {
            if(students.includes(key)) {
            let s = { name: key, appearences: 1 };
               let currentStrudentIndex = topNAttendees.map(function(e) { return e.name; }).indexOf(key);;
                if(currentStrudentIndex > -1) {//already was in topAttendees
                        topNAttendees[currentStrudentIndex].appearences +=1;
                } else {//was not in topAttendees
                    topNAttendees.push(s)
                }
            }    
        }
    }
}

    let x = topNAttendees.sort((attendeeA,attendeeB) => (attendeeB.appearences - attendeeA.appearences ))
    console.log(x);
    return topNAttendees.slice(0,N).map(function(e) { return e.name; }); 
}
 
let result = topNStudentsAttendees(students, attendees, N);
document.write('[' + result + ']');

