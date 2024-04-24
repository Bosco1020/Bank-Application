[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/YzaBbnim)
# Challenge 2 - Bank Challenge

```ascii
||====================================================================||
||//$\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//$\\||
||(100)==================| DIGITAL FUTURES NOTE |================(100)||
||\\$//        ~         '------========--------'                \\$//||
||<< /        /$\              // ____ \\                         \ >>||
||>>|  12    //L\\            // ///..) \\         L38036133B   12 |<<||
||<<|        \\ //           || <||  >\  ||                        |>>||
||>>|         \$/            ||  $$ --/  ||        One Hundred     |<<||
||<<|      L38036133B        *\\  |\_/  //* Series:                |>>||
||>>|  12                     *\\/___\_//*   2020                  |<<||
||<<\      Treasurer     ______/ Vincent \________    Secretary 12 />>||
||//$\                 ~| BANK OF DIGITAL FUTURES |~              /$\\||
||(100)================= ONE HUNDRED CODE CREDITS ===============(100)||
||\\$//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\$//||
||====================================================================||
```

## Introduction

We have a request from a client to help them with a solution for a console banking application.

> Before proceeding, ensure that you have a solid understanding of why the customer needs this software and the benefits that it will bring to them (See Task 1).

### Core Features

The Business Analyst team working with the client has identified the following features that should be implemented:

- A user should should see the output of the application on the terminal:
  - Access an account (assuming each user will automatically have their details loaded into the program on startup)
  - Deposit funds
  - Withdraw funds - if they have sufficient balance to do so
  - Print an account statement (date, amount, balance)

### Acceptance Criteria

