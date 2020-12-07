const path = require('path');
const express = require('express');
const app = express();
// require('./newroutes')(app) //import routes
// var server = app.listen(8081, () => {
//     console.log('Server is started on 127.0.0.1:8081')
// })

// import * as path from 'path';
// import express from 'express';
// import app from 'express';
// import { html, LitElement } from 'lit-element/lit-element.js';

// app.use('/static', express.static('public'))
app.use(express.static('public'));
app.use('/static', express.static('public'))
app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'));
});
app.get('/events', function (req, res) {
    res.sendFile(path.join(__dirname + '/events.html'));
});
app.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname + '/form.html'));
});
app.get('/chat', function (req, res) {
    res.sendFile(path.join(__dirname + '/chat.html'));
});
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});
app.get('/reset', function (req, res) {
    res.sendFile(path.join(__dirname + '/reset.html'));
});
app.get('/settings', function (req, res) {
    res.sendFile(path.join(__dirname + '/settings.html'));
});
app.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/signup.html'));
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/explore', function (req, res) {
    res.sendFile(path.join(__dirname + '/explore.html'));
});
app.get('/resources', function (req, res) {
    res.sendFile(path.join(__dirname + '/resources.html'));
});
app.get('/user=:username', function (req, res) {
    res.sendFile(path.join(__dirname + '/profile.html'));
});
app.listen(3333);
console.log("localhost:3333")
