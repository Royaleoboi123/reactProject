package dao;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;



import com.model.Subject;


//@Component("dao")
public class GenricDao {
	
	//@PersistenceContext
	//@Transactional
	public void addSubject(Subject subject)
	{
	
			
			EntityManagerFactory emf = Persistence.createEntityManagerFactory("hibernate-mysql");
			EntityManager em = emf.createEntityManager();
			EntityTransaction tx = em.getTransaction();
			tx.begin();
			em.persist(subject);
			tx.commit();
		
		}
	public List getQuestions(String sub)
	{
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("hibernate-mysql");
		EntityManager em = emf.createEntityManager();
		Query q = em.createQuery("Select q from Question q where q.sub_id.subject = :sub");
		q.setParameter("sub",sub);
		List<Subject> l1 = q.getResultList();
		return l1;
	}
		
		


	
	public void meth()
	{
		GenricDao g1 = new GenricDao();
//		Subject s1 = new Subject();
//		s1.setSubject("Java");
//		g1.addSubject(s1);
////		Subject s1 = (Subject)g1.fetch(Subject.class, 1);
////		Question q1 = new Question();
////		q1.setQuestion("What is JVM");
////		q1.setSub_id(s1);
////		Options op1 = new Options();
////		op1.setOption("something");
////		op1.setCorrect(false);
////		op1.setQues_id(q1);
////		Options op2 = new Options();
////		op2.setCorrect(false);
////		op2.setOption("idontknow");
////		op2.setQues_id(q1);
////		List<Options> l1= new ArrayList<Options>();
////		l1.add(op1);
////		l1.add(op2);
////		q1.setOptions(l1);
////		g1.addEnt(q1);
//		
			List<Subject> l1 = g1.sub();
			for(Subject sb:l1)
			{
				System.out.println(sb.getSubject());
			}
	}

	public List sub()
	{
			EntityManagerFactory emf = Persistence.createEntityManagerFactory("hibernate-mysql");
			EntityManager em = emf.createEntityManager();
			Query q = em.createQuery("select s from Subject s");
			List l1 = q.getResultList();
			return l1;
	}
}
