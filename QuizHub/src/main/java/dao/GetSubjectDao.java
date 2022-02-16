package dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import com.model.Subject;
@Component
public class GetSubjectDao {
	@PersistenceContext
	private EntityManager em;
	public List<Subject> fetchSubList()
	{
		
		Query q= em.createQuery("select s from Subject s");
		List <Subject> list =q.getResultList();
		return list;
	}
	@Transactional
	public void addSubject(Subject sub)
	{
		em.persist(sub);
	}
	
	public Subject fetchsingleSubject(String sub)
	{
		Query q= em.createQuery("select s from Subject s where s.subject=:st");
		q.setParameter("st", sub);
		Subject subje = (Subject)q.getSingleResult();
		return subje;
	}
}

