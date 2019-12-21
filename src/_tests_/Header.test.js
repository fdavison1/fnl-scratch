import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import renderer from 'react-test-renderer'
import {act} from 'react-dom/test-utils'
import Header, {Link2} from '../components/Header'




let container = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})
afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})


