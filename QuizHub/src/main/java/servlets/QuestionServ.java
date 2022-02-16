package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.model.Question;

import dao.GenricDao;

public class QuestionServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String sub = request.getParameter("subbtn");
		GenricDao g1 = new GenricDao();
		List<Question> q1 = g1.getQuestions(sub);
		HttpSession s1= request.getSession();
		s1.setAttribute("ques", q1);
		response.sendRedirect("Question.jsp");
		
 	}

	

}
