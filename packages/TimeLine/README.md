# 使用说明

## 1. Props

### 1.1 events

* type: any[]

  *  传进来的数据

  *  example:

    * ```tsx
      const [events, setEvents] = useState<any[]>([
              {
                  id: 1,
                  title: 'Event 1',
                  description: 'Description for event 1',
                  date: '2023-01-01',
                  isFinish: true,
              },
              {
                  id: 2,
                  title: 'Event 2',
                  description: 'Description for event 2',
                  date: '2023-02-01',
              },
              {
                  id: 3,
                  title: 'Event 3',
                  description: 'Description for event 3',
                  date: '2023-03-01',
              },
          ]);
      ```



### 1.2 vertical

* type: boolean
  * 时间轴纵向 / 横向展示(跟随父组件TimeLine的vertical属性)



### 1.3 children

* type: any

  * 自定义TimeLine组件的内容，可以随意编写，需要配合 TimeLineItem组件使用

  * example:

    * ```tsx
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
      ```

      

