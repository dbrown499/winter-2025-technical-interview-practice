/*  A mother wants to automate her decision-making about letting her teenagers go out at night. The system you develop should take into account the teenager's behavior, academic performance, and the nature of the event they wish to attend.

Teenager Object Properties:
grounded (boolean): Indicates whether the teenager is currently grounded.
gpa (float): The teenager's grade point average.

ex: {
grounded: true, 
gpa: 3.5
}

Event Object Properties:
time (integer): The start time of the event in 24-hour format.
duration (integer): Duration of the event in hours.
type (string): Type of event (e.g., 'party', 'study group', 'concert').

ex: {
endTime: 8, 
duration: 2, 
type: ""
}

Rules for Permission:
If the teenager is grounded, they cannot go out.
If the teenager's GPA is below 2.5, they cannot go out.
If the event is a 'party', permission is automatically denied.
The teenager must be able to return home by 10, unless their gpa is 3.0 or higher. For every 0.5 points above 3.0 they may stay out an extra hour.

Implement the PermissionChecker class with a method canGoOut(teenager, event) that returns true or false based on the above criteria.
Include descriptive messages for each decision, explaining why permission was granted or denied. */

class PermissionChecker {
    constructor() {
        this.message = '';
    }

    canGoOut(teenager, event) {
        let curfew = 10; 
        let eventEndTime = event.time + event.duration;

        if (teenager.grounded || teenager.gpa < 2.5 || event.type === 'party') {
            this.message = teenager.grounded 
                ? "Permission denied: Teenager is grounded." 
                : teenager.gpa < 2.5 
                    ? "Permission denied: Teenager's GPA is below 2.5." 
                    : "Permission denied: Parties are not allowed.";
            return false;
        }

        if (teenager.gpa >= 3.0) {
            let extraHours = Math.floor((teenager.gpa - 3.0) / 0.5);
            curfew += extraHours;  
        }

        if (eventEndTime > curfew) {
            this.message = `Permission denied: Teenager must return home by ${curfew}:00. Event ends at ${eventEndTime}:00.`;
            return false;
        }

        this.message = `Permission granted: Teenager may go out and must return by ${curfew}:00.`;
        return true;
    }
}

module.exports = PermissionChecker;
