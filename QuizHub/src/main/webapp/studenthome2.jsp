<%@page import="org.springframework.beans.factory.annotation.Autowired"%>
<%@page import="dao.AddScoreDao"%>
<%@page import="com.model.User"%>
<%@page import="org.hibernate.internal.build.AllowSysOut"%>
<%@page import="com.model.ScoreTable"%>
<%@page import="java.util.List"%>
<%@page import="com.model.Subject"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <link rel="icon" href="logo.png">
    <title>Quiz_Hub</title>
  </head>
  <script
src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js">
</script>
  <body>
  
<%String username = (String)session.getAttribute("username"); %>
<%String role = (String)session.getAttribute("role");
 List<ScoreTable> stb1 = (List<ScoreTable>)request.getAttribute("score");
%>
<%if(username==null||role==null)
  {
	  response.sendRedirect("login.html?logerr=1");
  }
%>
<% System.out.println(stb1);%>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="4.png" alt="Quiz-Hub" width="40px" height="40px"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="studenthome2.jsp">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="About.html">About</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle active"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
               >
               Topics
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
               <%for(Subject sub : (List<Subject>)session.getAttribute("sublist"))
    	{%>
                <li><a class="dropdown-item" href="#"> <%=sub.getSubject()%></a></li><%} %>
                
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="Contact.html">Contact us</a>
            </li>
          </ul>
        
 <span style="color: white;">username:-</span>
         <h3 style="color: white; padding-right: 20px"><%=username%></h3>
         <span style="color: white;">role:-</span>
         <h3 style="color: white; padding-right: 20px" ><%=role%><h3>
          <form action="signout.com">
          <button
            type="submit"
            class="btn btn-warning position-relative m-lg-2">
            Sign Out
          </button>
        </form>
        </div>
      </div>
    </nav>
  <div class="d-flex justify-content-center mt-5">
  <canvas id="myChart" style="width:100%;max-width:700px"></canvas>
</div>
<script>
var xValues = [];
var yValues = [];
new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});
</script>

  
  
 <hr/>

    <div class="nav-scroller py-1 mb-2" style="user-select: auto; margin-top: 20px">
      <nav class="nav d-flex justify-content-between" style="user-select: auto">
      
        <a class="p-2 link-secondary" href="#" style="user-select: auto"
          >Aptitude</a
        >
        <a class="p-2 link-secondary" href="#" style="user-select: auto"
          >OOPs</a
        >
        <a class="p-2 link-secondary" href="#" style="user-select: auto"
          >Advance Java</a
        >
        <a class="p-2 link-secondary" href="#" style="user-select: auto"
          >Core Java</a
        >
        <a class="p-2 link-secondary" href="#" style="user-select: auto"
          >HTML</a
        >
        <a class="p-2 link-secondary" href="#" style="user-select: auto">CSS</a>
        <a class="p-2 link-secondary" href="#" style="user-select: auto"
          >JavaScript</a
        >
        <a class="p-2 link-secondary" href="#" style="user-select: auto"
          >Operating System</a
        >
        <a class="p-2 link-secondary" href="#" style="user-select: auto"
          >Puzzles</a
        >
        <a class="p-2 link-secondary" href="#" style="user-select: auto"
          >Bootstrap</a
        >
      </nav>
    </div>
<hr/>
<!-- ################################################################################################################## -->
   <div class="container" style="user-select: auto; margin-top: 20px">
     <form action="displayQuiz2.com">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
        style="user-select: auto"
      > 
  
    <%for(Subject sub : (List<Subject>)session.getAttribute("sublist"))
    	{%>
    
      <div class="col text-center" style="user-select: auto">
        <div
          class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
          style="
            background-image: url('https://blog.sli.do/wp-content/uploads/2020/04/blog-slido-virtual-quiz-setup-header.jpg ');
            user-select: auto;
          "
        >
          <div
            class="d-flex flex-column h-100 p-5 pb-3 text-dark text-shadow-1"
            style="user-select: auto"
          >
            <h2
              class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
              style="user-select: auto"
            >
            <%=sub.getSubject()%>
            </h2>
            <div>
            <button type="submit" class="btn btn-secondary stretched-link d-grid" name="subject" value=<%=sub.getSubject()%> >
            Click Here to Take a Quiz </button>
            </div>
           
            <ul class="d-flex list-unstyled mt-auto" style="user-select: auto">
              <li class="me-auto" style="user-select: auto">
                <img
                  src="4.png"
                  alt="Quiz-Hub"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                  style="user-select: auto"
                />
              </li>
              <li
                class="d-flex align-items-center me-3"
                style="user-select: auto"
              >
                <svg
                  class="bi me-2"
                  width="1em"
                  height="1em"
                  style="user-select: auto"
                >
                  <use xlink:href="#geo-fill" style="user-select: auto"></use>
                </svg>
                <small style="user-select: auto"></small>
              </li>
              <li class="d-flex align-items-center" style="user-select: auto">
                <svg
                  class="bi me-2"
                  width="1em"
                  height="1em"
                  style="user-select: auto"
                >
                  <use xlink:href="#calendar3" style="user-select: auto"></use>
                </svg>
                <small style="user-select: auto">Time 30 min</small>
              </li>
            </ul>
          </div>
        </div>
      </div><%} %>
      </form>
      </div>
    </div>

    <div class="container d-flex align-content-center justify-content-center">
      <h3>Quiz Hub</h3>
    </div>

    <footer
      class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
      style="user-select: auto"
    >
      <p class="col-md-4 mb-0 text-muted" style="user-select: auto">
        © 2022 Quiz-Hub Company, India
      </p>

      <a
        href="/"
        class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        style="user-select: auto"
      >
        <svg class="bi me-2" width="40" height="32" style="user-select: auto">
          <use xlink:href="#bootstrap" style="user-select: auto"></use>
        </svg>
      </a>

      <ul class="nav col-md-4 justify-content-end" style="user-select: auto">
        <li class="nav-item" style="user-select: auto">
          <a href="#" class="nav-link px-2 text-muted" style="user-select: auto"
            >Home</a
          >
        </li>
        <li class="nav-item" style="user-select: auto">
          <a href="#" class="nav-link px-2 text-muted" style="user-select: auto"
            >Features</a
          >
        </li>
        <li class="nav-item" style="user-select: auto">
          <a
            href="/Contact.html"
            class="nav-link px-2 text-muted"
            style="user-select: auto"
            >Contact Us</a
          >
        </li>
        <li class="nav-item" style="user-select: auto">
          <a href="#" class="nav-link px-2 text-muted" style="user-select: auto"
            >FAQs</a
          >
        </li>
        <li class="nav-item" style="user-select: auto">
          <a
            href="/About.html"
            class="nav-link px-2 text-muted"
            style="user-select: auto"
            >About</a
          >
        </li>
      </ul>
    </footer>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>
    