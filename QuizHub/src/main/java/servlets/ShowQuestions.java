package servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.model.Question;

import dao.ShowQuestionsDao;

public class ShowQuestions extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
   
   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String subject = request.getParameter("Subject");
		ShowQuestionsDao s1 = new ShowQuestionsDao();
		List<Question> queList = s1.getQuestion(subject);
		HttpSession ses = request.getSession();
		ses.setAttribute("QueList", queList);
		response.sendRedirect("DisplayQue");
	}

}
