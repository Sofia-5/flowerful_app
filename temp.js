const apiurl = "https://trefle.io/api/v1/species";
const token = "TFQqgRN3_95KQCSBiSlLBUHUv0_kOs8zieHRszg1ETE";
let color = "red";
let page = 1;
const getData = async (clr)=>{
    console.log(clr)
    const results = await fetch(`${apiurl}?token=${token}&filter[flower_colour]=${clr}&page=${page}`)
    const response = await results.json();
    console.log(response);
}  
getData(color)

// plantApp.getPlants = (color) => {
//     $.ajax({
//       url: "https://proxy.hackeryou.com",
//       dataType: "json",
//       method: "GET",
//       data: {
//         reqUrl: `https://trefle.io/api/v1/species`,
//         params: {
//           token: plantApp.token,
//           "filter[flower_color]": color,
//           page: plantApp.page,
//         },
//       },
//       // on api call completion, run dom manipulation function
//     })
// }