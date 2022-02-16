package servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.LoginVerifyDao;

/**
 * Servlet implementation class LoginServ
 */
public class LoginServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		  
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		LoginVerifyDao l1=new LoginVerifyDao();
		String role =l1.verifyUser(username, password);
		System.out.println(role);
		HttpSession session = request.getSession();
		session.setAttribute("username",username );
		if(role.equals("admin"))
		{
			session.setAttribute("role","admin" );
			response.sendRedirect("admin.jsp");
		}
		if(role.equals("std"))
		{
			session.setAttribute("role","student" );
			response.sendRedirect("std.jsp");
		}
		if(role.equals("fac"))
		{
			session.setAttribute("role","faculty" );
			response.sendRedirect("fac.jsp");
		}
		else
			response.sendRedirect("Login.html?error=1");
		
		
	}

}
