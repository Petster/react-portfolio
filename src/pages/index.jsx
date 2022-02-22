import React from 'react'
import Layout from '../components/Layout'

const index = () => {
  return (
    <Layout>
        <div className="flex flex-grow content-center items-center justify-center">
            <div id="indexCard" className="text-center">
                <h1 className="text-6xl font-mono">Jason Palmeri</h1>
                <h2 className="text-lg font-mono">Student / Web Development / Video Editing</h2>
            </div>
        </div>
    </Layout>
  )
}

export default index