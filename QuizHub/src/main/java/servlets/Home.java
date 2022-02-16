package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import javax.annotation.Generated;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.model.Subject;

import dao.GenricDao;
import dao.GetSubjectDao;

public class Home extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		GetSubjectDao s1 = new GetSubjectDao();
		List<Subject> l1 = s1.fetchSubList();
		HttpSession sws = request.getSession();
		sws.setAttribute("Sublist",l1);
		response.sendRedirect("StudentHome.jsp");
		
	}

}
