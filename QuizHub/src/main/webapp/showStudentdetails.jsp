<%@page import="java.util.List"%>
<%@page import="com.model.User"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="question.css" />

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
              <a class="nav-link active" aria-current="page" href="facultyhome.jsp">Home</a>
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
                Options
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/">a</a></li>
                <li><a class="dropdown-item" href="/">b</a></li>
                <li><a class="dropdown-item" href="/">c</a></li>
                <li><a class="dropdown-item" href="/">d</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="/">database</a>
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
    <% 
    List<User> stdlist = (List<User>)session.getAttribute("stdlist");%>
    <div class="container">
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Student Name</th>
            <th scope="col">Student ID</th>
            <th scope="col">Student Email</th>
          </tr>
        </thead>
        <div style="margin-top: 20px">
        <tbody >
        <%
        int i=1;
          for(User std:stdlist)
          {
%>
<tr><td><%=i++ %></td><td><%=std.getName() %></td><td><%=std.getId()%><td><%=std.getEmail()%></td></td></tr>	

<%
}
%>
         
        </tbody>
        </div>
      </table>
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
          <a
            href="/index.html"
            class="nav-link px-2 text-muted"
            style="user-select: auto"
            >Home</a
          >
        </li>
        <li class="nav-item" style="user-select: auto">
          <a
            href="/Student.html"
            class="nav-link px-2 text-muted"
            style="user-select: auto"
            >User</a
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
            href="/faq.html"
            class="nav-link px-2 text-muted"
            style="user-select: auto"
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
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
    