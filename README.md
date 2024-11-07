# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* **Quick summary**    
  User api service supports users management and authentication process.
* **Version**    
  v1


# 3G Recruiting Portal

This project is a recruiting portal developed to streamline the hiring process, allowing for efficient job posting, candidate applications, and applicant tracking.

## Prerequisites

- *Node.js*: Ensure you have Node.js installed, specifically version 16.x or higher.
- *npm*: npm (Node Package Manager) comes with Node.js, but ensure it’s up to date.

## Getting Started

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/CodeCaptain-pratu/3G_recruiting_portal.git
cd 3G_recruiting_portal

### How do I get set up? ###

* **Summary of set up**     
  1.) softwares required:  
  &nbsp;&nbsp;&nbsp;&nbsp; Java version "17.0.11", maven-3.9.8, mysql-5.5, Eclipse/Intellij, git    
  2.) git clone https://naveenara@bitbucket.org/naveenara/user-api.git  
  3.) build project - mvn clean install  
  4.) run **UserApplication.java** with main method  
  &nbsp;&nbsp;&nbsp;&nbsp; user-api\src\main\java\org\cas\user\UserApplication.java  
  5.) verify application running status by calling below api:  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; http://localhost:8080/v1/users/api/get  
      
    
***Configuration**  
  Application configuration can be found in properties file - user-api\src\main\resources\application.properties  
  e.g - server.port=8080  
    
    
***Dependencies**  
  NA  
    
    
***Database configuration**  
  Mysql data configuration can be found in properties file - user-api\src\main\resources\application.properties  
    
    
***How to run tests**  
  TBC  
    
    
***Deployment instructions**  
  If mvn clean install is successfull, application jar will be created - user-api\target\user-0.0.1-SNAPSHOT.jar  
  Copy jar file to aws server  
  nohup java -jar user-0.0.1-SNAPSHOT.jar 2>&1 >> logfile.log &  
  
  

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
