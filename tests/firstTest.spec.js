const express = require('express');
const app = express();
const request = require('supertest');
const expect = require('chai').expect;

app.get('/first', (err, res)=>{
    res.status(200).json({"ok":"response"});
});

describe('First test', ()=>{
    it('OK response', ()=>{
        request(app)
        .get('/first')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
        });
    });

    it('Mocky OK Response', (done)=>{
        request('https://run.mocky.io')
        .get('/v3/db289c6f-deff-4b5f-8418-98219e607ad8')
        .expect(200, done);
    });
});