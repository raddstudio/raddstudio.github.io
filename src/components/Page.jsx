const Page = ({section, className, style, children}) => {
	return <div id={`${section ? section : ''}`} className={`bg ${section? section : ""} ${className? className : ""}`} style={Object.assign({},style,{minHeight:"1000px"})}>{children}</div>
}

export default Page;