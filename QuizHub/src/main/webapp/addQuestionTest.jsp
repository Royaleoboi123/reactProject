<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="icon" href="logo.png">
    <title>Quiz_Hub</title>
</head>
<body>
<button class="btn-toggle">Toggle Dark-Mode</button>
<form action="addQuestion.com">
<h1 name="subject">${subject.getSubject()}</h1>
<input type="text" name="question">
<input type="text" name="option1">
<input type="radio" name="option1check" value="true">
<input type="radio" name="option1check" value="false">
<input type="text" name="option2">
<input type="radio" name="option2check" value="true">
<input type="radio" name="option2check" value="false">
<input type="text" name="option3">
<input type="radio" name="option3check" value="true">
<input type="radio" name="option3check" value="false">
<input type="text" name="option4">
<input type="radio" name="option4check" value="true">
<input type="radio" name="option4check" value="false">
<input type="submit" value="addquestion">

</form>
</body>
</html>