import React, { FC } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import AccordionApp from './components/accordion/AccordionApp'
import DragNDrop from './components/dragEndDrop/DragNDrop'
import Content from './components/modal/Content'
import ScrollPagination from './components/scrollPagination/ScrollPagination'

const App: FC = () => {
	return (
		<div>
		<Routes>
            <Route path="/modal" element={<Content />} />
            <Route path="/drop" element={<DragNDrop />} />
            <Route path="/accordion" element={<AccordionApp />} />
            <Route path="/pagination-scroll" element={<ScrollPagination />} />
        </Routes>
		</div>
	)
}

export default App
