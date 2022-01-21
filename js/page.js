// Charts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal')

let monthlySales = Array.of(500, 9000, 3000);
let monthlyLabels = Array.of('Oct', 'Nov', 'Dec');

let deptSales = Array.of(12000, 19000, 3000);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting');

let yearlyTotal =0;

function addYearlyTotal(x) {
yearlyTotal= x +yearlyTotal
}

monthlySales.forEach(addYearlyTotal);


let octNums = Array.of(500,10000,9000)
let novNums = Array.of(1100,20000,9000)
let decNums = Array.of(4000,10000,5000)

// let total = Array.of(addYearlyTotal(...octNums),addYearlyTotal(...novNums),addYearlyTotal(...decNums));
// alert(addYearlyTotal(...total))
// let yearlyTotal = addYearlyTotal(...monthlySales);
// alert(yearlyTotal);
yearlyLabel.innerHTML = `$${yearlyTotal}k`



function findOver1000(){
    // let firstThousand = monthlySales.find(element => element>1000)
    let firstThousand = monthlySales.findIndex(element => element>1000)

    alert(firstThousand)
}


function resetNum(){
    monthlySales.fill(0);
    monthlySalesChart.update();
    deptSales.fill(0);
    deptSalesChart.update();
}

//Bar
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlyLabels,
        datasets: [{
            label: '# of Sales',
            data: monthlySales,
            backgroundColor: [
                'rgba(238,184,104,1)',
                'rgba(75,166,233,1)',
                'rgba(239,118,122,1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})


//Pie
var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238,184,104,1)',
                'rgba(75,166,233,1)',
                'rgba(239,118,122,1)',
            ],
            borderWidth: 0
        }]
    },
    options: {}
})
