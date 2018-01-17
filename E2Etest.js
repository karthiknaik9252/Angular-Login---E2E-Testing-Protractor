describe('end to end testing', function() {
	
	beforeEach(function(){
	browser.driver.get('http://127.0.0.1:8080');
	
	});
	
   it('should render login page', function() {
	   
	    // Checking the current url
	var currentUrl = browser.driver.getCurrentUrl();
	expect(currentUrl).toMatch('/#!/login');
	});
	
   it(' Registering the user',function() {
	  
	  // Checking the Register url
	  var userLoginBtn = element(by.xpath('/html/body/div[1]/div/div/div/div/form/div[3]/a'));
	  var currentUrl = browser.driver.getCurrentUrl();
	  userLoginBtn.click().then(function() {
	  var RegisterUrl = browser.driver.getCurrentUrl();
	  expect(RegisterUrl).toMatch('/#!/register');
	  }, 10000);
	  
	   // Find page elements in Register page
	   	var firstName = element(by.id('firstName'));
		var lastName = element(by.id('Text1'));
		var userNameField = element(by.id('username'));
		var userPassField = element(by.id('password'));
		var userLoginBtn  = element(by.buttonText('Login')); 
		
	  // Fill input fields
	  
	  firstName.sendKeys('test1');
	  lastName.sendKeys('test2');
      userNameField.sendKeys('test12');
      userPassField.sendKeys('123qwe');
	  
	  //click the Register buttonText
	  var RegisterBtn = element(by.xpath('/html/body/div[1]/div/div/div/div/form/div[5]/button'));
	  var registersuccText = "Registration successful";
	  RegisterBtn.click().then(function() {
      browser.waitForAngular();
	  expect(currentUrl).toMatch('/#!/login');
      expect(registersuccText).toEqual("Registration successful");
      }, 10000)
	 
  it('should sign in', function() {

      // Find page elements
	  var currentUrl = browser.driver.getCurrentUrl();
	  expect(currentUrl).toMatch('/#!/login');
	  var currentUrl = browser.driver.getCurrentUrl();
	  userLoginBtn.click().then(function() {
      var userNameField = element(by.id('username'));
      var userPassField = element(by.id('password'));
      var userLoginBtn  = element(by.xpath('/html/body/div[1]/div/div/div/div/form/div[3]/button'));
     }, 10000);
	  
      // Fill input fields
      userNameField.sendKeys('test12');
      userPassField.sendKeys('123qwe');

      // Ensure fields contain what we've entered
      expect(userNameField.getAttribute('value')).toEqual('test12');
      expect(userPassField.getAttribute('value')).toEqual('123qwe');

      // Click to sign in - waiting for Angular as it is manually bootstrapped.
	    var yourloggedText = "You're logged in!!";
        userLoginBtn.click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/#!/');
		expect(yourloggedText).toEqual("You're logged in!!");
      }, 10000);
	  
   it('sign in should fail with wrong username & password', function() {
	  
	  // Find page elements
      var userNameField = element(by.id('username'));
      var userPassField = element(by.id('password'));
      var userLoginBtn  = element(by.buttonText('Login'));

      // Fill input fields
      userNameField.sendKeys('test123');
      userPassField.sendKeys('123qwe3');

      // Ensure fields contain what we've entered
      expect(userNameField.getAttribute('value')).toEqual('test123');
      expect(userPassField.getAttribute('value')).toEqual('123qwe3');

      // Click to sign in - waiting for Angular as it is manually bootstrapped.
	    var loginfailText = "Username or password is incorrect";
        userLoginBtn.click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/#!/');
		expect(loginfailText).toEqual("Username or password is incorrect");
      }, 10000);
	  
 	it('delete the user and logout', function() {
	  
	  // Find page elements
      var userNameField = element(by.id('username'));
      var userPassField = element(by.id('password'));
      var userLoginBtn  = element(by.buttonText('Login'));

      // Fill input fields
      userNameField.sendKeys('test12');
      userPassField.sendKeys('123qwe');

      // Ensure fields contain what we've entered
      expect(userNameField.getAttribute('value')).toEqual('test12');
      expect(userPassField.getAttribute('value')).toEqual('123qwe');

      // Click to sign in - waiting for Angular as it is manually bootstrapped.
	    var loginpassText = "All registered users:";
		var DeleteBtn = element(by.css('[ng-click="vm.deleteUser(test1 test2)"]'))
        userLoginBtn.click().then(function() {
		DeleteBtn.click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/#!/');
		expect(loginpassText).toEqual("All registered users:");
	  },10000);
      }, 10000);
	  
  }); 
  });  
  });
  });
});
