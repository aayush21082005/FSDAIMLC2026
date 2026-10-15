// console.log("Hello...")

const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2',{style:{color:'red'}},"Name: Dogesh Bhai")
const h21 = React.createElement('h2',{style:{color:'red'}},"Roll: 2400321530025")
const h1 = React.createElement('h1',{},"ABES Engineering College")
const img = React.createElement('img',{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMeXHp7h3Wz532LDXJ541W9bei7ejvyg5d3TlHvloNfg&s=10', style:{height:'200px', width:'200px'}})
const div = React.createElement('div',{style:{border:'10px solid red', textAlign:'center'}},img, h1, h2, h21)
root.render(div);