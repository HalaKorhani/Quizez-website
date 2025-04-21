document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#table tbody");
  
    const quizResults = JSON.parse(localStorage.getItem("quizResults")) || [];
  
    quizResults.forEach((result) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${result.fullName || "-"}</td>      
        <td>${result.username || "-"}</td>      
        <td>${result.email || "-"}</td>         
        <td>${result.phone || "-"}</td>        
        <td>${result.score !== undefined ? result.score : "-"}</td> 
        <td>${result.total !== undefined ? result.total : "-"}</td> 
        <td>${result.timestamp || "-"}</td> 
      `;
  
      tableBody.appendChild(row);
    });
  });