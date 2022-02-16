package dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import org.springframework.stereotype.Component;

import com.model.Question;
import com.model.Subject;
@Component
public class ShowQuestionsDao {

	EntityManagerFactory emf = Persistence.createEntityManagerFactory("hibernate-mysql");
	EntityManager em = emf.createEntityManager();
	public List<Question> getQuestion(String subject)
	{	
		Query q = em.createQuery("Select s.questions from Subject s where s.subject=:sub");
		q.setParameter("sub", subject);
	 	List <Question> ql = q.getResultList();
	 	return ql;
	}
}
