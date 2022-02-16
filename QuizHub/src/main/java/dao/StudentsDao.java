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
import com.model.User;

@Component
public class StudentsDao {
	@PersistenceContext
	private EntityManager em;
	public List<User> fetchStudents()
	{
		
		Query q= em.createQuery("select u from User u where u.role='std'");
		List <User> list =q.getResultList();
		return list;
	}
}
