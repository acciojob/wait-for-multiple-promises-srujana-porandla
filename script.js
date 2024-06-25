//your JS code here. If required.
function createPromise(){
	const delay=Math.floor(Math.random()*2000)+1000;
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(delay/1000);
		},delay);
	});
}
const promises=[
	createPromise(),
	createPromise(),
    createPromise()
];
const tableBody = document.getElementById('output');
const loadingRow = document.getElementById('loading');


loadingRow.style.display = ''
Promise.all(promises).then(results => {
	console.log('All promises resolved:', results);
	 
	results.forEach((time,index)=>{
		const row=document.createElement('tr');
		row.innerHTML=`
		<td>Promise ${index + 1}</td>
        <td>${time.toFixed(3)}</td>`;
		tableBody.appendChild(row);
	});
	/*const totalTime=results.reduce((acc, curr) => acc + curr, 0);
	const totalRow=document.createElement('tr');
	  totalRow.innerHTML = `
            <td>Total</td>
            <td>${totalTime.toFixed(3)}</td>
        `;
        tableBody.appendChild(totalRow);*/
}) .catch(error => {
        console.error('Error waiting for promises:', error);
	    tableBody.innerHTML = `<tr><td colspan="2">Error: ${error.message}</td></tr>`;
       
        loadingRow.style.display = 'none';
});

