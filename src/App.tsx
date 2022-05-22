import React, { FC } from 'react'
import AccordionApp from './components/accordion/AccordionApp'
import DragNDrop from './components/dragEndDrop/DragNDrop'
import Content from './components/modal/Content'
import ScrollPagination from './components/scrollPagination/ScrollPagination'

const App: FC = () => {
	return (
		<>
			<h3 className='title'>Модальное окно</h3>
	<a target="_blank" className="link__git" href="https://github.com/lelickau/component__collection/tree/main/react/modal">GitHub Code</a>
	<Content />
	<div className="line"></div>
	<h3 className='title'>Drag and drop</h3>
	<a target="_blank" className="link__git" href="https://github.com/lelickau/component__collection/tree/main/react/dragEndDrop">GitHub Code</a>
	<DragNDrop />
	<div className="line"></div>
		<h3 className='title'>Аккордеон</h3>
		<a target="_blank" className="link__git" href="https://github.com/lelickau/component__collection/tree/main/react/accordion">GitHub Code</a>
	<AccordionApp />
	<div className="line"></div>
	<h3 className='title'>Динамическая пагинация</h3>
	<a target="_blank" className="link__git" href="https://github.com/lelickau/component__collection/tree/main/react/scrollPagination">GitHub Code</a>
	<ScrollPagination />
		<>
	)
}

export default App
