# `adou-input`

> TODO: description

## Usage

```
注意：maxHeight属性值，不支持百分比！！！
如果父组件中的某个容器宽度值固定并且不够宽，则可以给最近的父组件设置 display: flex【重点】然后overflow: auto;就会让组件的宽度样式正常，并且绝对不能在list-wrapper上加 overflow: auto
eg:
     <div className="historival-visit-content container-fluid row">
        <div className="left col-3">
          <div className="left-box">
            <ResizeableSliderbar
              initialHeight={"calc(100vh - 11.3rem)"}
              maxWidth={"171px"}
            >
              <div className="top">
                {/* 给最近的父组件设置 display: flex【重点】然后overflow: auto; */}
                <div className="visit-list d-flex overflow-auto">
                  <List
                    maxHeight={"calc((100vh - 11.3rem) / 2)"}
                    maxWidth={"100%"}
                    wrap={false}
                    data={visitList}
                    onItemClick={handleVisitItemClick}
                  >
                    <div id="O-icon">
                      <i className="text-info fa-solid fa-stethoscope"></i>
                    </div>
                    <div id="I-icon">
                      <i className="text-warning fa-solid fa-hospital-user"></i>
                    </div>
                    <div id="E-icon">
                      <i className="text-danger fa-solid fa-house-medical-circle-exclamation"></i>
                    </div>
                  </List>
                </div>
              </div>
              <hr />
              {/* 给最近的父组件设置 display: flex【重点】然后overflow: auto; */}
              <div className="bottom d-flex overflow-auto">
                <List
                  wrap={false}
                  prefixTag="bi bi-file-text fs-3 text-primary"
                  onItemClick={handleEmrItemClick}
                  maxHeight={"calc(100vh - 16rem)"}
                  data={emrList}
                  showAddIcon={false}
                  showEditIcon={false}
                >
                  {/* <div
                id="commit-tag"
                className="commit-tag bg-success rounded text-white"
              >
                已提交
              </div>
              <div
                id="un-commit-tag"
                className="un-commit-tag bg-secondary rounded text-white"
              >
                未提交
              </div> */}
                </List>
              </div>
            </ResizeableSliderbar>
          </div>
        </div>

        <div className="right col-9">
          <div className="medical-record-content">
            <PdfViewer path={`${getUrl(`doc/work2/${getSessionId()}`)}`} />
            <MyFormClient
              itemExist={itemExist}
              setEntryFuncs={setEntryFuncs}
              form_id={formIdRef.current}
              userId={userId}
              visit_id={visit_id}
              emrElemList={emrElemList!}
              defaultData={defaultData}
              actRef={actRef}
            ></MyFormClient>
          </div>
        </div>
      </div>
```
