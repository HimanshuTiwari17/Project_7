
buttonEl=document.getElementById("btn");
paraEl=document.getElementById("main_joke");
const apiKey='SRagLKq4UtVI+ZLCDA4gMQ==XR5NjwG0UFpzZZo7';
const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){
    paraEl.innerText="Processing...";
    buttonEl.innerText="Loading...";
    buttonEl.disabled=true;
    const response = await fetch(apiUrl, {headers: {"X-Api-Key": apiKey,}});
    const data=await response.json();
    paraEl.innerText=data[0].joke;
    buttonEl.innerText="Telll Me a Joke";
    buttonEl.disabled=false;
}
buttonEl.addEventListener("click",getJoke);