// from e-book page
var cssEBook = `
.markdown-body {
font-size: 14px;
line-height: 1.6;
color: #666;
padding: 5px;
margin-top: 5px;
border: 2px #ccc dotted;
}


.markdown-body p {
    margin:10px 0;
}

.markdown-body table {
    margin:0 auto;
}

.markdown-body p.editing-tag {
    margin: 0 2px 0 8px;
    float: left;
    font-weight: bold;
    color: #777;
    white-space: nowrap;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    padding: 0 4px;
    vertical-align: 2px;
    background-color: #f7f7f9;
    border: 1px solid #e1e1e8;
    line-height: 1.4;
}

.markdown-body p.editing-p{

}

.markdown-body p.超强提示{
    border-left:4px solid #ff0000;
    padding-left:5px;
}

.markdown-body p.超强提示标签 {
    color: #ff0000;
    border-color: #ff0000;
    background-color: #f3f3f3;
}

.markdown-body p.提示{
    border-left:4px solid #009900;
    padding-left:5px;
}


.markdown-body p.提示标签 {
    color: #009900;
    border-color: #009900;
    background-color: #f3f3f3;
}

.markdown-body p.强提示{
    border-left:4px solid #ff8800;
    padding-left:5px;
}

.markdown-body p.强提示标签 {
    color: #ff8800;
    border-color: #ff8800;
    background-color: #f3f3f3;
}

.markdown-body .注释编号{
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
  top: -0.5em;
  font-weight:bold;
}
.markdown-body .注释编号下{
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
  top: -0.5em;
  font-weight:bold;
}

.markdown-body .注释内容 {
    border-left:4px solid #777;
    padding-left:5px;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 5px;
    padding-bottom: 5px;
}


.markdown-body .图{
    text-align:center;
}

.markdown-body .图题{
    text-align:center;
    font-size:90%;
}

.markdown-body .表题{
    text-align:center;
    font-size:90%;
    font-weight:bold;
}

.markdown-body .代码清单标题{
    text-align:right;
    font-size:90%;
}

.markdown-body .strong-code-line{
    font-weight:bold;
    background-color:#c7daf2
}

.markdown-body acronym{
    color:#009900;
    font-weight:bold;
}

.markdown-body ul
{
    list-style-type:disc;
}

.markdown-body ul ul
{
    list-style-type:circle;
}

.markdown-body ul ul ul
{
    list-style-type:square;
}

.markdown-body ul ul ul ul
{
    list-style-type:disc;
}

.markdown-body ol
{
    list-style-type:decimal-leading-zero;
}

.markdown-body ol ol
{
    list-style-type:lower-alpha;
}

.markdown-body ol ol ol
{
    list-style-type:lower-roman;
}

.markdown-body ol ol ol ol
{
    list-style-type:lower-greek;
}

.markdown-body pre
{
    margin:10px 0;
}

.markdown-body .代码编号分隔,
.markdown-body .列表编号分隔
{
    display:none;
}

.markdown-body .编注{
color: #fff;
background-color: #890707;
}
`

// customized by me
var cssCustomized = `
.CodeMirror,
code,
pre {
	font-family: Menlo, Consolas, 'Hiragino Sans GB', monospace;
}
.markdown-body {
	font-family: Arial, sans-serif;
}
.markdown-body .注释编号 {
	margin-left: 0.25em;
	margin-right: 0.25em;
	color: brown;
}
.markdown-body .注释编号下 {
	top: -0.25em;
	margin-right: 0.25em;
	font-size: 85%;
	color: brown;
}

.markdown-body p.editing-tag {
    border-color: currentColor !important;
}
.markdown-body p.提示标签 {
    color: #009900;
    background-color: #f3f3f3;
}
.markdown-body p.强提示标签 {
    color: #ff8800;
    background-color: #f3f3f3;
}
.markdown-body p.超强提示标签 {
    color: #ff0000;
    background-color: #f3f3f3;
}
`
