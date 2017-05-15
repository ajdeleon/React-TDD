import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'
import CommentBox from '../../src/components/comment_box'

describe('App', () => {
  let component

  beforeEach(() => {
    component = renderComponent(App)
  })

  // it will test a single attribute of a target
  it('shows instance of CommentBox', () => {
    expect(component.find('.comment-box')).to.exist
  })

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist
  })
})


