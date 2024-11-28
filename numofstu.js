// Example student data
const students = [
    { name: "Alice", completedCourse: true },
    { name: "Bob", completedCourse: false },
    { name: "Charlie", completedCourse: true },
    { name: "Diana", completedCourse: true },
    { name: "Edward", completedCourse: false },
    { name: "Fiona", completedCourse: true }
  ];
  
  // Calculate statistics
  const totalStudents = students.length;
  const completedCount = students.filter(student => student.completedCourse).length;
  const notCompletedCount = totalStudents - completedCount;
  
  // Graph data
  const data = {
    labels: ["Completed", "Not Completed"],
    datasets: [{
    label: 'Number of Students',
    data: [completedCount, notCompletedCount],
    backgroundColor: ['#4caf50', '#f44336'], // Colors for bars
    borderColor: ['#388e3c', '#d32f2f'], // Border colors
    borderWidth: 1
    }]
  };
  
  // Graph options
 const options = {
   responsive: true,
  plugins: {
    legend: {
   position: 'top'
    },
    title: {
     display: true,
       text: 'Course Completion Status'
    }
   }
   };
  
  // Create the bar chart
  const ctx = document.getElementById('completionChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
  