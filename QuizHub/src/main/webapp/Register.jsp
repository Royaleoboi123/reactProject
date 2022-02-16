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

<script type="text/javascript">const htmlEl = document.getElementsByTagName('html')[0];

const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
}</script>
<style>html {
  
}

html[data-theme='dark'] {
    background: #000;
    filter: invert(1) hue-rotate(180deg)
}</style>
<form action="#">
<input type="text" name="name">
<input type="text" name="password">
<input type="text" name="email">
<input type="text" name="role">
<input type="submit">
   
    <button onclick="toggleTheme('dark');">Dark</button>
    
    <button onclick="toggleTheme('light');">Light Mode</button>
</body>
</html>