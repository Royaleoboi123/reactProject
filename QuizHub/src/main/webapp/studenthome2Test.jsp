<%@page import="org.springframework.web.bind.annotation.ModelAttribute"%>
<%@page import="org.springframework.ui.Model"%>
<%@page import="com.model.Subject"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="icon" href="logo.png">
    <title>Quiz_Hub</title>
<link rel="stylesheet" href="./dark.css">
<script type="text/javascript" src="./dark.js"></script>

</head>
<body>
<%String username = (String)session.getAttribute("username"); %>
<%String role = (String)session.getAttribute("role"); %>
<h1><%=username %></h1>
<h2><%=role %></h1>
<form action="displayQuiz.com">

<% 
for(Subject sub : (List<Subject>)session.getAttribute("sublist"))
{
%>
	<input type="submit" name="subject" value=<%=sub.getSubject()%>>
<%
}
%>
</form>

</body>
</html>