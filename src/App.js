import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

import './App.css'

export default class BasicDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState(''), // 设置编辑器初始内容
    outputHTML: ''
  }

  componentDidMount() {
    this.isLivinig = true
    // 3秒后更改编辑器内容
    setTimeout(this.setEditorContentAsync, 3000)
  }

  componentWillUnmount() {
    this.isLivinig = false
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  setEditorContentAsync = () => {
    this.isLivinig && this.setState({
      editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
    })
  }

  render() {

    const { editorState, outputHTML } = this.state

    return (
      <div className="braft-wrapper">
        <BraftEditor
          value={editorState}
          onChange={this.handleChange}
          className='braft'
        />
        <div className="braft-output-content">{outputHTML}</div>
      </div>
    )

  }

}