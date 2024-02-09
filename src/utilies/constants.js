export const API_KEY = "AIzaSyB6l1hbV5xlPxUCyt43AArmy0l-X7XtiYk"


export const fetchData = async(reqString)=>{
    const data = await fetch(reqString + API_KEY);
    const json = await data.json()
    return json;
}