<%@page import="com.model.Options"%>
<%@page import="java.util.List"%>
<%@page import="com.model.Question"%>
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
<%!Integer queno = 0;%>

<h1><%=queno %></h1>
<%
Question question=(Question)session.getAttribute("question");
String ques = question.getQuestion();
%>
<h1><%=ques%></h1>
<% 
for(Options op: question.getOptions())
{
%>
<h3><%=op.getOption() %></h3>
<%} %>

<a href="displayQuiz.com" ><button>NextQuestion</button></a>

</body>
</html>