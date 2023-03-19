# AWS Lambda Typescript Example App

This is just the initial setup of a REST API written in Typescript intended to
run on AWS Lambda.

You can use this to bootstrap your Lambda function.

## Docker image

Here's how to build the docker image:

```
docker build -t aws-lambda-typescript-example:latest .
```

You can test the app locally:

```
docker container run -p 9000:8080 aws-lambda-typescript-example:latest
```

Then, in another terminal:

```
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```
