package servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.RegisterDao;
import mail.api.Email;

@WebServlet("/Register")
public class RegisterServ extends HttpServlet {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String name =request.getParameter("username");
		String email =request.getParameter("email");
		String password=request.getParameter("password");
		String role=request.getParameter("role");
	   
		Email e1 = new Email();
		try {
			e1.sendMail(email, name, password);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		response.sendRedirect("login.jsp");
		
		
	}



}
