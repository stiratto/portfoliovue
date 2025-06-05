---
title: "Spring Security"
thumbnail: "https://adictosaltrabajo.com/wp-content/uploads/2020/05/spring_security-e1588763146414.jpg"
description: "How does Spring Security works."
---

> The majority of this explanation can be found in the official Spring Security
documentation, this is just explained in a way that some
people may find easy.
Spring Security may use advanced words or terms
that not many people knows or understand (like I do).

# What is Spring Security?

Spring Security is a framework used in Spring Boot for
authenticating and authorizating, two different concepts.

### Difference between *authentication* and *authorization*

#### Authentication
> Authentication is the process of verifying someone, making sure that
person is who he claims to be. It's basically the process of logging
in or registering.

#### Authorization
> Authorization is making sure that **authenticated** person has the
rights to do some action. "Is that person authorized or not to
access the /admin route?"


---

## Architecture
To understand how Spring Security works, we need to understand the
architecture of it, let's give a quick review of it.

Spring Security is servlet based. A **servlet** basically acts as an
intermediate between:
- The web server that contains the Servlet Container
- Your Spring application

### Filter
A filter decides if a request can continue or not. There are many
filters like:
- CORS filters
- Your own custom filters, etc

### FilterChain
A filter chain is a... chain of filters, mhm...
Each filter will decide if the request should continue or not.

### Authentication Flow Example

Let's say we use the 
- `DaoAuthenticationProvider` and the
- `UsernamePasswordAuthenticationToken` (read upon).
A token is just an object that implements the Authentication interface.

### Spring Security AuthenticationManager

An `AuthenticationManager` is responsible for:
- Receiving an unauthenticated token (`Authentication` object with
`authenticated = false`).
- Iterating through all `AuthenticationProvider`s
- Asking each provider if it `supports()` the received token


### Spring Security Providers

A provider is responsible of using the
`UserDetailsService` for retrieving the user and
verify whether it exists or not and if the password is correct. 

### SecurityContextHolder
The `SecurityContextHolder` holds a SecurityContext (as its name indicates).

