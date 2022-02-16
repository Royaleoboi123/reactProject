package servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.model.Question;

public class DisplayQue extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession ses = request.getSession();
		Integer count = (Integer)ses.getAttribute("queno");
		List<Question> queslist= (List<Question>)ses.getAttribute("QueList");
		if(count==null)
		{
			
		}
	
		
	}


}
