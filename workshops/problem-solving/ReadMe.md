# Developing a systematic approach to problem-solving

## Goals

I can define a problem and map it to a problem type  
I can break down a problem into its component parts  
I can approach a problem in a systematic way  

## How to approach a problem

What are some problems that you are having right now? What are some problems that you have encountered in the last day or so?

Discuss a systematic approach to solving a problem:
- What are the steps we need to take when confronted with ANY problem?
- How can we break down this problem into manageable portions?

What can we do when we don't understand a problem?

What are the resources that can help us to solve a problem?

## Example

Scenario: I have a tech test where I need to write a web application in Ruby that shows a form that can handle 10,000 users in an hour.

### Goals:
- I have a web application in Ruby that displays a form
- If I simulate 10,000 users in an hour, all of the information gets saved in the database, and the form does not crash

### Blockers:
- I don't know how to build a performant application
- I don't know how to simulate 10,000 users

### Related words:

Performance, databases, concurrency, load, testing, forms, HTTP, SQL, web, Ruby, Rails

### Map

Web, forms -> HTTP -> Databases, SQL
<---------------- Ruby, Rails ---------------->

Concurrency? Performance? Testing? Load?

### Problem types
- Lack of understanding of performance best practice
- No mental model of how to test concurrently

### Prioritise
- Mental Model of load testing
- Understanding how to apply best practice for performance

### Actions
- Improve mental model: Research load-testing
- Improve technical skills: Learn how to use a load testing tool
- Apply learning: Load test rails form
- Get visibility: Identify performance problems based on load testing
- Iterate: Research and fix each of the problems

## Exercise - problem scenarios

- Somebody tells you 'my computer isn't working, can you fix it?'
- You want to learn a new programming language
- You're in a new job and you really want to impress your boss, but you're struggling to fix a bug

## Takeaway exercise

Take on a problem of your own choosing. Ideally, a learning challenge - doesn't need to be a new language, but should be something that you're a little bit uncomfortable with.

Make a time commitment to yourself and record how you approach the problem.  
