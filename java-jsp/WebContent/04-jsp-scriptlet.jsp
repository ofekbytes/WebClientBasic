<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<h3>  Jsp file </h3>

The Server time <%= new java.util.Date() %>

<P>UPPERCASE to lowerCase 
<% 
new String("UPPERCASE"); 
new String("UPPERCASE").toLowerCase();  

out.println("test On Screen ");
System.out.println("test on Eclipse Console");

for (int i=1; i <= 5; i++)
{
	out.println("<div> " + i + "</div>");
}

for (int i=1; i<=5; i++)
{
	out.println("<br/>");
	
	for (int y=1; y <= i; y++)
	{
		out.println(" * ");
	}
}

%>
 
</P>
</body>
</html>