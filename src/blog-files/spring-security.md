---
title: "Spring Security"
thumbnail: "https://adictosaltrabajo.com/wp-content/uploads/2020/05/spring_security-e1588763146414.jpg"
description: "How does Spring Security works."
---

> The majority of this explanation can be found on the Spring Security
official documentation, this is just explained in a way that some
people may find easy, Spring Security may use advanced words or terms
that not many people knows or understand (like I do).

# What is Spring Security?

Spring Security is a framework used in Spring Boot for
authenticating and authorizating, two different things.

### Difference between *authentication* and *authorization*

#### Authentication
Authentication is the process of verifying someone, making sure that
person is who he claims to be. It's basically the process of logging
in or registering.

#### Authorization
Authorization is making sure that **authenticated** person has the
rights to do some action. "Is that person authorized or not to
access the /admin route?"


---

## Architecture
To understand how Spring Security works, we need to understand the
architecture of it, let's give a quick review of it.

Spring Security is servlet based. A **servlet** basically acts as an
intermediate between the web server that contains the Servlet
Container and your app.

### Filter
A filter decides if a request can continue or not. There are many
filters like CORS filter, your own filters, etc.

### FilterChain
A filter chain is a... chain of filters, mhm...
It contains many filters and each filter will decide if it should go
down to the downstream filter or not.

Let's say we use the DaoAuthenticationProvider and the
UsernamePasswordAuthenticationToken (read upon).
A token is an object that implements the Authentication interface.

### Spring Security Authentication Manager
The authentication manager takes care of passing the unauthenticated
token created (Authentication object with authenticated = false) to
all providers and decide if a provider supports that token by using
the supports() method.

### Spring Security Providers


A provider is the one that handles DB queries to retrieve the user and
verify if exists or not and if the password is correct. 


---

## How Spring Security works
Now, let's explain how Spring Security works and what does it uses to
authenticate some user, because it's a pretty long process.

**Context: a REST API, we're not using formLogin() here.**

Let's say you're trying to log in some user.
The client makes a POST request to the /login route (Tip: check CORS configuration on your app).
The request doesn't gets to the controller directly, it has to do
some things before that.

The request first gets to the Servlet Container, like apache or
tomcat. The servlet container contains a FilterChain which has a
Filter called DelegatingFilterProxy. That filter delegates the request
to the springSecurityFilterChain, which actually has all the filters
that Spring Security uses and our custom filters too that we add by
using the addFilterBefore() or some method in the HttpSecurity.

We can also add our custom filter to the servlet container directly by registrating the filter as a
@Component and the FilterRegistrationBean<>.


After the request reaches the springSecurityFilterChain, all its
filters method doFilter() are executed. If all filters pass, the
request reaches the DispatcherServlet, which acts as a *router* and
delegates the request to the corresponding controllers.


The request reaches the corresponding controller (/login).
What after? Let's invoke the AuthenticationManager's authenticate()
method. That method waits for a token, more specifically an
Authentication object with authenticated = false.
We can create this unauthenticated token by doing:

```java
Authentication authReq = new UsernamePasswordAuthenticationToken(username, password) # username = principal, password = credentials
# We can also use the
UsernamePasswordAuthenticationToken.unauthenticated(username, password)
# The token may change depending on the app we are making and what we need.
```














<!-- # The provider -->
<!-- # uses the UserDetailsService that you provide, that UserDetailsService -->
<!-- # has the loadByUsername() method that actually queries the DB for the -->
<!-- # user, the loadByUsername() method returns a UserDetails or your custom -->
<!-- # UserDetails if you need. The provider manager then constructs an -->
<!-- # Authenticated object with authenticated = true and the principal, -->
<!-- # authorities and everything (if the username was found and the -->
<!-- # passwords matched). -->
<!---->
<!-- # After creating the Authenticated object with authenticated = true and -->
<!-- # everything, that object is passed to the AuthenticationManager -->
















