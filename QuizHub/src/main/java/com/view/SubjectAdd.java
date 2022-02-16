package com.view;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.model.Subject;

import dao.GenricDao;

/**
 * Servlet implementation class SubjectAdd
 */
public class SubjectAdd extends HttpServlet {
	private static final long serialVersionUID = 1L;
  
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String subject  = request.getParameter("subjectname");
        PrintWriter out = response.getWriter();
        out.print("sdnakdn");
//    	ApplicationContext ctx = new ClassPathXmlApplicationContext("app-config.xml");
		GenricDao dao = new GenricDao();
		Subject s1 =new Subject();
		s1.setSubject(subject);
		dao.addSubject(s1);
	}

	
}
