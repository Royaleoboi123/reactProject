import com.model.User;

import dao.LoginVerifyDao;
import dao.RegisterDao;
import mail.api.Email;

public class Test {

	@org.junit.Test
	public void register()
	{
		RegisterDao r1=new RegisterDao();
		User user = new User();
		user.setEmail("saurabhpatkotwar97@gmail.com");
		user.setName("Saurabh");
		user.setPassword("admin");
		user.setRole("admin");
		r1.regUser(user);
		Email e1 = new Email();
		try {
			e1.sendMail("saurabhpatkotwar97@gmail.com","sam", "123");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
//	@org.junit.Test
//	public void login()
//	{
//		String email = "saurabhpatkotwar97@gmail";
//		String password = "123";
//		LoginVerifyDao l1=new LoginVerifyDao();
//		String role =l1.verifyUser(email, password);
//		System.out.println(role);
//	}
}
