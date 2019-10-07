import React from 'react'
import './Crumb.sass'

const BreadcrumbItem = ({children, ...props}) => (
 <li className="breadcrumb-item" {...props}>
  {children}
 </li>
)

const BreadcrumbSeparator = ({children, ...props}) => (
 <li className="breadcrumb-separator" {...props}>
  {children}
 </li>
)

const Crumb = ({ separator = '/', ...props}) => {
 let children = React.Children.toArray(props.children)

 children = children.map((child, index) => (
   <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
 ))

 const lastIndex = children.length - 1

 children = children.reduce((acc, child, index) => {
   const notLast = index < lastIndex
   if (notLast) {
     // acc.push(child, '')
     acc.push(
      child,
      <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
        {separator}
      </BreadcrumbSeparator>,
    )
   } else {
     acc.push(child)
   }
   return acc
 }, [])

 return <ol>{children}</ol>
}

export default Crumb
