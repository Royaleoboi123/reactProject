package mail.api;

	   import java.util.Properties;
	   import javax.mail.Authenticator;
       import javax.mail.Message;
       import javax.mail.PasswordAuthentication;
       import javax.mail.Session;
       import javax.mail.Transport;
	   import javax.mail.internet.AddressException;
	   import javax.mail.internet.InternetAddress;
	   import javax.mail.internet.MimeMessage;
	      
	public class Email{
	     public static void sendMail(String recepient,String name,String psw) throws Exception {
		 System.out.println("Preparing to send email"); 
		 Properties properties = new Properties();
		 properties.put("mail.smtp.auth","true");
		 properties.put("mail.smtp.starttls.enable","true");
		 properties.put("mail.smtp.host","smtp.gmail.com");
		 properties.put("mail.smtp.port","587");
		 
		final String myAccoutEmail ="saurabhppatkotwar@gmail.com";
		final String password ="saurabhAK@47";
		  Session session = Session.getInstance(properties, new Authenticator() {
		  @Override
		  protected PasswordAuthentication getPasswordAuthentication(){
		    return new PasswordAuthentication(myAccoutEmail,password);
			}
			});
			Message message = prepareMessage(session ,"saurabhppatkotwar@gmail.com",recepient,name,psw);
			Transport.send(message); 
			System.out.println("Message sent successfully");
	}
	  private static Message prepareMessage(Session session ,String myAccountEmail,String recepient,String name,String psw )	{
				try {
				Message message = new MimeMessage(session);
				message.setFrom(new InternetAddress(myAccountEmail));
				message.setRecipient(Message.RecipientType.TO,new InternetAddress(recepient));
				message.setSubject("Registtration successful");
				String htmlCode ="<body\r\n"
						+ "    style=\"object-fit: fill;height: 100vh ;width: 100vw; background-image: url(https://i.ibb.co/kQ4kLpB/101ef6a9e146b23de28fa2cd568ad17b.jpg); color: rgb(51, 17, 105);\">\r\n"
						+ "    <div style=\"text-align: center;\">\r\n"
						+ "       <h1 style=\"color: rgb(37, 37, 25);\">Welcome to Quiz-Hub</h1>\r\n"
						+ "        <h3>Thank-You for Registration</h3>\r\n"
						+ "        <img src=\"https://i.ibb.co/FxFX93c/mailimg.jpg\"  style='border: solid 3px rgb(82, 14, 14) ;border-radius: 4px;'></img>\r\n"
						+ "        <h4>Your Registration details</h4>\r\n"
						+ "        <h3 style='color:red'>Username :"+name+" </h3>\r\n"
						+ "        <h3 style='color:red'>Password :"+psw+"</h3>\r\n"
						+ "    </div>"
						+ "</body>";
				message.setContent(htmlCode , "text/html");
				return message;
				
			} catch(Exception ex)   {
				
				return null;
			}
				}

}
