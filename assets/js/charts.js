const yValues = ["C/C++", "C#", "Python", "HTML/JS", "Java"];
const xValues = [55, 75, 90, 60, 65];
const barColors = ['#97CFA8', '#97CFA8','#97CFA8','#97CFA8','#97CFA8'];
const borderColor = ['#6B9E62', '#6B9E62','#6B9E62','#6B9E62','#6B9E62'];

const ctx = document.getElementById('Coding_Language_Chart').getContext('2d');

Chart.defaults.font.family = "VT323";
Chart.defaults.font.size = 18;

new Chart(ctx, {
  type: "bar",
  data: {
    labels: yValues,
    datasets: [{
      label: 'Familiarity (%)',
      backgroundColor: barColors,
      borderColor: borderColor,
      borderWidth: 2,
      data: xValues,
      barThickness: 20,
      maxBarLength: 100
    }]
  },
  
  options: {

    indexAxis: 'y',
    scales: {
      x: {
        min: 0,
        max: 100, 

        ticks: {
          color: '#ACD797'  // X-axis numbers color
        },
        title: {
          color: '#ACD797'  // X-axis title color
        }
      },

      y: {
        ticks: {
          color: '#ACD797'  // Y-axis labels color (language names)
        }
      }
    },


    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
              size: 18
          },
          color: '#ACD797'
        }
        
      }
    }
  }
});