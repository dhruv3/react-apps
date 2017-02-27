/**
 * Created with JetBrains WebStorm.
 * User: Dhruv
 * Date: 2/25/17
 * Time: 5:06 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
//http://stackoverflow.com/questions/14795726/getting-data-from-yahoo-finance
    reLoad();

    function reLoad(){
        $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
            $("#result").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
            $("#result").hide().fadeIn(500);
            $("#time").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
            $("#volume").html("Volume: "+ data.query.results.quote.Volume);
        });

        setTimeout(reLoad,6000);
    }
});