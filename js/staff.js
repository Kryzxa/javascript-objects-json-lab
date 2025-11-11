(() => {
    console.info("ready");
    var bobDetails = {
        name : 'Bob',
        age : 21,
        qualifications: {
        gsce : true,
        alevels : true,
        degree : false
        }
     }
     var qualifications = [
        {
           subject : "Maths",
           grade : "A"
        },
        {
           subject : "English",
           grade : "B"
        }, 
        {
           subject : "French",
           grade : "C"
        },
        {
           subject : "Physics",
           grade : "B"
        
        }
        ];
        qualifications.forEach(function(element) {
            console.info(element.subject);
            console.info(element.grade);
            });
     console.dir(bobDetails);
    })();