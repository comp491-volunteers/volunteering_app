'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const EVENTS_TABLE = process.env.EVENTS_TABLE;

exports.list = async () => {
  try {
    const res = await dynamo.scan({ TableName: EVENTS_TABLE }).promise();
    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ success: true, data: res.Items || [] }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ success: false, error: err.message || 'Unknown error' }),
    };
  }
};

exports.create = async (event) => {
  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body || {};
    if (!body || !body.eventId || !body.title || !body.location || !body.startTime || !body.endTime || !body.orgId) {
      return {
        statusCode: 400,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ success: false, error: 'Missing required fields' }),
      };
    }

    const item = {
      eventId: body.eventId,
      title: body.title,
      description: body.description || '',
      location: body.location,
      startTime: body.startTime,
      endTime: body.endTime,
      capacity: body.capacity || null,
      skillsRequired: body.skillsRequired || [],
      orgId: body.orgId,
      createdAt: new Date().toISOString(),
    };

    await dynamo.put({ TableName: EVENTS_TABLE, Item: item }).promise();

    return {
      statusCode: 201,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ success: true, data: item }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ success: false, error: err.message || 'Unknown error' }),
    };
  }
};


