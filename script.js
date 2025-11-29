const teams = [
    "한국", "일본", "이란", "사우디", "호주", 
    "독일", "프랑스", "브라질", "아르헨티나", "잉글랜드",
    "스페인", "포르투갈", "멕시코", "미국", "우루과이", "콜롬비아"
];

function drawGroups() {
    let shuffled = [...teams].sort(() => Math.random() - 0.5);
    let html = "";

    for (let i = 0; i < 4; i++) {
        html += `<h3>Group ${String.fromCharCode(65+i)}</h3><ul>`;
        for (let j = 0; j < 4; j++) {
            html += `<li>${shuffled[i*4 + j]}</li>`;
        }
        html += "</ul>";
    }

    document.getElementById("result").innerHTML = html;
}
