jQuery(function(){
	jQuery('#result').html("Please wait...");
	var html="<tr><td>Date</td><td>Confirmed</td><td>Deaths</td><td>Recovered</td><td>Active</td></tr>";
	jQuery.ajax({
		url:"https://api.covid19api.com/total/country/india",
		success:function(result){
			jQuery.each(result,function(key,val){
				html=html+"<tr><td>"+val.Date+"</td><td>"+val.Confirmed+"</td><td>"+val.Deaths+"</td><td>"+val.Recovered+"</td><td>"+val.Active+"</td></tr>";
			});
			jQuery('#result').html(html);
		}
	});
});