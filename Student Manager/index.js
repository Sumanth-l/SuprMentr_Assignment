let students = [
    {
        name: "Sumanth",
        marks: [85, 90, 78]
    },
    {
        name: "Rahul",
        marks: [70, 88, 92]
    },
    {
        name: "Anita",
        marks: [95, 80, 85]
    }
];

students.forEach(student => {
    let total = 0;

    student.marks.forEach(mark => {
        total += mark;
    });

    let average = total / student.marks.length;

    console.log("Student:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average:", average);
});