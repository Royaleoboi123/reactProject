<%@page import="com.model.User"%>
<%@page import="java.util.List"%>
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
<table>
<tr><th>Student Name</th><th>Student-ID</th><th>Student Email</th></tr>
<%
List<User> stdlist = (List<User>)session.getAttribute("stdlist");

for(User std:stdlist)
{
%>
<tr><td><%=std.getName() %></td><td><%=std.getId()%><td><%=std.getEmail()%></td></td></tr>	
<%
}
%>
</table>
</body>
</html>