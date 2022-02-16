<%@page import="java.util.List"%>
<%@page import="com.model.Subject"%>
<%@page import="com.model.Options"%>
<%@page import="com.model.Question"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

   
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="student.css" />

   <link rel="icon" href="logo.png">
    <title>Quiz_Hub</title>
  </head>
  <body>
  <%String username = (String)session.getAttribute("username"); %>
  <%String role = (String)session.getAttribute("role"); %>
  <%if(username==null||role==null)
  {
	  response.sendRedirect("login.html?logerr=1");
  }
	  
Question question=(Question)session.getAttribute("question");
String ques = question.getQuestion();
Integer queno = (Integer)session.getAttribute("queno");
Integer listlen = (Integer)session.getAttribute("listlen");
%>

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
                </li>
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
<form action="countScore.com">
<div style="display: flex; flex-direction: column; ">
<div style="text-align: right;">
<video style="height: 150px ; padding-right: 20px; padding-top: 10px"  id="myVidPlayer" controls muted autoplay></video></div>
    <div class="container mt-sm-5 my-1 w-70">
      <div class="question ml-sm-5 pl-sm-5 pt-2">
       
        <div class="py-2 h5">
          <b>Q. <%=queno%> <%=ques%></b>
        </div>
      
        <div class=" w-70" id="options">
<% 
int no=0;
for(Options op: question.getOptions())
{
%>

          <label class="options w-70 d-flex align-items-center "
            > <input type="radio" name="radio" required  value=<%=no++%>><%=op.getOption()  %>
            <span class="checkmark"></span>
             <p id="userError" class="error"></p>
          </label>
          <hr />
          
 <% } %>    
        </div>
      </div>
    
      </div>
      <div class="d-flex align-items-center pt-3">
       
        <div class="m-lg-auto"><span><%=queno%></span> of <span><%=listlen %></span></div>
        <div class="ml-auto mr-sm-5 m-lg-auto">
          <button type="submit" class="btn btn-success" >Next</button>
        </div>
      </div>
    </div>
    </div>
</form>
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
          <a
            href="/question.html"
            class="nav-link px-2 text-muted"
            style="user-select: auto"
            >Admin</a
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
          <a
            href="/About.html"
            class="nav-link px-2 text-muted"
            style="user-select: auto"
            >About</a
          >
        </li>
      </ul>
    </footer>
   
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  <script type="text/javascript">
    //Selector for your <video> element
    const video = document.querySelector('#myVidPlayer');

    //Core
    window.navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            video.onloadedmetadata = (e) => {
                video.play();
            };
        })
        .catch( () => {
            alert('You have give browser the permission to run Webcam and mic ;( ');
        });

</script>
    
  </body>
</html>
