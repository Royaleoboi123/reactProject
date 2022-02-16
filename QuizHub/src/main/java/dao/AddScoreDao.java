package dao;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import com.model.ScoreTable;
import com.model.Subject;
import com.model.User;


@Component
public class AddScoreDao {
@PersistenceContext
private EntityManager em;
@Transactional
public void addScore(User user , Subject subject,String score)
{
	
	ScoreTable s1 = new ScoreTable();
	System.out.println(LocalDate.now());
	s1.setDate(LocalDate.now());
	s1.setSubject(subject);
	s1.setUser1(user);
	s1.setScore(score);
	em.persist(s1);
}
public List<ScoreTable> fetchScore(User user)
{
	Query q = em.createQuery("select s from ScoreTable s where s.user1.name=:us");
	q.setParameter("us", user.getName());
	List<ScoreTable> scorelist = q.getResultList();
	return scorelist;
}

	
	
}
