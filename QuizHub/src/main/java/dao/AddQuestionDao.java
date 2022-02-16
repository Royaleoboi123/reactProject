package dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import com.model.Question;
import com.model.Subject;

@Component
public class AddQuestionDao {

	@PersistenceContext
	private EntityManager em;
	@Transactional
	public void addQuestion(Question q)
	{
		em.persist(q);
	}
	
	public Subject getSubject(String subject)
	{
		Query q= em.createQuery("Select s from Subject s where s.subject = :sub");
		q.setParameter("sub", subject);
		Subject sub = (Subject)q.getSingleResult();
		return sub;
	}
	
}
