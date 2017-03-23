import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory, IndexRoute, Router, Route } from 'react-router'
import Client from './routes/client'
import Header from './commons/Header'

const body = document.getElementById('app')
const nav = document.getElementById('react-target-nav')

render(<Header />, nav)
render(<Client />, body)