The following acceptance criteria must be met by producing the exact output on the console as shown below (assuming that none of the additional formatting from the extended tasks has been applied):

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```ascii
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

> **Note:** The use of a generative AI tool to complete tasks relating to the specific requirements above is NOT allowed.  All work here should be your own.

### Additional Features

In addition to these features, the client has asked for the following functionality to be implemented if time allows you to do so:

- The output of the statement should be formatted so credits and positive balances appear in green text, debits and negative balances appear in red text
- An overdraft facility can be added to the account, so that if a withdrawal is attempted which would result in a negative balance, the withdrawal is allowed up to the value of the overdraft only
  - This overdraft should be configurable on a per-account basis (i.e. the amount of the overdraft is not fixed across all clients) and only implemented if the account has an overdraft facility enabled

> **Note:** The use of a generative AI tool to help complete tasks relating to these further requirements is allowed but should be clearly documented.
> You may also use Generative AI to help you with generating edge/corner cases for tests.

---

## Tasks

1. Explain the benefits of the software to the client - why they need it and how it will help them:
    - What are the benefits of the software to the end user?
    - What are the benefits of the software to the business?
2. From the requirements listed above, devise a set of user stories that describe the functionality that the client has requested
3. From these user stories, create a domain model to describe how the objects will use messages to communicate with one another
4. Using a test-driven approach, implement the code necessary to implement the functionality described in the user stories
5. Create a program that will run in the terminal that demonstrates the functionality of the code based on the user stories

After the submission deadline, you will be expected to perform a review of someone else's code.  Guidelines for this will be announced by your trainer.

---

## Tips

- Commit regularly to GitHub with clear commit messages - write a failing test, pass the test, commit, etc
- You should put your domain models and test plans in the markdown file in the `docs` folder, if you decide to use some form of Kanban board to track your progress, you should include a screenshot of this in the markdown file
- Your code files should be stored in the `src` folder
  - There is already a file called `index.js` in this folder, this is the entry point for your application
  - You should hold other discrete code files in this folder as appropriate
- You need to set up a ***third-party*** testing library for this challenge (i.e. Jasmine)
  - Any testing of the statement output should produce the output as shown in the Acceptance Criteria above
- You should edit the `package.json` file to set up scripts to **run** and **test** your application
- Use modern `import` and `export` syntax to import and export code between files rather than `require` and `module.exports` syntax
- Add comments to your code to help explain the functionality of the code - even if you don't complete the code, this will help your trainer understand your thought process

---

## Grading Criteria

### Digital Futures Software Engineering Progression Management Framework

In this Challenge, you will have the opportunity to demonstrate the following competencies from the Software Engineering Progression Management framework:

---

#### Writes software that meets a user’s functional and non-functional requirements

|               | Description                                                                                                                                                                                                         | Where assessed?                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| ***Level 1*** | The engineer can code a solution that functionally and non-functionally meets requirements for a **small number** of **basic** requirements (e.g. requirements requiring a single function/block of code to fulfil) | Code submitted                  |
| ***Level 2*** | The engineer can code a solution that functionally and non-functionally meets requirements for a **small number** of **simple** requirements (e.g. requirements requiring multiple functions to fulfil)             | Code submitted                  |
| ***Level 3*** | The engineer can code a solution that functionally and non-functionally meets requirements for several **simple** requirements                                                                                      | Code submitted                  |
| ***Level 3*** | The engineer can code a solution that functionally and non-functionally meets requirements and can **peer-review code** identifying opportunities to make it more **efficient** and/or **cleaner** with the help of a **Generative AI tool** | Code submitted                  |

---

#### Can interpret business requirements into coding requirements
  
|               | Description                                                                                                                                                                                                  | Where assessed?                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| ***Level 1*** | The engineer can create **simple user stories** from user requirements (i.e. clearly defined story using “As a”, “Able to”, “So that” or “Given/When/Then” structure that could be solved using simple code) | Markdown file in `docs` folder  |
| ***Level 2*** | The engineer can create **domain models** for **simple user stories**                                                                                                                                        | Markdown file in `docs` folder  |
| ***Level 2*** | The engineer can create **domain models** for **simple user stories** using **simple, suitable prompts** and a **Generative AI tool** (such as Chat-GPT)                                                     | Markdown file in `docs` folder  |
| ***Level 3*** | The engineer can create **domain models** and/or apply object-oriented principles in them for simple user stories                                                                                                                                          | Markdown file in `docs` folder and code submitted |

---

#### Develop code through Test-Driven Development and/or Behaviour Driven Development

|               | Description                                                                                                                                                                                                 | Where assessed?                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| ***Level 2*** | The engineer can write **tests** and/or **working code** that demonstrates that the **TDD process** has been followed through a commit history with clear commit messages                                   | Code submitted - GitHub commit history |
| ***Level 3*** | The engineer can write **tests** and/or **working code** that pass covering the **main functionality** of the code using a standard, **third-party** testing framework | Code submitted |
| ***Level 3*** | The engineer can write **tests** and/or **working code** that demonstrates the use of a **Generative AI** tool to identify and write test cases and/or code for tests | Code submitted and Markdown file in `docs` folder |
| ***Level 4*** | The engineer can write **tests** and/or **working code** that passes tests that cover **some edge cases** of the code **that they have identified** using a standard, **third-party** testing framework | Code submitted |
| ***Level 4*** | The engineer can write **tests** and/or **working code** that demonstrates the use of a **Generative AI** tool to identify and write tests for **further edge cases** | Code submitted and Markdown file in `docs` folder |
| ***Level 5*** | The engineer can write **tests** and/or **working code** that passes tests that cover most **edge cases** of the code using a standard, **third-party** testing framework | Code submitted and Markdown file in `docs` folder |
| ***Level 5*** | The engineer can write **tests** and/or **working code** that demonstrates the use of a **Generative AI** tool to identify and write tests for **further edge or corner cases** | Code submitted and Markdown file in `docs` folder |

---

#### Writes clean code

|                | Description                                                                                                                                                                                                       | Where assessed? |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ***Level 1***  | The engineer can write code that is **functionally correct** using **simple** coding structures (loops, conditionals, data structures, etc)                                                                       | Code submitted  |
| ***Level 2***  | The engineer can write code that is **functionally correct** using applying **some** principles of clean-coding (e.g. 5-line functions, no nested loops or conditional statements)                                | Code submitted  |
| ***Level 2***  | The engineer can write code that is **functionally correct** and has been made **more efficient** by a **Generative AI** tool | Code submitted and Markdown file in `docs` folder |
| ***Level 2***  | The engineer can write code that is **functionally correct** and has **demonstrated** the use of **Generative AI** to help within the **debugging** process | Code submitted and Markdown file in `docs` folder |
| ***Level 3***  | The engineer can write code that is **functionally correct** using applying **single responsibility** and other clean-coding practices (e.g. **abstraction**) to **some** of the classes/functions/methods and blocks of code | Code submitted  |
| ***Level 3*** | The engineer can write code that is **functionally correct** and can use **Generative AI** to help **refactor** code | Code submitted and Markdown file in `docs` folder |
| ***Level 4***  | The engineer can write code that is **functionally correct** using applying **single responsibility** and other clean-coding practices (e.g. **abstraction**) to **most** of the classes/functions/methods and blocks of code | Code submitted  |
| ***Level 4*** | The engineer can write code that is **functionally correct** and can use **Generative AI** to help **document their own** or the **code of others** | Code submitted and Markdown file in `docs` folder |
| ***Level 5***  | The engineer can write code that is **functionally correct** using applying **single responsibility** and other clean-coding practices (e.g. **abstraction**) to all of the classes/functions/methods and blocks of code to create **loosely-coupled**, **highly-cohesive** code | Code submitted and Markdown file in `docs` folder |

---

### Digital Futures Professional Skills Progression Management Framework

In this Challenge, you will have the opportunity to demonstrate the following competencies from the Professional Skills Progression Management framework:

---

#### Communications

|               | Description                                                                                            | Where assessed?                |
| ------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------ |
| ***Level 1*** | Can express themselves fluently in both verbal and written English                                     | Markdown file in `docs` folder |
| ***Level 1*** | Demonstrates attentive listening                                                                       | During assignment introduction |
| ***Level 2*** | Convey technical information to technical stakeholders in both verbal and written forms                | Markdown file in `docs` folder |
| ***Level 2*** | Creates content to a professional standard that is concise, well-structured, and grammatically correct | Markdown file in `docs` folder |

---

#### Business Awareness

|               | Description                                                                                                                                  | Where assessed?                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| ***Level 1*** | Recognises importance of customer/stakeholder-centricity                                                                                     | Markdown file in `docs` folder                     |
| ***Level 2*** | Applies basic requirement elicitation techniques and can gather and document simple requirements that align towards the business’ objectives | Markdown file in `docs` folder                     |
| ***Level 3*** | Creates clear project documentation detailing project objectives, approach and results                                                       | Markdown file in `docs` folder and in code files   |
| ***Level 3*** | Applies prioritisation techniques to ensure resource efficiency and project alignment within timescales and business objectives              | Markdown file in `docs` folder (Trello screenshot) |

---

#### Personal Development

|               | Description                                                                                                                                  | Where assessed?                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| ***Level 2*** | Constructs SMART goal based on their identified areas of improvement                                                                         | Professional Skills submission                     |
| ***Level 3*** | Provides constructive input to peers and can communicate feedback in a supportive and helpful manner                                         | Comments in Peer's Repository                      |

---

#### Adaptability

|               | Description                                                                                                             | Where assessed?                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| ***Level 1*** | Individual may notice when processes, procedures, or tasks are altered but may not be entirely comfortable with changes | Markdown file in `docs` folder                   |
| ***Level 1*** | Demonstrates openness to making minor-in-scope adjustments to their plans and tasks in response to changes              | Markdown file in `docs` folder                   |
| ***Level 2*** | Understands fundamental Agile terms, such as User Stories, Scrum, Kanban, and the Agile Manifesto                       | Project files and Markdown file in `docs` folder |
| ***Level 3*** | Demonstrates experimentation with different approaches, tools, or methods                                               | Project files and Markdown file in `docs` folder |

---

## Submission

Your Challenge attempt should be submitted via commits to the forked project from GitHub Classroom.  Your trainer will have supplied you with the appropriate link to do access this, you need to take no further action on this platform.  To indicate that you have completed the Challenge, you should you the Assignment Submission link in the Challenge course for your Cohort on Noodle.  The Progression Management Frameworks will be assessed via a marking rubric in Noodle and you will be able to see how you performed in each competency.

You are not permitted to collaborate with anyone to complete this challenge.  You should complete the *Core Functionality* using traditional skills, knowledge and understanding of software engineering and all code submitted for this should be your own.  You may use a *Generative AI tool* to help you complete the *Additional Functionality* but this should be clearly documented.

---

## Feedback

After submission of your challenge attempt, your trainer will record and submit feedback in Noodle and/or via GitHub for comments in your code .  You will then be able to view this feedback via Noodle and your GitHub account.

Your trainer will also provide general feedback to the cohort via the Discord channel.

---
<!--
## Further Tasks

Based on your work here, the feedback you are given (both as a cohort and individually) and the feedback you give to others, you will be asked to create a SMART goal based on the areas of improvement that you have identified.  This will be submitted via Noodle.  For the next Challenge, you will be expected to show that you have implemented your SMART goals and that you have made progress towards achieving them.

---

-->
