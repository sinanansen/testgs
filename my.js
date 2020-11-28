
function testGS(){

    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=8EM6DE0xoDdOVW2BpXDHL2wRQCaSDQmo9eEPX_863DkZoYPlVgRKgoFHwOV2737CdiFC4U3RxT4MQCnWl-q4rkkZ38sqi1sRm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCDqD5Ortf-ao6k8iyFbcMdlvIjXdt5bDNheCUuFLIv9DtkWvmlu7qsFFJ1hmcFbfkqhI51p3q1_&lib=MmC5Da_sLMRlk6ukYyMdLc3_34l3wdlqp";
    
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

} 

document.getElementById("btn").addEventListener("click",testGS);
