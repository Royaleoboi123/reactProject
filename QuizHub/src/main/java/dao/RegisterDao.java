package dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import com.model.Subject;
import com.model.User;

@Component
public class RegisterDao {

	@PersistenceContext
	private EntityManager em;
	@Transactional
	public void regUser(User user)
	{
		em.persist(user);
	}
}
