google.load("visualization","1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart(){
    var data = google.visualization.arrayToDataTable([
        ['Name','After', { role: 'style' }, 
        'Before', {role: 'style'}, 
        'Safety recommendations (Diving Safe Practices Manual)',
        {type:'string',role:'tooltip'}],
        //add reference
        ['Ada Beatriz', 4.25, 'opacity: 0.9', 
            {v:5.25, f:'9.5'}, 'opacity: 0.8', 
            10,'DPSM safety rec = 10 ppm'],
        ['Cristo', 9, 'color: #AAE3F7; opacity: 0.9', 
            {v:18.75, f:'27.75'}, 'opacity: 0.8', 
            10, 'DPSM safety rec = 10 ppm'],
        ['Didier Amaury', 15.25, 'opacity: 0.9', 
            {v:21.75, f:'37'}, 'opacity: 0.8', 
            10,'DPSM safety rec = 10 ppm'],
        ['Julissa', 5, 'opacity: 0.9', 
            {v:14, f:'19'}, 'opacity: 0.8', 
            10,'DPSM safety rec = 10 ppm'],
        ['Vivianita', 2, 'opacity: 0.9', 
            {v:2, f:'4'}, 'opacity: 0.8', 
            10,'DPSM safety rec = 10 ppm'],
        ['Yvonne', 3.5, 'opacity: 0.9', 
            {v:10, fs:'13.5'}, 'opacity: 0.8',
            10,'DPSM safety rec = 10 ppm'],
        ['7 Mares', 10.25, 'opacity: 0.9', 
            {v:57.75, f:'68'}, 'opacity: 0.8',
            10,'DPSM safety rec = 10 ppm'],
    ]);

var options ={
    title: 'Carbon Monoxide (CO) levels on boats before and after the attachment',
    titleTextStyle: {color: 'white', fontSize: 20},
    fontName: 'Roboto',
    hAxis: {title: 'CO parts per million (PPM)', 
            viewWindow: {max:70}, 
            textStyle: {color:'white'}, 
            titleTextStyle: {color: 'white'} 
        },
    vAxis: {gridlines: {color:'white'}, 
            textStyle: {color:'white'}
        },
    isStacked: true,
    animation: {duration: 1000, easing: 'out'},
    backgroundColor: {fill: 'transparent'},
    height: 400, 
    width: '90%',
    seriesType:"bars",
    series: {
        2: {
            type: "line", 
            color: "#CF1313", 
            tooltip: {trigger: 'none'},
            
        }
    },
    legend: {position: 'bottom', textStyle: {color:'white'}},
    colors: ['#AAE3F7', '#4B93AD'],
};

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);

    var main = document.getElementById('main'),
        main_width = main.offsetWidth;

    // Resize if main's width has changed:
    var checkForResize = function() {
        if (main_width !== main.offsetWidth) {
            main_width = main.offsetWidth;
            chart.draw(data, options);
        }
    }
    setInterval(checkForResize, 1000);
}
