package dao;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Component;

import com.model.User;
@Component
public class LoginVerifyDao {
	@PersistenceContext
	private EntityManager em;
	public String verifyUser(String user, String password ,String role)
	{
			Query q = em.createQuery("Select u from User u where u.name= :us and u.password= :ps and u.role= :ro");
			q.setParameter("us", user);
			q.setParameter("ps", password);
			q.setParameter("ro", role);
			try {
			User u =(User)q.getSingleResult();
			
			System.out.println(u.getName());
			
				if(u.getRole().equals("std"))
				{
					return "std";
				}
				if(u.getRole().equals("fac"))
				{
					return "fac";
				}
				if(u.getRole().equals("admin"))
				{
					return "admin";
				}
				return "no";
			
			}
			catch (Exception e) {
			
				return "null";
			}
		}
	public User fetchUser(String user)
	{
		Query q = em.createQuery("select u from User u where u.name =:nme");
		q.setParameter("nme",user);
		User user1 = (User)q.getSingleResult();
		return user1;
	}
}
