var d = document;

d.getElementById("uploadBtn").onchange = function () {
	d.getElementById("uploadFile").value = this.value;
	if (this.value) {
		$('.report-option').prop("disabled", false);
		$('#gen_report_btn-id').prop("disabled", false);
	}
};

function clearUpload () {
	d.getElementById("uploadFile").value = "";
	$('.report-option').prop("disabled", true);
	$('#gen_report_btn-id').prop("disabled", true);
};

function generateReport() {
	var chartType = $('.report-option')[0].innerText,
	data;
	console.log("chartType", chartType);
	if (chartType === "Pie Chart") {
		$('#pie_chart').css("display", "block");
		$('#bar_chart').css("display", "none");
		$('#visual_chart').css("display", "none");
		drawBarChart(data);
	} else if (chartType === "Bar Chart") {
		$('#bar_chart').css("display", "block");
		$('#pie_chart').css("display", "none");
		$('#visual_chart').css("display", "none");
		drawPieChart(data);
	} else {
		$('#visual_chart').css("display", "block");
		$('#pie_chart').css("display", "none");
		$('#bar_chart').css("display", "none");
		drawVisualReport(data);
	}
};

$(".dropdown-menu li a").click(function(){
	var target = $(this).html();
	$(this).parents('.dropdown-menu').find('li').removeClass('active');
    $(this).parent('li').addClass('active');
   	$(this).parents('#generate_report_id').find('.dropdown-toggle')
   		.html(target + ' <span class="caret"></span>');
});

function drawBarChart(data) {
	console.log("bar chart");
};

function drawPieChart(data) {
	console.log("pie chart");
};

function drawVisualReport(data) {
	console.log("visual chart");
};