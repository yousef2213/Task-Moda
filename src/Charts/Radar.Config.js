export const RadarData = {
    labels: ["24:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
    datasets: [{
        label: "",
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        poingBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        data: [2, 4, 6, 8, 10, 12, 14, 16, 20, 29, 29]
    }]
};
export const RadarOptions = {
    scale: {
        ticks: {
            min: 0,
            max: 16,
            stepSize: 2,
            showLabelBackdrop: false,
            backdropColor: "rgba(203, 197, 11, 1)"
        },
        angleLines: {
            color: "rgba(255, 255, 255, .3)",
            lineWidth: 1
        },
        gridLines: {
            color: "rgba(255, 255, 255, .3)",
            circular: true
        }
    }
};