import React from 'react'

import './index.scss'

import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  RowData,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { makeData, Person } from './makeData'

declare module '@tanstack/react-table' {
  //allows us to define custom properties for our columns
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'text' | 'range' | 'select'
  }
}

function TanstackTable() {
  const rerender = React.useReducer(() => ({}), {})[1]

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )



  // 假设的数据结构
interface Person {
  id: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  isStudent: boolean;
  gpa: number;
  courses: string[];
  address: {
    street: string;
    city: string;
    postalCode: string;
  };
}

// 配置每一列，然后赋值给 useReactTable

// 示例一
/* const columns = React.useMemo<ColumnDef<Person, any>[]>(
  () => [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'age',
      header: 'Age',
      meta: {
        filterVariant: 'range', // 代表范围，即最大值和最小值
      },
    },
    {
      accessorKey: 'gender',
      header: 'Gender',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'isStudent',
      header: 'Student',
      cell: info => (info.getValue() ? 'Yes' : 'No'),
    },
    {
      accessorKey: 'gpa',
      header: 'GPA',
      meta: {
        filterVariant: 'range',
      },
    },
    {
      accessorFn: row => row.courses.join(', '), // 数组就直接 使用join拼接
      id: 'courses',
      header: 'Courses',
    },
    {
      accessorFn: row => `${row.address.street}, ${row.address.city}, ${row.address.postalCode}`, // 对象的话拼接对象下的每一个值
      id: 'address',
      header: 'Address',
    },
  ],
  []
);
 */





  // 配置每一列，然后赋值给 useReactTable
  // 示例二
  /* const columns = React.useMemo<ColumnDef<any, any>[]>(
    () => [
      {
        // accessorKey 等同于 accessorFn: row => row.firstName, id: "firstName"
        // 要么出现 accessorKey，要么同时出现 accessorFn和 id，不然就无法获取展示的值或者报错
        accessorKey: 'firstName', 
        accessorFn: row => row.firstName,
        cell: info => info.getValue(),
      },
      {
        accessorFn: row => {
          // console.log(row.lastName);
          return row.lastName; // 返回这一列要展示的值
        },
        id: 'lastName',
        cell: info => info.getValue(), // 可有可无
        header: () => <span>Last Name</span>, // 可以自定义头部的文字，缺省值的话为 id
      },
      {
        accessorFn: row => `${row.firstName} ${row.lastName}`,
        id: 'fullName',
        header: 'Full Name',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'age',
        header: () => 'Age',
        meta: {
          filterVariant: 'range', // 代表范围，即最大值和最小值
        },
      },
      {
        accessorKey: 'visits',
        header: () => <span>Visits</span>,
        meta: {
          filterVariant: 'range',
        },
      },
      {
        accessorKey: 'status',
        header: 'Status',
        meta: {
          filterVariant: 'select', // 代表选择
        },
      },
      {
        accessorKey: 'progress',
        header: 'Profile Progress',
        meta: {
          filterVariant: 'range',
        },
      },
    ],
    []
  ) */



  // 动态生成列配置的函数
