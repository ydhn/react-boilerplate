import React from 'react'
import { render } from 'react-dom'
import { router } from './router.jsx'
import './styles/app.scss'

const root = router;

render((root), document.getElementById('app'));
