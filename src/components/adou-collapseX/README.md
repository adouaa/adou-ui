# 使用说明

## 1. props

### 1.1 header

* type: any

  *  作为 Collapse的头部，默认具有点击展开和折叠 CollapseContent的功能，可以自定义头部

    * ```tsx
      <Collapse firstShow={true} header={<Button type="primary">测试</Button>}></Collapse>
      ```



### 1.2 children

* type:  any

  * 自定义Collapse组件的content

    * ```tsx
      <TimeLine vertical events={events}>
          <TimeLineItem render={render}></TimeLineItem>
      
          <TimeLineItem render={render}></TimeLineItem>
          <TimeLineItem
              render={(event: any, timeLineWidth: any, timeLineHeight: any, isLasted: any) => (
                  <>
                  <div className={`content`}>
                      <div className="icon">
                          <i className={`fs-5 fa-solid fa-circle-check ${event.isFinish ? 'finished' : 'un-finish'}`}></i>
                      </div>
                      <div className="timeline-date">{event.date}</div>
                      <div className="timeline-content">
                          <h4>{event.title}</h4>
                          <p>{event.description}</p>
                      </div>
                      {!isLasted && (
                          <div
                              style={{ width: timeLineWidth, height: timeLineHeight }}
                              className={`timeline-line ${event.isFinish ? 'finished' : 'un-finish'}`}
                              ></div>
                      )}{' '}
                      {/* 连接线 */}
                  </div>
                  </>
              )}
              ></TimeLineItem>
          <TimeLineItem render={render}></TimeLineItem>
      </TimeLine>
      ```



### 1.3 firstShow

* type: boolean
  * 默认是否展开



  