function generateColumns<T extends object>(data: T[]): ColumnDef<T, any>[] {
  const columns: ColumnDef<T, any>[] = [];

  // 遍历数据结构中的每个字段
  for (const key in data[0]) {
    if (data[0].hasOwnProperty(key)) {
      const fieldValue = data[0][key];

      // 根据字段类型生成列配置
      if (typeof fieldValue === 'string' || typeof fieldValue === 'number' || typeof fieldValue === 'boolean') {
        columns.push({
          accessorKey: key,
          header: () => key.charAt(0).toUpperCase() + key.slice(1),
        });
      } else if (Array.isArray(fieldValue)) {
        columns.push({
          accessorFn: row => fieldValue.join(', '),
          id: key,
          header: () => key.charAt(0).toUpperCase() + key.slice(1),
        });
      } else if (typeof fieldValue === 'object' && fieldValue !== null) {
        const nestedKeys = Object.keys(fieldValue);
        if (nestedKeys.length > 0) {
          nestedKeys.forEach(nestedKey => {
            columns.push({
              accessorFn: row => row[key][nestedKey],
              id: `${key}_${nestedKey}`,
              header: () => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${nestedKey.charAt(0).toUpperCase() + nestedKey.slice(1)}`,
            });
          });
        }
      }
    }
  }

  return columns;
}

// 使用示例
const columns = generateColumns(makeData(5000));


  // 表格的数据
  const [data, setData] = React.useState<any[]>(() => makeData(5_000))

  // 刷新数据
  const refreshData = () => setData(_old => makeData(50_000)) //stress test

  // 将上面的配置项配置给表哥
  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    // 过滤的实现跟 state对象下的columnFilters 和 onColumnFiltersChange: setColumnFilters有关
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  })

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none' // 可以排序的话就 pointer
                              : '',
                              // 头部排序功能实现
                            onClick: header.column.getToggleSortingHandler(), // 点击完可以排序，并且出现排序图表
                          }}
                        >
                          {/* 头部文字区域，以下两个缺一不可 */}
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {/* 头部排序图标区域，一个 { asc, desc }对象，根据 header.column.getIsSorted来决定展示哪个 */}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                        {/* 过滤区域件 */}
                        {header.column.getCanFilter() ? (
                          <div>
                            {/* 下边的过滤组件 */}
                            <Filter column={header.column} />
                          </div>
                        ) : null}
                      </>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        // 下面这两个缺一不可
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)} // 回到第一页
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()} // 回到上一页
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()} // 去一页
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)} // 去最后一页
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        {/* 总页数 */}
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {/* 获取当前页码 */}
            {table.getState().pagination.pageIndex + 1} of{' '} 
            {/* 获取总页码 */}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1} // 默认值是当前页数
            onChange={e => {
              // 因为是要减一才能跟 table组件对应上，并且是0的话，就直接为0，table组件也不做处理
              const page = e.target.value ? Number(e.target.value) - 1 : 0 
              table.setPageIndex(page) // 修改table的当前页码
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        {/* 每页数据量选择区域 */}
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            // 修改table的每页条数
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      {/* 总条数 */}
      <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
      <div>
        {/* 强制重新渲染？ */}
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
      <div>
        {/* 刷新数据 */}
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
      {/* pre：代码预览元素 */}
      <pre>
        {JSON.stringify(
          { columnFilters: table.getState().columnFilters },
          null,
          2
        )}
      </pre>
    </div>
  )
}

function Filter({ column }: { column: Column<any, unknown> }) {
  
  const columnFilterValue = column.getFilterValue() // 过滤框当前的过滤值（输入的值）

  const { filterVariant } = column.columnDef.meta ?? {} // range | select
  console.log("filterVariant = ", filterVariant);
  

  
  return filterVariant === 'range' ? (
    // 如果过滤条件是 range
    <div>
      <div className="flex space-x-2">
        {/* See faceted column filters example for min max values functionality */}
        <DebouncedInput
          type="number"
          value={(columnFilterValue as [number, number])?.[0] ?? ''}
          onChange={value =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min`}
          className="w-24 border shadow rounded"
        />
        <DebouncedInput
          type="number"
          value={(columnFilterValue as [number, number])?.[1] ?? ''}
          onChange={value =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max`}
          className="w-24 border shadow rounded"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : filterVariant === 'select' ? (
    <select
      onChange={e => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
    >
      {/* See faceted column filters example for dynamic select options */}
      <option value="">All</option>
      <option value="complicated">complicated</option>
      <option value="relationship">relationship</option>
      <option value="single">single</option>
    </select>
  ) : (
    <DebouncedInput
      className="w-36 border shadow rounded"
      onChange={value => column.setFilterValue(value)}
      placeholder={`Search...`}
      type="text"
      value={(columnFilterValue ?? '') as string}
    />
    // See faceted column filters example for datalist search suggestions
  )
}

// A typical debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue)

  // 默认值改变的话
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  // 定时器
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <input {...props} value={value} onChange={e => setValue(e.target.value)} />
  )
}

export default TanstackTable;