![image](https://docs.spring.io/spring-security/reference/_images/servlet/authentication/architecture/securitycontextholder.png)

### SecurityContext
This contains an authenticated `Authentication` object.


### UserDetailsService
A UserDetailsService is responsible of querying the database, looking
for a specific user using the `loadByUsername()` method which we have
to implement if we implemented the  UserDetails interface on our
custom UserDetailsService.
It returns a `UserDetails` object.

### UserDetails
A `UserDetails` object contains the details of an authenticated user.
It contains methods like:
- getAuthorities() for roles which returns a Collection of any type
that extends GrantedAuthority (`Collection<? extends
GrantedAuthority>`.
- getUsername() for the username
- getPassword() for the authenticated user password


---

## How Spring Security works

Now, let's explain how Spring Security works and what does it uses to
authenticate some user.

> **Context:** a REST API, we're not using formLogin() here.

Let's say you're trying to log in some user.
The client makes a POST request to the /login route (Tip: check CORS configuration on your app).
The request doesn't gets to the controller directly, it has to do
some things before that.

The request first gets to the Servlet Container, like apache or
tomcat. The servlet container contains a `FilterChain` which has a
`Filter` called `DelegatingFilterProxy`. That filter delegates the request
to the `springSecurityFilterChain`. The `springSecurityFilterChain` has:
- Our custom filters that we add by using `addFilterBefore()` or
`addFilterAfter()` in the HttpSecurity.
- Spring Security default filters, etc.

We can also add our custom filter to the servlet container directly by registrating the filter as a
`@Component` and the `FilterRegistrationBean<>`, e.g:


After the request reaches the `springSecurityFilterChain`, all its
filters method `doFilter()` are executed. If all filters pass, the
request reaches the `DispatcherServlet`, which acts as a *router* and
delegates the request to the corresponding controllers.

The request reaches the corresponding controller (/login).
What after? We need to authenticate the user, let's do that. 

> The request is already at the corresponding bean controller

We need to invoke the `AuthenticationManager.authenticate()`
method. That method waits for a token, more specifically an
`Authentication` object with `authenticated = false`.
We can create this unauthenticated token by doing:

```java
Authentication authReq = new UsernamePasswordAuthenticationToken(username, password) # username = principal, password = credentials
# We can also use the
UsernamePasswordAuthenticationToken.unauthenticated(username, password)
# The token may change depending on the app we are making and what we need.
```

The `AuthenticationManager.authenticate()` method is responsible for:
Finding which provider supports the token passed into the method, this
is done by using the `provider.supports()` method.

If it finds a provider, it executes the `provider.authenticate()`
method, for example, with the `DaoAuthenticationProvider`, the
`authenticate()` method retrieves the user using the `provider.retrieveUser()` method.

### DaoAuthenticationProvider authenticate()

This method (that actually comes from `AbstractUserDetailsAuthenticationProvider`, the `DaoAuthenticationProvider`'s superclass) tries to retrieve the user from
the database, using the `DaoAuthenticationProvider.retrieveUser()` 

The `retrieveUser()` method calls our
`UserDetailsService.loadByUsername()` and returns a UserDetails
object. 

If the user is found, it performs various check before
actually creating the Authentication object with authenticated = true.

After passing all the checks and before creating the authenticated
`Authentication` object, it obtains the found user's username by
using the `UserDetails.getUsername()`. remember, the user found (by
retrieveUser()) is a UserDetails, thats why if we implemented our own
custom UserDetails we would have to implement that method by ourselves.

For creating the authenticated `Authentication` object, the `DaoAuthenticationProvider.createSuccessAuthentication()` method is
used. The principal is the username, the authentication is the unauthenticated object and the user is the user found. This method actually uses the `AbstractUserDetailsAuthenticationProvider.createSuccessAuthentication()` method logic (`super`).


```java
    # DaoAuthenticationProvider
	@Override
	protected Authentication createSuccessAuthentication(Object principal, Authentication authentication,
			UserDetails user) {
		String presentedPassword = authentication.getCredentials().toString();
		boolean isPasswordCompromised = this.compromisedPasswordChecker != null
				&& this.compromisedPasswordChecker.check(presentedPassword).isCompromised();
		if (isPasswordCompromised) {
			throw new CompromisedPasswordException("The provided password is compromised, please change your password");
		}
		boolean upgradeEncoding = this.userDetailsPasswordService != null
				&& this.passwordEncoder.get().upgradeEncoding(user.getPassword());
		if (upgradeEncoding) {
			String newPassword = this.passwordEncoder.get().encode(presentedPassword);
			user = this.userDetailsPasswordService.updatePassword(user, newPassword);
		}
		return super.createSuccessAuthentication(principal, authentication, user);
	}
```

Ok, now the authenticated object is created, everything went good.
The authenticated `Authentication` object is returned to the
`AuthenticationManager.authenticate()` method, the one that we executed on our controller, now
we have the authenticated user! We can use
`Authentication.getPrincipal()` for getting the user's name, we can get
the user's role by doing something like:

```java
Authentication
                        .getAuthorities().stream().findFirst().map(GrantedAuthority::getAuthority).orElse("UNKNOWN")

```

> This piece of code works if we had a custom UserDetails with
> getAuthorities() method implemented, like this:
> 
```java
 @Override
    // a collection of any item that extends grantedauthority
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(this.role.toString()));
    }

```


That basically gets the authorities (the roles), converts the
collection to a stream, finds the first item, the findFirst() returns
an Optional<GrantedAuthority> because the first element may exist or
not, the map() executes the given function into the Optional, in this
case we use a method reference, GrantedAuthority::getAuthority()
which returns the user's role.

Now we can put this Authentication object into a SecurityContext to
access the user from any part of our app.
