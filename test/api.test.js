const request = require('supertest');
const express = require('express');
const chai = require('chai');
const expect = chai.expect;

const app = express();

app.get('/hello', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

describe('GET /hello', () => {
    it('should return a greeting message', async () => {
        const res = await request(app).get('/hello');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message', 'Hello, world!');
    });
});