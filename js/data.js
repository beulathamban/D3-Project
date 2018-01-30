// d3.selectAll('.node')
//     .data([true, true, true])
//     .style('background-color', '#2688d2');


// var styles = ["#2688d2", "#e74c3c", "#27ae60"];
// var styles = [
//         {
//             color: '#2688d2',
//             width: '200px',
//             text: 'Blue Node'
//         },
//         {
//             color: '#e74c3c',
//             width: '300px',
//             text: 'Red Node'
//         },
//         {
//             color: '#27ae60',
//             width: '250px',
//             text: 'Green Node'
//         },
//         {
//             color: '#f1c40f',
//             width: '100px',
//             text: 'Yellow Node'
//         }
// ];
var styles = [];
var number = 100;
for (var i = 0; i < number; i++) {
    var width = Math.floor(Math.random() * 100) + "px";
    styles.push({
        color: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
        width: width,
        text: width,
    })
}

d3.select('#NodeContainer').selectAll('.newNodes')
    .data(styles)
    .enter().append('div')
        .text(function(d){
            return d.text
        })
        .style('background-color', function(d){
            return d.color
        })
        .style('width', function(d){
            return d.width
        }).exit();









// d3.selectAll('.node')
//     .data(styles)
//     .style('background-color', function(d){
//         return d.color
//     })
//     .style('width', function(d){
//         return d.width
//     })
