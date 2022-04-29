/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	API_PATHFINDERBACKEND_AIMODELTABLE_ARN
	API_PATHFINDERBACKEND_AIMODELTABLE_NAME
	API_PATHFINDERBACKEND_GRAPHQLAPIENDPOINTOUTPUT
	API_PATHFINDERBACKEND_GRAPHQLAPIIDOUTPUT
	API_PATHFINDERBACKEND_GRAPHQLAPIKEYOUTPUT
	API_PATHFINDERBACKEND_LAYERTABLE_ARN
	API_PATHFINDERBACKEND_LAYERTABLE_NAME
	API_PATHFINDERBACKEND_USERTABLE_ARN
	API_PATHFINDERBACKEND_USERTABLE_NAME
	AUTH_PATHFINDERBACKEND35E4D986_USERPOOLID
	ENV
	REGION
	STORAGE_DATA_BUCKETNAME
Amplify Params - DO NOT EDIT */

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.post('/upload', function(req, res) {
  const data = {url: req.url, body: req.body}
  try {
    res.json({...data, success: true})
  } catch (error) {
    res.json({...data, success: false})
  }
})

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
