# Angular-Login---E2E-Testing-Protractor

Steps to setup the Clone the Github Project and running run it on the local machine

1.	Download – GitHub for windos from this link 
              “https://desktop.github.com/”	
After installing copy the project link from” https://github.com/cornflourblue/angular-registration-login-example”
Clone it to the local machine.
2.	Install Node.js - https://nodejs.org/en/
3.	After installing Node.js go to node.js command prompt and install npm 
Command – npm install http-server –g
4.	node.js command prompt and run “http-server <local path of the cloned folder>”
5.	After running this we get a ID which we can use to run the application on the browser.
For Example: http:127.0.0.1:8080
Setting Up protractor environment to run the code.

1.	Install Node.js - https://nodejs.org/en/
2.	Install Java jdk - http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html
3.	On the command prompt run the command – ‘webdriver-manager update’.
4.	After that we need to start the webdriver manager with the command – ‘webdriver-manager start’.
5.	Go to C:\Users\User\AppData\Roaming\npm\node_modules\protractor\example on the command prompt
6.	Here we have file conf.js which we can run to test which will check selenium server is running and run the example test.
7.	After that we need to install notepad ++  and copy the E2Etest.js file from GitHub https://github.com/karthiknaik9252/Angular-Login---E2E-Testing-Protractor.git
To C:\Users\User\AppData\Roaming\npm\node_modules\protractor\example.
8.	On the path - > C:\Users\User\AppData\Roaming\npm\node_modules\protractor\example.
Changes the config parameter in the conf.js file as below 

From specs: ['example.js'], to specs: ['E2Etest.js'],

9.	Now on the node.js command prompt go to the path - > C:\Users\User\AppData\Roaming\npm\node_modules\protractor\example.
                      execute the command – ‘Protractor conf.js

  

