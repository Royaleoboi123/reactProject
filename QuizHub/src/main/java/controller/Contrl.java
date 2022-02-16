package controller;

import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.protobuf.Option;
import com.model.Options;
import com.model.Question;
import com.model.ScoreTable;
import com.model.Subject;
import com.model.User;

import dao.AddQuestionDao;
import dao.AddScoreDao;
import dao.GetSubjectDao;
import dao.LoginVerifyDao;
import dao.RegisterDao;
import dao.ShowQuestionsDao;
import dao.StudentsDao;
import mail.api.Email;

@Controller
public class Contrl {
	@Autowired
	private RegisterDao reg;
	@Autowired
	private LoginVerifyDao log;
	@Autowired
	private GetSubjectDao sub;
	@Autowired
	private AddQuestionDao que;
	@Autowired
	ShowQuestionsDao queshow;
	@Autowired
	private StudentsDao std;
	@Autowired
	private AddScoreDao adscr;
	
	
	@RequestMapping("/Register.com")
	public String register(User user)
	{
		System.out.println(user.getEmail());
		reg.regUser(user);
		try {
			Email.sendMail(user.getEmail(), user.getName(), user.getPassword());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "redirect:login.html?register=yes";
	}
	@RequestMapping("/Login.com")
	public String login(User user,HttpServletRequest request)
	{	
		String role =log.verifyUser(user.getName(), user.getPassword(),user.getRole());
		request.getSession().setAttribute("user",user);
		if(role.equals("admin"))
		{
			request.getSession().setAttribute("username",user.getName());
			request.getSession().setAttribute("role","Admin" );
			return "adminhome.jsp";
		}
		if(role.equals("std"))
		{
			try {
			List <ScoreTable> scr = adscr.fetchScore(user);
		    request.setAttribute("score", scr);
			}
			catch(Exception e) {}
			request.getSession().setAttribute("username",user.getName());
			request.getSession().setAttribute("role","Student" );
			List<Subject> sublist = (List<Subject>)sub.fetchSubList();
			request.getSession().setAttribute("sublist", sublist);
			return "redirect:studenthome2.jsp";
			
		}
		if(role.equals("fac"))
		{
			request.getSession().setAttribute("username",user.getName());
			request.getSession().setAttribute("role","Faculty");
			return "facultyhome.jsp";
		}
		else
		{
			System.out.println("Error");
			return "redirect:login.html?error=1";
		}

	}
	
	@RequestMapping("/addQuiz.com")
	public String addQuestion()
	{
		return "addsubject.jsp";
	}
	@RequestMapping("/addSubject.com")
	public String addSubject(Subject subject, HttpServletRequest request)
	{
		HttpSession session = request.getSession();
		session.setAttribute("Subject", subject.getSubject());
		sub.addSubject(subject);
		return "addQuestion.jsp";
	}
	@RequestMapping("/addQuestion.com")
	public String addQuestion(HttpServletRequest request , Subject subject)
	{
		HttpSession session = request.getSession();
		String sub = (String)session.getAttribute("Subject");
		subject = que.getSubject(sub);
		Question q1 = new Question();
		q1.setSub_id(subject);
		q1.setQuestion(request.getParameter("question"));
		Options op1 = new Options();
		op1.setOption(request.getParameter("option1"));
		if(request.getParameter("option1check").equals("true"))
		{
			op1.setCorrect(true);
		}
		else
			op1.setCorrect(false);
		Options op2 = new Options();
		op2.setOption(request.getParameter("option2"));
		if(request.getParameter("option2check").equals("true"))
		{
			op2.setCorrect(true);
		}
		else
			op2.setCorrect(false);	
		Options op3 = new Options();
		op3.setOption(request.getParameter("option3"));
		if(request.getParameter("option3check").equals("true"))
		{
			op3.setCorrect(true);
		}
		else
			op3.setCorrect(false);
		Options op4 = new Options();
		op4.setOption(request.getParameter("option4"));
		if(request.getParameter("option4check").equals("true"))
		{
			op4.setCorrect(true);
		}
		else
			op4.setCorrect(false);
		
		op1.setQues_id(q1);
		op2.setQues_id(q1);
		op3.setQues_id(q1);
		op4.setQues_id(q1);
		List<Options> l1 = new ArrayList<Options>();
		l1.add(op1);
		l1.add(op2);
		l1.add(op3);
		l1.add(op4);
		q1.setOptions(l1);
		que.addQuestion(q1);
		return "redirect:addQuestion.jsp";
	}
	
	@RequestMapping("/displayQuiz2.com")
	public String display2(HttpServletRequest request)
	{
		HttpSession session =  request.getSession();
		String subject = (String)request.getParameter("subject");
		Subject subj = (Subject)sub.fetchsingleSubject(subject);
		session.setAttribute("subj", subj);
		List<Question> quelist = (List<Question>)queshow.getQuestion(subject);
		session.setAttribute("queno",null);
		session.setAttribute("score",(Integer)0);
		session.setAttribute("quelist", quelist);
		return "redirect:displayQuiz.com";
	}
	
	
	@RequestMapping("/displayQuiz.com")
	public String displayQuiz(HttpServletRequest request)
	{
		HttpSession session =request.getSession();
		
		List<Question> quelist =(List<Question>)session.getAttribute("quelist");
		session.setAttribute("listlen", quelist.size());
		Integer queno = (Integer)session.getAttribute("queno");
		if(queno==null)
		{
			queno=0;
		}
		System.out.println(quelist);
		System.out.println(queno);
		if(queno<quelist.size())
		{
		Question question = quelist.get(queno++);
		session.setAttribute("queno",queno);
		request.getSession().setAttribute("question", question);
		System.out.println(question.getQuestion());
		return "redirect:displayquiz.jsp";
		}
		else
			return "/countScore.com";
		}
	@RequestMapping("/countScore.com")
	public String calScore(HttpServletRequest request)
	{
		
		HttpSession session = request.getSession();
		List<Question> quelist =(List<Question>)session.getAttribute("quelist");
		Integer queno = (Integer)session.getAttribute("queno");
		Question question=(Question)session.getAttribute("question");
		List<Options> option = question.getOptions();
		Integer optn =Integer.parseInt(request.getParameter("radio"));
		Integer score = (Integer)session.getAttribute("score");
		if(option.get(optn).isCorrect())
		{
			score++;
			session.setAttribute("score", score);
		}
		if(queno<quelist.size())
		{
		return("redirect:displayQuiz.com");
		}
		else
		{
			Subject subject =(Subject)session.getAttribute("subj");
			User user = (User)session.getAttribute("user");
			User user1 = log.fetchUser(user.getName());
			System.out.println(user.getId());
			//adscr.addScore(user1, subject,String.valueOf(score));
			//System.out.println(score);
			
			return "redirect:Score.jsp";
		}
	}
	@RequestMapping("/signout.com")
	public String signout(HttpServletRequest request)
	{
		request.getSession().invalidate();
		
		return "redirect:login.html?logout=1";
	}
	
	@RequestMapping("/showstddetails.com")
	public String showStdDetails(HttpServletRequest request)
	{
		List<User> stdlist = std.fetchStudents();
		request.getSession().setAttribute("stdlist", stdlist);
		return "redirect:showStudentdetails.jsp";
	}
	
	
	
}
