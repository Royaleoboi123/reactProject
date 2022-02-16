package servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.model.Subject;

import dao.GenricDao;

/**
 * Servlet implementation class Home2
 */
public class Home2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Home2() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		GenricDao g1 = new GenricDao();
        List<Subject> l1 = g1.sub();
		g1.meth();
		for(Subject su : l1)
		{
			System.out.println(su.getSubject());
		}
		String username = "Saurabh";
		HttpSession s1 = request.getSession();
		s1.setAttribute("username", username);
		
		s1.setAttribute("quelist", l1);
		response.sendRedirect("home.jsp");
	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
