<%@page import="org.springframework.beans.factory.annotation.Autowired"%>
<%@page import="dao.GetSubjectDao"%>
<%@page import="java.util.List"%>
<%@page import="com.model.Subject"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">

<link rel="icon" href="logo.png">
    <title>Quiz_Hub</title>
</head>
<body>


<div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
        style="user-select: auto"
      > 
  <%!
  @Autowired
  GetSubjectDao sub1;%>
<%
  List<Subject> sublist = (List<Subject>)sub1.fetchSubList(); %>
    <%for(Subject sub : sublist)
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
</body>
</html>